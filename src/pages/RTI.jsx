import { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import { useGetRTIQuery } from '../redux/services/bannerApi'

export default function RTI() {
  const { data: rtiData, isLoading, error } = useGetRTIQuery()
  const [open, setOpen] = useState(1)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  const activeSetting = rtiData?.settings?.[0]
  const roleSetting = rtiData?.settings?.[1]

  const officerGroups = activeSetting?.officer_groups || []
  const sectionsHeading = activeSetting?.sections_heading?.[0]
  const sections = activeSetting?.sections || []
  const roleSections = roleSetting?.sections || []

  return (
    <>
      <Breadcrumb title="RTI" crumbs={[{ label: 'RTI' }]} />

      {/* 🔹 INFO SECTION */}
      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="livestock_gallary_wrap">
            <h2 className="gallery-title">{activeSetting?.title}</h2>

            <div className="row">
              {officerGroups.slice(0, 2).map((group, index) => (
                <div key={group.id} className="col-md-6">
                  <div className="info">
                    <h2>{group.title}</h2>
                    {group.officers.map((officer) => (
                      <div key={officer.id}>
                        <h5>{officer.location}</h5>
                        <p>{officer.designation}</p>
                        <p>
                          Phone : {officer.phone?.split(',')[0]} <br />
                          {officer.phone?.split(',')[1] && `Mobile : ${officer.phone.split(',')[1]}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3>{officerGroups[2]?.title}</h3>
            <div className="grid-container mt-3">
              {officerGroups[2]?.officers.map((officer) => (
                <div key={officer.id} className="info grid-box">
                  <h6>{officer.location}</h6>
                  <p>{officer.designation}</p>
                  <p className="number-text">{officer.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 RTI HEADER SECTION */}
      {/* <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/assets/img/Qr code.jpg" alt="QR Code" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <p className="text-query">
                {sectionsHeading?.content}
              </p>
              <h6 className="email-text">kldboard8@gmail.com</h6>
            </div>
          </div>
        </div>
      </section> */}

      {/* 🔹 ACCORDION SECTION */}
      <section className="accordion_wrapperx">
        <div className="container">
          <div className="accordion">
            {sections.map((section) => (
              <div key={section.id}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${open === section.id ? '' : 'collapsed'}`}
                      onClick={() => setOpen(open === section.id ? null : section.id)}
                    >
                      {section.title}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${open === section.id ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 ROLE SECTION */}
      <section className="accordion_wrapperx">
        <div className="container">
          <h2 className="gallery-title mb-3" style={{ marginTop: '24px' }}>
          {roleSetting?.title}
          </h2>
          <div className="accordion">
            {roleSections.map((section) => (
              <div key={section.id}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${open === section.id ? '' : 'collapsed'}`}
                      onClick={() => setOpen(open === section.id ? null : section.id)}
                    >
                      {section.title}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${open === section.id ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}




// // -----------------------------------------------------------------

// import { useState } from 'react'
// import Breadcrumb from '../components/common/Breadcrumb'

// export default function RTI() {
//   const [open, setOpen] = useState('about')

//   const accordionItems = [
//     {
//       id: 'rti',
//       title: 'RIGHT TO INFORMATION',
//       content: (
//         <div className="row">
//           <div className="col-md-4">
//             <img src="/assets/img/Qr code.jpg" alt="QR Code" className="img-fluid" />
//           </div>
//           <div className="col-md-8">
//             <p className="text-query">
//               Please send your RTI query to the following email address:
//             </p>
//             <h6 className="email-text">kldboard8@gmail.com</h6>
//             <span className="text-size_small">
//               Note: Screenshot of the payment details should be uploaded along with RTI application.
//             </span>
//           </div>
//         </div>
//       )
//     },
//     {
//       id: 'about',
//       title: '1. ABOUT THE ACT',
//       content: (
//         <p>
//           The Government of India enacted the Right to Information Act, 2005 to promote
//           transparency and accountability in public authorities.
//         </p>
//       )
//     },
//     {
//       id: 'authority',
//       title: '2. PUBLIC AUTHORITY',
//       content: (
//         <ul>
//           <li>(a) by or under Constitution</li>
//           <li>(b) by Parliament law</li>
//           <li>(c) by State Legislature</li>
//           <li>(d) by Government notification</li>
//         </ul>
//       )
//     },
//     {
//       id: 'what',
//       title: '3. WHAT IS RIGHT TO INFORMATION ?',
//       content: (
//         <p>
//           Right to information includes access to documents, inspection, certified copies,
//           and electronic records held by public authorities.
//         </p>
//       )
//     },
//     {
//       id: 'exempt',
//       title: '4. INFORMATION EXEMPT FROM DISCLOSURE',
//       content: (
//         <p>
//           Sections 8 & 9 define categories of information exempt from disclosure.
//         </p>
//       )
//     },
//     {
//       id: 'who',
//       title: '5. WHO CAN REQUEST INFORMATION ?',
//       content: <p>Any citizen can request information with prescribed fee.</p>
//     },
//     {
//       id: 'whom',
//       title: '6. WHOM TO APPROACH ?',
//       content: (
//         <p>
//           APIOs and PIOs are designated to receive and process RTI applications.
//         </p>
//       )
//     },

//     // 🔹 ROLE SECTION
//     {
//       id: 'role-apio',
//       title: 'Asst. Public Information Officers (APIO)',
//       content: (
//         <p>
//           The public can submit applications to APIO offices, who will forward them
//           to PIO or Appellate Authority.
//         </p>
//       )
//     },
//     {
//       id: 'role-apio-2',
//       title: 'Asst. Public Information Officers (APIO)',
//       content: (
//         <p>
//           APIO receives and forwards requests and appeals immediately.
//         </p>
//       )
//     },
//     {
//       id: 'role-pio',
//       title: 'Public Information Officers (PIO)',
//       content: (
//         <p>
//           The PIO processes requests and must respond within 30 days.
//         </p>
//       )
//     },
//     {
//       id: 'role-appellate',
//       title: 'Appellate Authorities',
//       content: (
//         <p>
//           Appellate Authority handles appeals against PIO decisions.
//         </p>
//       )
//     },
//     {
//       id: 'procedure',
//       title: 'Procedure For Request Of Information',
//       content: (
//         <p>
//           Applications must be submitted in Malayalam or English as per Kerala Gazette rules
//           along with prescribed fees.
//         </p>
//       )
//     },
//     {
//       id: 'payment',
//       title: 'Mode of Payment of Fees under RTI Act',
//       content: (
//         <div>
//           <p>
//             Fees can be paid via cash (receipt) or Demand Draft/Bankers Cheque.
//           </p>

//           <h6 className="mt-2 mb-2">Bank Account Details</h6>
//           <p>Account Name : Kerala Livestock Development Board</p>
//           <p>Account Number: 57009288509</p>
//           <p>IFSC: SBIN0070212</p>
//         </div>
//       )
//     }
//   ]

//   return (
//     <>
//       <Breadcrumb title="RTI" crumbs={[{ label: 'RTI' }]} />

//       {/* 🔹 INFO SECTION */}
//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="livestock_gallary_wrap">

//             <h2 className="gallery-title">Right To Information</h2>

//             <div className="row">
//               <div className="col-md-6">
//                 <div className="info">
//                   <h2>Appellate Authority</h2>
//                   <h5>Dr. R. Rajeev</h5>
//                   <p>Managing Director</p>
//                   <p>KLDBoard</p>
//                   <p>
//                     Phone : 0471 2449138 <br />
//                     Mobile : 09446004275
//                   </p>
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <div className="info">
//                   <h2>State Public Information Officer</h2>
//                   <h5>Dr. D. Jayakumar</h5>
//                   <p>Manager Personnel</p>
//                   <p>KLDBoard</p>
//                   <p>
//                     Phone : 0471 2449138 <br />
//                     Mobile : 09446004296
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <h3>Assistant Public Information Officers</h3>

//             <div className="grid-container mt-3">
//               {[
//                 { loc: 'Muvattupuzha', role: 'Manager(LP)', ph: '0485 – 2812763' },
//                 { loc: 'Puthur', role: 'Unit Head', ph: '0487 – 2316487/2316485' },
//                 { loc: 'Kolahalamedu', role: 'Manager (AH)', ph: '0487 – 2316487/2316485' },
//                 { loc: 'Mattupatty', role: 'Manager(AH)', ph: '04865 – 242202' },
//                 { loc: 'Dhoni', role: 'Manager(AH)', ph: '0491 – 2556127' },
//                 { loc: 'Kulathupuzha', role: 'Deputy General Manager(AH)', ph: '0475 -2317547' },
//               ].map((a, i) => (
//                 <div key={i} className="info grid-box">
//                   <h6>{a.loc}</h6>
//                   <p>{a.role}</p>
//                   <p className="number-text">{a.ph}</p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 🔹 ACCORDION SECTION */}
//       <section className="accordion_wrapperx">
//         <div className="container">

//           {/* <h2 className="gallery-title mb-3">
//             Role Of Public Information Officers
//           </h2> */}

//           <div className="accordion">
//             {accordionItems.map((item) => (
//               <div key={item.id}>
//                 <div className="accordion-item">

//                   <h2 className="accordion-header">
//                     <button
//                       className={`accordion-button ${open === item.id ? '' : 'collapsed'}`}
//                       onClick={() => setOpen(open === item.id ? null : item.id)}
//                     >
//                       {item.title}
//                     </button>
//                   </h2>

//                   <div className={`accordion-collapse collapse ${open === item.id ? 'show' : ''}`}>
//                     <div className="accordion-body">
//                       {item.content}
//                     </div>
//                   </div>

//                 </div>

//                 {item.id === 'whom' && (
//                   <h2 className="gallery-title mb-3" style={{ marginTop: '24px' }}>
//                     Role Of Public Information Officers
//                   </h2>
//                 )}
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }



