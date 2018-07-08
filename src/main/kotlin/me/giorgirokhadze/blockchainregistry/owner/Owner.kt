package me.giorgirokhadze.blockchainregistry.owner

import me.giorgirokhadze.blockchainregistry.record.Record
import me.giorgirokhadze.blockchainregistry.record.RecordBean
import java.time.LocalDate
import javax.persistence.*
import javax.persistence.GenerationType.AUTO

@Entity
data class Owner(
	@Id
	@GeneratedValue(strategy = AUTO)
	var id: Long?,
	@Column(unique = true)
	var personalId: String,
	@OneToMany
	var records: MutableList<Record>,
	var purchaseDate: LocalDate,
	var ownedUntilDate: LocalDate?,
	var purchaseLocation: String,
	var estimatedKilometersPerYear: Int
) {

	fun toBean() = OwnerBean(
		personalId = personalId,
		records = records.map(Record::toBean).toMutableList(),
		purchaseDate = purchaseDate,
		ownedUntilDate = ownedUntilDate,
		purchaseLocation = purchaseLocation,
		estimatedKilometersPerYear = estimatedKilometersPerYear
	)

}

data class OwnerBean(
	var personalId: String?,
	var records: MutableList<RecordBean>?,
	var purchaseDate: LocalDate?,
	var ownedUntilDate: LocalDate?,
	var purchaseLocation: String?,
	var estimatedKilometersPerYear: Int?
)