import Breadcrumb from "../components/common/Breadcrumb";

export default function Moet() {
  return (
    <>
      <Breadcrumb title="Embryo Transfer Programmes" crumbs={[{ label: "Embryo Transfer Programmes" }]} />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      {/* MOET */}
                      <h2 className="wow fadeInDown">
                        Multiple Ovulation Embryo Transfer
                      </h2>
                      <h6 className="second_subhead">(MOET)</h6>

                      <p className="wow fadeInUp">
                        Multiple Ovulation Embryo Transfer (MOET) was introduced for
                        production of superior sires by utilizing elite cows.
                      </p>

                      <p>
                        KLDB established Embryo Transfer Technology in 1990 at Mattupatty.
                        The centre has produced high-quality embryos with international
                        standards of success rate.
                      </p>

                      <h4 className="subHead1">
                        <i>Major Objectives</i>
                      </h4>

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>Produce embryos of high genetic cows</li>
                        <li>Use imported purebred semen for superior bulls</li>
                        <li>Tailor-made MOET programmes for states</li>
                        <li>Produce F1 bulls using Zebu breeds</li>
                        <li>Standardize embryo evaluation methods</li>
                        <li>Training for veterinarians</li>
                        <li>Research in IVF, embryo bisection, karyotyping</li>
                        <li>Assist gene preservation programmes</li>
                      </ul>

                      {/* IVF Centre */}
                      <h2 className="wow fadeInDown">
                        Embryo Transfer - IVF Centre
                      </h2>

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>Specialised lab for ET & IVF</li>
                        <li>OPU & IVF under farm and field conditions</li>
                        <li>Rapid multiplication of elite genetics</li>
                        <li>Affordable embryo transfer at ₹6000 per embryo</li>
                      </ul>

                      <h6 className="second_subhead">
                        Facility strengthened under Rashtriya Gokul Mission (2018)
                      </h6>

                      <h6 className="second_subhead">
                        Recognized as National Training Centre for OPU & IVF
                      </h6>

                      <img
                        src="/assets/img/embriyo_img.png"
                        className="img-fluid"
                        alt=""
                      />

                      {/* Abhimanyu */}
                      <h2 className="wow fadeInDown">
                        “Abhimanyu” - First Vechur calf via IVF
                      </h2>

                      <div className="row">
                        <div className="col-md-6">
                          <img src="/assets/img/em_img1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6">
                          <img src="/assets/img/em_img2.png" className="img-fluid" alt="" />
                        </div>
                      </div>

                      {/* ART Lab */}
                      <h2 className="wow fadeInDown">
                        Fully Equipped ART Laboratory
                      </h2>

                      <div className="row">
                        {["E1.jpg", "E2.jpg", "E3.jpg", "E4.jpg"].map((img, i) => (
                          <div key={i} className="col-md-3 art_box">
                            <img src={`/assets/img/${img}`} className="img-fluid" alt="" />
                          </div>
                        ))}
                      </div>

                      {/* News */}
                      <h2 className="wow fadeInDown">
                        ET-IVF Activity - In News
                      </h2>

                      <div className="row">
                        {["b1.jpg", "b2.jpg", "b3.jpg"].map((img, i) => (
                          <div key={i} className="col-md-4 art_box">
                            <img src={`/assets/img/${img}`} className="img-fluid" alt="" />
                          </div>
                        ))}
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6 art_box">
                          <img src="/assets/img/ET_1.jpg" className="img-fluid" alt="" />
                          <h2 className="wow fadeInDown">
                            Sahiwal calf born of ET
                          </h2>
                        </div>

                        <div className="col-md-6 art_box">
                          <img src="/assets/img/ET_2.jpg" className="img-fluid" alt="" />
                          <h2 className="wow fadeInDown">
                            Vechur calves born of ET
                          </h2>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}