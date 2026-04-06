// import { useState } from "react";
// import Breadcrumb from "../components/common/Breadcrumb";

// export default function Administration() {
//   const [open, setOpen] = useState("one");

//   const toggle = (id) => {
//     setOpen(open === id ? null : id);
//   };

//   return (
//     <>
//       <Breadcrumb title="Board of Directors" crumbs={[{ label: "Board of Directors" }]} />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="text-center post-content pt-0">

//                       <h2 className="wow fadeInDown">Board of Directors</h2>
//                       <br />

//                       <div className="contactT">

//                         {/* TOP PROFILES */}
//                         <div className="top-profiles mt-0">
//                           <div className="profile">
//                             <img src="/assets/img/cd3.jpg" alt="Chairman" />
//                             <div className="name">Shri. Minhaj Alam IAS</div>
//                             <div className="role">
//                               <h6>Chairman, KLDB Board</h6>
//                               <small>(Additional Chief Secretary AH & DD)</small>
//                             </div>
//                           </div>

//                           <div className="profile">
//                             <img src="/assets/img/cd4.png" alt="Managing Director" />
//                             <div className="name">Dr. R Rajeev</div>
//                             <div className="role">
//                               <h6>Managing Director, KLDB Board</h6>
//                             </div>
//                           </div>
//                         </div>

//                         {/* TEAM GRID */}
//                         <div className="team-panel">
//                           <div className="team-grid">

//                             {[
//                               {
//                                 name: "Dr. R Rajeev",
//                                 title: "Managing Director",
//                                 img: "/assets/img/cd4.png",
//                                 phone: "0471-2440920 / 09446004275",
//                                 mail: "mdkldboard@gmail.com",
//                               },
//                               {
//                                 name: "Dr. T Sajeev Kumar",
//                                 title: "General Manager",
//                                 img: "/assets/img/sajeevkumar.jpg",
//                                 phone: "0471 2440920/09446004276",
//                                 mail: "gmkldboard@gmail.com",
//                               },
//                               {
//                                 name: "Sri. Karthikeyan J",
//                                 title: "Dy. General Manager (FD)",
//                                 img: "/assets/img/karthikeyan.jpeg",
//                                 phone: "0471-2440920 / 09446004277",
//                                 mail: "dgmkldfd@gmail.com",
//                               },
//                               {
//                                 name: "Dr. Balu Bhaskar",
//                                 title: "Dy.General Manager (AH)",
//                                 img: "/assets/img/balu.jpg",
//                                 phone: "0471-2440920 / 09446226600",
//                                 mail: "balubhaskar321@gmail.com",
//                               },
//                               {
//                                 name: "Dr. D Jayakumar",
//                                 title: "Manager Personnel",
//                                 img: "/assets/img/jayakumar.jpg",
//                                 phone: "0471-2440920 / 09446004296",
//                                 mail: "jk.damodhar@gmail.com",
//                               },
//                             ].map((item, i) => (
//                               <div key={i} className="card">
//                                 <img src={item.img} alt={item.name} />
//                                 <div className="name">{item.name}</div>
//                                 <div className="title">{item.title}</div>
//                                 <div className="infox">
//                                   <div className="phm">{item.phone}</div>
//                                   <div className="mail">{item.mail}</div>
//                                 </div>
//                               </div>
//                             ))}

//                           </div>
//                         </div>

//                         {/* ACCORDION */}
//                         <div className="accord">
//                           <div className="accordion">

//                             {/* ITEM 1 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "one" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("one")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Mattupatti</div>
//                                   <p className="m-0 ads">MATTUPATTI P.O , MUNNAR, IDUKKI, PIN: 685616</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "one" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">

//                                   <div className="team-grid2">
//                                     <div className="card">
//                                       <img src="/assets/img/Manager-mtpty-232x300.jpg" alt="" />
//                                       <div className="name">Dr. Keshavadas V P</div>
//                                       <div className="title">Manager (AH)</div>
//                                       <div className="infox">
//                                         <div className="phm">04865-242202 / 09446004281</div>
//                                         <div className="mail">indoswisskldb@gmail.com</div>
//                                       </div>
//                                     </div>

