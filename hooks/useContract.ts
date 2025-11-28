"use client"

import { useState } from "react"
import { useReadContract, useWriteContract, useWaitForTransactionReceipt, useAccount } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export const useProjectContract = () => {
  const { address } = useAccount()

  const [newMessage, setNewMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { data: message, refetch: refetchMessage } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "message",
  })

  const { data: owner } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "owner",
  })

  const { writeContractAsync, data: hash, isPending, error } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const updateMessage = async () => {
    if (!newMessage) return

    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "updateMessage",
        args: [newMessage],
      })
      setNewMessage("")
      await refetchMessage()
    } catch (err) {
      console.error("Error updating message:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data: {
      message: message as string,
      owner: owner as string,
      newMessage,
      setNewMessage,
    },

    actions: {
      updateMessage,
    },

    state: {
      isLoading: isLoading || isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      error,
      hash,
    },
  }
}

