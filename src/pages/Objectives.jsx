import React, { useMemo } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import { useGetArticleBySlugQuery } from '../redux/services/bannerApi'

export default function Objectives() {
  const { data, isLoading, isError } = useGetArticleBySlugQuery('objectives-and-responsibilities1')
  const article = data?.data

  const enTranslation = useMemo(() => {
    const list = Array.isArray(article?.translations) ? article.translations : []
    return list.find(t => t?.language === 'en' || t?.language_id === 1) || list[0] || null
  }, [article])

  const sections = useMemo(() => {
    if (!article?.sections) return []
    return [...article.sections].sort((a, b) => a.order - b.order)
  }, [article])

  return (
    <>
      <Breadcrumb
        title={enTranslation?.title || 'Objectives & Responsibilities'}
        crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Objectives' }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    {/* <div className="post-content pt-0"> */}

                      {isLoading && <p className="wow fadeInUp">Loading content...</p>}
                      {isError && <p className="wow fadeInUp">Failed to load content.</p>}

                      {!isLoading && !isError && sections.map((section, index) => {
                        const sectionEn = section.translations?.find(t => t.language_id === 1) || section.translations?.[0]
                        return (
                          <div key={section.id} className="post-content pt-0 wow fadeInUp">
                            {sectionEn?.title && <h2 className="wow fadeInDown">{sectionEn.title}</h2> }
                            {sectionEn?.content && (
                              <div dangerouslySetInnerHTML={{ __html: sectionEn.content }} />
                            )}
                          </div>
                        )
                      })}

                    {/* </div> */}
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

// export default function Objectives() {
//   return (
//     <>
//       <Breadcrumb 
//         title="Objectives & Responsibilities" 
//         crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Objectives' }]} 
//       />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">

//                       {/* Objectives */}
//                       <h2 className="wow fadeInDown">Objectives</h2>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>To provide the inputs required for cattle breeding in line with the breeding policy of the State</li>
//                         <li>To promote fodder production under field condition to support economic milk production</li>
//                         <li>To offer training courses in animal husbandry and fodder production</li>
//                         <li>To develop Malabari goats through the production and supply of selected breeding stock</li>
//                         <li>To produce and supply good quality piglets for breeding and fattening.</li>
//                       </ul>

//                       {/* Responsibilities */}
//                       <h2 className="wow fadeInDown">Responsibilities</h2>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>
//                           The activities of the Board are carried out by the two technical wings viz: Animal Husbandry and Fodder Development.
//                         </li>
//                       </ul>

//                       {/* Animal Husbandry Wing */}
//                       <h2 className="wow fadeInDown">Animal Husbandry Wing</h2>
//                       <h4 className="subHead1"><i>Major Responsibilities</i></h4>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Management of around 800 heads of cattle in 5 cattle breeding farms.</li>
//                         <li>Production of 80 crossbred young bulls annually through a systematically laid out nominated mating.</li>
//                         <li>Procurement of about 80 superior male calves from farmer’s herds.</li>
//                         <li>Selection and management of about 160 breeding bulls.</li>
//                         <li>Management of about 20 pedigreed Murrah buffalo bulls for semen production.</li>
//                         <li>Production of about 3.0 million doses of frozen semen annually.</li>
//                         <li>Quality control of frozen semen as per MSP.</li>
//                         <li>Applied research on cattle breeding and frozen semen technology.</li>
//                         <li>Implementation of breeding policy through bull rotation programme.</li>
//                         <li>Supply of frozen semen to over 3000 AI centers through 7 Regional Semen Banks.</li>
//                         <li>Sale of frozen semen outside the state.</li>
//                         <li>Supply of liquid nitrogen (LN) for storage and preservation.</li>
//                         <li>Field Performance Recording of Sunandini cows.</li>
//                         <li>Progeny Testing Scheme for bull evaluation.</li>
//                         <li>Production of disease-free CBHF bull calves under National Dairy Plan.</li>
//                         <li>Selective breeding of Vechur cattle.</li>
//                         <li>Conservation of indigenous livestock, goats, and pigs.</li>
//                         <li>Genomic selection of breeding bulls.</li>
//                         <li>Maintenance of RLFMC centres for fertility management.</li>
//                         <li>Hands-on training in livestock production.</li>
//                         <li>Liaison with Department of Animal Husbandry.</li>
//                         <li>Embryo Transfer and IVF techniques.</li>
//                         <li>Field-level OPU-IVF programme.</li>
//                         <li>Management of Malabari and Boer goats.</li>
//                         <li>Production of piglets for farmers.</li>
//                       </ul>

//                       {/* Fodder Development Wing */}
//                       <h2 className="wow fadeInDown">Fodder Development Wing</h2>
//                       <h4 className="subHead1"><i>Major Responsibilities</i></h4>

//                       <ul className="checked-list mb-4 wow fadeInUp mt-0">
//                         <li>Fodder production in Board farms.</li>
//                         <li>Trials for selection of grasses, legumes, and fodder trees.</li>
//                         <li>Management trials with selected varieties.</li>
//                         <li>Production and multiplication of foundation seeds.</li>
//                         <li>Procurement, testing, processing, and storage of fodder seeds.</li>
//                         <li>Marketing of seeds and fodder slips.</li>
//                         <li>Promotion and demonstration of fodder practices.</li>
//                         <li>Liaison with State agencies in fodder development.</li>
//                         <li>Training in fodder production.</li>
//                         <li>Implementation of farmer-oriented schemes.</li>
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