//                                     <div className="card">
//                                       <img src="/assets/img/PRAVEEN.K.K-214x300.jpg" alt="" />
//                                       <div className="name">Dr. Praveen Kumar</div>
//                                       <div className="title">Manager (Training) ic</div>
//                                       <div className="infox">
//                                         <div className="phm">04865 242202 / 9446004283</div>
//                                         <div className="mail">kldbtcmtpty@gmail.com</div>
//                                       </div>
//                                     </div>
//                                   </div>

//                                 </div>
//                               </div>
//                             </div>

//                             {/* ITEM 2 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "two" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("two")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Kulathupuzha</div>
//                                   <p className="m-0 ads">KULATHUPUZHA, KOLLAM, PIN: 691310</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "two" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">Same content as above (you can customize)</div>
//                               </div>
//                             </div>

//                             {/* ITEM 3 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "three" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("three")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Dhoni</div>
//                                   <p className="m-0 ads">PALAKKAD, PIN: 678009</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "three" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">Demo</div>
//                               </div>
//                             </div>

//                             {/* ITEM 4 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "four" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("four")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Thrissur</div>
//                                   <p className="m-0 ads">KAINOOR P O, PIN: 680014</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "four" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">Demo</div>
//                               </div>
//                             </div>

//                             {/* ITEM 5 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "five" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("five")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Muvattupuzha</div>
//                                   <p className="m-0 ads">MUDAVOOR P O, PIN: 686669</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "five" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">Demo</div>
//                               </div>
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
//   );
// }



// import Breadcrumb from '../components/common/Breadcrumb'

// export default function Administration() {
//   return (
//     <>
//       <Breadcrumb title="Administration" crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Administration' }]} />
//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="text-center post-content pt-0">
//                       <h2 className="wow fadeInDown">Administration</h2>
//                       <p className="wow fadeInUp">
//                         The Board of Directors is delegated with the overall powers for running the organization. However, Government approval shall be sought for wherever necessary. The Managing Director, the Chief Executive of the Board, is vested with both administrative and financial powers. He is assisted by both administrative and technical staff at the Head Quarters. All the units under the Board are directly responsible to the Managing Director.
//                         The Managing Director is assisted by the heads of the various divisions. The Unit Heads of the Board are given powers to run the activities of the units in accordance with the targets fixed and budget allotted.
//                       </p>
//                       <br />
//                       <div className="admin mt-4">
//                         <div className="row gx-4 gy-4">
//                           <h2 className="wow fadeInDown mb-2">The Board of Directors</h2>
//                           <div className="col-12">
//                             <div className="card border-0 bg-transparent wow fadeInUp">
//                               <div className="card-body p-0">
//                                 <h4 className="chairh m-0">Chair Person</h4>
//                                 <div className="adminC">
//                                   <h5 className="m-0">Sri. Minhaj Alam IAS</h5>
//                                   <h6 className="subi mb-0">Additional Chief Secretary (AH &amp; DD)</h6>
//                                   <p className="mb-0">Government Secretariat, Thiruvananthapuram</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="col-12">
//                             <div className="card border-0 bg-transparent wow fadeInUp" data-wow-delay=".2s">
//                               <div className="card-body p-0">
//                                 <h4 className="mb-3 chairh">Directors</h4>
//                                 <div className="row">
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="m-0">Sri. Asif K Yusuf IAS</h5>
//                                       <h6 className="subi mb-0">Managing Director KCMMF</h6>
//                                       <p className="mb-0">Pattom, Thiruvananthapuram</p>
//                                     </div>
//                                   </div>
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="mb-1">Dr. G Kishore</h5>
//                                       <h6 className="subi mb-0">Sr. General Manager (PI&amp;M)</h6>
//                                       <p className="mb-0">National Dairy Development Board (NDDB), Anand, Gujarat - 388001</p>
//                                     </div>
//                                   </div>
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="mb-1">Dr. M C Rejil IAS</h5>
//                                       <h6 className="subi mb-0">Director</h6>
//                                       <p className="mb-0">Animal Husbandry Department, Thiruvananthapuram</p>
//                                     </div>
//                                   </div>
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="mb-1">Sri. Anilkumar A</h5>
//                                       <h6 className="subi mb-0">Under Secretary</h6>
//                                       <p className="mb-0">Finance Department, Govt. Secretariat, Thiruvananthapuram</p>
//                                     </div>
//                                   </div>
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="mb-1">Dr. Anil K S</h5>
//                                       <p className="subi mb-0">Vice Chancellor, Kerala Veterinary and Animal Science University</p>
//                                       <p className="mb-0">Pookode, Wayanad</p>
//                                     </div>
//                                   </div>
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="mb-1">Sri. Shibu A T</h5>
//                                       <p className="subi mb-0">Managing Director, Kerala Feeds Limited</p>
//                                       <p className="mb-0">Thrissur</p>
//                                     </div>
//                                   </div>
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="mb-1">Smt. Salini Gopinath</h5>
//                                       <p className="mb-0">Director, Dairy Development Department</p>
//                                       <p className="mb-0">Thiruvananthapuram</p>
//                                     </div>
//                                   </div>
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="mb-1">Dr. S S Nagesh</h5>
//                                       <p className="subi mb-0">Chief, Agriculture Division</p>
//                                       <p className="mb-0">Kerala State Planning Board</p>
//                                     </div>
//                                   </div>
//                                   <div className="col-md-4 mb-3">
//                                     <div className="direc">
//                                       <h5 className="mb-1">Dr. R Rajeev</h5>
//                                       <p className="subi mb-0">Managing Director</p>
//                                       <p className="mb-0">Kerala Livestock Development Board Ltd</p>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
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



