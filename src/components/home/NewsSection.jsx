import { useState, useEffect, useMemo } from 'react'
import { useGetNotificationsByCategoryQuery } from '../../redux/services/bannerApi'

const fallbackImages = [
  '/assets/img/news1.jpeg',
  '/assets/img/news2.jpeg',
  '/assets/img/news2.jpeg',
]

export default function NewsSection() {
  const [current, setCurrent] = useState(0)
  const { data: whatsNewData, isLoading: whatsNewLoading, isError: whatsNewError } = useGetNotificationsByCategoryQuery('whats-new')
  const { data: newsUpdatesData, isLoading: newsUpdatesLoading, isError: newsUpdatesError } = useGetNotificationsByCategoryQuery('news-updates')

  // Format date from API (YYYY-MM-DD to readable format)
  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A'
    const date = new Date(dateStr)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  // Transform API data to match component structure
  const whatsNew = useMemo(() => {
    if (!Array.isArray(whatsNewData?.data)) return []
    
    return whatsNewData.data.map((item, index) => {
      const translations = Array.isArray(item.translations) ? item.translations : []
      const enTranslation = translations.find(t => t?.language_code === 'en' || t?.language_id === 1) || translations[0]
      
      return {
        id: item.id,
        img: item.image_url || fallbackImages[index % fallbackImages.length],
        date: formatDate(item.date),
        isNew: item.is_current === 1 || item.status === 1,
        title: enTranslation?.title || 'Untitled',
        description: enTranslation?.description || '',
        slug: item.slug || '',
      }
    })
  }, [whatsNewData])

  // Transform News & Updates API data
  const newsUpdatesArray = useMemo(() => {
    if (!Array.isArray(newsUpdatesData?.data)) return []
    
    return newsUpdatesData.data.map((item) => {
      const translations = Array.isArray(item.translations) ? item.translations : []
      const enTranslation = translations.find(t => t?.language_code === 'en' || t?.language_id === 1) || translations[0]
      
      return {
        id: item.id,
        date: formatDate(item.date),
        isNew: item.is_current === 1 || item.status === 1,
        title: enTranslation?.title || 'Untitled',
      }
    })
  }, [newsUpdatesData])

  // Auto-slide whats new
  useEffect(() => {
    if (whatsNew.length === 0) return
    const timer = setInterval(() => setCurrent(c => (c + 1) % whatsNew.length), 5000)
    return () => clearInterval(timer)
  }, [whatsNew.length])

  const changeSlide = (dir) => {
    if (whatsNew.length === 0) return
    setCurrent(c => (c + dir + whatsNew.length) % whatsNew.length)
  }

  return (
    <section className="manews section-padding2">
      <img src="/assets/img/close-up.png" className="d-none d-md-block closep wow fadeInUp" alt="" />
      <div className="main-container">
        <div className="content-grid">
          {/* What's New */}
          <div className="section-wrapper wow fadeInLeft">
            <h3 className="section-heading">
              <p>Whats New</p>
              <a href="#">View All <i className="fas fa-arrow-right"></i></a>
            </h3>
            <div className="section-b-slider section-content">
              <button className="slider-btn prev-btn" onClick={() => changeSlide(-1)} disabled={whatsNew.length === 0}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="slider-btn next-btn" onClick={() => changeSlide(1)} disabled={whatsNew.length === 0}>
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="slider-wrapper">
                {whatsNewLoading && <div className="slide active"><p>Loading...</p></div>}
                {whatsNewError && <div className="slide active"><p>Failed to load news</p></div>}
                {!whatsNewLoading && !whatsNewError && whatsNew.length === 0 && <div className="slide active"><p>No news available</p></div>}
                {!whatsNewLoading && !whatsNewError && whatsNew.length > 0 && whatsNew.map((item, i) => (
                  <div key={item.id || i} className={`slide ${i === current ? 'active' : ''}`}>
                    <div className="slide-icon">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="meta-date">
                      {item.date} {item.isNew && <span className="badge-new">New</span>}
                    </div>
                    <h2>{item.title}</h2>
                    <a href="#" className="read-more">Read More ..</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* News & Updates */}
          <div className="section-wrapper wow fadeInRight">
            <h3 className="section-heading">
              <p>News &amp; Updates</p>
              <a href="#">View All <i className="fas fa-arrow-right"></i></a>
            </h3>
            <div className="section-c-container section-content">
              <div className="vertical-scroll-track">
                {newsUpdatesLoading && <div className="news-card"><p>Loading...</p></div>}
                {newsUpdatesError && <div className="news-card"><p>Failed to load updates</p></div>}
                {!newsUpdatesLoading && !newsUpdatesError && newsUpdatesArray.length === 0 && <div className="news-card"><p>No updates available</p></div>}
                {!newsUpdatesLoading && !newsUpdatesError && newsUpdatesArray.length > 0 && [...newsUpdatesArray, ...newsUpdatesArray].map((item, i) => (
                  <div key={`${item.id}-${i}`} className="news-card">
                    <div className="news-icon"><i className="fas fa-bullhorn"></i></div>
                    <div className="news-content">
                      <span className="news-date">
                        {item.date} {item.isNew && <span className="badge-new">New</span>}
                      </span>
                      <div className="news-title mal">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
