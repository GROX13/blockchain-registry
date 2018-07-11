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
					date = LocalDate.now(),
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
					records = mutableListOf(),
					purchaseLocation = "Tbilisi",
					purchaseDate = LocalDate.of(2017, Month.OCTOBER, 7),
					personalId = "01019082031",
					ownedUntilDate = null,
					estimatedKilometersPerYear = 25000,
					firstName = "Giorgi",
					lastName = "Rokhadze"
				)
			)
		}
	}

}

fun main(args: Array<String>) {
	runApplication<BlockchainRegistryApplication>(*args)
}
