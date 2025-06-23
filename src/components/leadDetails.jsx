'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { submitDetails } from "@/server_actions/submitDetails"

export default function LeadDetails() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState("")


    async function submitUserDetails() {
        const { success, message } = await submitDetails(name, email)

        if (success) {
            router.push("/https:/fiuzar.vercel.app")
            setIsSuccess(true)
        }
        else {
            setIsSuccess(false)
            setMessage(message)

            setTimeout(() => {
                setMessage("")
            }, 3000);
        }
    }


    return (
        <div className="space-y-4">

            {message && (
                <Alert variant={isSuccess ? "success" : "destructive"}>
                    <AlertTitle>Error!</AlertTitle>
                    <AlertDescription>
                        {message}
                    </AlertDescription>
                </Alert>
            )}

            <Input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
            />
            <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
            />
            <Button
                type="button" onClick={submitUserDetails}
                className="w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
                Join the Waitlist
            </Button>
        </div>
    )
}