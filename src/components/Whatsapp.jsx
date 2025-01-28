"use client"

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const Whatsapp = () => {
    return (
        <FloatingWhatsApp
            phoneNumber="+919537004005"
            accountName="Air Borne Exports"
            avatar="../assets/icons/woman.png"
            statusMessage="Typically replies within 30 minutes"
            chatMessage="Hello! How can we assist you today?"
            placeholder="Type your message..."
            notification
            notificationDelay={10}
            notificationSound
            allowEsc
        />
    )
}
