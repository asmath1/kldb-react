import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetRecruitmentQuery } from "../redux/services/bannerApi";

const Recruitment = () => {
  const { data, isLoading, error } = useGetRecruitmentQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const careers = data?.documents || [];

  // 🔹 Optional date formatter
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, "0")}-${String(
      d.getMonth() + 1
    ).padStart(2, "0")}-${d.getFullYear()}`;
  };

  return (
    <>
      <Breadcrumb
        title="Recruitment"
        crumbs={[{ label: "Home" }, { label: "Recruitment" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <div className="career">
                        <div className="career-list">
                          <ul className="list-unstyled mb-0">
                            {careers.length > 0 ? (
                              careers.map((item, index) => {
                                const translation =
                                  item.translations?.find(
                                    (t) => t.language_code === "en"
                                  ) || item.translations?.[0];

                                const file = item.files?.[0];

                                return (
                                  <li
                                    key={item.id}
                                    className="career-item py-3 border-bottom d-flex justify-content-between align-items-center"
                                  >
                                    <div className="career-left">
                                      <a
                                        href={file?.file_url || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="career-title"
                                      >
                                        {translation?.title || "-"}
                                      </a>

                                      {item.document_date && (
                                        <>
                                          <br />
                                          <small>
                                            <i>{formatDate(item.document_date)}</i>
                                          </small>
                                        </>
                                      )}
                                    </div>

                                    <div className="career-right">
                                      {file?.file_url ? (
                                        <a
                                          href={file.file_url}
                                          className="dld download-link"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          Download PDF
                                        </a>
                                      ) : (
                                        "-"
                                      )}
                                    </div>
                                  </li>
                                );
                              })
                            ) : (
                              <li className="text-center py-3">
                                No Data Available
                              </li>
                            )}
                          </ul>
                        </div>
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
  );
};

export default Recruitment;

// -------------------before api---------------------------

// import React from "react";
// import Breadcrumb from "../components/common/Breadcrumb";

// const Recruitment = () => {
//   const careers = [
//     {
//       title:
//         "LIST OF CANDIDATES FOR APPOINTMENT AS ASSISTANT MANAGER(FD) AFTER APPLYING COMMUNAL ROTATION RULES",
//       date: "12-05-2025",
//     },
//     {
//       title: "RANKLIST OF ASSISTANT MANAGER(FD) PUBLISHED",
//       date: "12-05-2025",
//     },
//     {
//       title:
//         "Applications are invited for the post of Deputy General Manager (F&A)",
//       date: "12-05-2025",
//     },
//     {
//       title:
//         "WRITTEN TEST FOR ASSISTANT MANAGER (FD) IS SCHEDULED TO BE HELD ON 23.08.2025",
//       date: "12-05-2025",
//     },
//     {
//       title:
//         "Applications are invited for the post of Assistant Manager (Fodder Development)",
//       date: "12-05-2025",
//     },
//     {
//       title:
//         "Appointment Chart for the post of Assistant Manager(AH)",
//       date: "12-05-2025",
//     },
//     {
//       title: "Genomics Training Programme",
//       date: "",
//     },
//     {
//       title:
//         "Ranklist of unskilled workers at Kulathupuzha Farm",
//       date: "12-05-2025",
//     },
//     {
//       title:
//         "Rank list for the post of Assistant Managers(AH) in the Board.",
//       date: "12-05-2025",
//     },
//   ];

//   return (
//     <>
//       <Breadcrumb
//         title="Recruitment"
//         crumbs={[
//           { label: "Home" },
//           { label: "Recruitment" },
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
//                       <div className="career">
//                         <div className="career-list">
//                           <ul className="list-unstyled mb-0">
//                             {careers.map((item, index) => (
//                               <li
//                                 key={index}
//                                 className="career-item py-3 border-bottom d-flex justify-content-between align-items-center"
//                               >
//                                 <div className="career-left">
//                                   <a href="#" className="career-title">
//                                     {item.title}
//                                   </a>

//                                   {item.date && (
//                                     <>
//                                       <br />
//                                       <small>
//                                         <i>{item.date}</i>
//                                       </small>
//                                     </>
//                                   )}
//                                 </div>

//                                 <div className="career-right">
//                                   <a
//                                     href="#"
//                                     className="dld download-link"
//                                   >
//                                     Download PDF
//                                   </a>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
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

// export default Recruitment;