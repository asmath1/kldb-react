import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetBreedingScenarioQuery } from "../redux/services/bannerApi";

export default function Scenario() {
  const { data, isLoading, error } = useGetBreedingScenarioQuery();
  const [open, setOpen] = useState(0);

  // 🔹 Loading & Error Handling
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // 🔹 Get correct translation (EN fallback)
  const section = data?.data?.sections?.[0];

  const translation =
    section?.translations?.find((t) => t.language_id === 1) ||
    section?.translations?.[0];

  const blocks = translation?.content_blocks || [];

  // 🔹 Fix HTML issues from API
  const cleanHTML = (html) => {
    if (!html) return "";
    return html.replace(/style="/g, "style='").replace(/">/g, "'>");
  };

  return (
    <>
      <Breadcrumb
        title="Breeding Scenario"
        crumbs={[
          { label: "Home" },
          { label: "About Us" },
          { label: "Breeding Scenario" },
        ]}
      />

      <section className="accordion_wrapperx section-padding-inner">
        <div className="container">
          <div className="accordion">

            {blocks.length > 0 ? (
              blocks.map((item, index) => (
                <div className="accordion-item" key={index}>
                  
                  {/* 🔹 Accordion Header */}
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        open === index ? "" : "collapsed"
                      }`}
                      onClick={() =>
                        setOpen(open === index ? null : index)
                      }
                    >
                      {item.accordion_title || "Untitled"}
                    </button>
                  </h2>

                  {/* 🔹 Accordion Body */}
                  <div
                    className={`accordion-collapse collapse ${
                      open === index ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: cleanHTML(item.body),
                        }}
                      />
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <p className="text-center">No Data Available</p>
            )}

          </div>
        </div>
      </section>
    </>
  );
}

// ---------------------before api--------------------------------


// import React from "react";
// import Breadcrumb from "../components/common/Breadcrumb";

// const Scenario = () => {
//   return (
//     <>
//       <Breadcrumb
//         title="Breeding Scenario"
//         crumbs={[
//           { label: "Home" },
//           { label: "About Us" },
//           { label: "Breeding Scenario" },
//         ]}
//       />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">

//                       <div className="accordion" id="scenarioAccordion">

//                         {/* ================= BREEDS USED ================= */}
//                         <div className="accordion-item">
//                           <h2 className="accordion-header" id="headingBreeds">
//                             <button
//                               className="accordion-button"
//                               data-bs-toggle="collapse"
//                               data-bs-target="#collapseBreeds"
//                             >
//                               Breeds Used
//                             </button>
//                           </h2>

//                           <div
//                             id="collapseBreeds"
//                             className="accordion-collapse collapse show"
//                             data-bs-parent="#scenarioAccordion"
//                           >
//                             <div className="accordion-body">
//                               <p>
//                                 Presently Jersey and Holstein Friesian are only used as exotic donor breeds for bull production.
//                               </p>

//                               <p>
//                                 Number of Proven bull / F1 bulls / imported bulls used for young bull production (2008-2017)
//                               </p>

//                               <table className="table matable table-bordered w-100 mb-4">
//                                 <thead>
//                                   <tr>
//                                     <th>Sl. No</th>
//                                     <th>Genetic Group</th>
//                                     <th>No. of bulls</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <tr><td>1</td><td>Proven Sunandini – CJ</td><td>13</td></tr>
//                                   <tr><td>2</td><td>Proven Sunandini – CH</td><td>12</td></tr>
//                                   <tr><td>3</td><td>CBJ – F1</td><td>4</td></tr>
//                                   <tr><td>4</td><td>CBHF – F1</td><td>5</td></tr>
//                                   <tr><td>5</td><td>Imported Jersey</td><td>7</td></tr>
//                                   <tr><td>6</td><td>Imported HF</td><td>13</td></tr>
//                                   <tr>
//                                     <td></td>
//                                     <td><strong>Total</strong></td>
//                                     <td><strong>54</strong></td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </div>
//                           </div>
//                         </div>

//                         {/* ================= PERFORMANCE ================= */}
//                         <div className="accordion-item">
//                           <h2 className="accordion-header" id="headingPerformance">
//                             <button
//                               className="accordion-button collapsed"
//                               data-bs-toggle="collapse"
//                               data-bs-target="#collapsePerformance"
//                             >
//                               Performance of bulls
//                             </button>
//                           </h2>

//                           <div
//                             id="collapsePerformance"
//                             className="accordion-collapse collapse"
//                             data-bs-parent="#scenarioAccordion"
//                           >
//                             <div className="accordion-body">
//                               <h6>Used for nominated mating</h6>

//                               <table className="table matable table-bordered w-100 mb-4">
//                                 <thead>
//                                   <tr>
//                                     <th>Genetic Group</th>
//                                     <th>EBV (Milk)</th>
//                                     <th>Dam Avg (kg)</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <tr>
//                                     <td>Proven Sunandini – CH</td>
//                                     <td>355.82</td>
//                                     <td>5306.27</td>
//                                   </tr>
//                                   <tr>
//                                     <td>Proven Sunandini – CJ</td>
//                                     <td>407.91</td>
//                                     <td>3814.23</td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </div>
//                           </div>
//                         </div>

//                         {/* ================= PEDIGREE ================= */}
//                         <div className="accordion-item">
//                           <h2 className="accordion-header" id="headingPedigree">
//                             <button
//                               className="accordion-button collapsed"
//                               data-bs-toggle="collapse"
//                               data-bs-target="#collapsePedigree"
//                             >
//                               Pedigree of bulls
//                             </button>
//                           </h2>

//                           <div
//                             id="collapsePedigree"
//                             className="accordion-collapse collapse"
//                             data-bs-parent="#scenarioAccordion"
//                           >
//                             <div className="accordion-body">
//                               <h6><i>Used for AI in the state</i></h6>

//                               <table className="table matable table-bordered w-100 mb-4">
//                                 <thead>
//                                   <tr>
//                                     <th>Breed</th>
//                                     <th>No. of bulls</th>
//                                     <th>Average of Dam’s Yield</th>
//                                     <th>Min</th>
//                                     <th>Max</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <tr><td>Sunandini CH</td><td>90</td><td>4369.99</td><td>3513</td><td>11931</td></tr>
//                                   <tr><td>Sunandini CJ</td><td>107</td><td>4318.25</td><td>3510</td><td>6688</td></tr>
//                                   <tr><td>Pure HF</td><td>36</td><td>7277.78</td><td>5200</td><td>11849</td></tr>
//                                   <tr><td>Pure JY</td><td>23</td><td>4310.30</td><td>3763</td><td>5368</td></tr>
//                                   <tr><td>Grand Total</td><td>256</td><td>4751.91</td><td>3510</td><td>11931</td></tr>
//                                 </tbody>
//                               </table>

//                               <p>
//                                 Two lines of Sunandini would be developed based on exotic inheritance. Field Performance Recording expanded to Wayanad, Kannur and Kozhikode districts from 2014 onwards under National Dairy Plan.
//                               </p>
//                             </div>
//                           </div>
//                         </div>

//                         {/* ================= F1 ================= */}
//                         <div className="accordion-item">
//                           <h2 className="accordion-header">
//                             <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseF1">
//                               Details of F1 Bulls
//                             </button>
//                           </h2>

//                           <div id="collapseF1" className="accordion-collapse collapse" data-bs-parent="#scenarioAccordion">
//                             <div className="accordion-body">
//                               <table className="table matable table-bordered w-100">
//                                 <thead>
//                                   <tr>
//                                     <th>Breed</th>
//                                     <th>No. of bulls</th>
//                                     <th>Dam breed</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <tr><td>F1 CBJ</td><td>12</td><td>Red Sindhi, Sahiwal, Rathi, Kankrej</td></tr>
//                                   <tr><td>F1 CBHF</td><td>10</td><td>Rathi, Sahiwal, Kankrej, Red Sindhi</td></tr>
//                                 </tbody>
//                               </table>

//                               <p>
//                                 Crossbred bulls from other parts of country are being used in breeding programme.
//                               </p>
//                             </div>
//                           </div>
//                         </div>

//                         {/* ================= IMPORT ================= */}
//                         <div className="accordion-item">
//                           <h2 className="accordion-header">
//                             <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseImport">
//                               Import of germplasm
//                             </button>
//                           </h2>

//                           <div id="collapseImport" className="accordion-collapse collapse" data-bs-parent="#scenarioAccordion">
//                             <div className="accordion-body">
//                               <p>
//                                 Imported 5 HF bulls from Germany and 4 Jersey bulls from Denmark under NDP during 2015 & 2017.
//                               </p>

//                               <table className="table matable table-bordered">
//                                 <thead>
//                                   <tr>
//                                     <th>Breed</th>
//                                     <th>Source</th>
//                                     <th>No. of bulls</th>
//                                     <th>Dam’s Yield</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <tr><td>HF</td><td>Germany</td><td>5</td><td>10493.6</td></tr>
//                                   <tr><td>Jersey</td><td>Denmark</td><td>4</td><td>7037.7</td></tr>
//                                 </tbody>
//                               </table>
//                             </div>
//                           </div>
//                         </div>

//                         {/* ================= FROZEN SEMEN ================= */}
//                         <div className="accordion-item">
//                           <h2 className="accordion-header">
//                             <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFrozen">
//                               Frozen Semen
//                             </button>
//                           </h2>

//                           <div id="collapseFrozen" className="accordion-collapse collapse" data-bs-parent="#scenarioAccordion">
//                             <div className="accordion-body">

//                               <p>Imported 59000 doses from USA and Canada.</p>

//                               <h4 className="subHead1">Sex Sorted Semen</h4>
//                               <p>16650 female sex sorted semen imported.</p>

//                               <h4 className="subHead1">Frozen Embryos</h4>
//                               <p>Embryos imported from Canada.</p>

//                               <table className="table matable table-bordered">
//                                 <thead>
//                                   <tr>
//                                     <th>Parameter</th>
//                                     <th>Total</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <tr><td>Male</td><td>22</td></tr>
//                                   <tr><td>Female</td><td>373</td></tr>
//                                 </tbody>
//                               </table>

//                               <h4 className="subHead1">Embryo technology</h4>
//                               <p>
//                                 Used for production of breeding bulls.
//                               </p>

//                               <h4 className="subHead1">Semen Production Stations</h4>
//                               <p>
//                                 Mattupatti, Dhoni & Kulathupuzha are graded “A”.
//                               </p>

//                               <h4 className="subHead1">Quality Control</h4>
//                               <p>
//                                 Seven Regional Semen Banks ensure quality distribution.
//                               </p>

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
// };

// export default Scenario;