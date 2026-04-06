import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetMenusQuery } from "../../redux/services/bannerApi";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  const { data: menus, isLoading: menusLoading, isError: menusError } = useGetMenusQuery();

  const getMenuTitle = (item) => {
    const translations = Array.isArray(item?.translations) ? item.translations : [];
    const preferred = translations.find((t) => t?.language_code === "en" || t?.language_id === 1) || translations[0];
    return (preferred?.title || item?.title || item?.slug || "Untitled").trim();
  };

  const getMenuPath = (item) => {
    if (!item) return "#";
    const target = String(item?.target || "").trim();

    const safePath = (raw) => {
      if (!raw) return "#";
      if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
      if (raw === "#") return "#";
      if (raw.startsWith("/")) return raw;
      return `/${raw}`;
    };

    if (target && target !== "#") {
      return safePath(target);
    }

    if (item.type === "article") {
      const articleSlug = item?.article_slug || item?.slug;
      if (articleSlug) return safePath(articleSlug);
    }

    if (item.slug) {
      return safePath(item.slug);
    }

    return "#";
  };

  const menuItems = useMemo(() => {
    if (!Array.isArray(menus)) return [];
    const sortByOrder = (a, b) => (Number(a?.order || 0) - Number(b?.order || 0));

    const normalize = (items = []) =>
      items
        .filter((item) => item?.active !== false)
        .sort(sortByOrder)
        .map((item) => ({
          ...item,
          children: Array.isArray(item.children) ? normalize(item.children) : [],
        }));

    return normalize(menus);
  }, [menus]);

  const renderMenuList = (items = []) =>
    items.map((item) => {
      const title = getMenuTitle(item);
      const path = getMenuPath(item);
      const childItems = Array.isArray(item.children) ? item.children : [];
      const hasChildren = childItems.length > 0;
      const isActive =
        path !== "#" &&
        (location.pathname.replace(/\/$/, "") === path.replace(/\/$/, "") || location.pathname === path);

      const className = [hasChildren ? "has-dropdown" : "", isActive ? "active" : ""]
        .filter(Boolean)
        .join(" ");

      let linkElement = null;
      if (path === "#") {
        linkElement = (
          <a href="#">
            {title} {hasChildren && <i className="fas fa-chevron-right"></i>}
          </a>
        );
      } else if (path.startsWith("http://") || path.startsWith("https://")) {
        linkElement = (
          <a href={path} target="_blank" rel="noreferrer">
            {title} {hasChildren && <i className="fas fa-chevron-right"></i>}
          </a>
        );
      } else {
        linkElement = <Link to={path}>{title} {hasChildren && <i className="fas fa-chevron-right"></i>}</Link>;
      }

      return (
        <li key={item.id || title} className={className}>
          {linkElement}
          {hasChildren && <ul className="submenu">{renderMenuList(childItems)}</ul>}
        </li>
      );
    });


  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
    setOpenDropdowns({});
  }, [location]);


  const toggleDrop = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNavClick = (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    // Close any open menus (offcanvas / mobile menu) on navigation
    setSidebarOpen(false);
    setOpenDropdowns({});

    // Close meanmenu if it is open
    const $ = window.$;
    if ($ && $(".meanmenu-reveal.meanclose").length) {
      $(".meanmenu-reveal.meanclose").trigger("click");
    }
  };

  return (
    <>
      {/* Preloader handled in Layout */}

      {/* Back To Top */}
      <BackToTop />

      {/* Offcanvas */}
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img className="" src="/assets/img/logi.svg" alt="logo-img"  />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setSidebarOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <h4 className="offcanvas-title">
                KERALA LIVESTOCK DEVELOPMENT BOARD
              </h4>
              <p>
                The Kerala Livestock Development Board Ltd. was established in
                the year 1976.
              </p>
              <div className="mobile-menu fix mt-15"></div>
              <div className="social-icon d-flex align-items-center">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="offcanvas__contact">
                <h3>Contact Us</h3>
                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <i className="far fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <p>Call Us</p>
                      <h4>
                        <a href="tel:04712440920">0471- 2440920, 2449138</a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="content">
                      <p>Send Email</p>
                      <h4>
                        <a href="mailto:kldboard8@gmail.com">
                          kldboard8@gmail.com
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <p>Location</p>
                      <h4>"Gokulam", Pattom, Thiruvananthapuram – 695004</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebarOpen ? "overlay-open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Header Top */}
      <div className="header-top-section">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="header-contact-list">
              <li>
                <i className="fal fa-envelope"></i>
                <a href="mailto:kldboard8@gmail.com">kldboard8@gmail.com</a>
              </li>
              <li>
                <i className="far fa-phone-alt"></i>
                <a href="tel:04712440920">0471- 2440920 | 2449138</a>
              </li>
            </ul>
            <Link to="/" className="top-logo">
              <img src="/assets/img/loko.svg" width="250" alt="img" />
            </Link>
            <div className="head-right">
              <div className="flag-wrap">
                <select className="single-select w-100">
                  <option lang="ml">മലയാളം</option>
                  <option>English</option>
                </select>
              </div>
              <div className="line-shape"></div>
              <div className="social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        id="header-sticky"
        className={`header-1 header-5 ${sticky ? "sticky" : ""}`}
      >
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <img src="/assets/img/logi.svg" alt="img" />
              </Link>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu" onClick={handleNavClick}>
                    <ul>
                      {menusLoading && <li>Loading menus...</li>}
                      {menusError && <li>Error loading menu</li>}
                      {!menusLoading && !menusError && menuItems.length > 0 && renderMenuList(menuItems)}
                      {!menusLoading && !menusError && menuItems.length === 0 && (
                        <>
                          <li className={location.pathname === "/" ? "active" : ""}>
                            <Link to="/">Home</Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header__hamburger my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <div className="header-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      id="back-top"
      className={`back-to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <i className="far fa-arrow-up"></i>
    </button>
  );
}




// --------------------------------------------------------------------


// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Header() {
//   const [sticky, setSticky] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openDropdowns, setOpenDropdowns] = useState({});
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setSticky(window.scrollY > 250);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setSidebarOpen(false);
//     setOpenDropdowns({});
//   }, [location]);

//   const toggleDrop = (key) => {
//     setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const handleNavClick = (e) => {
//     const link = e.target.closest("a");
//     if (!link) return;

//     // Close any open menus (offcanvas / mobile menu) on navigation
//     setSidebarOpen(false);
//     setOpenDropdowns({});

//     // Close meanmenu if it is open
//     const $ = window.$;
//     if ($ && $(".meanmenu-reveal.meanclose").length) {
//       $(".meanmenu-reveal.meanclose").trigger("click");
//     }
//   };

//   return (
//     <>
//       {/* Preloader handled in Layout */}

//       {/* Back To Top */}
//       <BackToTop />

//       {/* Offcanvas */}
//       <div className="fix-area">
//         <div className={`offcanvas__info ${sidebarOpen ? "info-open" : ""}`}>
//           <div className="offcanvas__wrapper">
//             <div className="offcanvas__content">
//               <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
//                 <div className="offcanvas__logo">
//                   <Link to="/">
//                     <img className="" src="/assets/img/logi.svg" alt="logo-img"  />
//                   </Link>
//                 </div>
//                 <div className="offcanvas__close">
//                   <button onClick={() => setSidebarOpen(false)}>
//                     <i className="fas fa-times"></i>
//                   </button>
//                 </div>
//               </div>
//               <h4 className="offcanvas-title">
//                 KERALA LIVESTOCK DEVELOPMENT BOARD
//               </h4>
//               <p>
//                 The Kerala Livestock Development Board Ltd. was established in
//                 the year 1976.
//               </p>
//               <div className="mobile-menu fix mt-15"></div>
//               <div className="social-icon d-flex align-items-center">
//                 <a href="#">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-youtube"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//               <div className="offcanvas__contact">
//                 <h3>Contact Us</h3>
//                 <ul className="contact-list">
//                   <li>
//                     <div className="icon">
//                       <i className="far fa-phone-alt"></i>
//                     </div>
//                     <div className="content">
//                       <p>Call Us</p>
//                       <h4>
//                         <a href="tel:04712440920">0471- 2440920, 2449138</a>
//                       </h4>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="icon">
//                       <i className="fal fa-envelope"></i>
//                     </div>
//                     <div className="content">
//                       <p>Send Email</p>
//                       <h4>
//                         <a href="mailto:kldboard8@gmail.com">
//                           kldboard8@gmail.com
//                         </a>
//                       </h4>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="icon">
//                       <i className="fal fa-map-marker-alt"></i>
//                     </div>
//                     <div className="content">
//                       <p>Location</p>
//                       <h4>"Gokulam", Pattom, Thiruvananthapuram – 695004</h4>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`offcanvas__overlay ${sidebarOpen ? "overlay-open" : ""}`}
//         onClick={() => setSidebarOpen(false)}
//       ></div>

//       {/* Header Top */}
//       <div className="header-top-section">
//         <div className="container">
//           <div className="header-top-wrapper">
//             <ul className="header-contact-list">
//               <li>
//                 <i className="fal fa-envelope"></i>
//                 <a href="mailto:kldboard8@gmail.com">kldboard8@gmail.com</a>
//               </li>
//               <li>
//                 <i className="far fa-phone-alt"></i>
//                 <a href="tel:04712440920">0471- 2440920 | 2449138</a>
//               </li>
//             </ul>
//             <Link to="/" className="top-logo">
//               <img src="/assets/img/loko.svg" width="250" alt="img" />
//             </Link>
//             <div className="head-right">
//               <div className="flag-wrap">
//                 <select className="single-select w-100">
//                   <option lang="ml">മലയാളം</option>
//                   <option>English</option>
//                 </select>
//               </div>
//               <div className="line-shape"></div>
//               <div className="social-icon">
//                 <a href="#">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-youtube"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header
//         id="header-sticky"
//         className={`header-1 header-5 ${sticky ? "sticky" : ""}`}
//       >
//         <div className="container">
//           <div className="mega-menu-wrapper">
//             <div className="header-main">
//               <Link to="/" className="header-logo">
//                 <img src="/assets/img/logi.svg" alt="img" />
//               </Link>
//               <div className="mean__menu-wrapper">
//                 <div className="main-menu">
//                   <nav id="mobile-menu" onClick={handleNavClick}>
//                     <ul>
//                       <li className={location.pathname === "/" ? "active" : ""}>
//                         <Link to="/">Home</Link>
//                       </li>
//                       <li className="has-dropdown">
//                         <a href="#">
//                           About Us <i className="fas fa-chevron-down"></i>
//                         </a>
//                         <ul className="submenu">
//                           <li>
//                             <Link to="/objectives">
//                               Objectives and Responsibilities
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/administration">Administration</Link>
//                           </li>
//                           <li>
//                             <Link to="/">Infrastructure</Link>
//                           </li>

//                           <li>
//                             <Link to="/financial-information">
//                               Financial Information
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/infrastructure">
//                               Infrastructure Development In The Growth Process
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/r-dev">R & D</Link>
//                           </li>
//                           <li>
//                             <Link to="/">Publications</Link>
//                           </li>

//                           <li className="has-dropdown">
//                             <a href="#">
//                               Scenario <i className="fas fa-angle-right"></i>
//                             </a>
//                             <ul className="submenu">
//                               <li>
//                                 <Link to="/breeding-policy">
//                                   Breeding Policy
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link to="/about">
//                                   Animal Husbandry Statistics
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link to="/scenario">
//                                  Current Breeding Programme vis a vis Breeding Policy
//                                 </Link>
//                               </li>
//                             </ul>
//                           </li>
//                           <li className="has-dropdown">
//                             <a href="#">
//                               Activities <i className="fas fa-angle-right"></i>
//                             </a>
//                             <ul className="submenu">
//                               <li>
//                                 <Link to="/product">Products</Link>
//                               </li>
//                               <li>
//                                 <Link to="/scheme">Schemes</Link>
//                               </li>
//                               <li className="has-dropdown">
//                                 <a href="#">
//                                   Programmes{" "}
//                                   <i className="fas fa-chevron-right"></i>
//                                 </a>
//                                 <ul className="submenu">
//                                   <li>
//                                     <Link to="/programmes">
//                                       Fodder Development
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/embryo-transfer">
//                                       Embryo Transfer Programme
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/sire-selection">
//                                       SIRE Selection Programme
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/programmes-frozen">
//                                       Frozen Semen Management
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/rlfmc">RLFMCs</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/programmen">
//                                       Other Programmes
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </li>
//                                 <li>
//                                 <Link to="/">Project Details</Link>
//                               </li>
//                             </ul>
//                           </li>
//                         </ul>
//                       </li>
//                       <li className="has-dropdown">
//                         <a href="#">
//                           Downloads <i className="fas fa-chevron-down"></i>
//                         </a>
//                         <ul className="submenu">
//                           <li>
//                             <Link to="/govt-orders">Govt Orders</Link>
//                           </li>
//                           <li>
//                             <Link to="/tenders">Tenders</Link>
//                           </li>
//                            <li>
//                             <Link to="/career">Recruitment</Link>
//                           </li>
//                           <li>
//                             <Link to="/sire-directory">SIRE Directory</Link>
//                           </li>
                         
//                           <li>
//                             <Link to="/reports">Reports And Publications</Link>
//                           </li>
//                           <li className="has-dropdown">
//                             <a href="#">
//                               Media <i className="fas fa-angle-right"></i>
//                             </a>
//                             <ul className="submenu">
//                               <li>
//                                 <Link to="/gallery">Photo Gallery</Link>
//                               </li>
//                             </ul>
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <Link to="/about">Bull Details</Link>
//                       </li>
//                       <li>
//                         <Link to="/calg">CALG</Link>
//                       </li>
//                       <li>
//                         <Link to="/contact">Contact</Link>
//                       </li>
//                       <li>
//                         <Link to="/rti">RTI</Link>
//                       </li>
//                       <li>
//                         <Link to="/training">Training Programme</Link>
//                       </li>
//                       <li>
//                         <Link to="/nlm-edp">NLM-EDP</Link>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//               <div className="header-right d-flex justify-content-end align-items-center">
//                 <div className="header__hamburger my-auto">
//                   <div
//                     className="sidebar__toggle"
//                     onClick={() => setSidebarOpen(true)}
//                   >
//                     <div className="header-bar">
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// function BackToTop() {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setShow(window.scrollY > 400);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <button
//       id="back-top"
//       className={`back-to-top ${show ? "show" : ""}`}
//       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       aria-label="Back to top"
//     >
//       <i className="far fa-arrow-up"></i>
//     </button>
//   );
// }