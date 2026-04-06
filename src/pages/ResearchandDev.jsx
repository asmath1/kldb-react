import React, { useMemo } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetArticleBySlugQuery } from "../redux/services/bannerApi";

export default function ResearchDevelopment() {
  const { data, isLoading, isError } = useGetArticleBySlugQuery("research-and-development");
  const article = data?.data;

  const enTranslation = useMemo(() => {
    const translations = Array.isArray(article?.translations) ? article.translations : [];
    return translations.find((t) => t?.language === "en" || t?.language_id === 1) || translations[0] || null;
  }, [article]);

  const sections = useMemo(() => {
    if (!Array.isArray(article?.sections)) return [];
    return [...article.sections].sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [article]);

  const sectionTranslation = useMemo(() => {
    const section = sections[0];
    if (!section || !Array.isArray(section.translations)) return null;
    return section.translations.find((t) => t.language_id === 1) || section.translations[0] || null;
  }, [sections]);

  const contentBlocks = useMemo(() => {
    return Array.isArray(sectionTranslation?.content_blocks) ? sectionTranslation.content_blocks : [];
  }, [sectionTranslation]);

  return (
    <>
      <Breadcrumb
        title={enTranslation?.title || "Research and Development"}
        crumbs={[{ label: "Research and Development" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    {/* <div className="post-content pt-0 Research_paragraph"> */}

                      {isLoading && <p className="wow fadeInUp">Loading content...</p>}
                      {isError && <p className="wow fadeInUp">Failed to load content.</p>}

                      {!isLoading && !isError && (
                        <>
                          {enTranslation?.body ? (
                            <div className="post-content pt-0 Research_paragraph wow fadeInUp" dangerouslySetInnerHTML={{ __html: enTranslation.body }} />
                          ) : contentBlocks.length ? (
                            contentBlocks.map((block, index) => (
                              <div key={index} className="post-content pt-0 Research_paragraph post-content pt-0 wow fadeInUp">
                                {block.accordion_title && <h2 className="subHead1">{block.accordion_title}</h2>}
                                {block.body && <div dangerouslySetInnerHTML={{ __html: block.body }} />}
                              </div>
                            ))
                          ) : (
                            <div>
                              {/* <h2 className="wow fadeInDown">Research and Development</h2>
                              <h5>Applied research on all aspects of cattle breeding, frozen semen, Genomic Selection and fodder production is being carried out.</h5>
                              <h4 className="subHead1"><i>The following are the major fields in which trials are undertaken.</i></h4>
                              <ul className="checked-list mb-4 wow fadeInUp mt-0">
                                <li>Selection of bulls based on genomic selection</li>
                                <li>Selection of Proven bulls based on performance of progenies</li>
                                <li>Genotype X Environment interaction of bulls</li>
                                <li>Conservation methodology suitable for indigenous livestock</li>
                                <li>Selection of cows according to individual performance on production, reproduction and growth</li>
                                <li>Selection of bulls based on various aspects of semen production</li>
                                <li>Studies on the reproductive performance of Sunandini bulls</li>
                                <li>Dilution methods for semen processing in cattle, buffaloes, bucks and boars</li>
                                <li>Field studies on productive and reproductive performance of Sunandini cows</li>
                                <li>Setting up of effective models for sire evaluation under field conditions</li>
                                <li>Studies on computation of lactation yields from part lactation records</li>
                                <li>Studies on genetic gain through breeding and selection</li>
                                <li>Embryo technology for genetic improvement</li>
                                <li>Developing methodology for freezing of buck and boar semen</li>
                                <li>Effect of sperm concentration on fertility using frozen semen</li>
                                <li>Studies on selection of suitable fodder varieties for different agro climatic conditions</li>
                                <li>Studies on fodder seed production</li>
                                <li>Quality control systems for fodder seeds</li>
                                <li>Different management practices for fodder production in Kerala</li>
                                <li>Genotyping of female animals</li>
                                <li>Standardization and optimization of media in various steps of OPU-IVF in crossbred animals</li>
                              </ul> */}
                            </div>
                          )}
                        </>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

// -----------------------------------

// import Breadcrumb from "../components/common/Breadcrumb";

// export default function ResearchDevelopment() {
//   return (
//     <>
//       <Breadcrumb
//         title="Research and Development"
//         crumbs={[{ label: "Research and Development" }]}
//       />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0 Research_paragraph">

//                       <h2 className="wow fadeInDown">
//                         Research and Development
//                       </h2>

//                       <h5>
//                         Applied research on all aspects of cattle breeding,
//                         frozen semen, Genomic Selection and fodder production is
//                         being carried out.
//                       </h5>

//                       <h4 className="subHead1">
//                         <i>
//                           The following are the major fields in which trials are
//                           undertaken.
//                         </i>
//                       </h4>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Selection of bulls based on genomic selection</li>
//                         <li>
//                           Selection of Proven bulls based on performance of
//                           progenies
//                         </li>
//                         <li>
//                           Genotype X Environment interaction of bulls
//                         </li>
//                         <li>
//                           Conservation methodology suitable for indigenous
//                           livestock
//                         </li>
//                         <li>
//                           Selection of cows according to individual performance
//                           on production, reproduction and growth
//                         </li>
//                         <li>
//                           Selection of bulls based on various aspects of semen
//                           production
//                         </li>
//                         <li>
//                           Studies on the reproductive performance of Sunandini
//                           bulls
//                         </li>
//                         <li>
//                           Dilution methods for semen processing in cattle,
//                           buffaloes, bucks and boars
//                         </li>
//                         <li>
//                           Field studies on productive and reproductive
//                           performance of Sunandini cows
//                         </li>
//                         <li>
//                           Setting up of effective models for sire evaluation
//                           under field conditions
//                         </li>
//                         <li>
//                           Studies on computation of lactation yields from part
//                           lactation records
//                         </li>
//                         <li>
//                           Studies on genetic gain through breeding and selection
//                         </li>
//                         <li>
//                           Embryo technology for genetic improvement
//                         </li>
//                         <li>
//                           Developing methodology for freezing of buck and boar
//                           semen
//                         </li>
//                         <li>
//                           Effect of sperm concentration on fertility using frozen
//                           semen
//                         </li>
//                         <li>
//                           Studies on selection of suitable fodder varieties for
//                           different agro climatic conditions
//                         </li>
//                         <li>Studies on fodder seed production</li>
//                         <li>Quality control systems for fodder seeds</li>
//                         <li>
//                           Different management practices for fodder production in
//                           Kerala
//                         </li>
//                         <li>Genotyping of female animals</li>
//                         <li>
//                           Standardization and optimization of media in various
//                           steps of OPU-IVF in crossbred animals
//                         </li>
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
//   );
// }