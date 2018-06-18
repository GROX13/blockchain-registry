package me.giorgirokhadze.blockchainregistry.beans

data class Data(val proofOfWork: Int, val transactions: MutableList<Transaction>)