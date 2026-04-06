import Breadcrumb from '../components/common/Breadcrumb'

export default function FinancialInfo() {
  return (
    <>
      <Breadcrumb 
        title="Financial Information" 
        crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Financial Info' }]} 
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      <h2 className="wow fadeInDown">Financial Information</h2>

                      <div className="row checked-list mb-4 wow fadeInUp mt-0 financial_icon">

                        {/* 2023-24 */}
                        <div className="col-md-3">
                          <a href="/assets/img/23-24.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="Financial_box">
                              <i className="fas fa-file-pdf"></i> Financial Statement 2023-24
                            </div>
                          </a>
                        </div>

                        {/* 2022-23 */}
                        <div className="col-md-3">
                          <a href="/assets/img/22-23.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="Financial_box">
                              <i className="fas fa-file-pdf"></i> Financial Statement 2022-23
                            </div>
                          </a>
                        </div>

                        {/* 2021-22 */}
                        <div className="col-md-3">
                          <a href="/assets/img/21-22.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="Financial_box">
                              <i className="fas fa-file-pdf"></i> Financial Statement 2021-22
                            </div>
                          </a>
                        </div>

                        {/* Static Items (no links) */}
                        <div className="col-md-3">
                          <div className="Financial_box">
                            <i className="fas fa-file-pdf"></i> Financial Statement 2020-21
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="Financial_box">
                            <i className="fas fa-file-pdf"></i> Financial Statement 2019-20
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="Financial_box">
                            <i className="fas fa-file-pdf"></i> Financial Statement 2018-19
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="Financial_box">
                            <i className="fas fa-file-pdf"></i> Financial Statement 2017-18
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="Financial_box">
                            <i className="fas fa-file-pdf"></i> Financial Statement 2016-17
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
  )
}


// import Breadcrumb from '../components/common/Breadcrumb'

// const reports = [
//   { year: '2023-24', file: '/assets/img/23-24.pdf' },
//   { year: '2022-23', file: '/assets/img/22-23.pdf' },
// ]

// export default function FinancialInfo() {
//   return (
//     <>
//       <Breadcrumb title="Financial Information" crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Financial Information' }]} />
//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">
//                       <h2 className="wow fadeInDown">Financial Information</h2>
//                       <p className="wow fadeInUp">Annual reports and financial statements of Kerala Livestock Development Board are available for download below.</p>
//                       <div className="row mt-4">
//                         {reports.map((r, i) => (
//                           <div key={i} className="col-md-4 mb-3">
//                             <div className="card h-100 wow fadeInUp" style={{ border: '1px solid #e9e9e9' }}>
//                               <div className="card-body text-center">
//                                 <i className="fas fa-file-pdf" style={{ fontSize: 48, color: '#e74c3c', marginBottom: 12, display: 'block' }}></i>
//                                 <h5 className="card-title">Annual Report {r.year}</h5>
//                                 <a href={r.file} target="_blank" rel="noreferrer" className="theme-btn mt-3" style={{ fontSize: 14 }}>
//                                   Download <i className="fas fa-download"></i>
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
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
