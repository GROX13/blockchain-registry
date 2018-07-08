package me.giorgirokhadze.blockchainregistry.record

import org.springframework.stereotype.Service
import java.security.MessageDigest
import java.time.LocalDate

private const val SHA_256 = "SHA-256"

@Service
class RecordHashingService {

	fun hash(id: Long, date: LocalDate, kilometres: Int, source: String, comments: String, nonce: Long, previousHash: String) = MessageDigest
		.getInstance(SHA_256)
		.digest(
			StringBuilder()
				.append(id)
				.append(date)
				.append(kilometres)
				.append(source)
				.append(comments)
				.append(nonce)
				.append(previousHash)
				.toString()
				.toByteArray()
		)
		.fold("") { str, it -> str + "%02x".format(it) }

	fun hash(record: Record) =
		hash(
			checkNotNull(record.id) { "Received not existing record for calculating hash" },
			record.date,
			record.kilometres,
			record.source,
			record.comments,
			record.nonce,
			record.previousHash
		)

}