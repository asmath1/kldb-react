import Breadcrumb from "../components/common/Breadcrumb";
import { useGetEmbryoTransferQuery } from "../redux/services/bannerApi";
import { useLang, pickTranslation } from "../context/LanguageContext";

export default function EmbryoTransferPrgm() {
  const { data, isLoading, error } = useGetEmbryoTransferQuery();
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

  const content = data?.page_content;
  const translation = pickTranslation(content?.translations, lang);
  const results = content?.results_block;

  return (
    <>
      <Breadcrumb
        title={translation?.title || "Embryo Transfer Programme"}
        crumbs={[{ label: "Embryo Transfer Programme" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      {/* Main title */}
                      <h2 className="wow fadeInDown">
                        {translation?.main_title || "Multiple Ovulation Embryo Transfer"}
                      </h2>

                      {/* Body HTML from API */}
                      {translation?.body && (
                        <div
                          className="moet-body wow fadeInUp"
                          dangerouslySetInnerHTML={{ __html: translation.body }}
                        />
                      )}

                      {/* Results Block — matches the reference image design */}
                      {results && (
                        <div className="moet-results-section wow fadeInUp">
                          <h3 className="moet-results-heading">{results.title}</h3>
                          <div className="moet-cards-row">
                            {results.items?.map((item) => {
                              const t = pickTranslation(item.translations, lang);
                              return (
                                <div key={item.id} className="moet-card">
                                  <div className="moet-icon-circle">
                                    <i className={resolveIcon(item.icon_class)} />
                                  </div>
                                  <div className="moet-card-label">{t?.title || item.title}</div>
                                  {t?.short_description && (
                                    <div className="moet-card-sub">{t.short_description}</div>
                                  )}
                                  <div className="moet-card-value">{item.value}</div>
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
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Body content */
        .moet-body ul { padding-left: 22px; margin: 12px 0; }
        .moet-body ul li { margin-bottom: 6px; font-size: 15px; line-height: 1.75; color: #444; }
        .moet-body p { margin-bottom: 12px; font-size: 15px; line-height: 1.85; color: #444; }
        .moet-body strong { color: #012660; }

        /* Results section wrapper */
        .moet-results-section {
          margin-top: 48px;
          padding: 36px 24px 28px;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 4px;
        }

        /* Title with dotted border — matches reference */
        .moet-results-heading {
          text-align: center;
          font-size: 22px;
          font-weight: 600;
          color: #c8a84b;
          padding-bottom: 14px;
          margin-bottom: 32px;
          border-bottom: 2px dotted #d0d0d0;
          letter-spacing: 0.3px;
        }

        /* Cards row */
        .moet-cards-row {
          display: flex;
          gap: 0;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Individual card */
        .moet-card {
          flex: 1;
          min-width: 180px;
          max-width: 280px;
          background: #f5f5f5;
          padding: 28px 20px 24px;
          text-align: center;
          margin: 0 8px 16px;
          border-radius: 2px;
          position: relative;
        }

        /* Circular icon — floats above card top edge */
        .moet-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #e8f0fe;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -42px auto 16px;
          font-size: 20px;
          color: #c0392b;
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .moet-card-label {
          font-size: 13px;
          font-weight: 700;
          color: #c0392b;
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .moet-card-sub {
          font-size: 12px;
          color: #888;
          margin-bottom: 6px;
        }

        .moet-card-value {
          font-size: 38px;
          font-weight: 300;
          color: #333;
          line-height: 1.1;
          margin-top: 6px;
        }

        @media (max-width: 576px) {
          .moet-cards-row { flex-direction: column; align-items: center; }
          .moet-card { max-width: 100%; width: 100%; margin: 0 0 24px; }
          .moet-results-heading { font-size: 18px; }
          .moet-card-value { font-size: 30px; }
        }
      `}</style>
    </>
  );
}

function resolveIcon(iconClass) {
  const map = {
    "Defaults-compress": "fas fa-compress-alt",
    "Defaults-signal":   "fas fa-signal",
    "Defaults-list-ul":  "fas fa-list-ul",
  };
  return map[iconClass] || "fas fa-chart-bar";
}
