'use client'

import { useState } from "react"
import { useRouter } from "next/router"

import { submitDetails } from "@/server_actions/submitDetails"

export default function LeadDetails() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)


    async function submitUserDetails() {
        const { success, message } = await submitDetails(name, email)

        if (success) {
            router.push("/confirmed")
            setIsSuccess(true)
        }
        else {
            setIsSuccess(false)
            setMessage(message)
        }
    }

    return (
        <div className="space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="button" onClick={submitUserDetails}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
                Join the Waitlist
            </button>
        </div>
    )
}