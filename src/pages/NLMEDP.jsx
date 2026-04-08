import { bannersApi } from '../redux/services/bannerApi'
import Breadcrumb from '../components/common/Breadcrumb'
import Preloader from '../components/common/Preloader'
import { useLang, pickTranslation } from '../context/LanguageContext'

export default function NLMEDP() {
  const { data, isLoading, error } = bannersApi.useGetArticleBySlugQuery("nlm-edp");
  const { lang } = useLang();

  if (isLoading) return <Preloader />;
  if (error) return <div className="error-container">Error loading NLM-EDP content</div>;

  const article = data?.data;
  if (!article) return <Preloader />;

  const sections = article.sections || [];
  const gallery = article.gallery || [];
  const videos = article.videos || [];
  const firstVideo = videos.length > 0 ? videos[0] : null;
  const translation = pickTranslation(article.translations, lang);

  return (
    <>
      <Breadcrumb title="NLM-EDP" crumbs={[{ label: 'NLM-EDP' }]} />
      <div className="documents_wrapp">
        <div className="container">
          <section className="scheme-section">
            <div className="scheme-title">
              {translation?.main_title || "NLM-EDP"}
            </div>

            {/* Display Video */}
            {firstVideo && (
              <div className="video-box">
                <iframe
                  src={firstVideo.youtube_url?.replace('youtu.be/', 'youtube.com/embed/').split('?')[0] + '?si=' + firstVideo.youtube_url?.split('si=')[1]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Render Sections with Documents */}
            {sections.map((section, sectionIndex) => (
              <div key={section.id}>
                {section.document_master && (
                  <>
                    {sectionIndex > 0 && (
                      <div className="supporting-title">
                        {section.document_master.name}
                      </div>
                    )}
                    {section.document_master.documents?.map((doc, docIndex) => (
                      <div key={doc.id} className="scheme-card">
                        <div className="scheme-number">{docIndex + 1}</div>
                        <div className="nlm-main-dev">
                          <div className="scheme-content">
                            <h3>{doc.translations?.[0]?.title || doc.title}</h3>
                            {doc.translations?.[0]?.description && (
                              <p>{doc.translations[0].description}</p>
                            )}
                          </div>
                          <div className="scheme-download">
                            {doc.files && doc.files.length > 0 && (
                              <a
                                href={`https://livestock.cditproject.org${doc.files[0].url}`}
                                target="_blank"
                                rel="noreferrer"
                                className="download-btn"
                              >
                                <i className="fa fa-download"></i> Download PDF
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* Display Gallery Images */}
      {gallery.length > 0 && (
        <div className="container mt-4 mb-4">
          <div className="row">
            {gallery.map((image, index) => (
              <div key={index} className={gallery.length === 2 ? "col-md-6" : "col-12"}>
                <img
                  src={`https://livestock.cditproject.org${image.url}`}
                  alt={image.caption || "Gallery image"}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
