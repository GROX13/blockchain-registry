package me.giorgirokhadze.blockchainregistry.services

import org.springframework.stereotype.Service
import java.security.MessageDigest
import java.time.LocalDateTime

private const val SHA_256 = "SHA-256"

@Service
class BlockHashingService {

	fun hashBlock(index: Long, timestamp: LocalDateTime, data: String, previousHash: String) =
		MessageDigest
			.getInstance(SHA_256)
			.digest(
				StringBuilder()
					.append(index)
					.append(timestamp)
					.append(data)
					.append(previousHash)
					.toString()
					.toByteArray()
			)
			.fold("", { str, it -> str + "%02x".format(it) })

}