package me.giorgirokhadze.blockchainregistry

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/record")
class RecordController(
	private val ownerRepository: OwnerRepository,
	private val recordRepository: RecordRepository,
	private val recordHashingService: RecordHashingService
) {

	@RequestMapping("/create")
	fun createRecord(@RequestBody createRecordBean: CreateRecordBean) {
		val owner = ownerRepository.findByPersonalId(createRecordBean.ownerPersonalId)
		var record = createRecordBean.recordBean.toEntity()
		record = recordRepository.save(record)
		owner.records.add(record)
		ownerRepository.save(owner)
		recordRepository.save(record.apply {
			hash = recordHashingService.hash(id!!, date, kilometres, source, comments, previousHash)
		})
	}

	private fun RecordBean.toEntity(): Record {
		val previousHash = checkNotNull(recordRepository.findFirstByOrderByIdDesc().hash) { "Previous hash is empty!" }
		return Record(
			id = null,
			date = checkNotNull(date) { "Field date can not be null!" },
			kilometres = checkNotNull(kilometres) { "Field kilometres can not be null!" },
			source = checkNotNull(source) { "Field source can not be null!" },
			comments = checkNotNull(comments) { "Field comments can not be null!" },
			previousHash = previousHash,
			hash = null
		)
	}

}

data class CreateRecordBean(val ownerPersonalId: String, val recordBean: RecordBean)