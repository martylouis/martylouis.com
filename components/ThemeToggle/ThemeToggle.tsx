"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import ThemeToggleIcon from "./ThemeToggleIcon"

type ThemeToggleProps = {
  className?: string
  size?: number
}

function ThemeToggle({ className, size = 24, ...props }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme && resolvedTheme === "dark" ? "light" : "dark")
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      className={clsx("flex-shrink-0 transition-all", className)}
      onClick={handleToggle}
      aria-label="Toggle theme"
      {...props}
    >
      <ThemeToggleIcon
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        size={size}
      />
    </Button>
  )
}

export default ThemeToggle
