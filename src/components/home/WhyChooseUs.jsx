import { useMemo } from 'react'
import { useGetServicesByCategoryQuery } from '../../redux/services/bannerApi'

const fallbackLeft = [
  { icon: '/assets/img/z1.svg', title: 'Bull Mother farms', desc: 'All three KLDB semen stations are continuously graded \'A\' by GOI and certified with ISO 9001:2008 and HACCP.' },
  { icon: '/assets/img/z3.svg', title: 'Semen Station', desc: 'Graded as \'A\' by the Central Monitoring Unit constituted by the Government of India, with ISO 9001:2008 and HACCP certifications.' },
  { icon: '/assets/img/z5.svg', title: 'Pig Development', desc: 'Production and supply of Malabari and Attappady Black goat kids and breeding stock to farmers, with hands-on training for farmers and technicians' },
]

const fallbackRight = [
  { icon: '/assets/img/z2.svg', title: 'Rashtriya Gokul Mission - RGM', desc: 'One-time financial aid for Vechur and Kasargode cow farmers, free frozen semen supply, and national/state awards for farmers and institutions.' },
  { icon: '/assets/img/z6.svg', title: 'Kudumbashree', desc: 'Establishing 500 model forage units annually across selected districts to promote sustainable fodder production and improve livestock productivity.' },
  { icon: '/assets/img/z4.svg', title: 'National Mission for Enhancing Bovine Productivity', desc: 'A Government of India scheme promoting embryo transfer technology for genetic improvement and conservation of indigenous livestock breeds' },
]

const fallbackIcons = [
  '/assets/img/z1.svg',
  '/assets/img/z2.svg',
  '/assets/img/z3.svg',
  '/assets/img/z6.svg',
  '/assets/img/z5.svg',
  '/assets/img/z4.svg',
  
]

const stripHtml = (value) => value.replace(/<[^>]*>/g, '').trim()

export default function WhyChooseUs() {
  const { data, isLoading, isError } = useGetServicesByCategoryQuery('service-we-provide')

  const { leftItems, rightItems } = useMemo(() => {
    const list = Array.isArray(data?.data?.services) ? data.data.services : []
    const mapped = list
      .filter(item => item?.status === 'active')
      .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
      .map((item, i) => {
        const t = Array.isArray(item?.translations) ? item.translations[0] : null
        const title = t?.title || 'Service'
        const descHtml = t?.description || ''
        return {
          icon: item?.icon || fallbackIcons[i % fallbackIcons.length],
          title,
          desc: descHtml ? stripHtml(descHtml) : '',
        }
      })

    if (!mapped.length) {
      return { leftItems: fallbackLeft, rightItems: fallbackRight }
    }

    const mid = Math.ceil(mapped.length / 2)
    return {
      leftItems: mapped.slice(0, mid),
      rightItems: mapped.slice(mid),
    }
  }, [data])

  return (
    <section className="maserve section-bg choose-us-section-6 section-padding">
      <div className="shape-1 d-none d-xxl-block float-bob-x">
        {/* <img src="/assets/img/home-5/choose/shape-02.png" alt="img" /> */}
      </div>
      <div className="shape-2 d-none d-xxl-block float-bob-y">
        {/* <img src="/assets/img/home-5/choose/shape-03.png" alt="img" /> */}
      </div>
      <div className="container">
        <div className="choose-us-wrapper-6">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
              <div className="choose-left-img">
                <img src="/assets/img/swq.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="choose-us-content">
                <div className="section-title mb-0">
                  <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Why Choose Us</span>
                  <h2 className="font1 text-anim">Service We provide</h2>
                </div>
                <div className="icon-items-area">
                  {isLoading && (
                    <div className="text-center" style={{ color: '#fff', padding: '20px 0' }}>
                      Loading services...
                    </div>
                  )}
                  {isError && (
                    <div className="text-center" style={{ color: '#fff', padding: '20px 0' }}>
                      Failed to load services.
                    </div>
                  )}
                  <ul className="wow fadeInUp choose-list" data-wow-delay=".3s">
                    {leftItems.map((item, i) => (
                      <li key={i}>
                        <div className="icon">{item.icon && <img src={item.icon} alt="img" />}</div>
                        <div className="content">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul className="wow fadeInUp choose-list" data-wow-delay=".5s">
                    {rightItems.map((item, i) => (
                      <li key={i}>
                        <div className="icon">{item.icon && <img src={item.icon} alt="img" />}</div>
                        <div className="content">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





// --------------------before api------------------------------
// const leftItems = [
//   { icon: '/assets/img/z1.svg', title: 'Bull Mother farms', desc: 'All three KLDB semen stations are continuously graded \'A\' by GOI and certified with ISO 9001:2008 and HACCP.' },
//   { icon: '/assets/img/z3.svg', title: 'Semen Station', desc: 'Graded as \'A\' by the Central Monitoring Unit constituted by the Government of India, with ISO 9001:2008 and HACCP certifications.' },
//   { icon: '/assets/img/z5.svg', title: 'Pig Development', desc: 'Production and supply of Malabari and Attappady Black goat kids and breeding stock to farmers, with hands-on training for farmers and technicians' },
// ]

// const rightItems = [
//   { icon: '/assets/img/z2.svg', title: 'Rashtriya Gokul Mission - RGM', desc: 'One-time financial aid for Vechur and Kasargode cow farmers, free frozen semen supply, and national/state awards for farmers and institutions.' },
//   { icon: '/assets/img/z6.svg', title: 'Kudumbashree', desc: 'Establishing 500 model forage units annually across selected districts to promote sustainable fodder production and improve livestock productivity.' },
//   { icon: '/assets/img/z4.svg', title: 'National Mission for Enhancing Bovine Productivity', desc: 'A Government of India scheme promoting embryo transfer technology for genetic improvement and conservation of indigenous livestock breeds' },
// ]

// export default function WhyChooseUs() {
//   return (
//     <section className="maserve section-bg choose-us-section-6 section-padding">
//       <div className="shape-1 d-none d-xxl-block float-bob-x">
//         {/* <img src="/assets/img/home-5/choose/shape-02.png" alt="img" /> */}
//       </div>
//       <div className="shape-2 d-none d-xxl-block float-bob-y">
//         {/* <img src="/assets/img/home-5/choose/shape-03.png" alt="img" /> */}
//       </div>
//       <div className="container">
//         <div className="choose-us-wrapper-6">
//           <div className="row g-4 align-items-center">
//             <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
//               <div className="choose-left-img">
//                 <img src="/assets/img/swq.png" alt="img" />
//               </div>
//             </div>
//             <div className="col-lg-7">
//               <div className="choose-us-content">
//                 <div className="section-title mb-0">
//                   <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Why Choose Us</span>
//                   <h2 className="font1 text-anim">Service We provide</h2>
//                 </div>
//                 <div className="icon-items-area">
//                   <ul className="wow fadeInUp choose-list" data-wow-delay=".3s">
//                     {leftItems.map((item, i) => (
//                       <li key={i}>
//                         <div className="icon"><img src={item.icon} alt="img" /></div>
//                         <div className="content">
//                           <h3>{item.title}</h3>
//                           <p>{item.desc}</p>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                   <ul className="wow fadeInUp choose-list" data-wow-delay=".5s">
//                     {rightItems.map((item, i) => (
//                       <li key={i}>
//                         <div className="icon"><img src={item.icon} alt="img" /></div>
//                         <div className="content">
//                           <h3>{item.title}</h3>
//                           <p>{item.desc}</p>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
