package me.giorgirokhadze.blockchainregistry

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/owner")
class OwnerController(
	private val ownerRepository: OwnerRepository
) {

	@RequestMapping("/create")
	fun createOwner(owner: OwnerBean) =
		ownerRepository
			.save(owner.toEntity())
			.toBean()

	@RequestMapping("/list")
	fun listOwners() =
		ownerRepository.findAll().map { it.toBean() }.toList()

	private fun OwnerBean.toEntity() = Owner(
		id = id,
		personalId = personalId,
		records = mutableListOf(),
		purchaseDate = purchaseDate,
		ownedUntilDate = ownedUntilDate,
		purchaseLocation = purchaseLocation,
		estimatedKilometersPerYear = estimatedKilometersPerYear
	)

}

