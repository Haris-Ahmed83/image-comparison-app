import { useRef, useCallback, useState } from 'react'

interface Props {
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  orientation?: 'horizontal' | 'vertical'
}

export default function ImageComparison({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  orientation = 'horizontal',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const getPositionFromEvent = useCallback(
    (e: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return position
      if (orientation === 'horizontal') {
        const x = e.clientX - rect.left
        return Math.max(0, Math.min(100, (x / rect.width) * 100))
      } else {
        const y = e.clientY - rect.top
        return Math.max(0, Math.min(100, (y / rect.height) * 100))
      }
    },
    [position, orientation]
  )

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      setDragging(true)
      setPosition(getPositionFromEvent(e))
      e.currentTarget.setPointerCapture(e.pointerId)
    },
    [getPositionFromEvent]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (dragging) {
        setPosition(getPositionFromEvent(e))
      }
    },
    [dragging, getPositionFromEvent]
  )

  const handlePointerUp = useCallback(() => {
    setDragging(false)
  }, [])

  const clipValue = orientation === 'horizontal'
    ? `inset(0 ${100 - position}% 0 0)`
    : `inset(0 0 ${100 - position}% 0)`

  const posStyle = orientation === 'horizontal'
    ? { left: `${position}%`, top: 0, bottom: 0 }
    : { top: `${position}%`, left: 0, right: 0 }

  const beforeLabelStyle = orientation === 'horizontal'
    ? { left: 16, top: 16 }
    : { left: 16, top: 16 }

  const afterLabelStyle = orientation === 'horizontal'
    ? { right: 16, top: 16 }
    : { left: 16, bottom: 16 }

  return (
    <div
      ref={containerRef}
      className={`comparison-container ${orientation}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: 'none', cursor: dragging ? (orientation === 'horizontal' ? 'col-resize' : 'row-resize') : 'pointer' }}
    >
      <img src={beforeSrc} alt="Before" className="comparison-before" draggable={false} />

      <div className="comparison-after-wrap" style={{ clipPath: clipValue }}>
        <img src={afterSrc} alt="After" className="comparison-after" draggable={false} />
      </div>

      <div className="comparison-label comparison-label-before" style={beforeLabelStyle}>
        {beforeLabel}
      </div>

      <div className="comparison-label comparison-label-after" style={afterLabelStyle}>
        {afterLabel}
      </div>

      <div className="comparison-handle" style={posStyle}>
        <div className="comparison-handle-btn" style={dragging ? { transform: 'scale(1.15)' } : undefined}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {orientation === 'horizontal' ? (
              <>
                <polyline points="9 18 15 12 9 6" />
              </>
            ) : (
              <>
                <polyline points="18 9 12 15 6 9" />
              </>
            )}
          </svg>
        </div>
      </div>
    </div>
  )
}
