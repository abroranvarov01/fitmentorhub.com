"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-[#1E1E1E] border-2 border-[#00E0A4] rounded-lg p-6 shadow-[0_0_40px_rgba(0,224,164,0.3)]">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-[#F5F5F5] mb-4">We use cookies to track your fitness progress — not calories 🍪</p>
            <Button onClick={acceptCookies} className="bg-[#00E0A4] hover:bg-[#00B47C] text-[#0D0D0D] font-bold">
              Accept ✅
            </Button>
          </div>
          <button onClick={acceptCookies} className="text-[#F5F5F5]/70 hover:text-[#F5F5F5] transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
