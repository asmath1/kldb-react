import Breadcrumb from '../components/common/Breadcrumb'

const schemeCards = [
  { num: 1, title: 'Closure of NLM-EDP Portal for receiving new applications under National Livestock Mission – Entrepreneurship Development Programme (NLM-EDP).', desc: 'Department of Animal Husbandry and Dairying, Government of India has decided that no more new applications will be entertained under the NLM-EDP programme due to administrative reasons. Also, the portal www.nlm.udyamimitra.in is showing "The application is closed till further order from DAHD".', file: '/assets/img/nlmclosure.pdf' },
  { num: 2, highlight: 'NATIONAL LIVESTOCK MISSION 2021-26' },
  { num: 3, highlight: 'മൃഗസംരക്ഷണ മേഖലയിലെ പുതിയ കേന്ദ്ര പദ്ധതികൾ' },
]

const supportingDocs = [
  'Comprehensive NLM Guidelines January, 2025',
  'Bank Mandate Form',
  'Project Components',
  'Surety Bond',
  'Performa for Integrity Compliance',
  'Abstract of bills for capital expenditure',
  'Declaration for Land Lease Agreement from Blood Relation',
  'NLM Project Completion Board Format',
]

const modelDprs = ['PIG', 'SHEEP & GOAT', 'POULTRY', 'FEED & FODDER']

export default function NLMEDP() {
  return (
    <>
      <Breadcrumb title="NLM-EDP" crumbs={[{ label: 'NLM-EDP' }]} />
      <div className="documents_wrapp">
        <div className="container">
          <section className="scheme-section">
            <div className="scheme-title">മൃഗസംരക്ഷണ മേഖലയിലെ പുതിയ കേന്ദ്ര പദ്ധതികൾ</div>

            <div className="video-box">
              <iframe
                src="https://www.youtube.com/embed/jtmimb6VZrg?si=Ye1Yh_UDpqv_Az4P"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {schemeCards.map((card) => (
              <div key={card.num} className="scheme-card">
                <div className="scheme-number">{card.num}</div>
                <div className='nlm-main-dev'>
                <div className="scheme-content">
                  {card.highlight ? (
                    <div className="scheme-highlight">{card.highlight}</div>
                  ) : (
                    <>
                      <h3>{card.title}</h3>
                      {card.desc && <p>{card.desc}</p>}
                    </>
                  )}
                </div>
                <div className="scheme-download">
                  <a href={card.file || '#'} target="_blank" rel="noreferrer" className="download-btn">
                    <i className="fa fa-download"></i> Download PDF
                  </a>
                </div></div>
              </div>
            ))}

            <div className="supporting-title">Supporting Documents</div>
            {supportingDocs.map((doc, i) => (
              <div key={i} className="scheme-card">
                <div className="scheme-number">{i + 1}</div>
                <div className="scheme-content"><h3><a href="#">{doc}</a></h3></div>
                <div className="scheme-download">
                  <a href="#" className="download-btn"><i className="fa fa-download"></i> Download PDF</a>
                </div>
              </div>
            ))}

            <div className="supporting-title">NLM – EDP MODEL DPRs</div>
            {modelDprs.map((dpr, i) => (
              <div key={i} className="scheme-card">
                <div className="scheme-number">{i + 1}</div>
                <div className="scheme-content"><h3><a href="#">{dpr}</a></h3></div>
                <div className="scheme-download">
                  <a href="#" className="download-btn"><i className="fa fa-download"></i> Download PDF</a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-6">
            <img src="/assets/img/NLM_img.jpg" alt="NLM" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <img src="/assets/img/NLM_img_1.jpg" alt="NLM" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  )
}
