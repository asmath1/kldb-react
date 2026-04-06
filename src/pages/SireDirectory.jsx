import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";

const sireData = [
  {
    title: "MATTUPATTY",
    headClass: "head-blue",
    items: [
      { name: "Sire directory 2023-24", new: true },
      { name: "Sire directory 2022-23" },
      { name: "Sire directory 2019-Part I" },
      { name: "Sire directory 2019-Part II" },
      { name: "Sire directory 2019-Part III" },
    ],
  },
  {
    title: "DHONI",
    headClass: "head-green",
    items: [
      { name: "Sire directory 2019-Part I" },
      { name: "Sire directory 2019-Part II" },
      { name: "Sire directory 2019-Part III" },
    ],
  },
  {
    title: "KULATHUPUZHA",
    headClass: "head-orange",
    items: [
      { name: "Sire directory 2024-25", new: true },
      { name: "Sire directory 2023-24", new: true },
      { name: "Sire directory 2019-Part I" },
      { name: "Sire directory 2019-Part II" },
      { name: "Sire directory 2019-Part III" },
    ],
  },
  {
    title: "INDIGENOUS BREEDS",
    headClass: "head-gray",
    items: [
      { name: "Sire directory 2019-Part II" },
      { name: "Sire directory 2019-Part III" },
    ],
  },
];

const financialData = [
  {
    title: "MATTUPATTY",
    headClass: "head-blue",
    items: [{ name: "Sire directory 2023-24", new: true }],
  },
  {
    title: "DHONI",
    headClass: "head-green",
    items: [{ name: "Sire directory 2019-Part I" }],
  },
  {
    title: "KULATHUPUZHA",
    headClass: "head-orange",
    items: [{ name: "Sire directory 2024-25", new: true }],
  },
];

export default function SireDirectory() {
  return (
    <>
      <Breadcrumb title="Sire Directory" crumbs={[{ label: "Sire Directory" }]} />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details py-3 mt-0">
                    <div className="post-content pb-2">

                      <div className="sireD">
                        {/* SIRE DIRECTORY */}
                        <h2 className="text-center wow fadeInDown">
                          SIRE Directory
                        </h2>
                        <hr />

                        <div className="sire-wrap mb-4">
                          <div className="row">
                            {sireData.map((col, i) => (
                              <div className="col-md-3" key={i}>
                                <div className="sire-column">
                                  <div className="sire-card">

                                    <div className={`sire-head ${col.headClass}`}>
                                      <img
                                        src="/assets/img/placeholder.png"
                                        className="loca m-0"
                                        alt=""
                                      />
                                      <h5>{col.title}</h5>
                                    </div>

                                    <div className="sire-list">
                                      <ol className="p-0">
                                        {col.items.map((item, idx) => (
                                          <li key={idx}>
                                            <a
                                              href="/assets/img/sdmty23-24.pdf"
                                              target="_blank"
                                              rel="noreferrer"
                                              className="pdff"
                                            >
                                              <p>
                                                {item.name}
                                                {item.new && (
                                                  <span className="badge-new">
                                                    New!
                                                  </span>
                                                )}
                                              </p>
                                              <img
                                                src="/assets/img/file-download1.svg"
                                                className="m-0 pdf-icon"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        ))}
                                      </ol>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* FINANCIAL INFORMATION */}
                        <h2 className="text-center wow fadeInDown">
                          Financial Information
                        </h2>
                        <hr />

                        <div className="sire-wrap">
                          <div className="row">
                            {financialData.map((col, i) => (
                              <div className="col-md-4" key={i}>
                                <div className="sire-column">
                                  <div className="sire-card">

                                    <div className={`sire-head ${col.headClass}`}>
                                      <img
                                        src="/assets/img/placeholder.png"
                                        className="loca m-0"
                                        alt=""
                                      />
                                      <h5>{col.title}</h5>
                                    </div>

                                    <div className="sire-list">
                                      <ol className="p-0">
                                        {col.items.map((item, idx) => (
                                          <li key={idx}>
                                            <a
                                              href="/assets/img/sdmty23-24.pdf"
                                              target="_blank"
                                              rel="noreferrer"
                                              className="pdff"
                                            >
                                              <p>
                                                {item.name}
                                                {item.new && (
                                                  <span className="badge-new">
                                                    New!
                                                  </span>
                                                )}
                                              </p>
                                              <img
                                                src="/assets/img/file-download1.svg"
                                                className="m-0 pdf-icon"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        ))}
                                      </ol>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
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


// import Breadcrumb from '../components/common/Breadcrumb'

// export default function SireDirectory() {
//   return (
//     <>
//       <Breadcrumb title="SIRE Directory" crumbs={[{ label: 'Downloads' }, { label: 'SIRE Directory' }]} />
//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">
//                       <h2 className="wow fadeInDown">SIRE Directory</h2>
//                       <p className="wow fadeInUp">
//                         The SIRE Directory contains details of all bulls maintained at KLDB bull stations. The directory includes information on breed, pedigree, production records, and semen availability.
//                       </p>
//                       <div className="row mt-4">
//                         <div className="col-md-4 mb-3">
//                           <div className="card h-100 wow fadeInUp" style={{ border: '1px solid #e9e9e9' }}>
//                             <div className="card-body text-center">
//                               <i className="fas fa-file-pdf" style={{ fontSize: 48, color: '#e74c3c', marginBottom: 12, display: 'block' }}></i>
//                               <h5 className="card-title">SIRE Directory 2024</h5>
//                               <a href="#" className="theme-btn mt-3" style={{ fontSize: 14 }}>Download <i className="fas fa-download"></i></a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
