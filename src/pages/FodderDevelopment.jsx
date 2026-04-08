import { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { useGetFodderDevelopmentQuery } from "../redux/services/bannerApi";
import { useLang, pickTranslation } from "../context/LanguageContext";

const BASE = "https://livestock.cditproject.org";

export default function FodderDevelopment() {
  const { data, isLoading, isError } = useGetFodderDevelopmentQuery();
  const { lang } = useLang();
  const [activeArticle, setActiveArticle] = useState(0);

  if (isLoading) return <div className="text-center py-5"><div className="spinner-border text-primary" role="status" /></div>;
  if (isError) return <div className="text-center py-5 text-danger">Failed to load content.</div>;

  const articles = data?.articles || [];
  const mainArticle = articles[0];
  const mainT = pickTranslation(mainArticle?.translations, lang);

  // Sub-articles (index 1+) shown as tabs
  const subArticles = articles.slice(1);
  const current = subArticles[activeArticle];
  const currentT = pickTranslation(current?.translations, lang);
  const currentSections = [...(current?.sections || [])].sort((a, b) => a.order - b.order);

  return (
    <>
      <Breadcrumb
        title={mainT?.title || "Fodder Development"}
        crumbs={[{ label: "Fodder Development" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="blog-post-details border-wrap mt-0">
            <div className="single-blog-post post-details mt-0">
              <div className="post-content pt-0">

                {/* Main intro */}
                {mainT?.main_title && <h2 className="wow fadeInDown">{mainT.main_title}</h2>}
                {mainT?.body && (
                  <div className="wow fadeInUp fodder-intro" dangerouslySetInnerHTML={{ __html: mainT.body }} />
                )}

                {/* Sub-article tabs */}
                {subArticles.length > 0 && (
                  <div className="fodder-tabs-wrapper mt-4">
                    <div className="infra-tabs">
                      {subArticles.map((art, i) => {
                        const at = pickTranslation(art.translations, lang);
                        return (
                          <button
                            key={art.id}
                            className={`infra-tab-btn${i === activeArticle ? ' active' : ''}`}
                            onClick={() => setActiveArticle(i)}
                          >
                            {at?.title || art.slug}
                          </button>
                        );
                      })}
                    </div>

                    {/* Current sub-article content */}
                    <div className="fodder-tab-content mt-3">
                      {currentT?.body && (
                        <div className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: currentT.body }} />
                      )}

                      {/* Gallery for current article */}
                      {current?.gallery?.length > 0 && (
                        <div className="row g-3 my-3">
                          {current.gallery.map((img, gi) => (
                            <div key={gi} className="col-md-3 col-6">
                              <div className="fodder-gallery-item">
                                <img src={`${BASE}${img.url}`} alt={img.caption || "Fodder"} />
                                {img.caption && <span>{img.caption}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Sections */}
                      {currentSections.map((section) => {
                        const st = pickTranslation(section.translations, lang);
                        const titleImages = section.title_images || [];
                        return (
                          <div key={section.id} className="fodder-section wow fadeInUp">
                            {(st?.title || section.title) && (
                              <h3 className="fodder-section-title">{st?.title || section.title}</h3>
                            )}

                            {/* Title images */}
                            {titleImages.length > 0 && (
                              <div className="row g-2 mb-3">
                                {titleImages.map((img, ti) => (
                                  <div key={ti} className="col-md-4 col-6">
                                    <div className="fodder-gallery-item">
                                      <img src={`${BASE}${img.url}`} alt={img.caption || "Fodder"} />
                                      {img.caption && <span>{img.caption}</span>}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {st?.content && (
                              <div className="fodder-content" dangerouslySetInnerHTML={{ __html: st.content }} />
                            )}

                            {section.image && (
                              <img src={`${BASE}${section.image}`} alt={st?.title || "Fodder"} className="img-fluid rounded mt-3" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .fodder-intro p { font-size: 15px; line-height: 1.8; color: #444; margin-bottom: 10px; }
        .fodder-intro ul { padding-left: 20px; }
        .fodder-intro ul li { margin-bottom: 6px; font-size: 15px; color: #444; }

        .fodder-section { margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #f0f0f0; }
        .fodder-section:last-child { border-bottom: none; }
        .fodder-section-title { font-size: 20px; font-weight: 700; color: #012660; margin-bottom: 14px; padding-left: 12px; border-left: 4px solid #FFC400; }

        .fodder-content p { font-size: 14px; line-height: 1.85; color: #444; margin-bottom: 10px; }
        .fodder-content ul { padding-left: 20px; }
        .fodder-content ul li { font-size: 14px; color: #444; margin-bottom: 6px; }
        .fodder-content table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px; }
        .fodder-content table td, .fodder-content table th { padding: 8px 10px; border: 1px solid #ddd; }
        .fodder-content table tr:nth-child(even) td { background: #f9f9f9; }

        .fodder-gallery-item { border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
        .fodder-gallery-item img { width: 100%; height: 160px; object-fit: cover; display: block; }
        .fodder-gallery-item span { display: block; font-size: 12px; color: #666; padding: 6px 8px; background: #f9f9f9; text-align: center; }

        @media (max-width: 576px) {
          .fodder-section-title { font-size: 16px; }
          .fodder-gallery-item img { height: 120px; }
        }
      `}</style>
    </>
  );
}
