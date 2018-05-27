package me.giorgirokhadze.blockchainregistry.beans

import java.time.LocalDateTime

data class Block(
	val index: Long,
	val timestamp: LocalDateTime,
	val data: String,
	val previousHash: String,
	val hash: String
)