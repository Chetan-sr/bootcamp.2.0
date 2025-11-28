"use client"

import { useAccount } from "wagmi"
import { useProjectContract } from "@/hooks/useContract"

const SampleIntegration = () => {
  const { isConnected } = useAccount()
  const { data, actions, state } = useProjectContract()

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">Project.sol</h2>
          <p className="text-muted-foreground">Please connect your wallet to interact with the contract.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Project.sol UI</h1>
          <p className="text-muted-foreground text-sm mt-1">Interact with your deployed contract.</p>
        </div>

        {/* Display Message */}
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Current Message</p>
          <p className="text-lg text-foreground">{data.message}</p>
        </div>

        {/* Owner */}
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Owner</p>
          <p className="text-lg text-foreground break-all">{data.owner}</p>
        </div>

        {/* Update Message */}
        <div>
          <label className="block mb-2 text-sm font-medium text-foreground">Update Message</label>
          <input
            type="text"
            value={data.newMessage}
            onChange={(e) => data.setNewMessage(e.target.value)}
            className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
            placeholder="Enter new message"
          />

          <button
            onClick={actions.updateMessage}
            disabled={state.isLoading || !data.newMessage}
            className="w-full mt-3 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50 transition"
          >
            {state.isPending || state.isConfirming ? "Updating..." : "Update Message"}
          </button>
        </div>

        {/* Status */}
        {state.hash && (
          <div className="p-4 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground uppercase mb-2">Transaction Hash</p>
            <p className="text-sm font-mono">{state.hash}</p>
            {state.isConfirming && <p className="text-primary mt-2 text-sm">Waiting for confirmation...</p>}
            {state.isConfirmed && <p className="text-green-500 mt-2 text-sm">Message updated successfully!</p>}
          </div>
        )}

        {state.error && (
          <div className="p-4 bg-card border border-destructive rounded-lg">
            <p className="text-sm text-destructive-foreground">Error: {state.error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntegration
