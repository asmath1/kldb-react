const ministers = [
  { img: '/assets/img/cm.jpg', name: 'Shri. Pinarayi Vijayan', role: 'Chief Minster of Kerala' },
  { img: '/assets/img/chinju.jpg', name: 'Smt. J. Chinchu Rani', role: "Hon'ble Minister for Animal Husbandry, Dairy Development, Dairy Cooperatives, Zoos & KVASU" },
  { img: '/assets/img/cd3.jpg', name: 'Shri. Minhaj Alam IAS', role: 'Chairman, KLD Board\n(Additional Chief Secretary AH & DD)' },
  { img: '/assets/img/cd4.png', name: 'Dr. R Rajeev', role: 'Managing Director, KLD Board' },
]

export default function MinistersPanel() {
  return (
    <section className="feature-section-5 section-padding2 fix">
      <div className="shape-1 d-none d-xxl-block float-bob-y">
        <img src="/assets/img/home-5/feature/shape-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="row g-4">
          {ministers.map((m, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay={`${(i + 1) * 0.2}s`}>
              <div className="products-feature-icon-box-5">
                <div className="icon">
                  <img src={m.img} alt={m.name} />
                </div>
                <div className="content">
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
