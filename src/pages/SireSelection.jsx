import { bannersApi } from "../redux/services/bannerApi";
import Breadcrumb from "../components/common/Breadcrumb";
import Preloader from "../components/common/Preloader";

export default function SireSelection() {
  const { data, isLoading, error } = bannersApi.useGetArticleBySlugQuery("sire-selection-programme");

  if (isLoading) return <Preloader />;
  if (error) return <div className="error-container">Error loading sire selection programme</div>;

  const article = data?.data;
  if (!article) return <Preloader />;

  const sections = article.sections || [];
  const gallery = article.gallery || [];

  return (
    <>
      <Breadcrumb title="Sire Selection Programme" crumbs={[{ label: "Sire Selection" }]} />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      {sections.map((section, index) => (
                        <div key={section.id} className="section-block">
                          {/* Display section image if available */}
                          {section.image && (
                            <img
                              src={`https://livestock.cditproject.org${section.image}`}
                              className="img-fluid"
                              alt={section.title || "Section image"}
                            />
                          )}

                          <h2 className="wow fadeInDown">{section.title}</h2>

                          <div
                            className="wow fadeInUp"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                          />

                          {section.translations &&
                            section.translations[0]?.content_2 && (
                              <div
                                className="wow fadeInUp"
                                dangerouslySetInnerHTML={{
                                  __html: section.translations[0].content_2,
                                }}
                              />
                            )}
                        </div>
                      ))}

                      {/* Display gallery images if available */}
                      {gallery.length > 0 && (
                        <div className="gallery-section">
                          {gallery.map((image, index) => (
                            <img
                              key={index}
                              src={`https://livestock.cditproject.org${image.url}`}
                              className="img-fluid"
                              alt={image.caption || "Gallery image"}
                            />
                          ))}
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
    </>
  );
}