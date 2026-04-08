

import { bannersApi } from "../redux/services/bannerApi";
import Breadcrumb from '../components/common/Breadcrumb'
import Preloader from "../components/common/Preloader";

export default function Administration() {
  const { data, isLoading, error } = bannersApi.useGetAdministrationDirectorsQuery();

  if (isLoading) return <Preloader />;
  if (error) return <div className="error-container">Error loading administration</div>;

  const administration = data;
  if (!administration) return <Preloader />;

  const chairman = administration.children.find(child => child.slug === 'chairman');
  const directors = administration.children.find(child => child.slug === 'directors');

  return (
    <>
      <Breadcrumb
        title="Administration"
        crumbs={[{ label: 'About Us', path: '/about' }, { label: 'Administration' }]}
      />

      <section className="blog-wrapper section-padding-inner">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="text-center post-content pt-0">

                      <h2 className="wow fadeInDown">Administration</h2>

                      <div className="admin mt-4">
                        <div className="row gx-4 gy-4">

                          <h2 className="wow fadeInDown mb-2">{administration.name}</h2>

                          {/* Chairman */}
                          {chairman && chairman.profiles.length > 0 && (
                            <div className="col-12">
                              <div className="card border-0 bg-transparent wow fadeInUp">
                                <div className="card-body p-0">
                                  <h4 className="chairh m-0">{chairman.name}</h4>
                                  {chairman.profiles.map(profile => (
                                    <div key={profile.id} className="adminC">
                                      {profile.photo && (
                                        <img
                                          src={`https://livestock.cditproject.org${profile.photo}`}
                                          alt={profile.name}
                                          className="profile-photo mb-2"
                                          style={{ width: '150px', height: '180px', objectFit: 'cover' }}
                                        />
                                      )}
                                      <h5 className="m-0">{profile.name}</h5>
                                      <h6 className="subi mb-0">{profile.designation}</h6>
                                      <p className="mb-0">{profile.bio}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Directors */}
                          {directors && directors.profiles.length > 0 && (
                            <div className="col-12">
                              <div className="card border-0 bg-transparent wow fadeInUp">
                                <div className="card-body p-0">
                                  <h4 className="mb-3 chairh">{directors.name}</h4>

                                  <div className="row">
                                    {directors.profiles.map(profile => (
                                      <div key={profile.id} className="col-md-4 mb-3">
                                        <div className="direc">
                                          {profile.photo && (
                                            <img
                                              src={`https://livestock.cditproject.org${profile.photo}`}
                                              alt={profile.name}
                                              className="profile-photo mb-2"
                                              style={{ width: '100px', height: '140px', objectFit: 'cover' }}
                                            />
                                          )}
                                          <h5>{profile.name}</h5>
                                          <p className="subi mb-0">{profile.designation}</p>
                                          {profile.bio && <p className="mb-0">{profile.bio}</p>}
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                </div>
                              </div>
                            </div>
                          )}

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}