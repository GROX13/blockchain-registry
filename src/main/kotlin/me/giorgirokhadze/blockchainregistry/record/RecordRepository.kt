package me.giorgirokhadze.blockchainregistry.record

import org.springframework.data.repository.CrudRepository

interface RecordRepository : CrudRepository<Record, Long> {

	fun findFirstByOrderByIdDesc(): Record

}