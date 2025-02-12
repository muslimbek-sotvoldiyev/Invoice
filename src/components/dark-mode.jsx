"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  
  // Determine next theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon" className="relative bg-transparent hover:bg-transparent overflow-hidden">
      {/* Sun Icon (Visible in Light Mode) */}
      <Sun
        className={`h-[6rem] w-[6rem] text-[#858BB2] transition-transform duration-300 ease-in-out 
        ${theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`}
      />
      {/* Moon Icon (Visible in Dark Mode) */}
      <Moon
        className={`absolute h-[6rem] w-[6rem] text-[#858BB2] transition-transform duration-300 ease-in-out 
        ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
