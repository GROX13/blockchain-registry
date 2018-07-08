package me.giorgirokhadze.blockchainregistry.owner

import org.springframework.data.repository.CrudRepository

interface OwnerRepository : CrudRepository<Owner, Long> {

	fun findByPersonalId(personalId: String): Owner

}