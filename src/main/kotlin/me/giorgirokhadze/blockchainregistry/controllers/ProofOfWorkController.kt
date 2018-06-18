package me.giorgirokhadze.blockchainregistry.controllers

import me.giorgirokhadze.blockchainregistry.beans.Block
import me.giorgirokhadze.blockchainregistry.beans.Data
import me.giorgirokhadze.blockchainregistry.beans.Transaction
import me.giorgirokhadze.blockchainregistry.services.BlockGenerationService
import me.giorgirokhadze.blockchainregistry.services.BlockHashingService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime

private const val MINER_ADDRESS: String = "A97F3F11B6774C22179F76721D4280BB5FE021725FBAE5A11DF9161BC3394C9D"

@RestController
class ProofOfWorkController(
	generationService: BlockGenerationService,
	private val hashingService: BlockHashingService
) {

	private val blockchain: MutableList<Block> = mutableListOf(generationService.createGenesisBlock())

	@RequestMapping("/mine")
	fun mine(): Block {
		val lastBlock = blockchain.last()
		val lastProof = lastBlock.data.proofOfWork
		val proof = proofOfWork(lastProof)

		val transactions: MutableList<Transaction> = mutableListOf()

		transactions.add(Transaction("network", MINER_ADDRESS, 1.toBigDecimal()))

		val newBlockData = Data(proof, transactions)
		val newBlockIndex = lastBlock.index + 1
		val newBlockTimestamp = LocalDateTime.now()

		val minedBlock = hashingService.newBlock(newBlockIndex, newBlockTimestamp, newBlockData, lastBlock.hash)

		blockchain.add(minedBlock)

		return minedBlock
	}

	@RequestMapping("/blocks")
	fun getBlocks(): List<Block> = blockchain

	private fun proofOfWork(lastProof: Int): Int {
		var increment = lastProof + 1
		while (increment % 13 == 0 && increment % lastProof == 0) {
			increment++
		}
		return increment
	}

}