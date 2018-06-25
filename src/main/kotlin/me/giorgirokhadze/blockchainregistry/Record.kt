package me.giorgirokhadze.blockchainregistry

import java.time.LocalDate
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Record(
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	val id: Long?,
	val date: LocalDate,
	val kilometres: Int,
	val source: String,
	val comments: String,
	val previousHash: String,
	val hash: String
) {

	fun toBean() = RecordBean(
		id = id,
		date = date,
		kilometres = kilometres,
		source = source,
		comments = comments,
		previousHash = previousHash,
		hash = hash
	)

}

data class RecordBean(
	val id: Long?,
	val date: LocalDate,
	val kilometres: Int,
	val source: String,
	val comments: String,
	var previousHash: String?,
	var hash: String?
)