import { bannersApi } from '../redux/services/bannerApi'
import Breadcrumb from '../components/common/Breadcrumb'
import Preloader from '../components/common/Preloader'
import { useLang, pickTranslation } from '../context/LanguageContext'

export default function BreedingPolicy() {
  const { data, isLoading, error } = bannersApi.useGetArticleBySlugQuery("breeding-policy-1");
  const { lang } = useLang();

  if (isLoading) return <Preloader />;
  if (error) return <div className="error-container">Error loading breeding policy</div>;

  const article = data?.data;
  if (!article) return <Preloader />;

  const sections = article.sections || [];
  const gallery = article.gallery || [];

  return (
    <>
      <Breadcrumb 
        title="Breeding Policy" 
        crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Breeding Policy' }]} 
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      {sections.map((section) => {
                        const t = pickTranslation(section.translations, lang);
                        return (
                          <div key={section.id} className="section-block">
                            <h2 className="wow fadeInDown">{t?.title || section.title}</h2>
                            {t?.content && (
                              <div className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: t.content }} />
                            )}
                            {t?.content_2 && (
                              <div className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: t.content_2 }} />
                            )}
                            {section.image && (
                              <img
                                src={`https://livestock.cditproject.org${section.image}`}
                                className="img-fluid wow fadeInUp mb-4"
                                alt={t?.title || section.title || "Breeding Policy"}
                              />
                            )}
                          </div>
                        );
                      })}
                      {gallery.length > 0 && (
                        <div className="gallery-section">
                          {gallery.map((image, index) => (
                            <img key={index} src={`https://livestock.cditproject.org${image.url}`} className="img-fluid" alt={image.caption || "Gallery image"} />
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
  )
}
