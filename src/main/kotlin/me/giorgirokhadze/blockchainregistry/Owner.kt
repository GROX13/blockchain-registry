package me.giorgirokhadze.blockchainregistry

import java.time.LocalDate
import javax.persistence.*
import javax.persistence.GenerationType.AUTO

@Entity
data class Owner(
	@Id
	@GeneratedValue(strategy = AUTO)
	var id: Long?,
	@Column(unique = true)
	val personalId: String,
	@OneToMany
	val records: MutableList<Record>,
	val purchaseDate: LocalDate,
	val ownedUntilDate: LocalDate?,
	val purchaseLocation: String,
	val estimatedKilometersPerYear: Int
) {

	fun toBean() = OwnerBean(
		id = id,
		personalId = personalId,
		records = records.map(Record::toBean).toMutableList(),
		purchaseDate = purchaseDate,
		ownedUntilDate = ownedUntilDate,
		purchaseLocation = purchaseLocation,
		estimatedKilometersPerYear = estimatedKilometersPerYear
	)

}

data class OwnerBean(
	val id: Long?,
	val personalId: String,
	val records: MutableList<RecordBean>,
	val purchaseDate: LocalDate,
	val ownedUntilDate: LocalDate?,
	val purchaseLocation: String,
	val estimatedKilometersPerYear: Int
)