import { useParams, Link } from 'react-router-dom'
import { useMemo } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import { useGetGalleryBySlugQuery } from '../redux/services/bannerApi'

export default function GalleryDetail() {
  const { slug } = useParams()
  const { data, isLoading, isError } = useGetGalleryBySlugQuery(slug)

  const gallery = useMemo(() => {
    if (!data?.data) return null
    const item = data.data
    const translations = Array.isArray(item.translations) ? item.translations : []
    const enTranslation = translations.find((t) => t?.language_code === 'en' || t?.language_id === 1) || translations[0]

    const thumbnailUrl = item.thumbnail
      ? item.thumbnail.startsWith('http')
        ? item.thumbnail
        : `https://livestock.cditproject.org${item.thumbnail}`
      : '/assets/img/gallery/default.jpg'

    const images = Array.isArray(item.images)
      ? item.images.map((img) => ({
          ...img,
          image: img.image && img.image.startsWith('http')
            ? img.image
            : `https://livestock.cditproject.org${img.image}`,
        }))
      : []

    return {
      title: enTranslation?.title || item.title || 'Gallery',
      description: enTranslation?.description || item.description || '',
      thumbnail: thumbnailUrl,
      images,
    }
  }, [data])

  return (
    <>
      <Breadcrumb
        title={gallery?.title || 'Gallery'}
        crumbs={[{ label: 'Downloads' }, { label: 'Media' }, { label: 'Photo gallery' }]}
      />

      <section className="gallery-inner_wrap">
        <div className="container">
          <Link to="/gallery" className="back-link" style={{ marginBottom: 20, display: 'inline-block' }}>
            ← Back to Gallery
          </Link>

          {isLoading && <p>Loading gallery...</p>}
          {isError && <p>Failed to load gallery details.</p>}
          {!isLoading && !isError && !gallery && <p>Gallery not found.</p>}

          {gallery && (
            <>
              <h2 className="gallery-title-inner">{gallery.title}</h2>
              <p >{gallery.description}</p>

              <div className="gallery-grid" style={{ marginTop: 20 }}>
                {gallery.images.length === 0 && (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                    <p>No images in this gallery.</p>
                  </div>
                )}

                {gallery.images.map((img, idx) => (
                  <div key={img.id || idx} className="gallery-card">
                    <div className="gallery-img">
                      <img
                        src={img.image || '/assets/img/gallery/default.jpg'}
                        alt={img.title || `Gallery image ${idx + 1}`}
                        style={{ width: '100%', height: 220, objectFit: 'cover' }}
                      />
                    </div>
                    <div className="gallery-content">
                      {/* <h4>{img.title || `Image ${idx + 1}`}</h4> */}
                      {/* <p>{img.description || ''}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
