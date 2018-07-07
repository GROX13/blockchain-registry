package me.giorgirokhadze.blockchainregistry

import java.time.LocalDate
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType.AUTO
import javax.persistence.Id

@Entity
data class Record(
	@Id
	@GeneratedValue(strategy = AUTO)
	var id: Long?,
	var date: LocalDate,
	var kilometres: Int,
	var source: String,
	var comments: String,
	var nonce: Long,
	var previousHash: String,
	var hash: String?
) {

	fun toBean() = RecordBean(
		date = date,
		kilometres = kilometres,
		source = source,
		comments = comments,
		nonce = nonce,
		previousHash = previousHash,
		hash = hash
	)

}

data class RecordBean(
	var date: LocalDate?,
	var kilometres: Int?,
	var source: String?,
	var comments: String?,
	var nonce: Long?,
	var previousHash: String?,
	var hash: String?
)