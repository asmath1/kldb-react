// import { Link } from 'react-router-dom'

// export default function Footer() {
//   return (
//     <>
//       <div className="footer-grass">
//         <div>
//           <img src="/assets/img/tt.gif" width="300" alt="" className="moving-tt" />
//         </div>
//         <img src="/assets/img/foot1.svg" className="imgg" alt="" />
//       </div>

//       <footer className="footer-section-5 section-padding section-bg pb-0 pt-0">
//         <img src="/assets/img/footer-bg.png" className="f-bg" alt="img" />
//         <div className="container" style={{ position: 'relative' }}>
//           <div className="footer-widget-wrapper-4">
//             <div className="row">
//               <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
//                 <div className="footer-widget-items">
//                   <div className="widget-head">
//                     <Link to="/" className="footer-logo">
//                       <img className="logi-footer"src="/assets/img/logi.svg" alt="img" />
//                     </Link>
//                   </div>
//                   <div className="footer-content">
//                     <p>To provide the inputs required for cattle breeding in line with the breeding policy of the State</p>
//                     <div className="social-icon">
//                       <a href="#"><i className="fab fa-facebook-f"></i></a>
//                       <a href="#"><i className="fab fa-twitter"></i></a>
//                       <a href="#"><i className="fab fa-dribbble"></i></a>
//                       <a href="#"><i className="fab fa-instagram"></i></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
//               <div className="col-xl-2 col-lg-4 col-md-6 col-sm-4 col-6">
//                 <div className="footer-widget-items">
//                   <div className="widget-head">
//                     <h5>Useful Link</h5>
//                   </div>
//                   <ul className="list-area">
//                     <li><Link to="/about"><i className="far fa-chevron-double-right"></i> About Company</Link></li>
//                     <li><Link to="/administration"><i className="far fa-chevron-double-right"></i> Administration</Link></li>
//                     <li><Link to="/contact"><i className="far fa-chevron-double-right"></i> Contact Us</Link></li>
//                     <li><Link to="/rti"><i className="far fa-chevron-double-right"></i> RTI</Link></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-2 col-lg-4 col-md-6 col-sm-4 col-6">
//                 <div className="footer-widget-items">
//                   <div className="widget-head">
//                     <h5>Quick Links</h5>
//                   </div>
//                   <ul className="list-area">
//                     <li><Link to="/tenders"><i className="far fa-chevron-double-right"></i> Tenders</Link></li>
//                     <li><Link to="/govt-orders"><i className="far fa-chevron-double-right"></i> Govt Orders</Link></li>
//                     <li><Link to="/gallery"><i className="far fa-chevron-double-right"></i> Gallery</Link></li>
//                     <li><Link to="/nlm-edp"><i className="far fa-chevron-double-right"></i> NLM-EDP</Link></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5">
//                 <div className="footer-widget-items">
//                   <div className="widget-head">
//                     <h5>Contact Us</h5>
//                   </div>
//                   <ul className="contact-list">
//                     <li>
//                       <div className="icon"><i className="fas fa-envelope"></i></div>
//                       <div className="content">
//                         <h5>Email us:</h5>
//                         <p><a href="mailto:kldboard8@gmail.com">kldboard8@gmail.com</a></p>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
//                       <div className="content">
//                         <h5>Location:</h5>
//                         <p>'Gokulam', Pattom, Thiruvananthapuram – 695004</p>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="icon"><i className="fas fa-phone-alt"></i></div>
//                       <div className="content">
//                         <h5>Phone:</h5>
//                         <p><a href="tel:04712440920">0471- 2440920 | 2449138</a></p>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom" style={{ position: 'relative' }}>
//           <div className="container text-center">
//             <div className="footer-bottom-wrapper">
//               <p className="text-1">© 2026 <span>C-Dit</span>. All Rights Reserved</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   )
// }



// -------------------------------

import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useGetFooterQuery } from '../../redux/services/bannerApi'

