import Breadcrumb from '../components/common/Breadcrumb'
import { useGetGovtOrdersQuery } from '../redux/services/bannerApi'

export default function GovtOrders() {
  const { data, isLoading, error } = useGetGovtOrdersQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  const documents = data?.documents || []

  return (
    <>
      <Breadcrumb
        title="Government Orders"
        crumbs={[{ label: 'Downloads' }, { label: 'Govt Orders' }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <div style={{ overflowX: 'auto' }}>
                        <table className="table matable table-bordered w-100 mb-4">
                          <thead>
                            <tr>
                              <th>Sl.No:</th>
                              <th>Subject</th>
                              <th>Government Orders</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                            {documents.length > 0 ? (
                              documents.map((doc, index) => {
                                const translation =
                                  doc.translations?.find(
                                    (t) => t.language_code === 'en'
                                  ) || doc.translations?.[0]

                                const file = doc.files?.[0]

                                return (
                                  <tr key={doc.id}>
                                    <td>{index + 1}</td>

                                    <td>{translation?.title || '-'}</td>

                                    <td>
                                      {translation?.description || '-'}
                                    </td>

                                    <td>
                                      {file?.file_url ? (
                                        <a
                                          href={file.file_url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="dld"
                                        >
                                          Download
                                        </a>
                                      ) : (
                                        '-'
                                      )}
                                    </td>
                                  </tr>
                                )
                              })
                            ) : (
                              <tr>
                                <td colSpan="4" className="text-center">
                                  No Data Available
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
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





// ---------------before api-----------------------------


// import Breadcrumb from '../components/common/Breadcrumb'

// export default function GovtOrders() {
//   return (
//     <> <Breadcrumb title="Government Orders" crumbs={[{ label: 'Downloads' }, { label: 'Govt Orders' }]} />
//     <section className="blog-wrapper section-padding-inner">
//       <div className="container">
//         <div className="news-area">
//           <div className="row">
//             <div className="col-12 ">
//               <div className="blog-post-details border-wrap mt-0">
//                 <div className="single-blog-post post-details mt-0 ">
//                   <div className="post-content pt-0">
//                     <div style={{ overflowX: "auto" }}>
//                       <table className="table matable table-bordered w-100 mb-4">
//                         <thead>
//                           <tr>
//                             <th>Sl.No:</th>
//                             <th>Subject</th>
//                             <th>Government Orders</th>
//                             <th>Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>1</td>
//                             <td>Formation of ISPK with HQ at Mattupatti</td>
//                             <td>Sept. 1963 – Bilateral agreement</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>2</td>
//                             <td>Declaring Indian Director, ISPK as Head of Department</td>
//                             <td>G.O. Ms.No. 693/64/Agri. dated 19.10.64</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>3</td>
//                             <td>Prescribing the qualification and method of appointment for various posts in ISP</td>
//                             <td>G.O. Ms.No. 174/67/Agri. dated 11.05.67</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>4</td>
//                             <td>Engagement of 50 Inseminators on contract</td>
//                             <td>G.O. Ms.No. 220/68/Agri. dated 16.04.68</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>5</td>
//                             <td>Regularisation of temporary workers of ISP</td>
//                             <td>G.O. Rt.No. 178/70 /Agri. dated 18.04.70</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>6</td>
//                             <td>
//                               Special Employment Programme of Kerala for 1972-73 – Dairy Development Schemes for improving milk
//                               production potential of cows (SEP)
//                             </td>
//                             <td>G.O. Ms.No. 278/72/AD dated 21.08.1972</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>7</td>
//                             <td>
//                               Declaration of ISPK as a de facto separate Department and option of employees obtained
//                             </td>
//                             <td>G.O. Ms.No. 104/74/Agri. dated 29.03.74</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>8</td>
//                             <td>Finalization of seniority list of ISP department</td>
//                             <td>G.O. Ms.No. 34/75/Agri. dated 07.02.75</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>9</td>
//                             <td>Formation of KLD & MM Board</td>
//                             <td>G.O. Ms.No. 196/75/AD dated 25.06.1975</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>10</td>
//                             <td>
//                               KLD & MMB – transfer of functions and units from Dept. of AH, DD & ISPK from 01.05.1976
//                             </td>
//                             <td>G.O. Ms.No. 157/76/AD dated 24.04.76</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>11</td>
//                             <td>Introduction of EPF Scheme in KLD & MMB</td>
//                             <td>1977-78</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>12</td>
//                             <td>
//                               Clarification on the status of ISP employees under KLD & MMB
//                             </td>
//                             <td>G.O. Rt.No. 440/77 /AD dated 05.02.1977</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>13</td>
//                             <td>PT scheme approved by GOI</td>
//                             <td>Letter no. 45-131-LDT dated 18/03/1977</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>14</td>
//                             <td>Appointments in the Board referred to PSC</td>
//                             <td>G.O. Rt.No. 419/72 /GAD dated 25.07.79</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>15</td>
//                             <td>
//                               Government decision regarding financing the non commercial operations of KLD & MMB
//                             </td>
//                             <td>G.O. Ms.No. 342/79/AD dated 01.09.79</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>16</td>
//                             <td>
//                               Sanction to follow KSR in the case of ISP employees until finalization of option
//                             </td>
//                             <td>G.O. Ms.No. 170/81/AD dated 01.05.81</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>17</td>
//                             <td>
//                               Introduction of standing orders for worker category employees
//                             </td>
//                             <td>
//                               Proceedings of certifying officer No. H3-12242/81 dated 03.07.82(09.08.82)
//                             </td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>18</td>
//                             <td>
//                               Merger of commercial units of KLD & MMB with the KCMMF
//                             </td>
//                             <td>G.O. Ms.No. 35/83/AD dated 15.02.83</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>19</td>
//                             <td>Renaming KLD & MMB as KLDB</td>
//                             <td>
//                               Certificate of Incorporation of the Registrar of companies dated 09.02.89
//                             </td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>20</td>
//                             <td>
//                               Introduction of payment system for the products supplied to AHD
//                             </td>
//                             <td>G.O. Ms.No. 42/90/AD dated 20.02.90</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>21</td>
//                             <td>Introduction of new staff structure w.e.f 01.04.90</td>
//                             <td>G.O. Ms.No. 181/90/AD dated 26.06.90</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>22</td>
//                             <td>Posting of CEO from the cadre of Board employee</td>
//                             <td>G.O. Rt.No. 1022/90 /AD dated 27.06.90</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>23</td>
//                             <td>Introduction of staff rules & regulations for Board employees</td>
//                             <td>G.O. Ms.No. 408/94/AD dated 23.11.94</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>24</td>
//                             <td>Decision to treat the ISP employees as deemed deputationists</td>
//                             <td>G.O. Rt.No. 510/95 /AD dated 27.03.95</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                           <tr>
//                             <td>25</td>
//                             <td>Settlement of assets and liabilities with GOK & KCMMF</td>
//                             <td>G.O. Ms.No. 239/98/AD dated 07.11.98</td>
//                             <td><a href="#" className="dld">Download</a></td>
//                           </tr>

//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section></>
//   );
// };


