import { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Contact() {
  const [open, setOpen] = useState("one");

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <>
      <Breadcrumb title="Board of Directors" crumbs={[{ label: "Board of Directors" }]} />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="text-center post-content pt-0">

                      <h2 className="wow fadeInDown">Board of Directors</h2>
                      <br />

                      <div className="contactT">

                        {/* TOP PROFILES */}
                        <div className="top-profiles mt-0">
                          <div className="profile">
                            <img src="/assets/img/cd3.jpg" alt="Chairman" />
                            <div className="name">Shri. Minhaj Alam IAS</div>
                            <div className="role">
                              <h6>Chairman, KLDB Board</h6>
                              <small>(Additional Chief Secretary AH & DD)</small>
                            </div>
                          </div>

                          <div className="profile">
                            <img src="/assets/img/cd4.png" alt="Managing Director" />
                            <div className="name">Dr. R Rajeev</div>
                            <div className="role">
                              <h6>Managing Director, KLDB Board</h6>
                            </div>
                          </div>
                        </div>

                        {/* TEAM GRID */}
                        <div className="team-panel">
                          <div className="team-grid">

                            {[
                              {
                                name: "Dr. R Rajeev",
                                title: "Managing Director",
                                img: "/assets/img/cd4.png",
                                phone: "0471-2440920 / 09446004275",
                                mail: "mdkldboard@gmail.com",
                              },
                              {
                                name: "Dr. T Sajeev Kumar",
                                title: "General Manager",
                                img: "/assets/img/sajeevkumar.jpg",
                                phone: "0471 2440920/09446004276",
                                mail: "gmkldboard@gmail.com",
                              },
                              {
                                name: "Sri. Karthikeyan J",
                                title: "Dy. General Manager (FD)",
                                img: "/assets/img/karthikeyan.jpeg",
                                phone: "0471-2440920 / 09446004277",
                                mail: "dgmkldfd@gmail.com",
                              },
                              {
                                name: "Dr. Balu Bhaskar",
                                title: "Dy.General Manager (AH)",
                                img: "/assets/img/balu.jpg",
                                phone: "0471-2440920 / 09446226600",
                                mail: "balubhaskar321@gmail.com",
                              },
                              {
                                name: "Dr. D Jayakumar",
                                title: "Manager Personnel",
                                img: "/assets/img/jayakumar.jpg",
                                phone: "0471-2440920 / 09446004296",
                                mail: "jk.damodhar@gmail.com",
                              },
                            ].map((item, i) => (
                              <div key={i} className="card">
                                <img src={item.img} alt={item.name} />
                                <div className="name">{item.name}</div>
                                <div className="title">{item.title}</div>
                                <div className="infox">
                                  <div className="phm">{item.phone}</div>
                                  <div className="mail">{item.mail}</div>
                                </div>
                              </div>
                            ))}

                          </div>
                        </div>

                        {/* ACCORDION */}
                        <div className="accord">
                          <div className="accordion">

                            {/* ITEM 1 */}
                            <div className="accordion-item">
                              <button
                                className={`accordion-button ${open === "one" ? "" : "collapsed"}`}
                                onClick={() => toggle("one")}
                              >
                                <div>
                                  <div className="iconc">📍 Mattupatti</div>
                                  <p className="m-0 ads">MATTUPATTI P.O , MUNNAR, IDUKKI, PIN: 685616</p>
                                </div>
                              </button>

                              <div className={`accordion-collapse ${open === "one" ? "show" : "collapse"}`}>
                                <div className="accordion-body">

                                  <div className="team-grid2">
                                    <div className="card">
                                      <img src="/assets/img/Manager-mtpty-232x300.jpg" alt="" />
                                      <div className="name">Dr. Keshavadas V P</div>
                                      <div className="title">Manager (AH)</div>
                                      <div className="infox">
                                        <div className="phm">04865-242202 / 09446004281</div>
                                        <div className="mail">indoswisskldb@gmail.com</div>
                                      </div>
                                    </div>

                                    <div className="card">
                                      <img src="/assets/img/PRAVEEN.K.K-214x300.jpg" alt="" />
                                      <div className="name">Dr. Praveen Kumar</div>
                                      <div className="title">Manager (Training) ic</div>
                                      <div className="infox">
                                        <div className="phm">04865 242202 / 9446004283</div>
                                        <div className="mail">kldbtcmtpty@gmail.com</div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>

                            {/* ITEM 2 */}
                            <div className="accordion-item">
                              <button
                                className={`accordion-button ${open === "two" ? "" : "collapsed"}`}
                                onClick={() => toggle("two")}
                              >
                                <div>
                                  <div className="iconc">📍 Kulathupuzha</div>
                                  <p className="m-0 ads">KULATHUPUZHA, KOLLAM, PIN: 691310</p>
                                </div>
                              </button>

                              <div className={`accordion-collapse ${open === "two" ? "show" : "collapse"}`}>
                                <div className="accordion-body">Same content as above (you can customize)</div>
                              </div>
                            </div>

                            {/* ITEM 3 */}
                            <div className="accordion-item">
                              <button
                                className={`accordion-button ${open === "three" ? "" : "collapsed"}`}
                                onClick={() => toggle("three")}
                              >
                                <div>
                                  <div className="iconc">📍 Dhoni</div>
                                  <p className="m-0 ads">PALAKKAD, PIN: 678009</p>
                                </div>
                              </button>

                              <div className={`accordion-collapse ${open === "three" ? "show" : "collapse"}`}>
                                <div className="accordion-body">Demo</div>
                              </div>
                            </div>

                            {/* ITEM 4 */}
                            <div className="accordion-item">
                              <button
                                className={`accordion-button ${open === "four" ? "" : "collapsed"}`}
                                onClick={() => toggle("four")}
                              >
                                <div>
                                  <div className="iconc">📍 Thrissur</div>
                                  <p className="m-0 ads">KAINOOR P O, PIN: 680014</p>
                                </div>
                              </button>

                              <div className={`accordion-collapse ${open === "four" ? "show" : "collapse"}`}>
                                <div className="accordion-body">Demo</div>
                              </div>
                            </div>

                            {/* ITEM 5 */}
                            <div className="accordion-item">
                              <button
                                className={`accordion-button ${open === "five" ? "" : "collapsed"}`}
                                onClick={() => toggle("five")}
                              >
                                <div>
                                  <div className="iconc">📍 Muvattupuzha</div>
                                  <p className="m-0 ads">MUDAVOOR P O, PIN: 686669</p>
                                </div>
                              </button>

                              <div className={`accordion-collapse ${open === "five" ? "show" : "collapse"}`}>
                                <div className="accordion-body">Demo</div>
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
        </div>
      </section>
    </>
  );
}


