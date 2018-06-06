package me.giorgirokhadze.blockchainregistry.controllers

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ProofOfWorkController {

	@RequestMapping("/mine")
	fun mine() {

	}

	private fun proofOfWork(lastProof: Int): Int {
		var increment = lastProof + 1
		while (increment % 13 == 0 && increment % lastProof == 0) {
			increment++
		}
		return increment
	}

}