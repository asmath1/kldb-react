// import Breadcrumb from '../components/common/Breadcrumb'

// export default function CALG() {
//   return (
//     <>
//       <Breadcrumb title="CALG" crumbs={[{ label: 'CALG' }]} />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">

//                       <h2 className="wow fadeInDown">
//                         The Centre for Applied Livestock Genomic Laboratory (CALG)
//                       </h2>

//                       <br />

//                       <img
//                         src="/assets/img/calghome.JPG"
//                         className="w-md-100 m-0 wow fadeInUp mb-3"
//                         alt="CALG"
//                       />

//                       <p>
//                         The Centre for Applied Livestock Genomic Laboratory (CALG) - Kudappanakkunnu – Thiruvananthapuram
//                       </p>

//                       {/* NABL */}
//                       <h4 className="subHead2">NABL Certified & NABL Scope (ISO 17025:2017)</h4>
//                       <hr />

//                       <p>
//                         The Centre for Applied Livestock Genomic Laboratory (CALG), Kudappanakkunnu was established in 2016 under Kerala Livestock Development Board...
//                       </p>

//                       {/* General Objectives */}
//                       <h4 className="subHead2">General Objectives</h4>
//                       <hr />

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Genomic selection improves breeding reliability and genetic gain.</li>
//                         <li>Improve breeding standards and milk production.</li>
//                         <li>Develop capability in genomic technology.</li>
//                         <li>Promote national and international collaboration.</li>
//                       </ul>

//                       {/* Specific Objectives */}
//                       <h4 className="subHead2">Specific Objectives</h4>
//                       <hr />

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Early selection of bull calves using genomic data.</li>
//                         <li>Prevent undesirable genetic combinations.</li>
//                         <li>Publish Estimated Breeding Value (EBV).</li>
//                         <li>Reduce rearing cost of bulls.</li>
//                         <li>Reduce generation interval.</li>
//                         <li>Improve selection accuracy.</li>
//                         <li>Reduce inbreeding using genome scanning.</li>
//                         <li>Screen genetic diseases.</li>
//                         <li>Parentage testing and DNA fingerprinting.</li>
//                         <li>Species identification.</li>
//                         <li>Vetero-legal and forensic support.</li>
//                       </ul>

//                       {/* Testing */}
//                       <h4 className="subHead2">Testing Facilities Available</h4>
//                       <hr />

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Genetic Disease Screening (GDS)</li>
//                         <li>
//                           <ol className="mt-0 oli">
//                             <li>FXI Deficiency (FXID)</li>
//                             <li>BLAD</li>
//                             <li>Bovine Citrullinemia</li>
//                             <li>DUMPS</li>
//                           </ol>
//                         </li>
//                         <li>Karyotyping</li>
//                         <li>IBR screening</li>
//                         <li>A1A2 allele detection</li>
//                         <li>Genotyping</li>
//                         <li>Brucellosis screening</li>
//                         <li>Parentage Identification</li>
//                       </ul>

//                       {/* Training */}
//                       <h4 className="subHead2">Training Facility Available</h4>
//                       <hr />

//                       <p>
//                         Hands-on training on Molecular Biology Techniques (15 days).
//                       </p>

//                       <p>
//                         <b>Fee:</b> Rs.15000/- + GST | 30 days Rs.25000/- + GST | 90 days Rs.50000/- + GST
//                       </p>

//                       <p>Training will be conducted upon request.</p>

//                       {/* Equipment Table */}
//                       <table className="table matable table-bordered w-100 mb-4">
//                         <thead>
//                           <tr>
//                             <th>SI No.</th>
//                             <th>Name of Equipment</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {[
//                             "QIA cube HT Automated Nucleic acid extractor",
//                             "Spectrophotometer, Nano Drop Lite",
//                             "Motorized microscopes with software",
//                             "Gel Electrophoresis Unit",
//                             "Gel Documentation Unit",
//                             "Real Time PCR – QuantStudio 5",
//                             "Microwave Oven",
//                             "Thermal Cycler",
//                             "-20°C Deep Freezers",
//                             "-80°C Deep Freezer",
//                             "Concentrator",
//                             "CO₂ Incubator",
//                             "GeneTitan Microarray",
//                             "Water Baths",
//                             "Micro Centrifuges",
//                             "Refrigerated Centrifuges",
//                             "Weighing Balance",
//                             "pH Meters",
//                             "Incubator",
//                             "Autoclave",
//                             "Hot Air Oven",
//                             "Micropipette",
//                             "Laminar Air Flow Units"
//                           ].map((item, i) => (
//                             <tr key={i}>
//                               <td>{i + 1}</td>
//                               <td>{item}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>

//                       {/* Address */}
//                       <h4 className="subHead2">Address :</h4>

//                       <p>
//                         Manager (Trg) <br />
//                         Centre for Applied Livestock Genomics (CALG) <br />
//                         Kerala Livestock Development Board Ltd <br />
//                         Kudappanakkunnu.P.O, Thiruvananthapuram 695043 <br />
//                         Mobile: 9446441702 <br />
//                         Office: 04712930327 <br />
//                         Email: kldbcalg@gmail.com
//                       </p>

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

import Breadcrumb from "../components/common/Breadcrumb";
import { useGetCalgQuery } from "../redux/services/bannerApi";

export default function CALG() {
  const { data, isLoading, isError } = useGetCalgQuery();

  const lang = "en";

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (isError) return <p className="text-center mt-5">Error loading data</p>;

  const article = data?.data;

  const translation =
    article?.translations.find((t) => t.language === lang) ||
    article?.translations[0];

  return (
    <>
      <Breadcrumb
        title={translation?.title || "CALG"}
        crumbs={[{ label: translation?.title || "CALG" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className=" container">
          <div className="news-area">
            <div className="row">
              <div className="single-blog-post">
                <div className="post-content pt-0">
                  <h2 className="wow fadeInDown">{translation?.main_title}</h2>

                  {translation?.image && (
                    <img src={translation.image} className="w-100 mb-3" />
                  )}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: translation?.body,
                    }}
                  />

                  {article.sections.map((section) => {
                    const sec =
                      section.translations.find(
                        (t) => t.language_id === (lang === "en" ? 1 : 2),
                      ) || section.translations[0];

                    if (!sec?.title && !sec?.content) return null;

                    return (
                      <div key={section.id}>
                        <h4 className="subHead2">{sec.title}</h4>
                        <hr />

                        <div
                          dangerouslySetInnerHTML={{
                            __html: sec.content,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
