package me.giorgirokhadze.blockchainregistry

import me.giorgirokhadze.blockchainregistry.beans.Data
import me.giorgirokhadze.blockchainregistry.services.BlockGenerationService
import me.giorgirokhadze.blockchainregistry.services.BlockHashingService
import org.junit.Before
import org.junit.Test

class BlockchainGenerationServiceTest {

	private lateinit var generationService: BlockGenerationService

	@Before
	fun setUp() {
		generationService = BlockGenerationService(BlockHashingService())
	}

	@Test
	fun generateBlocks() {
		var lastBlock = generationService.createGenesisBlock()
		for (i in 1..10) {
			println(lastBlock)
			lastBlock = generationService.nextBlock(lastBlock, Data(i, mutableListOf()))
		}
		println(lastBlock)
	}

}