// import { useState } from 'react'
// import Breadcrumb from '../components/common/Breadcrumb'

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     alert('Thank you! Your message has been sent.')
//     setForm({ name: '', email: '', phone: '', subject: '', message: '' })
//   }

//   return (
//     <>
//       <Breadcrumb title="Contact Us" crumbs={[{ label: 'Contact' }]} />
//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">
//                       <h2 className="wow fadeInDown">Contact Us</h2>
//                       <div className="row g-4 mt-2">
//                         <div className="col-lg-5">
//                           <div className="contact-section">
//                             <div className="contact-form-box">
//                               <h3>Contact Information</h3>
//                               <ul className="contact-list">
//                                 <li>
//                                   <div className="icon"><i className="fal fa-map-marker-alt"></i></div>
//                                   <div className="content">
//                                     <p>Address</p>
//                                     <h4>"Gokulam", Pattom, Thiruvananthapuram – 695004</h4>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <div className="icon"><i className="far fa-phone-alt"></i></div>
//                                   <div className="content">
//                                     <p>Phone</p>
//                                     <h4><a href="tel:04712440920">0471-2440920</a> | <a href="tel:04712449138">2449138</a></h4>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <div className="icon"><i className="fal fa-envelope"></i></div>
//                                   <div className="content">
//                                     <p>Email</p>
//                                     <h4><a href="mailto:kldboard8@gmail.com">kldboard8@gmail.com</a></h4>
//                                   </div>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-7">
//                           <div className="contact-section">
//                             <div className="contact-form-box">
//                               <h3>Send Message</h3>
//                               <form onSubmit={handleSubmit} className="form-clt">
//                                 <div className="row g-3">
//                                   <div className="col-md-6">
//                                     <div className="form-clt">
//                                       <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
//                                     </div>
//                                   </div>
//                                   <div className="col-md-6">
//                                     <div className="form-clt">
//                                       <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
//                                     </div>
//                                   </div>
//                                   <div className="col-md-6">
//                                     <div className="form-clt">
//                                       <input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
//                                     </div>
//                                   </div>
//                                   <div className="col-md-6">
//                                     <div className="form-clt">
//                                       <input type="text" placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
//                                     </div>
//                                   </div>
//                                   <div className="col-12">
//                                     <div className="form-clt">
//                                       <textarea placeholder="Your Message" rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />
//                                     </div>
//                                   </div>
//                                   <div className="col-12">
//                                     <button type="submit" className="theme-btn">Send Message <i className="far fa-arrow-right"></i></button>
//                                   </div>
//                                 </div>
//                               </form>
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
