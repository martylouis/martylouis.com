import { useEffect, useRef } from "react"

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

export function Header({
  isHomePage = false,
  avatarHeader,
  avatarHomePage,
}: {
  isHomePage?: boolean
  avatarHeader?: React.ReactNode
  avatarHomePage?: React.ReactNode
}) {
  const headerRef = useRef<React.ElementRef<"div">>(null)
  const avatarRef = useRef<React.ElementRef<"div">>(null)
  const isInitial = useRef(true)

  useEffect(() => {
    const downDelay = avatarRef.current?.offsetTop ?? 0
    const upDelay = 0

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      const { top, height } = headerRef.current.getBoundingClientRect()
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) {
        setProperty("--header-position", "sticky")
      }

      setProperty("--content-offset", `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`)
        setProperty("--header-mb", `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay)
        setProperty("--header-height", `${offset}px`)
        setProperty("--header-mb", `${height - offset}px`)
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`)
        setProperty("--header-mb", `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty("--header-inner-position", "fixed")
        removeProperty("--header-top")
        removeProperty("--avatar-top")
      } else {
        removeProperty("--header-inner-position")
        setProperty("--header-top", "0px")
        setProperty("--avatar-top", "0px")
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      const fromScale = 1
      const toScale = 36 / 64
      const fromX = 0
      const toX = 2 / 16

      const scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      )

      const borderScale = 1 / (toScale / scale)
      const borderX = (-toX + x) * borderScale
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty("--avatar-border-transform", borderTransform)
      setProperty("--avatar-border-opacity", scale === toScale ? "1" : "0")
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener("scroll", updateStyles, { passive: true })
    window.addEventListener("resize", updateStyles)

    return () => {
      window.removeEventListener("scroll", updateStyles)
      window.removeEventListener("resize", updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      {isHomePage && (
        <>
          <div
            ref={avatarRef}
            className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
          />
          {avatarHomePage}
        </>
      )}
      <div
        ref={headerRef}
        className="top-0 z-10 h-16 pt-6"
        style={{
          position: "var(--header-position)" as React.CSSProperties["position"],
        }}
      >
        {avatarHeader}
      </div>
    </>
  )
}