import Breadcrumb from '../components/common/Breadcrumb'

export default function Administration() {
  return (
    <>
      <Breadcrumb
        title="Administration"
        crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Administration' }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="text-center post-content pt-0">

                      <h2 className="wow fadeInDown">Administration</h2>

                      <div className="admin mt-4">
                        <div className="row gx-4 gy-4">

                          <h2 className="wow fadeInDown mb-2">The Board of Directors</h2>

                          {/* Chairman */}
                          <div className="col-12">
                            <div className="card border-0 bg-transparent wow fadeInUp">
                              <div className="card-body p-0">
                                <h4 className="chairh m-0">Chairman</h4>
                                <div className="adminC">
                                  <h5 className="m-0">Shri. Minhaj Alam IAS</h5>
                                  <h6 className="subi mb-0">
                                    Additional Chief Secretary (AH & DD)
                                  </h6>
                                  <p className="mb-0">Government of Kerala</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Directors */}
                          <div className="col-12">
                            <div className="card border-0 bg-transparent wow fadeInUp">
                              <div className="card-body p-0">
                                <h4 className="mb-3 chairh">Directors</h4>

                                <div className="row">

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Shri. Asif K Yousuf IAS</h5>
                                      <p className="subi mb-0">Managing Director, KCMMF</p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Dr. R. Rajeev</h5>
                                      <p className="subi mb-0">Managing Director, KLDB</p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Shri. S. S. Nagesh</h5>
                                      <p className="subi mb-0">
                                        Chief (Agriculture Division)
                                      </p>
                                      <p className="mb-0">
                                        Kerala State Planning Board, Pattom P.O, Thiruvananthapuram - 4
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Dr. B. Sreekumar</h5>
                                      <p className="subi mb-0">
                                        Managing Director, Kerala Feeds Limited
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Dr. G. Kishore</h5>
                                      <p className="subi mb-0">
                                        Sr. General Manager (PI&M)
                                      </p>
                                      <p className="mb-0">
                                        National Dairy Development Board (NDDB), Anand, Gujarat - 388001
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Dr. M. C. Rejil IAS</h5>
                                      <p className="subi mb-0">
                                        Director, Animal Husbandry Department
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Dr. Anil K S</h5>
                                      <p className="subi mb-0">
                                        Vice Chancellor
                                      </p>
                                      <p className="mb-0">
                                        Kerala Veterinary and Animal Science University, Pookkode, Wayanad
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Shri. Anilkumar A</h5>
                                      <p className="subi mb-0">
                                        Under Secretary, Finance Department
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-md-4 mb-3">
                                    <div className="direc">
                                      <h5>Smt. Salini Gopinath</h5>
                                      <p className="subi mb-0">
                                        Director, Dairy Development Department
                                      </p>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}