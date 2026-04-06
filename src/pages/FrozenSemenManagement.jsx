import Breadcrumb from '../components/common/Breadcrumb'

export default function FrozenSemenManagement() {
  return (
    <>
      <Breadcrumb 
        title="Frozen Semen Management" 
        crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Frozen Semen Management' }]} 
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      <h2 className="wow fadeInDown">Frozen Semen Management</h2>

                      <p>
                        The State has evolved a Three-tier Artificial Insemination (A.I.) management system to provide the inputs for cattle breeding.
                      </p>

                      <br />

                      {/* Bull Stations */}
                      <h2 className="wow fadeInDown">Bull Stations (Central Semen Banks)</h2>

                      <p>
                        The KLD Board has 3 bull stations located at Mattupatti, Kulathupuzha and Dhoni...
                      </p>

                      <p>
                        The frozen semen laboratories are periodically updated to match national standards...
                      </p>

                      <p>
                        All the three semen stations have acquired ISO 9001:2008 and HACCP certifications...
                      </p>

                      <br />

                      {/* AI Organisations */}
                      <h2 className="wow fadeInDown">AI (Artificial Insemination) Organisations</h2>

                      <p>
                        The State has developed an efficient Three Tier AI organization...
                      </p>

                      <img 
                        src="/assets/img/der.JPG" 
                        className="w-50 wow fadeInUp mb-4" 
                        alt="AI Organization" 
                      />

                      {/* RSB */}
                      <h2 className="wow fadeInDown">Regional Semen Banks (RSBs)</h2>

                      <p>
                        The frozen semen doses produced at the bull stations are distributed across the State through RSBs.
                      </p>

                      {/* Table 1 */}
                      <table className="table matable table-bordered w-100 mb-4">
                        <thead>
                          <tr>
                            <th>RSB</th>
                            <th>Year</th>
                            <th>Districts Covered</th>
                            <th>AI Centres</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mavelikara</td>
                            <td>1970</td>
                            <td>Alappuzha, Pathanamthitta, Kollam</td>
                            <td>415</td>
                          </tr>
                          <tr>
                            <td>Kulathupuzha</td>
                            <td>1974</td>
                            <td>Thiruvananthapuram, Kollam</td>
                            <td>463</td>
                          </tr>
                          <tr>
                            <td>Muvattupuzha</td>
                            <td>1981</td>
                            <td>Kottayam, Ernakulam, Idukki</td>
                            <td>460</td>
                          </tr>
                          <tr>
                            <td>Kannur</td>
                            <td>1983</td>
                            <td>Kannur, Kasargode</td>
                            <td>378</td>
                          </tr>
                          <tr>
                            <td>Chalakudy</td>
                            <td>1985</td>
                            <td>Thrissur, Ernakulam, Idukki</td>
                            <td>369</td>
                          </tr>
                          <tr>
                            <td>Puthupady</td>
                            <td>1985</td>
                            <td>Kozhikode, Wayanad</td>
                            <td>433</td>
                          </tr>
                          <tr>
                            <td>Dhoni</td>
                            <td>1992</td>
                            <td>Palakkad, Thrissur</td>
                            <td>421</td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Functions */}
                      <h4 className="subHead2">Major Functions of RSB</h4>
                      <hr />

                      <ul className="checked-list mb-4 wow fadeInUp mt-0">
                        <li>Distribution of semen, LN & AI materials</li>
                        <li>Procurement of liquid nitrogen</li>
                        <li>Implementation of breeding programme</li>
                        <li>Bull rotation programme</li>
                        <li>Performance feedback</li>
                        <li>Sale to private agencies</li>
                        <li>Testing of cryogenic equipment</li>
                        <li>Customer relations</li>
                      </ul>

                      {/* AI Centers */}
                      <h4 className="subHead2">Artificial Insemination Centers</h4>
                      <hr />

                      <p>
                        AI is carried out mainly by Animal Husbandry Department and other agencies...
                      </p>

                      {/* Growth Table */}
                      <h4 className="subHead1">Growth of AI Centers</h4>

                      <table className="table matable table-bordered w-100 mb-4">
                        <thead>
                          <tr>
                            <th>Year</th>
                            <th>AHD</th>
                            <th>DDD</th>
                            <th>APCOS</th>
                            <th>Others</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2013-14</td>
                            <td>2487</td>
                            <td>9</td>
                            <td>242</td>
                            <td>249</td>
                            <td>2987</td>
                          </tr>
                          <tr>
                            <td>2014-15</td>
                            <td>2489</td>
                            <td>9</td>
                            <td>242</td>
                            <td>245</td>
                            <td>2985</td>
                          </tr>
                          <tr>
                            <td>2015-16</td>
                            <td>2494</td>
                            <td>9</td>
                            <td>242</td>
                            <td>233</td>
                            <td>2978</td>
                          </tr>
                          <tr>
                            <td>2016-17</td>
                            <td>2499</td>
                            <td>5</td>
                            <td>231</td>
                            <td>235</td>
                            <td>2970</td>
                          </tr>
                          <tr>
                            <td>2017-18</td>
                            <td>2497</td>
                            <td>5</td>
                            <td>221</td>
                            <td>216</td>
                            <td>2939</td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Storage */}
                      <h2 className="wow fadeInDown">Semen Storage at Field AI Centres</h2>

                      <p>
                        Eight litre LN refrigerators were initially used for storing frozen semen...
                      </p>

                      <p>
                        Mobile AI programme was attempted to improve coverage and efficiency...
                      </p>

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