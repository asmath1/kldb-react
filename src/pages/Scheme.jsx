import { bannersApi } from "../redux/services/bannerApi";
import Breadcrumb from "../components/common/Breadcrumb";
import Preloader from "../components/common/Preloader";

export default function Scheme() {
  const { data, isLoading, error } = bannersApi.useGetArticleBySlugQuery("schemes");

  if (isLoading) return <Preloader />;
  if (error) return <div className="error-container">Error loading schemes</div>;

  const article = data?.data;
  if (!article) return <Preloader />;

  const sections = article.sections || [];
  const gallery = article.gallery || [];

  return (
    <>
      <Breadcrumb title="Schemes" crumbs={[{ label: "Schemes" }]} />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      {sections.map((section, index) => (
                        <div key={section.id} className="section-block">
                          <h2 className="wow fadeInDown">{section.title}</h2>

                          <div
                            className="wow fadeInUp"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                          />

                          {section.translations &&
                            section.translations[0]?.content_2 && (
                              <div
                                className="wow fadeInUp"
                                dangerouslySetInnerHTML={{
                                  __html: section.translations[0].content_2,
                                }}
                              />
                            )}

                          {/* Display gallery image after Rashtriya Gokul Mission section */}
                          {index === 1 && gallery.length > 0 && (
                            <img
                              src={`https://livestock.cditproject.org${gallery[0].url}`}
                              className="img-fluid"
                              alt={gallery[0].caption || "Gallery image"}
                            />
                          )}
                        </div>
                      ))}
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



// import Breadcrumb from "../components/common/Breadcrumb";

// export default function Scheme() {
//   return (
//     <>
//       <Breadcrumb title="Schemes" crumbs={[{ label: "Schemes" }]} />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">

//                       <h2 className="wow fadeInDown">Schemes</h2>

//                       <p className="wow fadeInUp">
//                         “As live stock population is the asset of the state in terms of economic and
//                         social development, Kerala Livestock Development Board (KLDB) adopted different
//                         special schemes aimed to enhance the wellbeing, conservation and production of
//                         live stock in Kerala”
//                       </p>

//                       <h4 className="subHead1">
//                         <i>Activities taken up under special schemes</i>
//                       </h4>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Further development of the Sunandini through genetic selection, progeny testing and herd book organization</li>
//                         <li>Continued R & D programmes to support frozen semen production, embryo transfer, progeny testing, etc.</li>
//                         <li>R & D programmes to identify suitable perennial varieties of grasses and legumes</li>
//                         <li>Supporting farmers for fodder seed production</li>
//                         <li>Developing soil conservation methods using fodder cultivation</li>
//                         <li>Sharing Board’s experience through training programmes</li>
//                         <li>Development of Malabari and Boer goats</li>
//                         <li>Produce and supply hybrid piglets</li>
//                       </ul>

//                       {/* Rashtriya Gokul Mission */}
//                       <h2 className="wow fadeInDown">Rashtriya Gokul Mission</h2>

//                       <p>
//                         A comprehensive Centrally Sponsored Scheme aimed at conservation and development
//                         of indigenous bovine breeds. Includes NPBB, IB and NMBP schemes.
//                       </p>

//                       <img src="/assets/img/Activites_Schemes.png" className="img-fluid" alt="" />

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Breed improvement programme for Indigenous Breeds</li>
//                         <li>Enhance milk production</li>
//                         <li>Upgrade cattle using elite breeds</li>
//                         <li>Distribute disease-free bulls</li>
//                       </ul>

//                       {/* Premium Semen Scheme */}
//                       <h2 className="wow fadeInDown">Premium Semen Scheme</h2>

//                       <p>
//                         This scheme focuses on breeding elite cows using superior germplasm to accelerate
//                         genetic improvement and milk productivity.
//                       </p>

//                       <h6 className="second_subhead">Objectives</h6>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Distribution of high pedigree bull semen</li>
//                         <li>Improve genetic merit of herd</li>
//                         <li>Promote large dairy farms</li>
//                       </ul>

//                       <p>
//                         The project covers elite cows (top 10%) and ensures proper semen distribution
//                         through AI centres with liquid nitrogen storage systems.
//                       </p>

//                       <p>
//                         Bulls are selected based on breeding values (300) or dam’s lactation yields.
//                       </p>

//                       <h6 className="second_subhead">Dam’s Lactation Yields (Best)</h6>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Holstein Friesian – 10000 kg+</li>
//                         <li>Jersey – 7000 kg+</li>
//                         <li>Crossbred HF – 6000 kg+</li>
//                         <li>Crossbred Jersey – 5000 kg+</li>
//                       </ul>

//                       <h6 className="second_subhead">Elite Cow Eligibility</h6>

//                       <p>
//                         Crossbred cows with peak milk yield:
//                         1st lactation ≥12 kg,
//                         2nd ≥14 kg,
//                         3rd ≥16 kg are considered elite.
//                       </p>

//                       {/* National Livestock Mission */}
//                       <h2 className="wow fadeInDown">National Livestock Mission</h2>

//                       <h4 className="subHead1">
//                         <i>(KLDB is the State Implementing Agency)</i>
//                       </h4>

//                       <p>
//                         A Government of India scheme focusing on entrepreneurship, employment generation,
//                         and productivity improvement in livestock sector.
//                       </p>

//                       {/* ABIP-SS */}
//                       <h2 className="wow fadeInDown">
//                         Accelerated Breed Improvement Programme through sex sorted semen (ABIP-SS)
//                       </h2>

//                       <h6 className="second_subhead">
//                         (KLDB is the State Implementing Agency)
//                       </h6>

//                       <p>
//                         A key initiative under Rashtriya Gokul Mission to improve milk production and
//                         increase female calf population using sex-sorted semen.
//                       </p>

//                       <h4 className="subHead1">
//                         <i>Key Features of ABIP-SS:</i>
//                       </h4>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li><span className="bold_text">Objective:</span> 90% female calves</li>
//                         <li><span className="bold_text">Subsidy:</span> Up to 50%</li>
//                         <li><span className="bold_text">Incentives:</span> After pregnancy confirmation</li>
//                         <li><span className="bold_text">Implementation:</span> Through MAITRI technicians</li>
//                         <li><span className="bold_text">Target:</span> Improve genetic merit</li>
//                         <li><span className="bold_text">Coverage:</span> Integrated with national AI programmes</li>
//                       </ul>

//                       <p>
//                         This programme increases farmer income and reduces cost of maintaining male calves.
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
//   );
// }