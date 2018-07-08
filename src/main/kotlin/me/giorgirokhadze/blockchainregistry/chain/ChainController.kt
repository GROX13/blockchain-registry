package me.giorgirokhadze.blockchainregistry.chain

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
	fun listChain() = recordRepository.findAll().toCollection(mutableListOf())

	@RequestMapping("/validate")
	fun validateChain() = validationService.isValidChain(recordRepository.findAll())

}