import { useRef } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetTimelinesQuery } from "../redux/services/bannerApi";
import { useLang, pickTranslation } from "../context/LanguageContext";

const BASE = "https://livestock.cditproject.org";
const FALLBACK = "/assets/img/g6.jpg";

export default function InfrastructureDev() {
  const scrollRef = useRef();
  const { data, isLoading, error } = useGetTimelinesQuery();
  const { lang } = useLang();

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  if (isLoading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );

  if (error)
    return (
      <div className="text-center py-5 text-danger">Failed to load timeline.</div>
    );

  const items = [...(data?.data || [])].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <>
      <Breadcrumb
        title="Infrastructure Development"
        crumbs={[{ label: "About Us" }, { label: "Infrastructure Development" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="tl-wrapper">
            <button className="tl-nav left" onClick={() => scroll("left")} aria-label="Scroll left">
              <i className="fas fa-chevron-left" />
            </button>

            <div className="tl-slider" ref={scrollRef}>
              {items.map((item) => {
                const t = pickTranslation(item.translations, lang);
                const imgUrl =
                  item.images?.[0]?.url
                    ? `${BASE}${item.images[0].url}`
                    : FALLBACK;

                return (
                  <div className="tl-item" key={item.id}>
                    <div className="tl-year">{item.year}</div>
                    <div className="tl-dot" />
                    <div className="tl-card">
                      <img src={imgUrl} alt={t?.title || item.title} />
                      <p>{t?.title || item.title}</p>
                      {t?.description && <span>{t.description}</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="tl-nav right" onClick={() => scroll("right")} aria-label="Scroll right">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .tl-wrapper { position: relative; padding: 0 50px; }

        .tl-slider {
          display: flex;
          gap: 40px;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 60px 20px 40px;
          position: relative;
          scroll-behavior: smooth;
        }
        .tl-slider::-webkit-scrollbar { display: none; }
        .tl-slider { scrollbar-width: none; }

        /* horizontal line */
        .tl-slider::before {
          content: "";
          position: absolute;
          top: 112px;
          left: 0;
          height: 3px;
          width: 100%;
          background: #012660;
          z-index: 0;
        }

        .tl-item {
          min-width: 220px;
          text-align: center;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .tl-year {
          font-size: 17px;
          font-weight: 700;
          color: #012660;
          margin-bottom: 18px;
        }

        .tl-dot {
          width: 16px;
          height: 16px;
          background: #FFC400;
          border: 3px solid #012660;
          border-radius: 50%;
          margin: 0 auto;
          position: relative;
          top: -4px;
          z-index: 2;
        }

        .tl-card {
          background: #f5f9ff;
          margin-top: 28px;
          padding: 12px;
          border-radius: 10px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.09);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .tl-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(1,38,96,0.15);
        }
        .tl-card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 10px;
        }
        .tl-card p {
          font-size: 13px;
          font-weight: 600;
          color: #012660;
          margin: 0;
          line-height: 1.4;
        }
        .tl-card span {
          display: block;
          font-size: 12px;
          color: #777;
          margin-top: 4px;
        }

        .tl-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #012660;
          color: #FFC400;
          border: none;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: background 0.2s;
        }
        .tl-nav:hover { background: #FFC400; color: #012660; }
        .tl-nav.left { left: 0; }
        .tl-nav.right { right: 0; }

        @media (max-width: 768px) {
          .tl-wrapper { padding: 0 44px; }
          .tl-item { min-width: 180px; }
          .tl-card img { height: 110px; }
          .tl-slider { padding: 60px 10px 30px; gap: 24px; }
        }
        @media (max-width: 480px) {
          .tl-item { min-width: 150px; }
          .tl-year { font-size: 14px; }
          .tl-card p { font-size: 12px; }
        }
      `}</style>
    </>
  );
}
