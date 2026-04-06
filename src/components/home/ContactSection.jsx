import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your message has been sent.')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  return (
    <section className="contact-section" style={{ position: 'relative' }}>
      <img src="/assets/img/paralex-bg.png" className="paral" alt="" />
      <div className="shape-1 float-bob-y">
        <img src="/assets/img/home-1/contact-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="contact-wrapper">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title mb-0">
                  <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Contact With Us</span>
                  <h2 className="font1 text-anim">Have Feedback or Grievance</h2>
                </div>
                <form onSubmit={handleSubmit} id="contact-form" className="contact-form-box">
                  <div className="row g-4 align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="form-clt">
                        <input type="text" placeholder="Enter name" value={form.name} onChange={set('name')} required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="form-clt">
                        <input type="email" placeholder="Enter email" value={form.email} onChange={set('email')} required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" placeholder="Phone number" value={form.phone} onChange={set('phone')} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" placeholder="Your subject" value={form.subject} onChange={set('subject')} />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                      <div className="form-clt">
                        <textarea name="message" id="message" placeholder="Write a message..." value={form.message} onChange={set('message')} required></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                      <button type="submit" className="theme-btn">
                        Send your Message <i className="far fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-image">
                <img src="/assets/img/bhy.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
