import Breadcrumb from "../components/common/Breadcrumb";
import { useGetSireDirectoryQuery } from "../redux/services/bannerApi";
import { useLang, pickTranslation } from "../context/LanguageContext";

const BASE = "https://livestock.cditproject.org";

const HEAD_COLORS = ["head-blue", "head-green", "head-orange", "head-gray", "head-blue", "head-green"];

export default function SireDirectory() {
  const { data, isLoading, isError } = useGetSireDirectoryQuery();
  const { lang } = useLang();

  if (isLoading) return <div className="text-center py-5"><div className="spinner-border text-primary" role="status" /></div>;
  if (isError) return <div className="text-center py-5 text-danger">Failed to load data.</div>;

  const masters = data?.masters || [];

  return (
    <>
      <Breadcrumb title="Sire Directory" crumbs={[{ label: "Sire Directory" }]} />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="blog-post-details border-wrap mt-0">
            <div className="single-blog-post post-details py-3 mt-0">
              <div className="post-content pb-2">
                <div className="sireD">

                  {masters.map((masterObj, mi) => (
                    <div key={mi} className="mb-5">
                      <h2 className="text-center wow fadeInDown">{masterObj.master?.title}</h2>
                      <hr />

                      <div className="sire-wrap mb-4">
                        <div className="row">
                          {masterObj.sections?.map((section, si) => (
                            <div className={`col-md-${Math.max(3, Math.floor(12 / (masterObj.sections.length || 1)))}`} key={section.section_id}>
                              <div className="sire-column">
                                <div className="sire-card">
                                  <div className={`sire-head ${HEAD_COLORS[si % HEAD_COLORS.length]}`}>
                                    <h5>{section.section_title}</h5>
                                  </div>
                                  <div className="sire-list">
                                    <ol className="p-0">
                                      {section.documents?.length === 0 && (
                                        <li className="text-muted" style={{ padding: '8px 12px', fontSize: 13 }}>No documents available</li>
                                      )}
                                      {section.documents?.map((doc) => {
                                        const t = pickTranslation(doc.translations, lang);
                                        const file = doc.files?.[0];
                                        const isNew = doc.published_date
                                          ? (Date.now() - new Date(doc.published_date).getTime()) < 30 * 24 * 60 * 60 * 1000
                                          : false;
                                        return (
                                          <li key={doc.id}>
                                            <a
                                              href={file?.file_url || "#"}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="pdff"
                                            >
                                              <p>
                                                {t?.title || doc.translations?.[0]?.title}
                                                {isNew && <span className="badge-new">New!</span>}
                                              </p>
                                              <img src="/assets/img/file-download1.svg" className="m-0 pdf-icon" alt="" />
                                            </a>
                                          </li>
                                        );
                                      })}
                                    </ol>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
