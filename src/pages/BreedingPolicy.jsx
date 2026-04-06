import Breadcrumb from '../components/common/Breadcrumb'

export default function BreedingPolicy() {
  return (
    <>
      <Breadcrumb 
        title="Breeding Policy" 
        crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Breeding Policy' }]} 
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      <h2 className="wow fadeInDown">Cattle Breeding Policy Of Kerala</h2>

                      <h4 className="subHead1"><i>Evolution</i></h4>
                      <br />

                      <p className="wow fadeInUp">
                       Kerala never had a cattle breed of its own. The cattle were non-descript and low producers. The state has never been recognized as an area suitable for dairying. However the non-descript cattle evolved through natural selection extending over centuries were very well adapted to the warm, humid, disease prone situation in the state with scanty feed resources.
                      </p>

                      <p>
                        In the 1950’s, the government policy was to upgrade the local nondescript (ND) cattle using improved dairy breeds like Sindhi, from outside the State (Key Village Scheme). Based on the data from the military farms, the Government of India decided to experiment with crossbreeding, using exotic Jersey breed in selected areas. Accordingly, a crossbreeding programme was implemented in the State in Neyyattinkara and Chalakudy. Large-scale cross breeding using exotic breeds and AI as tool was however introduced in 1963 with the establishment of the Indo Swiss Project. The breeding activities were aimed at the evolution of a new breed combining the positive qualities of the local non descript cattle like adaptability, resistance to diseases, strong hoof, etc. and the high production potential of the exotic donor breed, Brown Swiss. Non-descript cows purchased locally and housed in the breeding farm were inseminated with frozen semen brought from Switzerland. Subsequently, Brown Swiss breeding bulls were imported in 1965 and frozen semen production started at Mattupatti.
                      </p>

                      <p>
                        The F1 and F2 generations with 50% and 75% exotic inheritance respectively were bred...
                      </p>

                      <p>
                        During 1980, the committee recommended a relatively simple programme to limit the level of exotic inheritance...
                      </p>

                      {/* 1979 Recommendations */}
                      <h2 className="wow fadeInDown">Some recommendations of the committee</h2>
                      <h4 className="subHead1"><i>for formulation of breeding policy (1979)</i></h4>

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>Limiting of exotic inheritance to around 50%</li>
                        <li>Lifting of breed barrier</li>
                        <li>Selection of bulls by progeny testing</li>
                      </ul>

                      <p>
                        A second committee reviewed the findings and the Government issued formal orders on the cattle breeding policy (1992).
                      </p>

                      {/* 1992 Policy */}
                      <h2 className="wow fadeInDown">Breeding policy - 1992</h2>
                      <h4 className="subHead1"><i>Salient Points</i></h4>

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>Level of exotic inheritance to be retained at around 50%</li>
                        <li>Progeny testing to be continued</li>
                        <li>Jersey, Brown Swiss and Holstein Friesian for F1 production</li>
                        <li>Preference to Jersey for ND cows</li>
                        <li>Premium bull scheme</li>
                        <li>Herd book & breeders association</li>
                        <li>Embryo Transfer adoption</li>
                        <li>Karyological screening</li>
                        <li>Parentage testing</li>
                        <li>ND buffaloes upgraded with Murrah bulls</li>
                      </ul>

                      <p>
                        The lessons learnt contributed to the National Livestock Policy. Further modifications were suggested in 1998.
                      </p>

                      {/* 1998 Policy */}
                      <h2 className="wow fadeInDown">Modifications suggested in Breeding policy - 1998</h2>
                      <h4 className="subHead1"><i>Salient Points</i></h4>
                      <h6 className="second_subhead">G.O (Ms) No. 144/98/AD dated 10.07.1998</h6>

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>Brown Swiss withdrawn as donor breed</li>
                        <li>20% exotic bulls replaced annually</li>
                        <li>Embryo Transfer for bull production</li>
                        <li>Removal of low productivity cows with compensation</li>
                        <li>Include proven bulls in premium scheme</li>
                      </ul>

                      <p>
                        In 2005, another Expert Committee reviewed the policy and led to the 2008 policy.
                      </p>

                      {/* Image */}
                      <img 
                        src="/assets/img/breeding_policy.png" 
                        className="img-fluid wow fadeInUp mb-4" 
                        alt="Breeding Policy" 
                      />

                      {/* 2008 Policy */}
                      <h2 className="wow fadeInDown">Breeding policy - 2008</h2>
                      <h4 className="subHead1"><i>Salient Points</i></h4>
                      <h6 className="second_subhead">G.O (Ms) No. 98/08/AD dated 13.06.2008</h6>

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>Only Jersey and Holstein Friesian used</li>
                        <li>Exotic inheritance limited to ~50%</li>
                        <li>High-value semen for commercial farmers</li>
                        <li>F1 bulls using indigenous breeds like Sahiwal</li>
                      </ul>

                      <p>
                        The report was examined and approved as the Breeding Policy 2008.
                      </p>

                      {/* 2018 Policy */}
                      <h2 className="wow fadeInDown">Breeding policy - 2018</h2>
                      <h6 className="second_subhead">
                        G.O (Rt) No.459/2018/AHD, Dated, Thiruvananthapuram, 29.10.2018
                      </h6>

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

// export default function BreedingPolicy() {
//   return (
//     <>
//       <Breadcrumb title="Breeding Policy" crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Breeding Policy' }]} />
//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">
//                       <h2 className="wow fadeInDown">Breeding Policy of Kerala</h2>
//                       <img src="/assets/img/breeding_policy.png" className="img-fluid wow fadeInUp mb-4" alt="Breeding Policy" />
//                       <p className="wow fadeInUp">
//                         The breeding policy of Kerala aims at improving the genetic potential of the cattle population through systematic crossbreeding with exotic breeds. The policy focuses on producing high-yielding crossbred cattle that are well adapted to the agro-climatic conditions of Kerala.
//                       </p>
//                       <h4 className="subHead1">Key Objectives</h4>
//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Improvement of milk production potential of cattle in Kerala.</li>
//                         <li>Conservation of indigenous breeds like Vechur and Kasargode.</li>
//                         <li>Systematic crossbreeding with exotic breeds like Holstein Friesian and Jersey.</li>
//                         <li>Production and supply of quality frozen semen for AI programme.</li>
//                       </ul>
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
