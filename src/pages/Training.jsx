import Breadcrumb from "../components/common/Breadcrumb";
import { useGetTrainingQuery } from "../redux/services/bannerApi";
import { useLang, pickTranslation } from "../context/LanguageContext";

const BASE = "https://livestock.cditproject.org";

export default function Training() {
  const { data, isLoading, isError } = useGetTrainingQuery();
  const { lang } = useLang();

  if (isLoading) return <div className="text-center py-5"><div className="spinner-border text-primary" role="status" /></div>;
  if (isError) return <div className="text-center py-5 text-danger">Failed to load content.</div>;

  const article = data?.data;
  const t = pickTranslation(article?.translations, lang);
  const sections = [...(article?.sections || [])].sort((a, b) => a.order - b.order);
  const gallery = article?.gallery || [];

  // Last section with document_master holds the download cards
  const docSection = sections.find(s => s.document_master);
  const contentSections = sections.filter(s => !s.document_master);

  return (
    <>
      <Breadcrumb
        title={t?.title || "Training"}
        crumbs={[{ label: t?.title || "Training" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="blog-post-details border-wrap mt-0">
            <div className="single-blog-post post-details mt-0">
              <div className="post-content pt-0">

                {/* Intro body */}
                {t?.body && (
                  <div className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: t.body }} />
                )}

                {/* Gallery images */}
                {gallery.length > 0 && (
                  <div className="row g-3 my-3">
                    {gallery.map((img, i) => (
                      <div key={i} className="col-md-3 col-6">
                        <img src={`${BASE}${img.url}`} alt={img.caption || "Training"} className="img-fluid rounded" style={{ height: 160, objectFit: 'cover', width: '100%' }} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Content sections */}
                {contentSections.map((section) => {
                  const st = pickTranslation(section.translations, lang);
                  return (
                    <div key={section.id} className="wow fadeInUp">
                      {(st?.title || section.title) && (
                        <h2 className="wow fadeInDown">{st?.title || section.title}</h2>
                      )}
                      {st?.content && (
                        <div dangerouslySetInnerHTML={{ __html: st.content }} />
                      )}
                    </div>
                  );
                })}

                {/* Download cards from document_master */}
                {docSection?.document_master && (
                  <div className="downld mt-4">
                    <div className="row g-4">
                      {docSection.document_master.documents?.map((doc) => {
                        const dt = pickTranslation(doc.translations, lang);
                        const file = doc.files?.[0];
                        const iconUrl = doc.icon ? `${BASE}${doc.icon}` : null;
                        return (
                          <div key={doc.id} className="col-md-4">
                            <div className="card-alt">
                              {iconUrl && <img src={iconUrl} alt={dt?.title} />}
                              <div className="card-title">{dt?.title || doc.title}</div>
                              {dt?.subtitle && <div className="card-sub">{dt.subtitle}</div>}
                              {dt?.description && <p className="card-desc">{dt.description}</p>}
                              {file?.url && (
                                <a
                                  href={`${BASE}${file.url}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="card-btn"
                                >
                                  Download PDF
                                </a>
                              )}
                            </div>
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
    </>
  );
}
