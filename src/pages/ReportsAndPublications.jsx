import Breadcrumb from "../components/common/Breadcrumb";
import { useGetReportsAndPublicationsQuery } from "../redux/services/bannerApi";

const BASE = "https://livestock.cditproject.org";

export default function ReportsAndPublications() {
  const { data, isLoading, error } = useGetReportsAndPublicationsQuery();

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

  const newsletters = data?.newsletters || [];
  const images = data?.images || [];

  return (
    <>
      <Breadcrumb
        title="Reports & Publications"
        crumbs={[{ label: "Downloads" }, { label: "Reports & Publications" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          {/* Newsletters */}
          <div className="blog-post-details border-wrap mt-0 mb-4">
            <div className="single-blog-post post-details mt-0">
              <div className="post-content pt-0">
                <h2 className="wow fadeInDown mb-4">Newsletters</h2>

                {newsletters.length === 0 ? (
                  <p className="text-muted">No newsletters available.</p>
                ) : (
                  <div className="rp-grid">
                    {newsletters.map((item) => {
                      const t =
                        item.translations?.find(
                          (x) => x.language_code === "en",
                        ) || item.translations?.[0];
                      const pdf = item.attachments?.[0];
                      const thumb = item.thumbnail
                        ? `${BASE}${item.thumbnail}`
                        : null;

                      return (
                        <div key={item.id} className="rp-card wow fadeInUp">
                          <div className="rp-thumb">
                            {thumb ? (
                              <img src={thumb} alt={t?.title} />
                            ) : (
                              <div className="rp-thumb-placeholder">
                                <i className="fas fa-file-pdf" />
                              </div>
                            )}
                          </div>
                          <div className="rp-info">
                            <div className="rp-date">{item.formatted_date}</div>
                            <h5 className="rp-title">
                              {t?.title || "Newsletter"}
                            </h5>
                            {pdf?.file_url && (
                              <a
                                href={`${BASE}${pdf.file_url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rp-download"
                              >
                                <i className="fas fa-download" /> Download PDF
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Images / Annual Reports */}
          {images.length > 0 && (
            <div className="blog-post-details border-wrap mt-0">
              <div className="single-blog-post post-details mt-0">
                <div className="post-content pt-0">
                  <h2 className="wow fadeInDown mb-4">Publications</h2>
                  <div className="rp-img-grid">
                    {images.map((img) => (
                      <div key={img.id} className="rp-img-card wow fadeInUp">
                        <img
                          src={`${BASE}${img.url}`}
                          alt={img.caption || "Publication"}
                        />
                        {img.caption && (
                          <p className="rp-img-caption">{img.caption}</p>
                        )}
                        {img.date && (
                          <span className="rp-img-date">{img.date}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .rp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }
        .rp-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 16px rgba(1,38,96,0.08);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
        }
        .rp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(1,38,96,0.14);
        }
        .rp-thumb {
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: #f0f4ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rp-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .rp-thumb-placeholder {
          font-size: 48px;
          color: #012660;
          opacity: 0.3;
        }
        .rp-info {
          padding: 14px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .rp-date { font-size: 11px; color: #888; }
        .rp-title { font-size: 15px; font-weight: 700; color: #012660; margin: 0; }
        .rp-download {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          padding: 7px 14px;
          background: #012660;
          color: #fff;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          width: fit-content;
          transition: background 0.2s;
        }
        .rp-download:hover { background: #FFC400; color: #012660; }

        .rp-img-grid {
          display: grid;
          /*grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));*/
          gap: 16px;
        }
        .rp-img-card {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        .rp-img-card img { object-fit: cover; display: block; }
        .rp-img-caption { font-size: 13px; color: #555; padding: 6px 10px 0; margin: 0; }
        .rp-img-date { font-size: 11px; color: #999; padding: 2px 10px 8px; display: block; }

        @media (max-width: 576px) {
          .rp-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .rp-thumb { height: 120px; }
          .rp-title { font-size: 13px; }
          .rp-img-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 400px) {
          .rp-grid { grid-template-columns: 1fr; }
          .rp-img-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
