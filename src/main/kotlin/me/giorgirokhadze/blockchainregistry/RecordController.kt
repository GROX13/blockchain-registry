package me.giorgirokhadze.blockchainregistry

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/record")
class RecordController(
	private val ownerRepository: OwnerRepository,
	private val recordRepository: RecordRepository
) {

	@RequestMapping("/create")
	fun createRecord(createRecordBean: CreateRecordBean) {
		val owner = ownerRepository.findByPersonalId(createRecordBean.ownerPersonalId)
		val record = createRecordBean.recordBean.toEntity()
		recordRepository.save(record)
		owner.records.add(record)
		ownerRepository.save(owner)
	}

	private fun RecordBean.toEntity(): Record {
		val previousHash = checkNotNull(this.previousHash) { "" }
		val hash = checkNotNull(this.hash) { "" }
		return Record(
			id = id,
			date = date,
			kilometres = kilometres,
			source = source,
			comments = comments,
			previousHash = previousHash,
			hash = hash
		)
	}

}

data class CreateRecordBean(val ownerPersonalId: String, val recordBean: RecordBean)