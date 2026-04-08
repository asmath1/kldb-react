import { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetInfrastructureQuery } from "../redux/services/bannerApi";
import { useLang, pickTranslation } from "../context/LanguageContext";

const BASE = "https://livestock.cditproject.org";

export default function Infrastructure() {
  const { data, isLoading, error } = useGetInfrastructureQuery();
  const [activeTab, setActiveTab] = useState(0);
  const { lang } = useLang();

  if (isLoading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );

  if (error)
    return (
      <div className="text-center py-5 text-danger">
        Failed to load content.
      </div>
    );

  const article = data?.data;
  const mainTranslation = pickTranslation(article?.translations, lang);

  const sections = article?.sections?.filter(
    (s) => s.title || s.image || s.translations?.some((t) => t.content || t.content_2)
  ) || [];

  const activeSection = sections[activeTab];
  const activeTrans = pickTranslation(activeSection?.translations, lang);

  return (
    <>
      <Breadcrumb
        title={mainTranslation?.title || "Infrastructure"}
        crumbs={[{ label: "About Us" }, { label: "Infrastructure" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="blog-post-details border-wrap mt-0">
            <div className="single-blog-post post-details mt-0">
              <div className="post-content pt-0">

                {/* Intro paragraph */}
                {mainTranslation?.body && (
                  <div
                    className="infra-intro wow fadeInUp"
                    dangerouslySetInnerHTML={{ __html: mainTranslation.body }}
                  />
                )}

                {/* Farm tabs */}
                {sections.length > 0 && (
                  <div className="infra-tabs-wrapper wow fadeInUp">

                    {/* Tab buttons */}
                    <div className="infra-tabs">
                      {sections.map((sec, i) => (
                        <button
                          key={sec.id}
                          className={`infra-tab-btn ${i === activeTab ? "active" : ""}`}
                          onClick={() => setActiveTab(i)}
                        >
                          {sec.title}
                        </button>
                      ))}
                    </div>

                    {/* Tab content */}
                    {activeSection && (
                      <div className="infra-tab-content">
                        <div className="infra-content-grid">

                          {/* Left: image + summary */}
                          <div className="infra-left">
                            {activeSection.image && (
                              <img
                                src={`${BASE}${activeSection.image}`}
                                alt={activeSection.title}
                                className="infra-farm-img"
                              />
                            )}
                            {activeTrans?.content && (
                              <div
                                className="infra-summary"
                                dangerouslySetInnerHTML={{ __html: activeTrans.content }}
                              />
                            )}
                            {activeTrans?.content_2 && (
                              <div
                                className="infra-details"
                                dangerouslySetInnerHTML={{ __html: activeTrans.content_2 }}
                              />
                            )}
                          </div>

                          {/* Right: content blocks */}
                          <div className="infra-right">
                            {activeTrans?.content_blocks?.map((block, bi) => (
                              <div
                                key={bi}
                                className="infra-block"
                                dangerouslySetInnerHTML={{ __html: block.body }}
                              />
                            ))}

                            {/* Map iframe */}
                            {activeSection.map_iframe && (
                              <div className="infra-map">
                                <iframe
                                  src={activeSection.map_iframe}
                                  title={`${activeSection.title} map`}
                                  allowFullScreen
                                  loading="lazy"
                                />
                              </div>
                            )}
                          </div>

                        </div>
                      </div>
                    )}

                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Intro */
        .infra-intro p { font-size: 15px; line-height: 1.85; color: #444; margin-bottom: 12px; }
        .infra-intro { margin-bottom: 32px; }

        /* Tabs wrapper */
        .infra-tabs-wrapper { margin-top: 8px; }

        /* Tab buttons */
        .infra-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          border-bottom: 2px solid #e0e0e0;
          margin-bottom: 28px;
        }
        .infra-tab-btn {
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 600;
          color: #555;
          background: #f5f5f5;
          border: 1px solid #ddd;
          border-bottom: none;
          border-radius: 4px 4px 0 0;
          cursor: pointer;
          transition: all 0.2s;
          font-family: "Encode Sans Condensed", sans-serif;
          letter-spacing: 0.5px;
        }
        .infra-tab-btn:hover { background: #e8f0fe; color: #012660; }
        .infra-tab-btn.active {
          background: #012660;
          color: #FFC400;
          border-color: #012660;
        }

        /* Content grid */
        .infra-content-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Farm image */
        .infra-farm-img {
          width: 100%;
          border-radius: 8px;
          object-fit: cover;
          max-height: 240px;
          margin-bottom: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        /* Summary badge */
        .infra-summary {
          background: #f0f4ff;
          border-left: 4px solid #FFC400;
          padding: 12px 16px;
          border-radius: 0 6px 6px 0;
          font-size: 13px;
          color: #555;
          margin-bottom: 14px;
        }
        .infra-summary p { margin: 0; font-size: 13px; }

        /* Details (year, area, functions) */
        .infra-details {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 6px;
          padding: 14px 16px;
          font-size: 13px;
          line-height: 1.8;
          color: #444;
        }
        .infra-details p { margin-bottom: 6px; font-size: 13px; }
        .infra-details strong { color: #012660; }

        /* Right content blocks */
        .infra-block {
          font-size: 14px;
          line-height: 1.85;
          color: #444;
          margin-bottom: 20px;
        }
        .infra-block p { margin-bottom: 10px; font-size: 14px; }
        .infra-block strong { color: #012660; }
        .infra-block table {
          width: 100%;
          border-collapse: collapse;
          margin: 12px 0;
          font-size: 13px;
        }
        .infra-block table td {
          padding: 8px 10px;
          border: 1px solid #ddd;
          vertical-align: top;
        }
        .infra-block table tr:nth-child(even) td { background: #f9f9f9; }

        /* Map */
        .infra-map {
          margin-top: 20px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #ddd;
        }
        .infra-map iframe {
          width: 100%;
          height: 280px;
          border: none;
          display: block;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .infra-content-grid { grid-template-columns: 1fr; }
          .infra-farm-img { max-height: 200px; }
        }
        @media (max-width: 576px) {
          .infra-tab-btn { padding: 8px 12px; font-size: 12px; }
          .infra-map iframe { height: 200px; }
        }
      `}</style>
    </>
  );
}
