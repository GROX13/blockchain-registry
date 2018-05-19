package me.giorgirokhadze.blockchainregistry

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class BlockchainRegistryApplication

fun main(args: Array<String>) {
	runApplication<BlockchainRegistryApplication>(*args)
}
