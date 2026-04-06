import React, { useMemo } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetArticleBySlugQuery } from "../redux/services/bannerApi";

const Product = () => {
  const { data, isLoading, isError } = useGetArticleBySlugQuery("products-and-services");

  const article = data?.data;

  const enTranslation = useMemo(() => {
    const list = Array.isArray(article?.translations) ? article.translations : [];
    return list.find(t => t?.language === "en" || t?.language_id === 1) || list[0] || null;
  }, [article]);

  const sections = useMemo(() => {
    return Array.isArray(article?.sections) ? article.sections : [];
  }, [article]);

  const productsSection = sections.find(s => s?.layout === "card-grid") || sections[0];
  const servicesSection = sections.find(s => s?.layout === "default") || sections[1];

  const productBlocks = useMemo(() => {
    const t = Array.isArray(productsSection?.translations) ? productsSection.translations : [];
    const pick = t.find(x => x?.language_id === 1 || x?.language === "en") || t[0];
    const blocks = Array.isArray(pick?.content_blocks) ? pick.content_blocks : [];
    return blocks;
  }, [productsSection]);

  const servicesHtml = useMemo(() => {
    const t = Array.isArray(servicesSection?.translations) ? servicesSection.translations : [];
    const pick = t.find(x => x?.language_id === 1 || x?.language === "en") || t[0];
    return pick?.content || servicesSection?.content || "";
  }, [servicesSection]);

  return (
    <>
      <Breadcrumb
        title={enTranslation?.title || "Products & Services"}
        crumbs={[
          { label: "Home" },
          { label: "Products" },
        ]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="pro post-content pt-0">

                      <h2 className="wow fadeInDown">
                        {enTranslation?.main_title || "Our Products & Services"}
                      </h2>

                      {isLoading && (
                        <p className="wow fadeInUp">Loading content...</p>
                      )}
                      {isError && (
                        <p className="wow fadeInUp">Failed to load content.</p>
                      )}

                      {!isLoading && !isError && (
                        <p
                          className="wow fadeInUp"
                          dangerouslySetInnerHTML={{ __html: enTranslation?.body || "" }}
                        />
                      )}

                      <div className="row prod-row">
                        {productBlocks.map((block, i) => (
                          <div className="col-md-4 mb-3" key={i}>
                            <div className="prod-card">
                              <h4 className="subHead2">{block?.title}</h4>
                              <p dangerouslySetInnerHTML={{ __html: block?.body || "" }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      {servicesSection?.title && (
                        <h2 className="wow fadeInDown">{servicesSection.title}</h2>
                      )}

                      {!isLoading && !isError && servicesHtml && (
                        <div dangerouslySetInnerHTML={{ __html: servicesHtml }} />
                      )}

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
};

export default Product;

// ----------------------------------------------------------------------------------

// import React from "react";
// import Breadcrumb from "../components/common/Breadcrumb";

// const Product = () => {
//   return (
//     <>
//       <Breadcrumb
//         title="Products & Services"
//         crumbs={[
//           { label: "Home" },
//           { label: "Products" },
//         ]}
//       />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="pro post-content pt-0">

//                       <h2 className="wow fadeInDown">Our Products & Services</h2>

//                       <p className="wow fadeInUp">
//                         KLDB is committed to improving livestock productivity and farmersâ€™ income through the supply of superior genetic resources, quality inputs, and scientifically managed breeding stock.
//                       </p>

//                       <div className="row prod-row">

//                         <div className="col-md-4 mb-3">
//                           <div className="prod-card">
//                             <h4 className="subHead2">Frozen Semen</h4>
//                             <p>
//                               High-quality frozen semen from genetically superior and disease-free bulls, produced under international standards to ensure improved fertility, milk yield, and herd performance. Apart from semen of all Pure, Crossbreds and Indigenous breeds of Cattle, we produce Buffallo, Buck semen also.
//                             </p>
//                           </div>
//                         </div>

//                         <div className="col-md-4 mb-3">
//                           <div className="prod-card">
//                             <h4 className="subHead2">Frozen Bovine Embryos</h4>
//                             <p>
//                               Elite frozen embryos (HF, JY, CBHF, CBJ and various Indigenous Breeds) developed using advanced reproductive technologies (OPU-IVF) for rapid genetic upgradation and accelerated herd improvement.
//                             </p>
//                           </div>
//                         </div>

//                         <div className="col-md-4 mb-3">
//                           <div className="prod-card">
//                             <h4 className="subHead2">Fodder Seeds</h4>
//                             <p>
//                               Certified, high-yielding fodder seeds suited to Keralaâ€™s agro-climatic conditions, ensuring consistent availability of nutritious green fodder.
//                             </p>
//                           </div>
//                         </div>

//                         <div className="col-md-4 mb-3">
//                           <div className="prod-card">
//                             <h4 className="subHead2">Fodder Slips</h4>
//                             <p>
//                               Scientifically propagated fodder slips for quick establishment of fodder plots, promoting low-cost and sustainable feed production.
//                             </p>
//                           </div>
//                         </div>

//                         <div className="col-md-4 mb-3">
//                           <div className="prod-card">
//                             <h4 className="subHead2">Goat Kids</h4>
//                             <p>
//                               Healthy, well-bred goat kids raised under scientific management practices for better growth, adaptability, and productivity.
//                             </p>
//                           </div>
//                         </div>

//                         <div className="col-md-4 mb-3">
//                           <div className="prod-card">
//                             <h4 className="subHead2">Pig Fatteners</h4>
//                             <p>
//                               Quality pig fatteners with superior growth rate and disease resistance, ideal for profitable commercial meat production.
//                             </p>
//                           </div>
//                         </div>

//                       </div>

//                       <h2 className="wow fadeInDown">Services Offered to the Farmers:</h2>

//                       <h4 className="subHead2">Field Embryo Transfer Programme</h4>

//                       <p>
//                         The Field Embryo Transfer (ET) Programme of KLDB aims to accelerate genetic improvement in cattle by transferring high-quality IVF-derived embryos of any selected breed into suitable recipient animals at farmersâ€™ doorsteps. Under this programme, embryos produced through advanced reproductive technologies are implanted in synchronized recipient cows, enabling farmers to obtain superior calves without maintaining elite donor animals. The service is made accessible to prospective farmers at a subsidized rate of â‚¹6,000 per transfer, thereby promoting rapid breed upgradation, enhanced productivity, and scientific dairy development across the state. Fertility Management services offered through Regional Fertility Management Services Units (RLFMCs) in Chithara Block and Thalayolaparambu Block in Kottayam District.
//                       </p>

//                       <h4 className="subHead2">Why Choose KLDB?</h4>
//                       <hr />

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Proven Genetic Excellence</li>
//                         <li>State-of-the-Art Infrastructure</li>
//                         <li>Disease-Free Certified Stock</li>
//                         <li>Farmer-Centric Services</li>
//                         <li>Technical Support & Advisory</li>
//                       </ul>

//                       <h4 className="subHead1">Our Commitment</h4>

//                       <p>
//                         KLDB works in close partnership with farmers, institutions, and stakeholders to promote sustainable, profitable, and climate-resilient livestock farming in Kerala.
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
// };

// export default Product;
