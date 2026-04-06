import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";

const GalleryInner1 = () => {
  const images = [
    "/assets/img/gallery/2.jpg",
    "/assets/img/gallery/3.jpg",
    "/assets/img/gallery/7.JPG",
    "/assets/img/gallery/8.jpg",

  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

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
        title="Event 2021- 2022"
        crumbs={[
          { label: "Downloads" },
          { label: "Media" },
          { label: "Photo gallery" },
        ]}
      />

      <section className="gallery-inner_wrap">
        <h2 className="gallery-title-inner">
         Second Phase Inaguration of indigenous Cattle Hub by Hon. Minister. Smt. J Chinju Rani
        </h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => openLightbox(index)}
              style={{ cursor: "pointer" }}
            >
              <img src={img} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
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
          {/* CLOSE BUTTON */}
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
    </>
  );
};

export default GalleryInner1;



export const GalleryInnerSecond = () => {
  const images = [
    "/assets/img/gallery/IMG_0239.JPG",
    "/assets/img/gallery/IMG_0240.JPG",
    "/assets/img/gallery/IMG_0241.JPG",
    "/assets/img/gallery/IMG_0242.JPG",

  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

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
        title="Event 2021- 2022"
        crumbs={[
          { label: "Downloads" },
          { label: "Media" },
          { label: "Photo gallery" },
        ]}
      />

      <section className="gallery-inner_wrap">
        <h2 className="gallery-title-inner">
      PUM Experts- Embassy of the Kingdom of The Netherlands  Dr. Tarannum Kadarbhai Visited KLD Board Head Office on 17-03-22
        </h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => openLightbox(index)}
              style={{ cursor: "pointer" }}
            >
              <img src={img} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
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
          {/* CLOSE BUTTON */}
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
    </>
  );
};

