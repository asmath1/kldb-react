import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="blog-wrapper section-padding-inner">
      <div className="container">
        <div className="text-center" style={{ padding: '60px 0' }}>
          <h1 style={{ fontSize: 100, color: 'var(--theme-color)', fontWeight: 700, lineHeight: 1 }}>404</h1>
          <h2 style={{ fontSize: 28, color: '#333', marginBottom: 16 }}>Page Not Found</h2>
          <p style={{ color: '#666', marginBottom: 30 }}>The page you are looking for doesn't exist.</p>
          <Link to="/" className="theme-btn">Back to Home <i className="far fa-arrow-right"></i></Link>
        </div>
      </div>
    </section>
  )
}
