import { useMemo } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import { useGetFinancialDocumentsQuery } from '../redux/services/bannerApi'

export default function FinancialInfo() {
  const { data, isLoading, isError } = useGetFinancialDocumentsQuery()

  const documents = useMemo(() => {
    if (!data?.documents || !Array.isArray(data.documents)) return []

    return data.documents
      .map((doc) => {
        const translation = Array.isArray(doc.translations)
          ? doc.translations.find((t) => t.language_code === 'en') || doc.translations[0]
          : null
        const file = Array.isArray(doc.files) && doc.files.length > 0 ? doc.files[0] : null

        return {
          id: doc.id,
          title: translation?.title || 'Financial Statement',
          fileUrl: file?.file_url || null,
          fileName: file?.file_name || '',
        }
      })
      .filter((doc) => doc.fileUrl) // Only include documents with files
  }, [data])

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Failed to load financial documents.</p>
  return (
    <>
      <Breadcrumb 
        title="Financial Information" 
        crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Financial Info' }]} 
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      <h2 className="wow fadeInDown">Financial Information</h2>

                      <div className="row checked-list mb-4 wow fadeInUp mt-0 financial_icon">
                        {documents.map((doc) => (
                          <div key={doc.id} className="col-md-3">
                            <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                              <div className="Financial_box">
                                <i className="fas fa-file-pdf"></i> {doc.title}
                              </div>
                            </a>
                          </div>
                        ))}
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



// import Breadcrumb from '../components/common/Breadcrumb'

// export default function FinancialInfo() {
//   return (
//     <>
//       <Breadcrumb 
//         title="Financial Information" 
//         crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Financial Info' }]} 
//       />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">

//                       <h2 className="wow fadeInDown">Financial Information</h2>

//                       <div className="row checked-list mb-4 wow fadeInUp mt-0 financial_icon">

//                         {/* 2023-24 */}
//                         <div className="col-md-3">
//                           <a href="/assets/img/23-24.pdf" target="_blank" rel="noopener noreferrer">
//                             <div className="Financial_box">
//                               <i className="fas fa-file-pdf"></i> Financial Statement 2023-24
//                             </div>
//                           </a>
//                         </div>

//                         {/* 2022-23 */}
//                         <div className="col-md-3">
//                           <a href="/assets/img/22-23.pdf" target="_blank" rel="noopener noreferrer">
//                             <div className="Financial_box">
//                               <i className="fas fa-file-pdf"></i> Financial Statement 2022-23
//                             </div>
//                           </a>
//                         </div>

//                         {/* 2021-22 */}
//                         <div className="col-md-3">
//                           <a href="/assets/img/21-22.pdf" target="_blank" rel="noopener noreferrer">
//                             <div className="Financial_box">
//                               <i className="fas fa-file-pdf"></i> Financial Statement 2021-22
//                             </div>
//                           </a>
//                         </div>

//                         {/* Static Items (no links) */}
//                         <div className="col-md-3">
//                           <div className="Financial_box">
//                             <i className="fas fa-file-pdf"></i> Financial Statement 2020-21
//                           </div>
//                         </div>

//                         <div className="col-md-3">
//                           <div className="Financial_box">
//                             <i className="fas fa-file-pdf"></i> Financial Statement 2019-20
//                           </div>
//                         </div>

//                         <div className="col-md-3">
//                           <div className="Financial_box">
//                             <i className="fas fa-file-pdf"></i> Financial Statement 2018-19
//                           </div>
//                         </div>

//                         <div className="col-md-3">
//                           <div className="Financial_box">
//                             <i className="fas fa-file-pdf"></i> Financial Statement 2017-18
//                           </div>
//                         </div>

//                         <div className="col-md-3">
//                           <div className="Financial_box">
//                             <i className="fas fa-file-pdf"></i> Financial Statement 2016-17
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
