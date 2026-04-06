import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";

const GalleryInner2 = () => {
  const images = [
    "/assets/img/archive_1.jpg",
    "/assets/img/archive_2.jpg",
    "/assets/img/archive_3.jpg",
    "/assets/img/archive_4.jpg",
    "/assets/img/archive_5.jpg",
    "/assets/img/archive_2.jpg",
    "/assets/img/archive_3.jpg",
    "/assets/img/archive_4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
     <Breadcrumb
            title="Archive Photos"
            crumbs={[
              { label: "Downloads" },
              { label: "Media" },
              { label: "Photo gallery" },
            ]}
          />
    <section className="gallery-inner_wrap">
      {/* SCHEME SECTION */}
      <div className="scheme-section">
        <div className="scheme-title">
          മൃഗസംരക്ഷണ മേഖലയിലെ പുതിയ കേന്ദ്ര പദ്ധതികൾ
        </div>

        {/* CARD 1 */}
        <div className="scheme-card">
          <div className="scheme-number">1</div>
          <div className="scheme-content">
            <h3>Closure of NLM-EDP Portal for receiving new applications</h3>
            <p>
              Department of Animal Husbandry and Dairying, Government of India
              has decided that no more new applications will be entertained under
              the NLM-EDP programme due to administrative reasons.
            </p>
          </div>
          <div className="scheme-download">
            <a href="#" className="download-btn">
              <i className="fa fa-download"></i> Download PDF
            </a>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="scheme-card">
          <div className="scheme-number">2</div>
          <div className="scheme-content">
            <div className="scheme-highlight">
              NATIONAL LIVESTOCK MISSION 2021-26
            </div>
          </div>
          <div className="scheme-download">
            <a href="#" className="download-btn">
              <i className="fa fa-download"></i> Download PDF
            </a>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="scheme-card">
          <div className="scheme-number">3</div>
          <div className="scheme-content">
            <div className="scheme-highlight">
              മൃഗസംരക്ഷണ മേഖലയിലെ പുതിയ കേന്ദ്ര പദ്ധതികൾ
            </div>
          </div>
          <div className="scheme-download">
            <a href="#" className="download-btn">
              <i className="fa fa-download"></i> Download PDF
            </a>
          </div>
        </div>

        {/* SUPPORTING */}
        <div className="supporting-title">Supporting Documents</div>

        <div className="scheme-card">
          <div className="scheme-number">1</div>
          <div className="scheme-content">
            <h3>Comprehensive NLM Guidelines January, 2025</h3>
          </div>
          <div className="scheme-download">
            <a href="#" className="download-btn">
              <i className="fa fa-download"></i> Download PDF
            </a>
          </div>
        </div>

        <div className="scheme-card">
          <div className="scheme-number">2</div>
          <div className="scheme-content">
            <h3>Bank Mandate Form</h3>
          </div>
          <div className="scheme-download">
            <a href="#" className="download-btn">
              <i className="fa fa-download"></i> Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <h2 className="gallery-title-inner">Archive Photos</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => openLightbox(index)}
            style={{ cursor: "pointer" }}
          >
            <img src={img} alt={`archive-${index}`} />
          </div>
        ))}
      </div>

      {/* MODERN LIGHTBOX */}
      {currentIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* CLOSE */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: 20,
              right: 30,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 32,
              cursor: "pointer",
            }}
          >
            ×
          </button>

          {/* PREV */}
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 40,
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={images[currentIndex]}
            alt="lightbox"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />

          {/* NEXT */}
          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 40,
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
    </>
  );
};

export default GalleryInner2;



// import React, { useState } from "react";

// const GalleryInner2 = () => {
//   const images = [
//     "assets/img/archive_1.jpg",
//     "assets/img/archive_2.jpg",
//     "assets/img/archive_3.jpg",
//     "assets/img/archive_4.jpg",
//     "assets/img/archive_5.jpg",
//     "assets/img/archive_2.jpg",
//     "assets/img/archive_3.jpg",
//     "assets/img/archive_4.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(null);

