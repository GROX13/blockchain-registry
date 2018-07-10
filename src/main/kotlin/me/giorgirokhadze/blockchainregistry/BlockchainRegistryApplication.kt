package me.giorgirokhadze.blockchainregistry

import me.giorgirokhadze.blockchainregistry.owner.Owner
import me.giorgirokhadze.blockchainregistry.owner.OwnerRepository
import me.giorgirokhadze.blockchainregistry.record.Record
import me.giorgirokhadze.blockchainregistry.record.RecordRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import java.time.LocalDate
import java.time.Month


@SpringBootApplication
class BlockchainRegistryApplication {

	@Bean
	fun createGenesisRecord(recordRepository: RecordRepository, ownerRepository: OwnerRepository): CommandLineRunner {
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

			ownerRepository.save(
				Owner(
					id = null,
					estimatedKilometersPerYear = 25000,
					ownedUntilDate = null,
					personalId = "01019082031",
					purchaseDate = LocalDate.of(2017, Month.OCTOBER, 7),
					purchaseLocation = "Tbilisi",
					records = mutableListOf()
				)
			)
		}
	}

}

fun main(args: Array<String>) {
	runApplication<BlockchainRegistryApplication>(*args)
}
