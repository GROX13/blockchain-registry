package me.giorgirokhadze.blockchainregistry.chain

import me.giorgirokhadze.blockchainregistry.record.Record
import me.giorgirokhadze.blockchainregistry.record.RecordHashingService
import org.springframework.stereotype.Service

@Service
class ChainValidationService(
	private val recordHashingService: RecordHashingService
) {

	fun isValidChain(records: Iterable<Record>): Boolean {
		var previous: Record? = null
		for (record in records) {
			if (previous == null) {
				previous = record; continue
			}
			if (record.hash != recordHashingService.hash(record)) return false
			if (previous.hash != record.previousHash) return false
			previous = record
		}
		return true
	}

}