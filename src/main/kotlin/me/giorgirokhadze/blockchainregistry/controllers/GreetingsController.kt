package me.giorgirokhadze.blockchainregistry.controllers

import me.giorgirokhadze.blockchainregistry.beans.Greeting
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.atomic.AtomicLong

private const val TEMPLATE = "Hello, %s!"

@RestController
class GreetingController {
	private val counter = AtomicLong()

	@RequestMapping("/greeting")
	fun greeting(
		@RequestParam(value = "name", defaultValue = "World")
		name: String
	) = Greeting(
		counter.incrementAndGet(),
		String.format(TEMPLATE, name)
	)
}
