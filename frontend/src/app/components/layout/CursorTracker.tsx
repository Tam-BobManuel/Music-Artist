"use client"
import React, { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion"

const CursorTracker = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 15, stiffness: 150 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const [clicked, setClicked] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [bgColor, setBgColor] = useState("rgb(255, 255, 255)")
  const ringAnimation = useAnimation()
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)

      // Check if mouse is over an interactive element
    //   const element = document.elementFromPoint(e.clientX, e.clientY)
    //   if (element) {
    //     const isInteractive = 
    //       element.tagName === 'A' || 
    //       element.tagName === 'BUTTON' ||
    //       element.onclick != null ||
    //       window.getComputedStyle(element).cursor === 'pointer' ||
    //       element.getAttribute('role') === 'button'

    //     setShowCursor(isInteractive ? false : true)
    //   }
    }

    const updateBackgroundColor = () => {
      if (cursorRef.current) {
        const rect = cursorRef.current.getBoundingClientRect()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2
        const element = document.elementFromPoint(x, y)
        if (element) {
          const bgColor = window.getComputedStyle(element).backgroundColor
          setBgColor(bgColor)
        }
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousemove", updateBackgroundColor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousemove", updateBackgroundColor)
    }
  }, [])

  useEffect(() => {
    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    return () => {
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  useEffect(() => {
    if (clicked) {
      ringAnimation.start({
        scale: [1, 1.5],
        opacity: [0.5, 0],
        transition: { duration: 0.8 },
      })
    }
  }, [clicked, ringAnimation])

  const invertColor = (rgb: string) => {
    const match = rgb.match(/\d+/g)
    if (match) {
      const [r, g, b] = match.map(Number)
      return `rgb(${255 - r}, ${255 - g}, ${255 - b})`
    }
    return "rgb(0, 0, 0)"
  }

  const cursorColor = invertColor(bgColor)

  if (!showCursor) return null

  return (
    <div className="hidden lg:block">
        <motion.div
      ref={cursorRef}
      className="cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <motion.div
        className="cursor-dot"
        animate={{
          scale: clicked ? 0.8 : 1,
        }}
        style={{
          width: "32px",
          height: "32px",
          backgroundColor: cursorColor,
          borderRadius: "50%",
          opacity: 0.6,
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={ringAnimation}
        style={{
          width: "32px",
          height: "32px",
          border: `2px solid ${cursorColor}`,
          borderRadius: "50%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.3,
        }}
      />
      <motion.div
        className="cursor-trail"
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: cursorColor,
          borderRadius: "50%",
          position: "absolute",
          top: "8px",
          left: "8px",
          opacity: 0.3,
        }}
        animate={{
          scale: [1, 0],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          times: [0, 1],
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 0,
        }}
      />
    </motion.div>
    </div>
  )
}

export default CursorTracker