export default function Footer() {
  const { data, isLoading, isError } = useGetFooterQuery()

  const description = useMemo(() => {
    const list = data?.description?.translations || []
    const pick = list.find(t => t?.language_code === 'en' || t?.language_id === 1) || list[0]
    return pick?.value || ''
  }, [data])

  const usefulLinks = useMemo(() => {
    return Array.isArray(data?.useful_links) ? data.useful_links : []
  }, [data])

  const socials = useMemo(() => {
    return Array.isArray(data?.social_media) ? data.social_media : []
  }, [data])

  const primaryContact = useMemo(() => {
    const list = Array.isArray(data?.contacts) ? data.contacts : []
    return list.find(c => c?.is_primary) || list[0] || null
  }, [data])

  const contactTranslation = useMemo(() => {
    const list = Array.isArray(primaryContact?.translations) ? primaryContact.translations : []
    return list.find(t => t?.language_code === 'en' || t?.language_id === 1) || list[0] || null
  }, [primaryContact])

  const quickLinks = useMemo(() => {
    return Array.isArray(data?.quick_links) ? data.quick_links : []
  }, [data])

  const phones = useMemo(() => {
    if (!primaryContact?.phones?.all) return primaryContact?.phones?.primary || ''
    return primaryContact.phones.all.map(p => p.number).filter(Boolean).join(' | ')
  }, [primaryContact])

  return (
    <>
      <div className="footer-grass">
        <div>
          <img src="/assets/img/tt.gif" width="300" alt="" className="moving-tt" />
        </div>
        <img src="/assets/img/foot1.svg" className="imgg" alt="" />
      </div>

      <footer className="footer-section-5 section-padding section-bg pb-0 pt-0">
        <img src="/assets/img/footer-bg.png" className="f-bg" alt="img" />
        <div className="container" style={{ position: 'relative' }}>
          <div className="footer-widget-wrapper-4">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <Link to="/" className="footer-logo">
                      <img className="logi-footer" src="/assets/img/logi.svg" alt="img" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Failed to load footer.</p>}
                    {!isLoading && !isError && <p>{description}</p>}
                    <div className="social-icon">
                      {socials.map((s) => (
                        <a key={s.id} href={s.link || '#'} target={s.target || '_self'} rel="noreferrer">
                          <i className={s.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-4 col-6">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h5>Useful Link</h5>
                  </div>
                  <ul className="list-area">
                    {usefulLinks.map((link) => {
                      const tList = Array.isArray(link?.translations) ? link.translations : []
                      const t = tList.find(x => x?.language_code === 'en' || x?.language_id === 1) || tList[0]
                      const title = t?.title || 'Link'
                      const icon = link?.icon || 'far fa-chevron-double-right'

                      if (link?.link_type === 'url' && link?.value) {
                        return (
                          <li key={link.id}>
                            <a href={link.value} target={link.target || '_self'} rel="noreferrer">
                              <i className={icon}></i> {title}
                            </a>
                          </li>
                        )
                      }

                      if (link?.article_slug) {
                        return (
                          <li key={link.id}>
                            <Link to={`/${link.article_slug}`}>
                              <i className={icon}></i> {title}
                            </Link>
                          </li>
                        )
                      }

                      return (
                        <li key={link.id}>
                          <Link to="#">
                            <i className={icon}></i> {title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-4 col-6">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h5>Quick Links</h5>
                  </div>
                  <ul className="list-area">
                    {quickLinks.map((link) => {
                      const tList = Array.isArray(link?.translations) ? link.translations : []
                      const t = tList.find(x => x?.language_code === 'en' || x?.language_id === 1) || tList[0]
                      const title = t?.title || 'Link'
                      const icon = link?.icon || 'far fa-chevron-double-right'

                      if (link?.link_type === 'url' && link?.value) {
                        return (
                          <li key={link.id}>
                            <a href={link.value} target={link.target || '_self'} rel="noreferrer">
                              <i className={icon}></i> {title}
                            </a>
                          </li>
                        )
                      }

                      if (link?.article_slug) {
                        return (
                          <li key={link.id}>
                            <Link to={`/${link.article_slug}`}>
                              <i className={icon}></i> {title}
                            </Link>
                          </li>
                        )
                      }

                      return (
                        <li key={link.id}>
                          <Link to="#">
                            <i className={icon}></i> {title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h5>Contact Us</h5>
                  </div>
                  <ul className="contact-list">
                    <li>
                      <div className="icon"><i className="fas fa-envelope"></i></div>
                      <div className="content">
                        <h5>Email us:</h5>
                        <p>
                          <a href={`mailto:${primaryContact?.email || ''}`}>
                            {primaryContact?.email || ''}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                      <div className="content">
                        <h5>Location:</h5>
                        <p>{contactTranslation?.title} {contactTranslation?.address}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon"><i className="fas fa-phone-alt"></i></div>
                      <div className="content">
                        <h5>Phone:</h5>
                        <p>
                          <a href={`tel:${primaryContact?.phones?.primary || ''}`}>
                            {phones}
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ position: 'relative' }}>
          <div className="container text-center">
            <div className="footer-bottom-wrapper">
              <p className="text-1">(c) 2026 <span>C-Dit</span>. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
