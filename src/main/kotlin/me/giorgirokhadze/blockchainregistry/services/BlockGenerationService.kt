package me.giorgirokhadze.blockchainregistry.services

import me.giorgirokhadze.blockchainregistry.beans.Block
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class BlockGenerationService(val hashingService: BlockHashingService) {

	fun createGenesisBlock() =
		Block(0L, LocalDateTime.now(), "Genesis Block", "0", "0")

	fun nextBlock(lastBlock: Block, data: String): Block {
		val index = lastBlock.index + 1
		val timestamp = LocalDateTime.now()
		val previousHash = lastBlock.hash
		return Block(
			index, timestamp, data, previousHash, hashingService.hashBlock(
				index = index,
				timestamp = timestamp,
				data = data,
				previousHash = previousHash
			)
		)
	}

}