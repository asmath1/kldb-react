import Breadcrumb from '../components/common/Breadcrumb'
import { useGetAboutUsInfoQuery } from '../redux/services/bannerApi'
import { useLang, pickTranslation } from '../context/LanguageContext'

const BASE = 'https://livestock.cditproject.org'

export default function About() {
  const { data, isLoading, isError } = useGetAboutUsInfoQuery()
  const { lang } = useLang()

  const article = data?.data
  const mainT = pickTranslation(article?.translations, lang)
  const sections = [...(article?.sections || [])].sort((a, b) => a.order - b.order)

  return (
    <>
      <Breadcrumb
        title={mainT?.title || 'About Us'}
        crumbs={[{ label: mainT?.title || 'About Us' }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      {isLoading && (
                        <div className="text-center py-4">
                          <div className="spinner-border text-primary" role="status" />
                        </div>
                      )}

                      {isError && (
                        <p className="text-danger">Failed to load content.</p>
                      )}

                      {!isLoading && !isError && sections.map((section) => {
                        const st = pickTranslation(section.translations, lang)

                        // Section 1 — default layout: title + image + content + content_2
                        if (section.layout === 'default') {
                          return (
                            <div key={section.id} className="wow fadeInUp">
                              {(st?.title || section.title) && (
                                <h2 className="wow fadeInDown">{st?.title || section.title}</h2>
                              )}
                              {st?.content && (
                                <div dangerouslySetInnerHTML={{ __html: st.content }} />
                              )}
                              {section.image && (
                                <img
                                  src={`${BASE}${section.image}`}
                                  className="w-md-50 single-post-image wow fadeInUp my-3"
                                  alt={st?.title || 'About'}
                                />
                              )}
                              {st?.content_2 && (
                                <div className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: st.content_2 }} />
                              )}
                            </div>
                          )
                        }

                        // Section 2 — card-grid layout: title + content_blocks as cards
                        if (section.layout === 'card-grid') {
                          const blocks = st?.content_blocks?.filter(b => b.title || b.body) || []
                          return (
                            <div key={section.id} className="wow fadeInUp">
                              {(st?.title || section.title) && (
                                <h2 className="wow fadeInDown mt-3">{st?.title || section.title}</h2>
                              )}
                              {blocks.length > 0 && (
                                <div className="row ispk-components mt-3">
                                  {blocks.map((block, bi) => (
                                    <div key={bi} className="col-md-6 mb-3">
                                      <div
                                        className="card h-100 wow fadeInUp"
                                        data-wow-delay={`${(bi + 1) * 0.2}s`}
                                        style={{ border: '1px solid #e9e9e9' }}
                                      >
                                        <div className="card-body">
                                          {block.title && <h5 className="card-title">{block.title}</h5>}
                                          {block.body && (
                                            <div
                                              className="card-text"
                                              dangerouslySetInnerHTML={{ __html: block.body }}
                                            />
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        }

                        // Fallback — render whatever content exists
                        return (
                          <div key={section.id} className="wow fadeInUp">
                            {st?.content && (
                              <div dangerouslySetInnerHTML={{ __html: st.content }} />
                            )}
                          </div>
                        )
                      })}

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
