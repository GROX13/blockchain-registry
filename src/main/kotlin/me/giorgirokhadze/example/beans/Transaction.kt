package me.giorgirokhadze.example.beans

import java.math.BigDecimal

data class Transaction(val source: String, val destination: String, val amount: BigDecimal)