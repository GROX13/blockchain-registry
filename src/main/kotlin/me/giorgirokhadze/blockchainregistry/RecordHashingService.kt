package me.giorgirokhadze.blockchainregistry

import org.springframework.stereotype.Service
import java.security.MessageDigest
import java.time.LocalDate

private const val SHA_256 = "SHA-256"

@Service
class RecordHashingService {

	fun hash(id: Long, date: LocalDate, kilometres: Int, source: String, comments: String, previousHash: String) = MessageDigest
		.getInstance(SHA_256)
		.digest(
			StringBuilder()
				.append(id)
				.append(date)
				.append(kilometres)
				.append(source)
				.append(comments)
				.append(previousHash)
				.toString()
				.toByteArray()
		)
		.fold("") { str, it -> str + "%02x".format(it) }


}