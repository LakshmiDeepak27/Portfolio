import { useCallback, useEffect, useRef, useState } from 'react'

const IDLE_MS = 3200
const SCROLL_SETTLE_MS = 900
const TOP_THRESHOLD = 20

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useAutoHideNav(forceVisible = false) {
  const [visible, setVisible] = useState(true)
  const idleTimerRef = useRef<number | undefined>(undefined)
  const scrollSettleTimerRef = useRef<number | undefined>(undefined)
  const lastPointerRef = useRef(Date.now())

  const clearTimers = useCallback(() => {
    window.clearTimeout(idleTimerRef.current)
    window.clearTimeout(scrollSettleTimerRef.current)
  }, [])

  const show = useCallback(() => {
    setVisible(true)
  }, [])

  const hide = useCallback(() => {
    setVisible(false)
  }, [])

  const scheduleIdleHide = useCallback(() => {
    window.clearTimeout(idleTimerRef.current)
    idleTimerRef.current = window.setTimeout(() => {
      if (window.scrollY > TOP_THRESHOLD && Date.now() - lastPointerRef.current >= IDLE_MS) {
        hide()
      }
    }, IDLE_MS)
  }, [hide])

  const onPointer = useCallback(() => {
    lastPointerRef.current = Date.now()
    show()
    if (window.scrollY > TOP_THRESHOLD) {
      scheduleIdleHide()
    }
  }, [show, scheduleIdleHide])

  useEffect(() => {
    if (forceVisible) {
      clearTimers()
      show()
      return
    }

    if (prefersReducedMotion()) {
      show()
      return
    }

    const onScroll = () => {
      if (window.scrollY <= TOP_THRESHOLD) {
        clearTimers()
        show()
        return
      }

      show()

      window.clearTimeout(scrollSettleTimerRef.current)
      scrollSettleTimerRef.current = window.setTimeout(() => {
        if (Date.now() - lastPointerRef.current >= SCROLL_SETTLE_MS) {
          hide()
        }
        scheduleIdleHide()
      }, SCROLL_SETTLE_MS)
    }

    const onKeyDown = () => onPointer()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onPointer, { passive: true })
    window.addEventListener('touchstart', onPointer, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onPointer)
      window.removeEventListener('touchstart', onPointer)
      window.removeEventListener('keydown', onKeyDown)
      clearTimers()
    }
  }, [forceVisible, clearTimers, hide, onPointer, scheduleIdleHide, show])

  return visible
}
