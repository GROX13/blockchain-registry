package me.giorgirokhadze.blockchainregistry.chain

import me.giorgirokhadze.blockchainregistry.record.Record
import me.giorgirokhadze.blockchainregistry.record.RecordRepository
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/chain")
class ChainController(
	private val recordRepository: RecordRepository,
	private val validationService: ChainValidationService
) {

	@RequestMapping("/list")
	fun listChain() = ChainDataBean(recordRepository.findAll().toCollection(mutableListOf()))

	@RequestMapping("/validate")
	fun validateChain(): ChainValidationDataBean {
		val records = recordRepository.findAll()
		return ChainValidationDataBean(validationService.isValidChain(records), records.count())
	}

}

data class ChainDataBean(val data: List<Record>)

data class ChainValidationDataBean(val isValid: Boolean, val number: Int)