package me.giorgirokhadze.blockchainregistry.beans

import java.time.LocalDateTime

data class Block(
	val index: Long,
	val timestamp: LocalDateTime,
	val data: Data,
	val previousHash: String,
	val hash: String
)