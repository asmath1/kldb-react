import React, { useRef } from "react";
import Breadcrumb from "../components/common/Breadcrumb";

const timelineData = [
  { year: "1963", place: "Mattupatti Farm", image: "/assets/img/g6.jpg" },
  { year: "1966", place: "Base Farm, Peermedu", image: "/assets/img/g6.jpg" },
  {
    year: "1970",
    place: "Regional Semen Bank, Mavelikkara",
    image: "/assets/img/g6.jpg",
  },
  { year: "1975", place: "Kulathupuzha Farm", image: "/assets/img/g6.jpg" },
  { year: "1985", place: "Dhoni Farm, Palakkad", image: "/assets/img/g6.jpg" },
  { year: "1990", place: "New Expansion Unit", image: "/assets/img/g6.jpg" },
];

const Infrastructure = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 400;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <Breadcrumb
        title="Infrastructure Development"
        crumbs={[{ label: "Home" }, { label: "Infrastructure" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          {/* ARROWS */}
          <div className="timeline-wrapper">
            <button className="nav-btn left" onClick={() => scroll("left")}>
              ❮
            </button>

            <div className="timeline-slider" ref={scrollRef}>
              {timelineData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  {/* YEAR (TOP) */}
                  <div className="timeline-year">{item.year}</div>

                  {/* DOT */}
                  <div className="timeline-dot"></div>

                  {/* CARD (BOTTOM) */}
                  <div className="timeline-card">
                    <img src={item.image} alt={item.place} />
                    <p>{item.place}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="nav-btn right" onClick={() => scroll("right")}>
              ❯
            </button>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .timeline-wrapper {
          position: relative;
        }
          

        .timeline-slider {
          display: flex;
          gap: 40px;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 50px 40px;
          position: relative;
        }

        /* CENTER LINE */
       
          .timeline-slider::before {
            content: "";
            position: absolute;
            top: 120px;
            left: 0;
            height: 3px;
            width: 100%;
            background: #043d97;
            z-index: 0;
          }   
           .timeline-dot::before {
            content: "";
            position: absolute;
            top: 5px;
            left: 0;
            height: 3px;
            width: 420px;
            background: #043d97;
            z-index: 0;
          }
             .timeline-dot::after {
              content: "";
              position: absolute;
              top: 5px;
              left: 0;
              height: 3px;
              width: 220px;
              background: #043d97;
              z-index: 0;
           }
            .timeline-slider::-webkit-scrollbar {
              display: none;
            }
            .timeline-item {
              min-width: 380px;
              text-align: center;
              position: relative;
              z-index: 1;
            }

            /* YEAR (TOP) */
            .timeline-year {
              font-size: 18px;
              font-weight: bold;
              color: var(--theme-color);
              margin-bottom: 20px;
            }

            /* DOT */
            .timeline-dot {
              width: 14px;
              height: 14px;
              background: #043d97;

              border-radius: 50%;
              margin: 0 auto;
              position: relative;
              top: -5px;
              z-index: 2;
            }

            /* CARD BELOW LINE */
            .timeline-card {
              background: #f5f9ff;
              margin-top: 30px;
              padding: 12px;
              border-radius: 10px;
              box-shadow: 0 3px 10px rgba(0,0,0,0.08);
              transition: 0.3s;
            }

            .timeline-card:hover {
              transform: translateY(-5px);
            }

            .timeline-card img {
              width: 100%;
              
              object-fit: cover;
              border-radius: 6px;
              margin-bottom: 10px;
            }

            .timeline-card p {
              font-size: 14px;
              font-weight: 600;
              margin: 0;
            }

            /* NAV BUTTONS */
            .nav-btn {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background: rgb(255, 196, 0);
              color: #fff;
              border: none;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              cursor: pointer;
              z-index: 10;
            }

            .nav-btn.left {
              left: 0;
            }

            .nav-btn.right {
              right: 0;
            }

            .nav-btn:hover {
              background: #084298;
            }

            /* MOBILE */
            @media (max-width: 768px) {
              .timeline-item {
                min-width: 220px;
              }

              .timeline-slider {
                padding: 50px 20px;
              }
            }
      `}</style>
    </>
  );
};

export default Infrastructure;

// import React from "react";
// import Breadcrumb from "../components/common/Breadcrumb";

// const timelineData = [
//   {
//     year: "Mattupatti",
//     title: "Semen Production Station",
//     description:
//       "One of the premier semen production stations with modern facilities and international standards for breeding programs.",
//     image: "/assets/img/g6.jpg",
//   },
//   {
//     year: "Kulathupuzha",
//     title: "Bull Mother Farm",
//     description:
//       "Maintains elite animals and supports breeding programs with superior genetics.",
//     image: "/assets/img/g6.jpg",
//   },
//   {
//     year: "Dhoni",
//     title: "Semen Station",
//     description:
//       "Advanced semen production and storage unit supporting AI services across Kerala.",
//     image: "/assets/img/g6.jpg",
//   },
//   {
//     year: "Regional Centers",
//     title: "Regional Semen Banks",
//     description:
//       "Strategically located semen banks ensure timely supply to AI centers.",
//     image: "/assets/img/g6.jpg",
//   },
// ];

// const Infrastructure = () => {
//   return (
//     <>
//       <Breadcrumb
//         title="Infrastructure Development"
//         crumbs={[
//           { label: "Home" },
//           { label: "Infrastructure Development" },
//         ]}
//       />

//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="Infrastructuredvpmt_wrapper">

//             <section className="timeline">
//               <h2 className="text-center mb-5">
//                 Infrastructure Development
//               </h2>

//               <div className="timeline-container">

//                 {timelineData.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`timeline-item ${
//                       index % 2 === 0 ? "left" : "right"
//                     }`}
//                   >
//                     <div className="timeline-content">

//                       {/* IMAGE */}
//                       <div className="timeline-image">
//                         <img src={item.image} alt={item.title} />
//                       </div>

//                       {/* TEXT */}
//                       <div className="timeline-text">
//                         <h4>{item.year}</h4>
//                         <h3>{item.title}</h3>
//                         <p>{item.description}</p>
//                       </div>

//                     </div>
//                   </div>
//                 ))}

//               </div>
//             </section>

//           </div>
//         </div>
//       </section>

//       {/* INLINE CSS */}
//       <style>{`
//         .timeline-container {
//           position: relative;
//           max-width: 1100px;
//           margin: auto;
//         }

//         .timeline-container::after {
//           content: '';
//           position: absolute;
//           width: 4px;
//           background: #0b5ed7;
//           top: 0;
//           bottom: 0;
//           left: 50%;
//           margin-left: -2px;
//         }

//         .timeline-item {
//           padding: 20px 40px;
//           position: relative;
//           width: 50%;
//         }

//         .timeline-item.left {
//           left: 0;
//         }

//         .timeline-item.right {
//           left: 50%;
//         }

//         .timeline-content {
//           background: #fff;
//           padding: 20px;
//           border-radius: 10px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//         }

//         .timeline-image img {
//           width: 100%;
//           height: 220px;
//           object-fit: cover;
//           border-radius: 8px;
//           margin-bottom: 15px;
//         }

//         .timeline-text h4 {
//           color: #0b5ed7;
//           margin-bottom: 5px;
//         }

//         .timeline-text h3 {
//           font-size: 18px;
//           margin-bottom: 10px;
//         }

//         .timeline-text p {
//           font-size: 14px;
//           color: #555;
//         }

//         /* DOT */
//         .timeline-item::after {
//           content: '';
//           position: absolute;
//           width: 18px;
//           height: 18px;
//           right: -9px;
//           background: #0b5ed7;
//           border: 3px solid #fff;
//           top: 30px;
//           border-radius: 50%;
//           z-index: 1;
//         }

//         .timeline-item.right::after {
//           left: -9px;
//         }

//         /* MOBILE */
//         @media (max-width: 768px) {
//           .timeline-container::after {
//             left: 20px;
//           }

//           .timeline-item {
//             width: 100%;
//             padding-left: 50px;
//             padding-right: 20px;
//           }

//           .timeline-item.right {
//             left: 0;
//           }

//           .timeline-item::after {
//             left: 11px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Infrastructure;
