import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { FlatButton } from '../components'

const MOBILE_HERO_WIDTH = 768
const HERO_MEDIA_QUERY =
  '(max-width: 767px), (pointer: coarse), (hover: none), (prefers-reduced-motion: reduce)'
const HERO_MAX_DEVICE_PIXEL_RATIO = 2
const HERO_FRAME_INTERVAL_MS = 1000 / 30

function shouldUseFallbackHero() {
  if (typeof window === 'undefined') {
    return true
  }

  const matchesViewport = window.innerWidth < MOBILE_HERO_WIDTH
  const prefersFallback = typeof window.matchMedia === 'function' && window.matchMedia(HERO_MEDIA_QUERY).matches
  const isTouchPrimary = typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1

  return matchesViewport || prefersFallback || isTouchPrimary
}

function compileShader(gl, type, source) {
  const shader = gl.createShader(type)

  if (!shader) {
    return null
  }

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return shader
  }

  gl.deleteShader(shader)
  return null
}

function createProgram(gl) {
  const vertexShader = compileShader(
    gl,
    gl.VERTEX_SHADER,
    `
      attribute vec2 a_position;

      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `
  )

  const fragmentShader = compileShader(
    gl,
    gl.FRAGMENT_SHADER,
    `
      precision mediump float;

      uniform vec2 u_resolution;
      uniform float u_time;

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        vec2 uv = st * 2.0 - 1.0;
        uv.x *= u_resolution.x / max(u_resolution.y, 1.0);

        float time = u_time * 0.22;
        vec3 color = vec3(0.015, 0.04, 0.09);

        vec2 orb = uv - vec2(0.38 * sin(time * 1.35), 0.18 * cos(time * 0.9));
        float orbGlow = 0.045 / max(length(orb) - 0.26, 0.08);

        float beamA = 0.012 / max(abs(uv.y + 0.14 * sin(uv.x * 4.0 + time * 4.2)), 0.03);
        float beamB = 0.01 / max(abs(uv.y - 0.2 * cos(uv.x * 3.1 - time * 3.6) + 0.18), 0.035);
        float pulse = smoothstep(0.9, 0.2, abs(length(uv) - 0.72 + 0.06 * sin(time * 2.1)));

        float gridX = smoothstep(0.995, 1.0, sin((uv.x + time * 0.15) * 22.0) * 0.5 + 0.5);
        float gridY = smoothstep(0.992, 1.0, sin((uv.y - time * 0.12) * 18.0) * 0.5 + 0.5);
        float grid = (gridX + gridY) * 0.08;

        color += vec3(0.0, 0.26, 0.4) * beamA;
        color += vec3(0.18, 0.62, 0.85) * beamB;
        color += vec3(0.2, 0.8, 1.0) * orbGlow;
        color += vec3(0.12, 0.32, 0.45) * pulse;
        color += vec3(0.09, 0.12, 0.18) * grid;

        float vignette = smoothstep(1.55, 0.25, length(uv));
        color *= vignette;
        color += vec3(0.01, 0.02, 0.04) * (1.0 - vignette);

        gl_FragColor = vec4(color, 1.0);
      }
    `
  )

  if (!vertexShader || !fragmentShader) {
    if (vertexShader) {
      gl.deleteShader(vertexShader)
    }
    if (fragmentShader) {
      gl.deleteShader(fragmentShader)
    }
    return null
  }

  const program = gl.createProgram()

  if (!program) {
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    return null
  }

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.deleteShader(vertexShader)
  gl.deleteShader(fragmentShader)

  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return program
  }

  gl.deleteProgram(program)
  return null
}

function HeroCanvas({ onReady, onError }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      onError()
      return undefined
    }

    const gl =
      canvas.getContext('webgl', {
        alpha: false,
        antialias: false,
        depth: false,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false,
        stencil: false,
      }) || canvas.getContext('experimental-webgl')

    if (!gl) {
      onError()
      return undefined
    }

    const program = createProgram(gl)

    if (!program) {
      onError()
      return undefined
    }

    const positionBuffer = gl.createBuffer()
    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')

    if (!positionBuffer || positionLocation < 0 || !timeLocation || !resolutionLocation) {
      gl.deleteProgram(program)
      onError()
      return undefined
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    )

    gl.useProgram(program)
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    let animationFrame = 0
    let visible = true
    let destroyed = false
    let lastFrameTime = 0

    const resize = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, HERO_MAX_DEVICE_PIXEL_RATIO)
      const width = Math.max(1, Math.floor(canvas.clientWidth * devicePixelRatio))
      const height = Math.max(1, Math.floor(canvas.clientHeight * devicePixelRatio))

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }

      gl.viewport(0, 0, width, height)
    }

    const renderFrame = now => {
      if (destroyed) {
        return
      }

      animationFrame = window.requestAnimationFrame(renderFrame)

      if (!visible || now - lastFrameTime < HERO_FRAME_INTERVAL_MS) {
        return
      }

      lastFrameTime = now
      resize()
      gl.uniform1f(timeLocation, now * 0.001)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    const intersectionObserver =
      typeof window.IntersectionObserver === 'function'
        ? new window.IntersectionObserver(entries => {
            visible = entries[0]?.isIntersecting ?? true
          })
        : null

    const handleVisibilityChange = () => {
      visible = !document.hidden
    }

    resize()
    onReady()
    animationFrame = window.requestAnimationFrame(renderFrame)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    intersectionObserver?.observe(canvas)

    return () => {
      destroyed = true
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      intersectionObserver?.disconnect()
      gl.deleteBuffer(positionBuffer)
      gl.deleteProgram(program)
    }
  }, [onError, onReady])

  return <MotionCanvas ref={canvasRef} data-testid='hero-motion-canvas' aria-hidden='true' />
}

