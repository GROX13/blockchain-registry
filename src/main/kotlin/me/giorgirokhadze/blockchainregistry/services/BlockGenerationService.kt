package me.giorgirokhadze.blockchainregistry.services

import me.giorgirokhadze.blockchainregistry.beans.Block
import me.giorgirokhadze.blockchainregistry.beans.Data
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class BlockGenerationService(private val hashingService: BlockHashingService) {

	fun createGenesisBlock() =
		Block(0L, LocalDateTime.now(), Data(0, mutableListOf()), "0", "0")

	fun nextBlock(lastBlock: Block, data: Data): Block {
		val index = lastBlock.index + 1
		val timestamp = LocalDateTime.now()
		val previousHash = lastBlock.hash
		return Block(
			index, timestamp, data, previousHash, hashingService.hashBlock(
				index = index,
				timestamp = timestamp,
				data = data.toString(),
				previousHash = previousHash
			)
		)
	}

}