//   const openLightbox = (index) => setCurrentIndex(index);
//   const closeLightbox = () => setCurrentIndex(null);

//   const prevImage = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   const nextImage = () => {
//     setCurrentIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="gallery-inner_wrap">

//       {/* SCHEME SECTION */}
//       <div className="scheme-section">

//         <div className="scheme-title">
//           മൃഗസംരക്ഷണ മേഖലയിലെ പുതിയ കേന്ദ്ര പദ്ധതികൾ
//         </div>

//         {/* CARD 1 */}
//         <div className="scheme-card">
//           <div className="scheme-number">1</div>

//           <div className="scheme-content">
//             <h3>Closure of NLM-EDP Portal for receiving new applications</h3>
//             <p>
//               Department of Animal Husbandry and Dairying, Government of India has decided that no more new applications will be entertained under the NLM-EDP programme due to administrative reasons. The portal shows that the application is closed till further order from DAHD.
//             </p>
//           </div>

//           <div className="scheme-download">
//             <a href="#" className="download-btn">
//               <i className="fa fa-download"></i> Download PDF
//             </a>
//           </div>
//         </div>

//         {/* CARD 2 */}
//         <div className="scheme-card">
//           <div className="scheme-number">2</div>

//           <div className="scheme-content">
//             <div className="scheme-highlight">
//               NATIONAL LIVESTOCK MISSION 2021-26
//             </div>
//           </div>

//           <div className="scheme-download">
//             <a href="#" className="download-btn">
//               <i className="fa fa-download"></i> Download PDF
//             </a>
//           </div>
//         </div>

//         {/* CARD 3 */}
//         <div className="scheme-card">
//           <div className="scheme-number">3</div>

//           <div className="scheme-content">
//             <div className="scheme-highlight">
//               മൃഗസംരക്ഷണ മേഖലയിലെ പുതിയ കേന്ദ്ര പദ്ധതികൾ
//             </div>
//           </div>

//           <div className="scheme-download">
//             <a href="#" className="download-btn">
//               <i className="fa fa-download"></i> Download PDF
//             </a>
//           </div>
//         </div>

//         {/* SUPPORTING */}
//         <div className="supporting-title">Supporting Documents</div>

//         <div className="scheme-card">
//           <div className="scheme-number">1</div>
//           <div className="scheme-content">
//             <h3>Comprehensive NLM Guidelines January, 2025</h3>
//           </div>
//           <div className="scheme-download">
//             <a href="#" className="download-btn">
//               <i className="fa fa-download"></i> Download PDF
//             </a>
//           </div>
//         </div>

//         <div className="scheme-card">
//           <div className="scheme-number">2</div>
//           <div className="scheme-content">
//             <h3>Bank Mandate Form</h3>
//           </div>
//           <div className="scheme-download">
//             <a href="#" className="download-btn">
//               <i className="fa fa-download"></i> Download PDF
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* GALLERY */}
//       <h2 className="gallery-title-inner">Archive Photos</h2>

//       <div className="gallery-grid">
//         {images.map((img, index) => (
//           <div
//             className="gallery-card"
//             key={index}
//             onClick={() => openLightbox(index)}
//             style={{ cursor: "pointer" }}
//           >
//             <img src={img} alt={`archive-${index}`} />
//           </div>
//         ))}
//       </div>

//       {/* LIGHTBOX */}
//       {currentIndex !== null && (
//         <div className="lightbox" id="galleryLightbox">
//           <span className="close" onClick={closeLightbox}>
//             &times;
//           </span>

//           <span className="prev" onClick={prevImage}>
//             &#10094;
//           </span>

//           <img
//             id="galleryLightboxImg"
//             src={images[currentIndex]}
//             alt="lightbox"
//           />

//           <span className="next" onClick={nextImage}>
//             &#10095;
//           </span>
//         </div>
//       )}
//     </section>
//   );
// };

// export default GalleryInner2;