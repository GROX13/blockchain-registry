package me.giorgirokhadze.blockchainregistry

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod.POST
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/owner")
class OwnerController(
	private val ownerRepository: OwnerRepository
) {

	@RequestMapping(value = ["/create"], method = [POST])
	fun createOwner(@RequestBody owner: OwnerBean) =
		ownerRepository
			.save(owner.toEntity())
			.toBean()

	@RequestMapping("/list")
	fun listOwners() =
		ownerRepository.findAll().map { it.toBean() }.toList()

	private fun OwnerBean.toEntity() = Owner(
		id = null,
		personalId = checkNotNull(personalId) { "Field personalId can not be empty!" },
		records = mutableListOf(),
		purchaseDate = checkNotNull(purchaseDate) { "Field purchaseDate can not be empty!" },
		ownedUntilDate = ownedUntilDate,
		purchaseLocation = checkNotNull(purchaseLocation) { "Field purchaseLocation can not be empty!" },
		estimatedKilometersPerYear = checkNotNull(estimatedKilometersPerYear) { "Field estimatedKilometersPerYear can not be empty!" }
	)

}

