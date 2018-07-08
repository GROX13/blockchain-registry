package me.giorgirokhadze.blockchainregistry

import me.giorgirokhadze.blockchainregistry.record.Record
import me.giorgirokhadze.blockchainregistry.record.RecordRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import java.time.LocalDate


@SpringBootApplication
class BlockchainRegistryApplication {

	@Bean
	fun createGenesisRecord(recordRepository: RecordRepository): CommandLineRunner {
		return CommandLineRunner {
			recordRepository.save(
				Record(
					id = null,
					date = LocalDate.MIN,
					kilometres = 0,
					source = "Genesis",
					comments = "Genesis",
					nonce = 0,
					previousHash = "0",
					hash = "0"
				)
			)
		}
	}

}

fun main(args: Array<String>) {
	runApplication<BlockchainRegistryApplication>(*args)
}
