



import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <section className="choose-us-section-5 section-padding3 section-bg">
      <div className="top-shape"><img src="/assets/img/top-shape.png" alt="img" /></div>
      <div className="cows"><img src="/assets/img/cows.svg" alt="" /></div>
      <div className="container">
        <div className="choose-us-wrapper-5">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="choose-image-left-items">
                <img src="/assets/img/abt1.png" alt="img" />
                <div className="sm-thumb">
                  <img src="/assets/img/abt2.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-right-content">
                <div className="section-title mb-0">
                  <span className="wow fadeInUp">
                    <img src="/assets/img/sub-title.svg" alt="img" />About Us
                  </span>
                  <h2 className="font1 text-anim">The Kerala Livestock Development Board Ltd. was established in the year 1976.</h2>
                </div>
                <p className="choose-text wow fadeInUp" data-wow-delay=".2s">
                  Advent of the Kerala Livestock Development Board (KLDB) could be traced back to the amalgamation of the Indo Swiss Project, Kerala (ISPK-1963) and the Bull Station, Dhoni of the Dairy Development Department during 1976. The Kerala Livestock Development and Milk Marketing Board (KLD&MMB) which was formed during that year was later bifurcated into the Kerala Co-operative Milk Marketing Federation (KCMMF) and the Kerala Livestock Development Board (KLDB), a fully Government owned company during the year 1983.
                </p>
                <div className="icon-items-area wow fadeInUp" data-wow-delay=".4s">
                  <div className="icon-items">
                    <div className="icon">
                      <img src="/assets/img/animal-husbandry.svg" width="50" alt="" />
                    </div>
                    <h4>Animal Husbandry wing</h4>
                  </div>
                  <div className="icon-items">
                    <div className="icon">
                      <img src="/assets/img/cultivating.svg" width="50" alt="" />
                    </div>
                    <h4>Fodder Development Wing</h4>
                  </div>
                </div>
                <div className="about-bottom-area wow fadeInUp" data-wow-delay=".9s">
                  <Link to="/about" className="theme-btn">
                    More About Us <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="phone-box-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <p>Phone:</p>
                      <a href="tel:04712440920">0471- 2440920</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-shape"><img src="/assets/img/bottom-shape.png" alt="img" /></div>
    </section>
  )
}


// -----------------------------------------------

// import { Link } from 'react-router-dom'

// export default function AboutSection() {
//   return (
//     <section className="choose-us-section-5 section-padding3 section-bg">
//       <div className="top-shape"><img src="/assets/img/top-shape.png" alt="img" /></div>
//       <div className="cows"><img src="/assets/img/cows.svg" alt="" /></div>
//       <div className="container">
//         <div className="choose-us-wrapper-5">
//           <div className="row g-4">
//             <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
//               <div className="choose-image-left-items">
//                 <img src="/assets/img/abt1.png" alt="img" />
//                 <div className="sm-thumb">
//                   <img src="/assets/img/abt2.png" alt="img" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="choose-right-content">
//                 <div className="section-title mb-0">
//                   <span className="wow fadeInUp">
//                     <img src="/assets/img/sub-title.svg" alt="img" />About Us
//                   </span>
//                   <h2 className="font1 text-anim">The Kerala Livestock Development Board Ltd. was established in the year 1976.</h2>
//                 </div>
//                 <p className="choose-text wow fadeInUp" data-wow-delay=".2s">
//                   Advent of the Kerala Livestock Development Board (KLDB) could be traced back to the amalgamation of the Indo Swiss Project, Kerala (ISPK-1963) and the Bull Station, Dhoni of the Dairy Development Department during 1976. The Kerala Livestock Development and Milk Marketing Board (KLD&MMB) which was formed during that year was later bifurcated into the Kerala Co-operative Milk Marketing Federation (KCMMF) and the Kerala Livestock Development Board (KLDB), a fully Government owned company during the year 1983.
//                 </p>
//                 <div className="icon-items-area wow fadeInUp" data-wow-delay=".4s">
//                   <div className="icon-items">
//                     <div className="icon">
//                       <img src="/assets/img/animal-husbandry.svg" width="50" alt="" />
//                     </div>
//                     <h4>Animal Husbandry wing</h4>
//                   </div>
//                   <div className="icon-items">
//                     <div className="icon">
//                       <img src="/assets/img/cultivating.svg" width="50" alt="" />
//                     </div>
//                     <h4>Fodder Development Wing</h4>
//                   </div>
//                 </div>
//                 <div className="about-bottom-area wow fadeInUp" data-wow-delay=".9s">
//                   <Link to="/about" className="theme-btn">
//                     More About Us <i className="far fa-arrow-right"></i>
//                   </Link>
//                   <div className="phone-box-items">
//                     <div className="icon">
//                       <i className="fas fa-phone-alt"></i>
//                     </div>
//                     <div className="content">
//                       <p>Phone:</p>
//                       <a href="tel:04712440920">0471- 2440920</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bottom-shape"><img src="/assets/img/bottom-shape.png" alt="img" /></div>
//     </section>
//   )
// }
