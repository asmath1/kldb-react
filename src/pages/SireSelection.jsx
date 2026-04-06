import Breadcrumb from "../components/common/Breadcrumb";

export default function SireSelection() {
  return (
    <>
      <Breadcrumb title="Sire Selection Programme" crumbs={[{ label: "Sire Selection" }]} />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      {/* Top Image */}
                      <img src="/assets/img/ssp_img_1.jpg" className="img-fluid" alt="" />

                      <h2 className="wow fadeInDown">Sire Selection Programme</h2>

                      <p className="wow fadeInUp">
                        KLDB initiated the progeny-testing programme to identify superior bulls
                        for the next generation through systematic evaluation of their daughters'
                        performance.
                      </p>

                      <p>
                        The programme started in 1977 across selected regions like Mavelikara,
                        Kanjirappally, Vaikom, and Kattappana. Each bull undergoes around 1500
                        test inseminations aiming to obtain at least 50 complete lactation records.
                      </p>

                      {/* Test Insemination */}
                      <h4 className="subHead1"><i>Test Inseminations</i></h4>

                      <p>
                        Started in 1977 with 10 bulls, the programme has completed over 25 lakh
                        test inseminations till March 2023.
                      </p>

                      <img src="/assets/img/ssp_img_2.jpg" className="img-fluid" alt="" />

                      {/* Field Performance */}
                      <h2 className="wow fadeInDown">Field Performance Recording</h2>

                      <img src="/assets/img/ssp_img_3.jpg" className="img-fluid" alt="" />

                      <p>
                        Field Performance Recording (FPR) evaluates livestock productivity under
                        real farm conditions, helping rank animals for breeding.
                      </p>

                      <p>
                        Continuous improvements in milk production show the success of systematic
                        selection and better management practices.
                      </p>

                      <img src="/assets/img/ssp_img_4.jpg" className="img-fluid" alt="" />

                      {/* Sire Evaluation */}
                      <h2 className="wow fadeInDown">Sire Evaluation</h2>

                      <p>
                        Each year, one batch of bulls is tested. Their daughters are monitored
                        until first lactation, and breeding values are calculated to rank bulls.
                      </p>

                      <p>
                        Top 10% of bulls are selected for future breeding. Results take longer due
                        to field conditions and lifecycle factors.
                      </p>

                      <p>
                        KLDB has been publishing sire directories since 1984 listing proven bulls.
                      </p>

                      <img src="/assets/img/ssp_img_5.jpg" className="img-fluid" alt="" />

                      {/* Herd Book */}
                      <h2 className="wow fadeInDown">Herd Book Scheme</h2>

                      <img src="/assets/img/ssp_img_6.jpg" className="img-fluid" alt="" />

                      <p>
                        The Herd Book Scheme complements progeny testing by recording and tracking
                        female calves for growth and productivity analysis.
                      </p>

                      <h4 className="subHead1">
                        <i>Objectives of the Herd Book Scheme</i>
                      </h4>

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>
                          Register crossbred female calves for studying performance
                        </li>
                        <li>
                          Record girth measurements every 6 months
                        </li>
                        <li>
                          Study age at calving and milk yield to set breeding standards
                        </li>
                      </ul>

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