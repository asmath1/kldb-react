
import React, { useEffect, useMemo, useState } from 'react'
import { useGetCountersQuery } from '../../redux/services/bannerApi'

const AnimatedCounter = () => {
  const [countersVisible, setCountersVisible] = useState(false)
  const { data, isLoading, isError } = useGetCountersQuery()

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.counter-section-3')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setCountersVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const counters = useMemo(() => {
    const list = Array.isArray(data?.data) ? data.data : []
    return list
      .slice()
      .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
      .map((item) => {
        const translation = Array.isArray(item?.translations)
          ? item.translations.find((t) => t.language_code === 'en') || item.translations[0]
          : null
        const label = translation?.title || 'Unknown'
        const count = typeof item?.count === 'number' ? item.count : Number(translation?.display_count || 0)

        return {
          id: item.id,
          icon: item.icon_img || 'assets/img/cattle.gif',
          label,
          count: Number.isNaN(count) ? 0 : count,
        }
      })
  }, [data])

  const renderCounters = () => {
    if (isLoading) return <p style={{ color: '#fff' }}>Loading counters...</p>
    if (isError) return <p style={{ color: '#fff' }}>Failed to load counters.</p>
    if (!counters.length) return <p style={{ color: '#fff' }}>No counters available.</p>

    return counters.map((counter, index) => (
      <React.Fragment key={counter.id ?? index}>
        <div className="counter-box-items wow fadeInUp text-center" data-aos="fade-up" data-aos-delay={`${(index + 1) * 200}`}>
          <div className="icon">
            <img src={counter.icon} alt={counter.label} />
          </div>
          <div className="content">
            <p>{counter.label}</p>
            <h2>{countersVisible ? counter.count.toLocaleString() : '0'}</h2>
          </div>
        </div>
        {index < counters.length - 1 && <div className="line"></div>}
      </React.Fragment>
    ))
  }

  return (
    <section className="counter-section-3 section-padding fix pt-0 d-non">
      <div className="bottom-shape">
        <img src="assets/img/home-1/service/bottom-shape.png" className="w-100" alt="img" />
      </div>
      <div className="container-fluid">
        <div className="counter-wrapper-3 col-xxl-9 col-12 mx-auto cntt" style={{ backgroundImage: "url('assets/img/pattern.png')" }}>
          <div className="section-title text-start mb-0 netit">
            <span className="wow fadeInUp text-light" data-aos="fade-up">
              <img src="assets/img/sub-title.svg" alt="img" />
              Statistics 2012
            </span>
            <h2 className="font1 text-white text-anim">
              Livestock population <br /> kerala
            </h2>
          </div>

          {renderCounters()}
        </div>
      </div>
    </section>
  )
}

export default AnimatedCounter// //       const section = document.querySelector('.counter-section-3');
// //       if (section) {
// //         const rect = section.getBoundingClientRect();
// //         if (rect.top < window.innerHeight && rect.bottom > 0) {
// //           setCountersVisible(true);
// //         }
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     handleScroll(); // Check initial position

// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const counters = [
// //     {
// //       icon: 'assets/img/cattle.gif',
// //       label: 'Cattle',
// //       count: 1332510
// //     },
// //     {
// //       icon: 'assets/img/buffalo.gif',
// //       label: 'Buffalo',
// //       count: 101500
// //     },
// //     {
// //       icon: 'assets/img/goat.gif',
// //       label: 'Goat',
// //       count: 1359000
// //     },
// //     {
// //       icon: 'assets/img/pig.gif',
// //       label: 'Pig',
// //       count: 104000
// //     }
// //   ];

// //   return (
// //     <section className="counter-section-3 section-padding fix pt-0 d-non">
// //       <div className="bottom-shape">
// //         <img src="assets/img/home-1/service/bottom-shape.png" className="w-100" alt="img" />
// //       </div>
// //       <div className="container-fluid">
// //         <div 
// //           className="counter-wrapper-3 col-xxl-9 col-12 mx-auto cntt" 
// //           style={{ backgroundImage: "url('assets/img/pattern.png')" }}
// //         >
// //           <div className="section-title text-start mb-0 netit">
// //             <span className="wow fadeInUp text-light" data-aos="fade-up">
// //               <img src="assets/img/sub-title.svg" alt="img" />
// //               Statistics 2012
// //             </span>
// //             <h2 className="font1 text-white text-anim">
// //               Livestock population <br /> kerala
// //             </h2>
// //           </div>

// //           {counters.map((counter, index) => (
// //             <React.Fragment key={index}>
// //               <div className="counter-box-items wow fadeInUp text-center" data-aos="fade-up" data-aos-delay={`${(index + 1) * 200}`}>
// //                 <div className="icon">
// //                   <img src={counter.icon} alt="" />
// //                 </div>
// //                 <div className="content">
// //                   <p>{counter.label}</p>
// //                   <h2>
// //                     {countersVisible ? counter.count.toLocaleString() : '0'}
// //                   </h2>
// //                 </div>
// //               </div>
// //               {index < counters.length - 1 && <div className="line"></div>}
// //             </React.Fragment>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AnimatedCounter;


// import React, { useState, useEffect } from 'react';

// const AnimatedCounter = () => {
//   const [countersVisible, setCountersVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.querySelector('.counter-section-3');
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           setCountersVisible(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check initial position

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const counters = [
//     {
//       icon: 'assets/img/cattle.gif',
//       label: 'Cattle',
//       count: 1332510
//     },
//     {
//       icon: 'assets/img/buffalo.gif',
//       label: 'Buffalo',
//       count: 101500
//     },
//     {
//       icon: 'assets/img/goat.gif',
//       label: 'Goat',
//       count: 1359000
//     },
//     {
//       icon: 'assets/img/pig.gif',
//       label: 'Pig',
//       count: 104000
//     }
//   ];

//   return (
//     <section className="counter-section-3 section-padding fix pt-0 d-non">
//       <div className="bottom-shape">
//         <img src="assets/img/home-1/service/bottom-shape.png" className="w-100" alt="img" />
//       </div>
//       <div className="container-fluid">
//         <div 
//           className="counter-wrapper-3 col-xxl-9 col-12 mx-auto cntt" 
//           style={{ backgroundImage: "url('assets/img/pattern.png')" }}
//         >
//           <div className="section-title text-start mb-0 netit">
//             <span className="wow fadeInUp text-light" data-aos="fade-up">
//               <img src="assets/img/sub-title.svg" alt="img" />
//               Statistics 2012
//             </span>
//             <h2 className="font1 text-white text-anim">
//               Livestock population <br /> kerala
//             </h2>
//           </div>

//           {counters.map((counter, index) => (
//             <React.Fragment key={index}>
//               <div className="counter-box-items wow fadeInUp text-center" data-aos="fade-up" data-aos-delay={`${(index + 1) * 200}`}>
//                 <div className="icon">
//                   <img src={counter.icon} alt="" />
//                 </div>
//                 <div className="content">
//                   <p>{counter.label}</p>
//                   <h2>
//                     {countersVisible ? counter.count.toLocaleString() : '0'}
//                   </h2>
//                 </div>
//               </div>
//               {index < counters.length - 1 && <div className="line"></div>}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedCounter;