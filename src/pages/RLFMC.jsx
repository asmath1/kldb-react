import Breadcrumb from "../components/common/Breadcrumb";
import { useGetRLFMCQuery } from "../redux/services/bannerApi";
import { useLang, pickTranslation } from "../context/LanguageContext";

const BASE = "https://livestock.cditproject.org";

export default function RLFMC() {
  const { data, isLoading, isError } = useGetRLFMCQuery();
  const { lang } = useLang();

  if (isLoading) return <div className="text-center py-5"><div className="spinner-border text-primary" role="status" /></div>;
  if (isError) return <div className="text-center py-5 text-danger">Failed to load content.</div>;

  const article = data?.data;
  const t = pickTranslation(article?.translations, lang);
  const gallery = article?.gallery || [];

  return (
    <>
      <Breadcrumb
        title="RLFMCs"
        crumbs={[{ label: "RLFMCs" }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="blog-post-details border-wrap mt-0">
            <div className="single-blog-post post-details mt-0">
              <div className="post-content pt-0">

                {t?.main_title && (
                  <h2 className="wow fadeInDown">{t.main_title}</h2>
                )}

                {t?.body && (
                  <div className="wow fadeInUp mt-3" dangerouslySetInnerHTML={{ __html: t.body }} />
                )}

                {gallery.length > 0 && (
                  <div className="row mt-4">
                    {gallery.map((img, i) => (
                      <div key={i} className="col-md-6 mb-3">
                        <img
                          src={`${BASE}${img.url}`}
                          className="w-100 m-0 wow fadeInUp img-fluid rounded"
                          alt={img.caption || "RLFMC"}
                        />
                        {img.caption && <small className="d-block mt-1 text-muted">{img.caption}</small>}
                      </div>
                    ))}
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
