import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

// Re-initialize all jQuery/vanilla JS plugins after React route changes
function reinitPlugins() {
  const $ = window.$
  if (!$) return

  // WOW animations
  if (window.WOW) {
    new window.WOW({ live: false }).init()
  }

  // Nice Select
  if ($.fn.niceSelect) {
    const $selects = $('.single-select')
    if ($selects.length) {
      // Prevent duplicate .nice-select wrappers on re-init
      $selects.niceSelect('destroy')
      $selects.niceSelect()
    }
  }

  // Odometer counter
  if ($.fn.appear) {
    $('.odometer').appear(function () {
      $('.odometer').each(function () {
        const countNumber = $(this).attr('data-count')
        $(this).html(countNumber)
      })
    })
  }

  // Swiper hero banner
  if (window.Swiper && document.querySelector('.banner-active')) {
    new window.Swiper('.banner-active', {
      speed: 1500,
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.dot', clickable: true },
    })
  }

  // Magnific Popup
  if ($.fn.magnificPopup) {
    $('.img-popup').magnificPopup({ type: 'image', gallery: { enabled: true } })
    $('.video-popup').magnificPopup({ type: 'iframe' })
  }

  // GSAP text animation
  if (window.gsap && window.ScrollTrigger && window.SplitText) {
    window.gsap.registerPlugin(window.ScrollTrigger, window.SplitText)
    const textElems = document.querySelectorAll('.text-anim')
    textElems.forEach(el => {
      const split = new window.SplitText(el, { type: 'chars, words' })
      window.ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          window.gsap.from(split.chars, {
            duration: 1,
            delay: 0.1,
            x: 20,
            autoAlpha: 0,
            stagger: 0.03,
            ease: 'power2.out',
          })
        },
      })
    })
  }

  // Mouse cursor
  if (document.querySelector('.mouseCursor')) {
    const inner = document.querySelector('.cursor-inner')
    const outer = document.querySelector('.cursor-outer')
    if (inner && outer) {
      window.onmousemove = (s) => {
        outer.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`
        inner.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`
      }
      inner.style.visibility = 'visible'
      outer.style.visibility = 'visible'
    }
  }
}

export default function Layout() {
  const [loaded, setLoaded] = useState(false)
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  // Re-init plugins on every route change (after DOM updates)
  useEffect(() => {
    const timer = setTimeout(() => {
      reinitPlugins()
    }, 100)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Preloader */}
      <div
        id="preloader"
        className="preloader"
        style={{ display: loaded ? 'none' : undefined }}
      >
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            {['K', 'L', 'D', 'B'].map((l, i) => (
              <span key={i} data-text-preloader={l} className="letters-loading">{l}</span>
            ))}
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left"><div className="bg"></div></div>
            <div className="col-3 loader-section section-left"><div className="bg"></div></div>
            <div className="col-3 loader-section section-right"><div className="bg"></div></div>
            <div className="col-3 loader-section section-right"><div className="bg"></div></div>
          </div>
        </div>
      </div>

      {/* Mouse cursor */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
