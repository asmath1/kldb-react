import Breadcrumb from '../components/common/Breadcrumb'

export default function Programmes() {
  return (
    <>
      <Breadcrumb title="Programmes" crumbs={[{ label: 'Activities' }, { label: 'Programmes' }]} />
      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="wow fadeInDown">Programmes &amp; Activities</h2>

                      <h4 className="subHead1">Fodder Development Programme</h4>
                      <p className="wow fadeInUp">The Board has taken up fodder development as one of the most important activities. Quality fodder seeds and planting materials are supplied to farmers at subsidized rates.</p>

                      <h4 className="subHead1">Embryo Transfer Programme</h4>
                      <p className="wow fadeInUp">Multiple Ovulation Embryo Transfer (MOET) was introduced for production of superior sires. Under this technology, the genetic quality of the elite cows is utilized for the production of next generation bulls.</p>

                      <h4 className="subHead1">SIRE Selection Programme</h4>
                      <p className="wow fadeInUp">With the objective of identifying the most suitable bulls as the sires for the next generation, the KLDB ventured into the field progeny-testing programme.</p>

                      <h4 className="subHead1">Frozen Semen Management</h4>
                      <p className="wow fadeInUp">The State has evolved a three-tier AI management system to provide the inputs for cattle breeding namely Bull Stations, Regional Semen Banks (RSB), and AI Centres.</p>

                      <h4 className="subHead1">RLFMCs</h4>
                      <p className="wow fadeInUp">Regional Livestock Fertility Management Centres provide comprehensive reproductive health services to livestock farmers across Kerala.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
