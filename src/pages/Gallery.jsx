import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb'
import { useGetGalleriesQuery } from '../redux/services/bannerApi'

export default function Gallery() {
  const { data: galleriesData, isLoading, isError } = useGetGalleriesQuery()

  // Transform API data to match component structure
  const galleries = useMemo(() => {
    if (!Array.isArray(galleriesData?.data)) return []
    
    return galleriesData.data.map((item) => {
      const translations = Array.isArray(item.translations) ? item.translations : []
      const enTranslation = translations.find(t => t?.language_code === 'en' || t?.language_id === 1) || translations[0]

      const rawThumbnail = item.thumbnail || '/assets/img/gallery/default.jpg'
      const thumbnail = rawThumbnail.startsWith('http')
        ? rawThumbnail
        : `https://livestock.cditproject.org${rawThumbnail}`
      
      return {
        id: item.id,
        slug: item.slug || '',
        title: enTranslation?.title || item.title || 'Gallery',
        description: enTranslation?.description || item.description || '',
        thumbnail,
        imagesCount: Array.isArray(item.images) ? item.images.length : 0,
      }
    })
  }, [galleriesData])
  return (
    <>
     <Breadcrumb title="Photo Gallery" crumbs={[{ label: 'Downloads' }, { label: 'Media' },  { label: 'Photo gallery' }]} />
    <section className="blog-wrapper section-padding-inner">
      <div className="container">
        <div className="livestock_gallary_wrap">

          <h2 className="gallery-title">Photo Gallery</h2>

          <div className="gallery-grid">
            {isLoading && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                <p>Loading galleries...</p>
              </div>
            )}
            {isError && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                <p>Failed to load galleries</p>
              </div>
            )}
            {!isLoading && !isError && galleries.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                <p>No galleries available</p>
              </div>
            )}
            {!isLoading && !isError && galleries.length > 0 && galleries.map((gallery) => (
              <div key={gallery.id} className="gallery-card">
                <Link to={`/gallery/${gallery.slug}`}>
                  <div className="gallery-img">
                    <img
                      src={gallery.thumbnail}
                      alt={gallery.title}
                      style={{ width: '100%', height: 220, objectFit: 'cover' }}
                    />
                  </div>
                  <div className="gallery-content">
                    <h4>{gallery.title}</h4>
                    <p>{gallery.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
    </>
  );
};



// import { useState } from 'react'
// import Breadcrumb from '../components/common/Breadcrumb'

// const images = [
//   '/assets/img/archive_1.jpg', '/assets/img/archive_2.jpg', '/assets/img/archive_3.jpg',
//   '/assets/img/archive_4.jpg', '/assets/img/archive_5.jpg', '/assets/img/abt1.png',
//   '/assets/img/abt2.png', '/assets/img/about_kldb.jpg', '/assets/img/bgx.jpg',
// ]

// export default function Gallery() {
//   const [lightbox, setLightbox] = useState(null)

//   return (
//     <>
//       <Breadcrumb title="Photo Gallery" crumbs={[{ label: 'Downloads' }, { label: 'Gallery' }]} />
//       <section className="blog-wrapper section-padding-inner">
//         <div className="container">
//           <div className="livestock_gallary_wrap">
//             <h2 className="gallery-title">Photo Gallery</h2>
//             <div className="row g-3">
//               {images.map((img, i) => (
//                 <div key={i} className="col-lg-4 col-md-6">
//                   <div className="gallery-item wow fadeInUp" style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: 8 }} onClick={() => setLightbox(img)}>
//                     <img src={img} alt={`Gallery ${i + 1}`} className="img-fluid w-100" style={{ height: 220, objectFit: 'cover', transition: 'transform 0.3s' }} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {lightbox && (
//         <div
//           onClick={() => setLightbox(null)}
//           style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//         >
//           <button
//             onClick={() => setLightbox(null)}
//             style={{ position: 'absolute', top: 20, right: 30, background: 'none', border: 'none', color: '#fff', fontSize: 32, cursor: 'pointer' }}
//           >
//             <i className="fas fa-times"></i>
//           </button>
//           <img src={lightbox} alt="Gallery" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} onClick={e => e.stopPropagation()} />
//         </div>
//       )}
//     </>
//   )
// }