export function Header({ title, tagline, urls }) {
  const [isInteractive, setIsInteractive] = useState(false)
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false)

  useEffect(() => {
    if (shouldUseFallbackHero()) {
      setShouldRenderCanvas(false)
      setIsInteractive(false)
      return
    }

    setShouldRenderCanvas(true)
  }, [])

  return (
    <StyledHeader as='header' className='header' data-hero-mode={isInteractive ? 'webgl' : 'fallback'}>
      <HeroFallback className='hero_fallback' data-testid='hero-motion-fallback' aria-hidden='true'>
        <FallbackGlow />
        <FallbackGrid />
      </HeroFallback>
      {shouldRenderCanvas ? (
        <HeroCanvas
          onReady={() => setIsInteractive(true)}
          onError={() => {
            setShouldRenderCanvas(false)
            setIsInteractive(false)
          }}
        />
      ) : null}
      <HeaderOverlay className='header_overlay' />
      <HeaderContent className='header_content'>
        <ResponsiveBox className='responsive_box'>
          <HeaderEyebrow>FUTURE-READY DIGITAL EXPERIENCES</HeaderEyebrow>
          <div className='flex_child'>
            <SiteTitle>
              {title}
              <br />
              <small className='header_tagline'>{tagline}</small>
            </SiteTitle>
            <HeaderCopy>
              We design and ship immersive product experiences with modern engineering, creative
              strategy, and fast delivery.
            </HeaderCopy>
            <ButtonGroup>
              <FlatButton as='a' href={urls.contactForm} type='primary'>
                Contact Us
              </FlatButton>
              <LinkedinButton as='a' href={urls.linkedin}>
                Connect on LinkedIn
              </LinkedinButton>
            </ButtonGroup>
          </div>
        </ResponsiveBox>
      </HeaderContent>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1.5rem;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(circle at top left, rgba(77, 182, 172, 0.16), transparent 35%),
    linear-gradient(135deg, #040b14 0%, #081526 55%, #07111c 100%);
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem;
  }
`

const HeroFallback = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`

const FallbackGlow = styled.div`
  position: absolute;
  inset: auto 10% 12% auto;
  width: min(45vw, 420px);
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(77, 182, 172, 0.45) 0%, rgba(0, 119, 181, 0.2) 38%, transparent 72%);
  filter: blur(10px);
  opacity: 0.85;
  transform: translate3d(0, 0, 0);
`

const FallbackGrid = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(to bottom, transparent 5%, rgba(0, 0, 0, 0.95) 30%, transparent 100%);
  opacity: 0.32;
  transform: perspective(900px) rotateX(74deg) scale(1.5);
  transform-origin: center bottom;
`

const MotionCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`

const HeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(4, 11, 20, 0.25) 0%, rgba(4, 11, 20, 0.4) 45%, rgba(4, 11, 20, 0.8) 100%),
    radial-gradient(circle at center, rgba(8, 21, 38, 0) 20%, rgba(8, 21, 38, 0.82) 100%);
  pointer-events: none;
`

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 4rem);
`

const ResponsiveBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    text-align: left;
  }
`

const HeaderEyebrow = styled.span`
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.34em;
  color: rgba(238, 238, 238, 0.72);

  @media (max-width: 767px) {
    letter-spacing: 0.22em;
  }
`

const SiteTitle = styled.h1`
  margin-bottom: 1.25rem;
  text-shadow: 0 8px 32px rgba(0, 0, 0, 0.65);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2.8rem, 8vw, ${({ theme }) => theme.fontSizes.siteTitle});
  letter-spacing: 0.04em;
  line-height: 0.95;

  small {
    display: inline-block;
    margin-top: 1rem;
    max-width: 16ch;
    font-size: clamp(1.1rem, 2.2vw, 1.8rem);
    line-height: 1.25;
    color: rgba(238, 238, 238, 0.92);
  }
`

const HeaderCopy = styled.p`
  max-width: 34rem;
  margin: 0 auto 2rem;
  color: rgba(238, 238, 238, 0.84);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 0;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: stretch;
  }
`

const LinkedinButton = styled(FlatButton)`
  background: rgba(0, 119, 181, 0.18);
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(238, 238, 238, 0.7);
  backdrop-filter: blur(8px);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: rgba(0, 119, 181, 0.36);
  }
`

export default Header
