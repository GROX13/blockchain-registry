package me.giorgirokhadze.blockchainregistry

import org.springframework.data.repository.CrudRepository

interface OwnerRepository : CrudRepository<Owner, Long> {

	fun findByPersonalId(personalId: String): Owner

}