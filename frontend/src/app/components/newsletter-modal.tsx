"use client"
import { useState } from "react"
import { X, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Socials from "./socials"

interface NewsletterModalProps {
  onClose: () => void
}

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
  const [isVisible, setIsVisible] = useState(true)
  
  const handleClose = () => {
    setIsVisible(false)
    onClose()
  }
  
  return isVisible ? (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-2 border-[#00b18b] bg-black/20 p-8 backdrop-blur-xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-white/70 hover:text-white"
          aria-label="Close newsletter modal"
        >
          <X className="h-6 w-6 text-black rounded-bl-lg rounded-tr-lg border-none backdrop-blur-xl bg-white/20" />
        </button>
        
        {/* Content */}
        <div className="space-y-6 w-10/12 mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-wider text-white">Newsletter</h2>
            <p className="text-md text-white/80">
              Sign up to receive alerts about new merchandise drops, new music releases and exclusive VIP deals for
              concerts and meet and greets
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Label htmlFor="name" className="sr-only">
                  Name
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="Name"
                    className="h-12 pl-4 pr-12 border-none bg-white/5 text-xl text-white placeholder:text-white/50"
                    required
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 h-5 w-5" />
                </div>
              </div>
              
              <div className="relative">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="h-12 pl-4 pr-12 border-none bg-white/5 text-xl text-white placeholder:text-white/50"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div className="space-y-3 w-10/12 mx-auto">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="border-none backdrop-blur-xl bg-white/30" required />
                <Label htmlFor="terms" className="text-xs text-white/80">
                  I agree to the terms & conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="updates" className="border-none backdrop-blur-xl bg-white/30"/>
                <Label htmlFor="updates" className="text-xs text-white/80">
                  I agree to receiving important news and updates via email
                </Label>
              </div>
            </div>
            
            <Button
              type="submit"
              className="h-12 w-full bg-gradient-to-r from-[#28be95] via-[#e5939f] to-[#febe6b] text-lg font-semibold text-white hover:opacity-90"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
      <Socials/>
    </div>
  ) : null
}