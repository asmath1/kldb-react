import { useState, useMemo } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetKeyPeopleContactsQuery } from "../redux/services/bannerApi";

const BASE = "https://livestock.cditproject.org";

export default function Contact() {
  const [open, setOpen] = useState(null);
  const { data, isLoading, isError } = useGetKeyPeopleContactsQuery();

  const processedData = useMemo(() => {
    if (!data) return { topProfiles: [], teamGrid: [], units: [] };

    // ✅ Remove duplicates using ID
    const uniqueProfiles = Array.from(
      new Map(
        (data?.board_of_directors?.profiles || []).map((p) => [p.id, p])
      ).values()
    );

    // ✅ Top 2 Profiles
    const topProfiles = uniqueProfiles.slice(0, 2).map((p) => ({
      id: p.id,
      img: `${BASE}${p.photo}`,
      name: p.name,
      bio: p.bio,
      designation: p.designation,
      phones: p.phones || [],
      emails: p.emails || [],
    }));

    // ✅ Remaining Profiles (NO DUPLICATION)
    const teamGrid = uniqueProfiles.slice(2).map((p) => ({
      id: p.id,
      img: `${BASE}${p.photo}`,
      name: p.name,
      title: p.designation,
      bio: p.bio,
      phone: p.phones?.[0] || "-",
      mail: p.emails?.[0] || "-",
    }));

    // ✅ Units Data
    const units =
      data?.units?.map((unit) => ({
        id: unit.category.id,
        name: unit.category.name,
        slug: unit.category.slug,
        description: unit.category.description,
        profiles: (unit.profiles || []).map((p) => ({
          id: p.id,
          img: `${BASE}${p.photo}`,
          name: p.name,
          title: p.designation,
          phone: p.phones?.[0] || "-",
          mail: p.emails?.[0] || "-",
        })),
      })) || [];

    return { topProfiles, teamGrid, units };
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load data.</p>;

  return (
    <>
      <Breadcrumb
        title="Board of Directors"
        crumbs={[{ label: "Board of Directors" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="text-center post-content pt-0">

                      <h2 className="wow fadeInDown">
                        Board of Directors
                      </h2>
                      <br />

                      <div className="contactT">

                        {/* 🔹 TOP PROFILES */}
                        <div className="top-profiles mt-0">
                          {processedData.topProfiles.map((profile) => (
                            <div key={profile.id} className="profile">
                              <img src={profile.img} alt={profile.name} />
                              <div className="name">{profile.name}</div>
                              <div className="role">
                                <h6>{profile.designation}</h6>
                                {profile.bio && (
                                  <small>{profile.bio}</small>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* 🔹 TEAM GRID */}
                        <div className="team-panel">
                          <div className="team-grid">
                            {processedData.teamGrid.map((item) => (
                              <div key={item.id} className="card">
                                <img src={item.img} alt={item.name} />
                                <div className="name">{item.name}</div>
                                <div className="title">{item.title}</div>
                                <div className="infox">
                                  <div className="phm">{item.phone}</div>
                                  <div className="mail">{item.mail}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 🔹 ACCORDION */}
                        <div className="accord">
                          <div className="accordion">
                            {processedData.units.map((unit) => (
                              <div key={unit.id} className="accordion-item">

                                <button
                                  className={`accordion-button ${
                                    open === unit.slug ? "" : "collapsed"
                                  }`}
                                  onClick={() =>
                                    setOpen(
                                      open === unit.slug ? null : unit.slug
                                    )
                                  }
                                >
                                  <div>
                                    <div className="iconc">
                                      📍 {unit.name}
                                    </div>
                                    <p className="m-0 ads">
                                      {unit.description || ""}
                                    </p>
                                  </div>
                                </button>

                                <div
                                  className={`accordion-collapse ${
                                    open === unit.slug ? "show" : "collapse"
                                  }`}
                                >
                                  <div className="accordion-body">
                                    {unit.profiles.length > 0 ? (
                                      <div className="team-grid2">
                                        {unit.profiles.map((profile) => (
                                          <div
                                            key={profile.id}
                                            className="card"
                                          >
                                            <img
                                              src={profile.img}
                                              alt={profile.name}
                                            />
                                            <div className="name">
                                              {profile.name}
                                            </div>
                                            <div className="title">
                                              {profile.title}
                                            </div>
                                            <div className="infox">
                                              <div className="phm">
                                                {profile.phone}
                                              </div>
                                              <div className="mail">
                                                {profile.mail}
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <p>
                                        No staff information available
                                      </p>
                                    )}
                                  </div>
                                </div>

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
          </div>
        </div>
      </section>
    </>
  );
}


// import { useState, useMemo } from "react";
// import Breadcrumb from "../components/common/Breadcrumb";
// import { useGetKeyPeopleContactsQuery } from "../redux/services/bannerApi";

// export default function Contact() {
//   const [open, setOpen] = useState("one");
//   const { data, isLoading, isError } = useGetKeyPeopleContactsQuery();

//   const toggle = (id) => {
//     setOpen(open === id ? null : id);
//   };

//   const processedData = useMemo(() => {
//     if (!data) return { topProfiles: [], teamGrid: [], units: [] };

//     const topProfiles =
//       data?.board_of_directors?.profiles?.slice(0, 2).map((p) => ({
//         id: p.id,
//         img: `https://livestock.cditproject.org${p.photo}`,
//         name: p.name,
//         bio: p.bio,
//         designation: p.designation,
//         phones: p.phones || [],
//         emails: p.emails || [],
//       })) || [];

//     const teamGrid =
//       data?.board_of_directors?.profiles?.map((p) => ({
//         id: p.id,
//         img: `https://livestock.cditproject.org${p.photo}`,
//         name: p.name,
//         title: p.designation,
//         bio: p.bio,
//         phone: p.phones?.[0] || "-",
//         mail: p.emails?.[0] || "-",
//       })) || [];

//     const units =
//       data?.units?.map((unit) => ({
//         id: unit.category.id,
//         name: unit.category.name,
//         slug: unit.category.slug,
//         description: unit.category.description,
//         profiles: unit.profiles.map((p) => ({
//           id: p.id,
//           img: `https://livestock.cditproject.org${p.photo}`,
//           name: p.name,
//           title: p.designation,
//           phone: p.phones?.[0] || "-",
//           mail: p.emails?.[0] || "-",
//         })),
//       })) || [];

//     return { topProfiles, teamGrid, units };
//   }, [data]);

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Failed to load data.</p>;

//   return (
//     <>
//       <Breadcrumb title="Board of Directors" crumbs={[{ label: "Board of Directors" }]} />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="text-center post-content pt-0">

//                       <h2 className="wow fadeInDown">Board of Directors</h2>
//                       <br />

//                       <div className="contactT">

//                         {/* TOP PROFILES */}
//                         <div className="top-profiles mt-0">
//                           {processedData.topProfiles.map((profile) => (
//                             <div key={profile.id} className="profile">
//                               <img src={profile.img} alt={profile.name} />
//                               <div className="name">{profile.name}</div>
//                               <div className="role">
//                                 <h6>{profile.designation}</h6>
//                                 {profile.bio && <small>{profile.bio}</small>}
//                               </div>
//                             </div>
//                           ))}
//                         </div>

//                         {/* TEAM GRID */}
//                         <div className="team-panel">
//                           <div className="team-grid">
//                             {processedData.teamGrid.map((item) => (
//                               <div key={item.id} className="card">
//                                 <img src={item.img} alt={item.name} />
//                                 <div className="name">{item.name}</div>
//                                 <div className="title">{item.title}</div>
//                                 <div className="infox">
//                                   <div className="phm">{item.phone}</div>
//                                   <div className="mail">{item.mail}</div>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* ACCORDION */}
//                         <div className="accord">
//                           <div className="accordion">
//                             {processedData.units.map((unit, unitIndex) => (
//                               <div key={unit.id} className="accordion-item">
//                                 <button
//                                   className={`accordion-button ${open === unit.slug ? "" : "collapsed"}`}
//                                   onClick={() => open === unit.slug ? setOpen(null) : setOpen(unit.slug)}
//                                 >
//                                   <div>
//                                     <div className="iconc">📍 {unit.name}</div>
//                                     <p className="m-0 ads">{unit.description || ""}</p>
//                                   </div>
//                                 </button>

//                                 <div className={`accordion-collapse ${open === unit.slug ? "show" : "collapse"}`}>
//                                   <div className="accordion-body">
//                                     {unit.profiles && unit.profiles.length > 0 ? (
//                                       <div className="team-grid2">
//                                         {unit.profiles.map((profile) => (
//                                           <div key={profile.id} className="card">
//                                             <img src={profile.img} alt={profile.name} />
//                                             <div className="name">{profile.name}</div>
//                                             <div className="title">{profile.title}</div>
//                                             <div className="infox">
//                                               <div className="phm">{profile.phone}</div>
//                                               <div className="mail">{profile.mail}</div>
//                                             </div>
//                                           </div>
//                                         ))}
//                                       </div>
//                                     ) : (
//                                       <p>No staff information available</p>
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>
//                             ))}
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
//   );
// }





// import { useState } from "react";
// import Breadcrumb from "../components/common/Breadcrumb";

// export default function Contact() {
//   const [open, setOpen] = useState("one");

//   const toggle = (id) => {
//     setOpen(open === id ? null : id);
//   };

//   return (
//     <>
//       <Breadcrumb title="Board of Directors" crumbs={[{ label: "Board of Directors" }]} />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="news-area">
//             <div className="row">
//               <div className="col-12">
//                 <div className="blog-post-details border-wrap mt-0">
//                   <div className="single-blog-post post-details mt-0">
//                     <div className="text-center post-content pt-0">

//                       <h2 className="wow fadeInDown">Board of Directors</h2>
//                       <br />

//                       <div className="contactT">

//                         {/* TOP PROFILES */}
//                         <div className="top-profiles mt-0">
//                           <div className="profile">
//                             <img src="/assets/img/cd3.jpg" alt="Chairman" />
//                             <div className="name">Shri. Minhaj Alam IAS</div>
//                             <div className="role">
//                               <h6>Chairman, KLDB Board</h6>
//                               <small>(Additional Chief Secretary AH & DD)</small>
//                             </div>
//                           </div>

//                           <div className="profile">
//                             <img src="/assets/img/cd4.png" alt="Managing Director" />
//                             <div className="name">Dr. R Rajeev</div>
//                             <div className="role">
//                               <h6>Managing Director, KLDB Board</h6>
//                             </div>
//                           </div>
//                         </div>

//                         {/* TEAM GRID */}
//                         <div className="team-panel">
//                           <div className="team-grid">

//                             {[
//                               {
//                                 name: "Dr. R Rajeev",
//                                 title: "Managing Director",
//                                 img: "/assets/img/cd4.png",
//                                 phone: "0471-2440920 / 09446004275",
//                                 mail: "mdkldboard@gmail.com",
//                               },
//                               {
//                                 name: "Dr. T Sajeev Kumar",
//                                 title: "General Manager",
//                                 img: "/assets/img/sajeevkumar.jpg",
//                                 phone: "0471 2440920/09446004276",
//                                 mail: "gmkldboard@gmail.com",
//                               },
//                               {
//                                 name: "Sri. Karthikeyan J",
//                                 title: "Dy. General Manager (FD)",
//                                 img: "/assets/img/karthikeyan.jpeg",
//                                 phone: "0471-2440920 / 09446004277",
//                                 mail: "dgmkldfd@gmail.com",
//                               },
//                               {
//                                 name: "Dr. Balu Bhaskar",
//                                 title: "Dy.General Manager (AH)",
//                                 img: "/assets/img/balu.jpg",
//                                 phone: "0471-2440920 / 09446226600",
//                                 mail: "balubhaskar321@gmail.com",
//                               },
//                               {
//                                 name: "Dr. D Jayakumar",
//                                 title: "Manager Personnel",
//                                 img: "/assets/img/jayakumar.jpg",
//                                 phone: "0471-2440920 / 09446004296",
//                                 mail: "jk.damodhar@gmail.com",
//                               },
//                             ].map((item, i) => (
//                               <div key={i} className="card">
//                                 <img src={item.img} alt={item.name} />
//                                 <div className="name">{item.name}</div>
//                                 <div className="title">{item.title}</div>
//                                 <div className="infox">
//                                   <div className="phm">{item.phone}</div>
//                                   <div className="mail">{item.mail}</div>
//                                 </div>
//                               </div>
//                             ))}

//                           </div>
//                         </div>

//                         {/* ACCORDION */}
//                         <div className="accord">
//                           <div className="accordion">

//                             {/* ITEM 1 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "one" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("one")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Mattupatti</div>
//                                   <p className="m-0 ads">MATTUPATTI P.O , MUNNAR, IDUKKI, PIN: 685616</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "one" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">

//                                   <div className="team-grid2">
//                                     <div className="card">
//                                       <img src="/assets/img/Manager-mtpty-232x300.jpg" alt="" />
//                                       <div className="name">Dr. Keshavadas V P</div>
//                                       <div className="title">Manager (AH)</div>
//                                       <div className="infox">
//                                         <div className="phm">04865-242202 / 09446004281</div>
//                                         <div className="mail">indoswisskldb@gmail.com</div>
//                                       </div>
//                                     </div>

//                                     <div className="card">
//                                       <img src="/assets/img/PRAVEEN.K.K-214x300.jpg" alt="" />
//                                       <div className="name">Dr. Praveen Kumar</div>
//                                       <div className="title">Manager (Training) ic</div>
//                                       <div className="infox">
//                                         <div className="phm">04865 242202 / 9446004283</div>
//                                         <div className="mail">kldbtcmtpty@gmail.com</div>
//                                       </div>
//                                     </div>
//                                   </div>

//                                 </div>
//                               </div>
//                             </div>

//                             {/* ITEM 2 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "two" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("two")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Kulathupuzha</div>
//                                   <p className="m-0 ads">KULATHUPUZHA, KOLLAM, PIN: 691310</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "two" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">Same content as above (you can customize)</div>
//                               </div>
//                             </div>

//                             {/* ITEM 3 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "three" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("three")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Dhoni</div>
//                                   <p className="m-0 ads">PALAKKAD, PIN: 678009</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "three" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">Demo</div>
//                               </div>
//                             </div>

//                             {/* ITEM 4 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "four" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("four")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Thrissur</div>
//                                   <p className="m-0 ads">KAINOOR P O, PIN: 680014</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "four" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">Demo</div>
//                               </div>
//                             </div>

//                             {/* ITEM 5 */}
//                             <div className="accordion-item">
//                               <button
//                                 className={`accordion-button ${open === "five" ? "" : "collapsed"}`}
//                                 onClick={() => toggle("five")}
//                               >
//                                 <div>
//                                   <div className="iconc">📍 Muvattupuzha</div>
//                                   <p className="m-0 ads">MUDAVOOR P O, PIN: 686669</p>
//                                 </div>
//                               </button>

//                               <div className={`accordion-collapse ${open === "five" ? "show" : "collapse"}`}>
//                                 <div className="accordion-body">Demo</div>
//                               </div>
//                             </div>

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
//   );
// }

