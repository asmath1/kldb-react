import { useMemo } from 'react'
import { useGetServicesByCategoryQuery } from '../../redux/services/bannerApi'

const fallbackIcons = [
  '/assets/img/q1.svg',
  '/assets/img/q2.svg',
  '/assets/img/q3.svg',
  '/assets/img/q4.svg',
  '/assets/img/q5.svg',
  '/assets/img/q6.svg',
]

const fallbackServices = [
  // { thumb: '/assets/img/s111.png', icon: '/assets/img/q1.svg', title: 'National project for Bovine Breeding', desc: 'With a view to cover the entire breedable cattle of the state through AI programme, using frozen semen, the Government of India is Sponsoring National Project for Bovine Breeding' },
  // { thumb: '/assets/img/x2.png', icon: '/assets/img/q2.svg', title: 'Goat Breeding center', desc: 'The major proportion of the goat population in Kerala belong to Malabari breed and is well adapted to the agro-climatic conditions of the State. As a part of the diversification programme, the Board, during the year 1990-91, started a pilot project on goats at Kulathupuzha.' },
  // { thumb: '/assets/img/x3.png', icon: '/assets/img/q3.svg', title: 'Fodder development programme', desc: 'The importance of proper feeding in economic dairy farming need not be over - emphasized. The Board had taken up fodder development as one of the most important activities right from the very beginning' },
  // { thumb: '/assets/img/x4.png', icon: '/assets/img/q4.svg', title: 'Frozen Semen Management', desc: 'The State has evolved a three-tier Artificial Insemination (A.I.) management system to provide the inputs for cattle breeding namely Bull Stations , Regional Semen Banks (RSB), Artificial Insemination Centres.' },
  // { thumb: '/assets/img/x5.png', icon: '/assets/img/q5.svg', title: 'SIRE selection programme', desc: 'With the objective of identifying the most suitable bulls as the sires for the next generation, the KLDB ventured into the field progeny-testing programme involving the two basic tasks viz.' },
  // { thumb: '/assets/img/x6.png', icon: '/assets/img/q6.svg', title: 'EMBRYO transfer programme', desc: 'Multiple Ovulation Embryo Transfer (MOET) was introduced for production of superior sires. Under this technology, the genetic quality of the elite cows is utilized for the production of next generation bulls.' },
]

const stripHtml = (value) => value.replace(/<[^>]*>/g, '').trim()

export default function ServicesSection() {
  const { data, isLoading, isError } = useGetServicesByCategoryQuery('services-we-offer')

  const services = useMemo(() => {
    const list = Array.isArray(data?.data?.services) ? data.data.services : []
    const mapped = list
      .filter(item => item?.status === 'active')
      .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
      .map((item, i) => {
        const t = Array.isArray(item?.translations) ? item.translations[0] : null
        const title = t?.title || 'Service'
        const descHtml = t?.description || ''
        return {
          thumb: item?.background_image || fallbackServices[i]?.thumb,
          icon: item?.icon || fallbackIcons[i % fallbackIcons.length],
          title,
          desc: stripHtml(descHtml),
        }
      })
    return mapped.length ? mapped : fallbackServices
  }, [data])

  return (
    <section className="service-section-3 section-padding3 pb-0 px-5 maser">
      <div className="container-fluid">
        <div className="section-title text-center">
          <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Services</span>
          <h2 className="font1 text-anim">Services we offer</h2>
        </div>
        <div className="row">
          {isLoading && (
            <div className="col-12 text-center" style={{ color: '#fff', padding: '20px 0' }}>
              Loading services...
            </div>
          )}
          {isError && (
            <div className="col-12 text-center" style={{ color: '#fff', padding: '20px 0' }}>
              Failed to load services.
            </div>
          )}
          {services.map((s, i) => (
            <div key={i} className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(i + 1) * 0.2}s`}>
              <div className="service-box-items-3">
                <div className="service-thumb">
                  <img src={s.thumb} alt={s.title} />
                </div>
                <div className="service-content">
                  <div className="icon">
                    {s.icon && <img src={s.icon} alt="" />}
                  </div>
                  <h4><a href="#">{s.title}</a></h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
