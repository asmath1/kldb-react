import { Link } from 'react-router-dom'
import { useGetAboutUsQuery } from '../../redux/services/bannerApi'
import { useLang, pickTranslation } from '../../context/LanguageContext'

const BASE = 'https://livestock.cditproject.org'

export default function AboutSection() {
  const { data, isLoading } = useGetAboutUsQuery()
  const { lang } = useLang()

  const article = data?.data
  const t = pickTranslation(article?.translations, lang)

  // Images from API gallery (caption-matched), fallback to local
  const mainImg = article?.gallery?.find(g => g.caption === 'main')?.url
  const subImg  = article?.gallery?.find(g => g.caption === 'sub')?.url
  const mainSrc = mainImg ? `${BASE}${mainImg}` : '/assets/img/abt1.png'
  const subSrc  = subImg  ? `${BASE}${subImg}`  : '/assets/img/abt2.png'

  // Button from API
  const btn = article?.buttons?.[0]

  return (
    <section className="choose-us-section-5 section-padding3 section-bg">
      <div className="top-shape"><img src="/assets/img/top-shape.png" alt="img" /></div>
      <div className="cows"><img src="/assets/img/cows.svg" alt="" /></div>

      <div className="container">
        <div className="choose-us-wrapper-5">
          <div className="row g-4">

            {/* Images */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="choose-image-left-items">
                <img src={mainSrc} alt={t?.title || 'About KLDB'} />
                <div className="sm-thumb">
                  <img src={subSrc} alt={t?.title || 'About KLDB'} />
                </div>
              </div>
            </div>

            {/* Content — 100% from API */}
            <div className="col-lg-6">
              <div className="choose-right-content">
                <div className="section-title mb-0">
                  <span className="wow fadeInUp">
                    <img src="/assets/img/sub-title.svg" alt="img" />
                    {t?.title || ''}
                  </span>
                  {t?.main_title && (
                    <h2 className="font1 text-anim">{t.main_title}</h2>
                  )}
                </div>

                {isLoading ? (
                  <p className="choose-text">Loading...</p>
                ) : t?.body ? (
                  <div
                    className="choose-text wow fadeInUp"
                    data-wow-delay=".2s"
                    dangerouslySetInnerHTML={{ __html: t.body }}
                  />
                ) : null}

                <div className="about-bottom-area wow fadeInUp" data-wow-delay=".9s">
                  {btn ? (
                    btn.type === 'url' ? (
                      <a href={btn.url} className="theme-btn" target="_blank" rel="noopener noreferrer">
                        {btn.text} <i className="far fa-arrow-right"></i>
                      </a>
                    ) : (
                      <Link to={`/${btn.slug || 'about'}`} className="theme-btn">
                        {btn.text} <i className="far fa-arrow-right"></i>
                      </Link>
                    )
                  ) : (
                    <Link to="/about" className="theme-btn">
                      More About Us <i className="far fa-arrow-right"></i>
                    </Link>
                  )}
                  <div className="phone-box-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <p>Phone:</p>
                      <a href="tel:04712440920">0471- 2440920</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bottom-shape"><img src="/assets/img/bottom-shape.png" alt="img" /></div>
    </section>
  )
}
