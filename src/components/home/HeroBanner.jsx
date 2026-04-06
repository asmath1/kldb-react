import { useEffect, useMemo, useRef, useState } from 'react'
import { useGetBannersQuery } from '../../redux/services/bannerApi'

const fallbackSlides = [
  {
    video: '/assets/img/1-RUNNING.mp4',
    title: 'Strengthening Livestock, Empowering Farmers,\nPowering Kerala.',
    subtitle: 'Kerala Livestock Development Board',
  },

]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const { data, isLoading, isError } = useGetBannersQuery()

  const slides = useMemo(() => {
    const list = Array.isArray(data?.data) ? data.data : []
    const active = list
      .filter(item => item?.status)
      .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
      .map(item => {
        const t = Array.isArray(item?.translations) ? item.translations[0] : null
        const title = t?.title || 'Kerala Livestock Development Board'
        const description = t?.description || ''
        const path = item?.image_path || ''
        const url = path
          ? `https://livestock.cditproject.org/${path}`
          : ''
        return {
          video: url,
          title: description || title,
          subtitle: title,
          isVideo: path.toLowerCase().endsWith('.mp4'),
        }
      })
      .filter(item => item.video)
    return active.length ? active : fallbackSlides
  }, [data])

  const goTo = (idx) => {
    if (!slides.length) return
    setCurrent((idx + slides.length) % slides.length)
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    if (!slides.length) return
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
  }

  useEffect(() => {
    if (!slides.length) return
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(timerRef.current)
  }, [slides.length])

  useEffect(() => {
    if (current >= slides.length) setCurrent(0)
  }, [slides.length, current])

  // const changeSlide = (dir) => {
  //   goTo(current + dir)
  //   resetTimer()
  // }

  
  return (
    <section className="hero-section hero-5 fix">
      <div className="swiper-dot2">
        <div className="dot" style={{ display: 'flex', gap: 8, justifyContent: 'center', paddingBottom: 20 }}>
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => { goTo(i); resetTimer() }}
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                borderRadius: i === current ? 5 : '50%',
                background: i === current ? '#FFC400' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', minHeight: 'calc(100vh - 170px)', height:'auto', overflow: 'hidden' }}>
        {isLoading && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, color: '#fff' }}>
            Loading banners...
          </div>
        )}
        {isError && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, color: '#fff' }}>
            Failed to load banners.
          </div>
        )}
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              opacity: i === current ? 1 : 0,
              transition: 'opacity 1s ease',
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            <div className="hero-height">
              <div className="hero-bg">
                {(slide.isVideo ?? slide.video?.toLowerCase().endsWith('.mp4')) ? (
                  <video className="hero-video" autoPlay muted loop playsInline>
                    <source src={slide.video} type="video/mp4" />
                  </video>
                ) : (
                  <img className="hero-video" src={slide.video} alt={slide.subtitle || 'Banner'} />
                )}
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-content">
                      <span>{slide.subtitle || 'Kerala Livestock Development Board'}</span>
                      <span>
                        {slide.title.split('\n').map((line, j, arr) => (
                          <h1 key={j}>
                            {line}
                            {j < arr.length - 1 && <br />}
                          </h1>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>
    </section>
  )
}



// ------------------------------------------------------------------------

// import { useEffect, useRef, useState } from 'react'

// const slides = [
//   {
//     video: '/assets/img/1-RUNNING.mp4',
//     title: 'Strengthening Livestock, Empowering Farmers,\nPowering Kerala.',
//   },
//   {
//     video: '/assets/img/dron.mp4',
//     title: 'Great Bulls Begin with Great Mothers',
//   },
//   {
//     video: '/assets/img/CALF.mp4',
//     title: 'Quality you can Measure.\nPerformance you can See',
//   },
//   {
//     video: '/assets/img/LAB EQUIPMENTS.mp4',
//     title: 'Great Bulls Begin with Great Mothers',
//   },
//   {
//     video: '/assets/img/grass -1.mp4',
//     title: 'Quality you can Measure.\nPerformance you can See',
//   },
// ]

// export default function HeroBanner() {
//   const [current, setCurrent] = useState(0)
//   const timerRef = useRef(null)

//   const goTo = (idx) => setCurrent((idx + slides.length) % slides.length)

//   const resetTimer = () => {
//     clearInterval(timerRef.current)
//     timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
//   }

//   useEffect(() => {
//     timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
//     return () => clearInterval(timerRef.current)
//   }, [])

//   const changeSlide = (dir) => {
//     goTo(current + dir)
//     resetTimer()
//   }

  
//   return (
//     <section className="hero-section hero-5 fix">
//       <div className="swiper-dot2">
//         <div className="dot" style={{ display: 'flex', gap: 8, justifyContent: 'center', paddingBottom: 20 }}>
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               onClick={() => { goTo(i); resetTimer() }}
//               style={{
//                 width: i === current ? 28 : 10,
//                 height: 10,
//                 borderRadius: i === current ? 5 : '50%',
//                 background: i === current ? '#FFC400' : 'rgba(255,255,255,0.5)',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s',
//                 display: 'inline-block',
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div style={{ position: 'relative', width: '100%', minHeight: 'calc(100vh - 170px)', height:'auto', overflow: 'hidden' }}>
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             style={{
//               position: 'absolute', inset: 0,
//               opacity: i === current ? 1 : 0,
//               transition: 'opacity 1s ease',
//               pointerEvents: i === current ? 'auto' : 'none',
//             }}
//           >
//             <div className="hero-height">
//               <div className="hero-bg">
//                 <video className="hero-video" autoPlay muted loop playsInline>
//                   <source src={slide.video} type="video/mp4" />
//                 </video>
//               </div>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="hero-content">
//                       <span>Kerala Livestock Development Board</span>
//                       <h1>{slide.title.split('\n').map((line, j) => (
//                         <h1 key={j}>{line}{j < slide.title.split('\n').length - 1 && <br />}</h1>
//                       ))}</h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Nav arrows */}
//         {/* <button
//           className="array-next"
//           onClick={() => changeSlide(-1)}
//           style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
//         >
//           <i className="fas fa-chevron-left"></i>
//         </button>
//         <button
//           className="array-prev"
//           onClick={() => changeSlide(1)}
//           style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
//         >
//           <i className="fas fa-chevron-right"></i>
//         </button> */}
//       </div>
//     </section>
//   )
// }


