import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetTendersQuery } from "../redux/services/bannerApi";

export default function Tenders() {
  const { data, isLoading, error } = useGetTendersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const tenders = data?.documents || [];

  // 🔹 Date formatter (YYYY-MM-DD → DD.MM.YYYY)
  const formatDate = (date) => {
    if (!date) return "-";
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, "0")}.${String(
      d.getMonth() + 1
    ).padStart(2, "0")}.${d.getFullYear()}`;
  };

  return (
    <>
      <Breadcrumb title="Tenders" crumbs={[{ label: "Tenders" }]} />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      <table className="table matable table-bordered w-100 mb-4">
                        <thead>
                          <tr>
                            <th>Sl.No</th>
                            <th>Item No</th>
                            <th>Last Date</th>
                            <th>Attached File</th>
                          </tr>
                        </thead>

                        <tbody>
                          {tenders.length > 0 ? (
                            tenders.map((item, index) => {
                              const translation =
                                item.translations?.find(
                                  (t) => t.language_code === "en"
                                ) || item.translations?.[0];

                              const file = item.files?.[0];

                              return (
                                <tr key={item.id}>
                                  <td>{index + 1}</td>

                                  <td>{translation?.title || "-"}</td>

                                  <td>{formatDate(item.document_date)}</td>

                                  <td>
                                    {file?.file_url ? (
                                      <a
                                        href={file.file_url}
                                        className="dld"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Download
                                      </a>
                                    ) : (
                                      "-"
                                    )}
                                  </td>
                                </tr>
                              );
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
      </section>
    </>
  );
}


// -------------------before api------------------------------

// import React from "react";
// import Breadcrumb from "../components/common/Breadcrumb";

// const tenders = [
//   {
//     id: "",
//     title: "Tender notice and form for Supply of Smart (Electronics) Weighing Scales (SWS)",
//     date: "16.03.2026",
//   },
//   {
//     id: 1,
//     title: "Date Extended Corrigendum for civil works at Kulathupuzha Farm",
//     date: "10.03.2026",
//   },
//   {
//     id: 2,
//     title: "Short Tender Notice – Supply of Bailed Paddy Straw",
//     date: "16.03.2026",
//   },
//   {
//     id: 3,
//     title: "e-Tender notice for civil works",
//     date: "04.03.2026",
//   },
//   {
//     id: 4,
//     title: "Tender notice for supply of French Mini Straw 0.25ml capacity",
//     date: "16.03.2026",
//   },
//   {
//     id: 5,
//     title: "Tender notice and form for the supply of Aluminium irrigation pipes 50 Nos for KLD Board Ltd., Kolahalamedu, Idukki dist",
//     date: "23.02.2026",
//   },
//   {
//     id: 6,
//     title: "Tender Form for Civil Works for the modification in RSB Building, Muvattupuzha",
//     date: "26.02.2026",
//   },
//   {
//     id: 7,
//     title: "eTender notice for supply of Individually packed Non-split type A.I. Sheaths (0.25ml)",
//     date: "24.02.2026",
//   },
//   {
//     id: 8,
//     title: "Tender form and notice for Supply and Installation of Subsoil Drainage System",
//     date: "25.02.2026",
//   },
//   {
//     id: 9,
//     title: "Tender Form and notice for transportation of Frozen Semen, Liquid Nitrogen etc",
//     date: "19.02.2026",
//   },
//   {
//     id: 10,
//     title: "Auction Notice for Scrap Items at Kulathupuzha Unit",
//     date: "18.02.2026",
//   },
// ];

// export default function Tenders() {
//   return (
//     <>
//       <Breadcrumb title="Tenders" crumbs={[{ label: "Tenders" }]} />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="post-content pt-0">

//                       <table className="table matable table-bordered w-100 mb-4">
//                         <thead>
//                           <tr>
//                             <th>Sl.No</th>
//                             <th>Item No</th>
//                             <th>Last Date</th>
//                             <th>Attached File</th>
//                           </tr>
//                         </thead>

//                         <tbody>
//                           {tenders.map((item, index) => (
//                             <tr key={index}>
//                               <td>{item.id || index + 1}</td>
//                               <td>{item.title}</td>
//                               <td>{item.date}</td>
//                               <td>
//                                 <a
//                                   href="#"
//                                   className="dld"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   Download
//                                 </a>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>

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