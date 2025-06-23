"use server"

import { query } from "@/dbh";
import nodemailer from "nodemailer";

export async function submitDetails(name, email) {
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName || !trimmedEmail) {
        return { success: false, message: "Empty fields please fill in the blank spaces" }
    }

    try {

        const { success } = await sendConfirmationEmail(trimmedName, trimmedEmail)

        if (!success) {
            throw new Error()
        }

        const insertUserDetails = "INSERT INTO waitlist(name, email) VALUES ($1, $2)";
        const insertQuery = await query(insertUserDetails, [trimmedName, trimmedEmail])

        return {success: true, message : "Submitted successfully, redirecting ..."}

    } catch (error) {
        console.error(error)
        return { success: false, message: "Server error, please try again later" }
    }
}

async function sendConfirmationEmail(name, email) {
    const logoUrl = `https://fiuzar-waitlist.vercel.app/logo.png`

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: `Francis from Fiuzar <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thanks for signing up! Here’s what to expect from Fiuzar",
        html: `<html>
                <head>
                    <style>
                        body {
                        font-family: 'Segoe UI', sans-serif;
                        background-color: #f4f4f4;
                        }
                        .email-container {
                        max-width: 600px;
                        margin: auto;
                        background: #ffffff;
                        padding: 2rem;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                        }
                        .header img {
                        width: 120px;
                        margin-bottom: 1rem;
                        }
                        h1 {
                        font-size: 24px;
                        color: #1b1f23;
                        }
                        p {
                        color: #4a4a4a;
                        line-height: 1.6;
                        }
                        .cta-button {
                        display: inline-block;
                        margin-top: 1.5rem;
                        padding: 12px 24px;
                        background-color: #033106;
                        color: #ffffff !important;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                        }
                        .footer {
                        text-align: center;
                        margin-top: 2rem;
                        font-size: 12px;
                        color: #999999;
                        }
                    </style>
                </head>
                <body>
                <div class='email-container'>
                    <div class='header' style='text-align:center;'>
                    <img src='${logoUrl}' alt='Fiuzar Logo'>
                    </div>

                    <h1>Welcome to Fiuzar 👋</h1>
                    <p>Hi ${name},<br><br>
                    Thank you for joining the Fiuzar early access list.<br>
                    We are excited to have you on board as we build a smarter, faster way to repurpose and schedule content across blogs, YouTube, LinkedIn, Facebook, and more.</p>

                    <p>You’ll be among the first to:
                    <ul>
                        <li>Try our AI-powered repurposing tool before public launch</li>
                        <li>Receive exclusive guides and tips for content marketing</li>
                        <li>Access beta features and contribute your feedback</li>
                    </ul>
                    </p>

                    <p style='text-align:center;'>
                    <a href='https://fiuzar.com' class='cta-button'>Visit Our Website</a>
                    </p>

                    <p>We will keep you updated on launch dates and share valuable insights along the way.<br><br>
                    If you have any questions, feel free to reply to this email.<br><br>
                    Best regards,<br>
                    Francis<br>
                    Lead Marketer, Fiuzar
                    </p>

                    <div class='footer'>
                    © 2025 Fiuzar. All rights reserved.<br>
                    </div>
                </div>
                </body>
            </html>`
    };

    try {
        await transport.sendMail(mailOptions)
        return { success: true }
    } catch (error) {
        console.error(error)
        return { success: false }
    }
}