import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";

export default function RLFMC() {
  return (
    <>
      <Breadcrumb
        title="The Centre for Applied Livestock Genomic Laboratory (CALG)RLFMCs"
        crumbs={[
          {
            label: "RLFMCs",
          },
        ]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="wow fadeInDown">
                        Regional Livestock Fertility Management Centres (RLFMCs)
                        at Chithara (Kollam), Thalayolaparambu (Kottayam)
                      </h2>

                      <br />

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>
                          Established to provide doorstep fertility management
                          services to dairy farmers.
                        </li>
                        <li>
                          Offer diagnostic, therapeutic, and reproductive
                          management support
                        </li>
                        <li>Support with embryo transfer programme</li>
                      </ul>

                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="/assets/img/calg1.png"
                            className="w-100 m-0 wow fadeInUp"
                            alt="RLFMC"
                          />
                        </div>

                        <div className="col-md-6">
                          <img
                            src="/assets/img/calg2.JPG"
                            className="w-100 m-0 wow fadeInUp"
                            alt="RLFMC Vehicle"
                          />
                          <small>Mobile ET-IVF vehicles of RLFMC</small>
                        </div>

                        <div className="col-md-6 mt-3">
                          <img
                            src="/assets/img/cvf4.JPG"
                            className="w-100 m-0 wow fadeInUp"
                            alt="RLFMC Vehicle"
                          />
                          <small>Mobile ET-IVF vehicles of RLFMC</small>
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
