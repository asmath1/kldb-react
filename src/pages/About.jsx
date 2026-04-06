import Breadcrumb from '../components/common/Breadcrumb'

export default function About() {
  return (
    <>
      <Breadcrumb title="About Us" crumbs={[{ label: 'About Us' }]} />
      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="wow fadeInDown">The transformation from Indo Swiss Project, Kerala (ISPK), 1963 to Kerala Livestock Development Board Ltd</h2>
                      <h4 className="subHead1"><i>The transformation from Indo Swiss Project, Kerala (ISPK), 1963 to Kerala Livestock Development Board Ltd</i></h4>
                      <br />
                      <img src="/assets/img/abtout1.JPG" className="w-md-50 single-post-image wow fadeInUp" alt="" />
                      <p className="wow fadeInUp">
                        The Kerala Livestock development board is the successor of the erstwhile Indo-Swiss Project, which started off as a bilateral technology collaboration of the Indian and Swiss Governments in 1963. In the fifties, large-scale migration of farmers to the high ranges took place in Kerala, in certain cases with Government encouragement as it occurred in the regions of Idukki district. During the Sixties, Father Francis, a Belgian monk settled in Vagamon had experimented with dairy production in the high ranges of the Peermade taluk and was keen on promoting a dairy based mixed farming system in the high ranges. He visualized the vast area of empty grassland in the Peermade area as a future milk shed and shared this vision with his friend Mr. Jacques A. Cutat, the then Ambassador of Switzerland in India. Based on his initiative, teams from Switzerland visited the high ranges and recommended a pilot project in about 500 acres of Government land lying vacant at Mattupatti, as the first step for a future dairy colonization programme in the Peermade region. The two Governments (Government of India and Swiss Confederation) studied the proposal and decided to set up a bilateral project ISPK under an international agreement, to implement the programme.
                      </p>

                      <h2 className="wow fadeInDown">Two major components of ISPK</h2>

                      <div className="row ispk-components mt-3">
                        <div className="col-md-6 mb-3 p-0">
                          <div className="card h-100 wow fadeInUp" data-wow-delay=".2s" style={{ border: '1px solid #e9e9e9' }}>
                            <div className="card-body">
                              <h5 className="card-title">Breeding Centre</h5>
                              <p className="card-text">In an area of 500 acres of Government land at Mattupetti near Munnar.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="card h-100 wow fadeInUp" data-wow-delay=".4s" style={{ border: '1px solid #e9e9e9' }}>
                            <div className="card-body">
                              <h5 className="card-title">Dairy Colonization Programme</h5>
                              <p className="card-text">In an extension area of about 11,000 acres of grasslands in Peermade taluk.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p>
                        In the first phase of the project, an experimental station was set up at Mattupetti to take up crossbreeding experiments and pasture improvement/utilization trials. The crossbreeding experiments were aimed at the creation of a new breed using the local nondescript cattle and the exotic Brown Swiss breed. Artificial Insemination using frozen semen was chosen as the tool for wider application of the crossbreeding programme. For the first time in India, facilities were developed at Mattupetti to deep freeze bull semen.
                      </p>
                      <p>
                        Satisfied with the performance of the first generation crossbreds in the high ranges, the project extended to Mavelikkara region functioning under the Department of Animal Husbandry. The crossbreeding experiments as well as the partnership with the Department of Animal Husbandry in the ICDP Mavelikara proved to be a great success. Encouraged by the results obtained at Mavelikara, the Government decided to expand the AI programme using frozen semen all over the state in a phased manner.
                      </p>
                      <p>
                        In order to accomplish its objectives, the Board expanded its activities through establishment of two additional Bull Mother Herds and Bull stations, Regional Semen Banks (RSB), Liquid Nitrogen (LN) plants, Fodder Farms and Training Centre (TC) etc. ISPK was the first to introduce Frozen Semen Technology (FST) in India (1965) for the Artificial Insemination (AI) of cattle.
                      </p>
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
