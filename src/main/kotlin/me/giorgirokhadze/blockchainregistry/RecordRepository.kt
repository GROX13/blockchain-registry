package me.giorgirokhadze.blockchainregistry

import org.springframework.data.repository.CrudRepository

interface RecordRepository : CrudRepository<Record, Long> {

	fun findFirstByOrderByIdDesc(): Record

}