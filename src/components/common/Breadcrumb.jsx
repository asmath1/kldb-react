import { Link } from 'react-router-dom'

export default function Breadcrumb({ title, crumbs = [], bgImg = '/assets/img/p01.png' }) {
  return (
    <div className="breadcrumb-wrapper" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="page-heading">
        <ul className="breadcrumb-list">
          <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
          {crumbs.map((c, i) => (
            <li key={i}>
              <i className="fas fa-chevron-right" style={{ fontSize: 10, margin: '0 4px', color: '#FFC400' }}></i>
              {c.path ? <Link to={c.path} style={{ color: '#fff' }}>{c.label}</Link> : <span style={{ color: '#FFC400' }}>{c.label}</span>}
            </li>
          ))}
        </ul>
        <h1 className="breadcrumb-title">{title}</h1>
      </div>
    </div>
  )
}
