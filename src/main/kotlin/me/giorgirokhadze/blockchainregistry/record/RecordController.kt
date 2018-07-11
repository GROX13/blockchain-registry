package me.giorgirokhadze.blockchainregistry.record

import me.giorgirokhadze.blockchainregistry.owner.OwnerRepository
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

private const val DIFFICULTY = 5

@RestController
@RequestMapping("/record")
class RecordController(
	private val ownerRepository: OwnerRepository,
	private val recordRepository: RecordRepository,
	private val recordHashingService: RecordHashingService
) {

	private lateinit var prefix: String

	init {
		val chars = CharArray(DIFFICULTY)
		Arrays.fill(chars, '0')
		prefix = String(chars)
	}

	@RequestMapping("/create")
	fun createRecord(@RequestBody createRecordBean: CreateRecordBean): RecordBean {
		val owner = ownerRepository.findByPersonalId(createRecordBean.ownerPersonalId)
		var record = createRecordBean.recordBean.toEntity()
		record = recordRepository.save(record)
		owner.records.add(record)
		ownerRepository.save(owner)
		return recordRepository.save(populateData(record)).toBean()
	}

	private fun RecordBean.toEntity(): Record {
		val previousHash = checkNotNull(recordRepository.findFirstByOrderByIdDesc().hash) { "Previous hash is empty!" }
		return Record(
			id = null,
			date = checkNotNull(date) { "Field date can not be null!" },
			kilometres = checkNotNull(kilometres) { "Field kilometres can not be null!" },
			source = checkNotNull(source) { "Field source can not be null!" },
			comments = checkNotNull(comments) { "Field comments can not be null!" },
			nonce = 0,
			previousHash = previousHash,
			hash = null
		)
	}

	private fun populateData(record: Record): Record {
		record.nonce = 0L
		var hash = recordHashingService.hash(record)
		while (!hash.startsWith(prefix)) hash = recordHashingService.hash(record.apply { nonce++ })
		record.hash = hash
		return record
	}

}

data class CreateRecordBean(val ownerPersonalId: String, val recordBean: RecordBean)