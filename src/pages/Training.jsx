import Breadcrumb from '../components/common/Breadcrumb'

export default function Training() {
  return (
    <>
      <Breadcrumb
        title="Training"
        crumbs={[{ label: 'Training' }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      {/* Intro */}
                      <p>
                        To offer hands-on training to Veterinarians, Paravets and Farmers on various subjects of semen processing, ET-IVF, AI in cow, goat, dairy farming, and fodder-related subjects, KLDB has 5 training centers located at Mattupatty, Dhoni, Kulathupuzha, Peerumadu and Koothattukulam.
                        Training is provided for both national and international trainees.
                      </p>

                      {/* International Training */}
                      <h2 className="wow fadeInDown">
                        International Training Centre – Mattupatty
                      </h2>

                      <p>
                        KLDB Training Centre Mattuppatty offers various short-term training courses to national and international trainees. Participants from Bhutan, Nepal, Sri Lanka, Tanzania, Indonesia, Afghanistan, etc., have attended courses here.
                      </p>

                      <p>
                        The centre includes Semen Production Station, Bull Mother Farm, Fodder Section, Embryo Transfer Lab and IVF Centre.
                      </p>

                      <img
                        src="/assets/img/kilo.JPG"
                        className="w-100"
                        alt="Training"
                      />

                      {/* Training Programmes */}
                      <h2 className="wow fadeInDown">Training Programmes</h2>

                      <p>
                        Training programmes help share scientific knowledge and field experience among technicians and professionals.
                      </p>

                      <h4 className="subHead2">Courses</h4>

                      <p>
                        Short-term courses (2–8 weeks) are offered for field professionals. Includes theory, practicals, seminars and field visits.
                      </p>

                      {/* Facilities */}
                      <h2 className="wow fadeInDown">Facilities</h2>

                      <p>
                        Boarding, lodging, classrooms, libraries, labs, and practical halls are available for trainees.
                      </p>

                      <p>
                        Specialized labs exist for Frozen Semen Technology, Embryo Transfer, and Fodder Production training.
                      </p>

                      {/* Additional Facilities */}
                      <h4 className="subHead2">
                        Additional Facilities for Training
                      </h4>

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>Farm facilities at Kulathupuzha</li>
                        <li>Field progeny testing scheme</li>
                        <li>Frozen semen distribution system</li>
                        <li>Fodder promotion activities</li>
                        <li>Fodder seed production programme</li>
                        <li>Seed testing and quality control</li>
                        <li>Central seed store</li>
                        <li>Data processing station</li>
                        <li>Goat breeding centre</li>
                        <li>Pig breeding centre</li>
                        <li>Quality control unit</li>
                        <li>Centre for Applied Livestock Genomics</li>
                      </ul>

                      {/* Download Cards */}
                      <div className="downld">
                        <div className="row g-4">

                          {/* Card 1 */}
                          <div className="col-md-4">
                            <div className="card-alt">
                              <img src="/assets/img/calendar.png" alt="Calendar" />
                              <div className="card-title">Course Calendar 2025-26</div>
                              <div className="card-sub">Schedule</div>
                              <p className="card-desc">
                                Dates and schedules for training courses.
                              </p>
                              <a href="#" className="card-btn">Download PDF</a>
                            </div>
                          </div>

                          {/* Card 2 */}
                          <div className="col-md-4">
                            <div className="card-alt">
                              <img src="/assets/img/forms.png" alt="Form" />
                              <div className="card-title">Application Form 2025-26</div>
                              <div className="card-sub">Form</div>
                              <p className="card-desc">
                                Download application form for courses.
                              </p>
                              <a href="#" className="card-btn">Download Form</a>
                            </div>
                          </div>

                          {/* Card 3 */}
                          <div className="col-md-4">
                            <div className="card-alt">
                              <img src="/assets/img/brochure.png" alt="Brochure" />
                              <div className="card-title">Training Brochure 2025-26</div>
                              <div className="card-sub">Brochure</div>
                              <p className="card-desc">
                                Course details, fees, eligibility and contacts.
                              </p>
                              <a href="#" className="card-btn">View Brochure</a>
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
        </div>
      </section>
    </>
  )
}


// import Breadcrumb from '../components/common/Breadcrumb'

// const programs = [
//   { title: 'AI Technician Training', duration: '3 Months', venue: 'Dhoni, Palakkad', seats: 20 },
//   { title: 'Fodder Cultivation Training', duration: '1 Week', venue: 'Various Centers', seats: 30 },
//   { title: 'Embryo Transfer Technology', duration: '2 Weeks', venue: 'Mattupetty', seats: 15 },
//   { title: 'Molecular Biology Techniques', duration: '1 Week', venue: 'KLDB HQ', seats: 20 },
// ]

// export default function Training() {
//   return (
//     <>
//       <Breadcrumb title="Training Programme" crumbs={[{ label: 'Training' }]} />
//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">
//                       <h2 className="wow fadeInDown">Training Programmes</h2>
//                       <p className="wow fadeInUp">KLDB conducts various training programmes for farmers, veterinarians, and technicians to enhance their skills in livestock management and breeding.</p>
//                       <div className="row mt-4">
//                         {programs.map((p, i) => (
//                           <div key={i} className="col-md-6 mb-4">
//                             <div className="card h-100 wow fadeInUp" style={{ border: '1px solid #e9e9e9' }}>
//                               <div className="card-body">
//                                 <h5 className="card-title">{p.title}</h5>
//                                 <p className="mb-1"><strong>Duration:</strong> {p.duration}</p>
//                                 <p className="mb-1"><strong>Venue:</strong> {p.venue}</p>
//                                 <p className="mb-0"><strong>Seats:</strong> {p.seats}</p>
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
