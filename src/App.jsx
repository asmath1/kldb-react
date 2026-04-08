import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Administration from './pages/Administration'
import Contact from './pages/Contact'
import Objectives from './pages/Objectives'
import FinancialInfo from './pages/FinancialInfo'
import BreedingPolicy from './pages/BreedingPolicy'
import Programmes from './pages/Programmes'
import GovtOrders from './pages/GovtOrders'
import Tenders from './pages/Tenders'
import SireDirectory from './pages/SireDirectory'
import Gallery from './pages/Gallery'
import GalleryDetail from './pages/GalleryDetail'
import CALG from './pages/CALG'
import RTI from './pages/RTI'
import Training from './pages/Training'
import NLMEDP from './pages/NLMEDP'
import NotFound from './pages/NotFound'
import FrozenSemenManagement from './pages/FrozenSemenManagement'
import ResearchDevelopment from './pages/ResearchandDev'
import Scheme from './pages/Scheme'
import Moet from './pages/EmbryoTransferPrgm'
import SireSelection from './pages/SireSelection'
import RLFMC from './pages/RLFMC'
import GalleryInner1, { GalleryInnerSecond } from './pages/GalleryInner1'
import GalleryInner2 from './pages/GalleryInner2'
import Recruitment from './pages/Recruitment'
import Infrastructure from './pages/Infrastructure'
import Product from './pages/Products'
import Scenario from './pages/Scenario'
import ReportsAndPublications from './pages/ReportsAndPublications'
import InfrastructureDev from './pages/InfrastructureDev'
import FodderDevelopment from './pages/FodderDevelopment'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us-info" element={<About />} />
        <Route path="administration" element={<Administration />} />
        <Route path="contact" element={<Contact />} />
        <Route path="objectives-responsibilities" element={<Objectives />} />
        <Route path="financial-information" element={<FinancialInfo />} />
        <Route path="breeding-policy" element={<BreedingPolicy />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="programmes-frozen" element={<FrozenSemenManagement />} />
        <Route path="govt-orders" element={<GovtOrders />} />
        <Route path="tenders" element={<Tenders />} />
        <Route path="sire-ddirectory" element={<SireDirectory />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:slug" element={<GalleryDetail />} />
        <Route path="calg" element={<CALG />} />
        <Route path="rti" element={<RTI />} />
        <Route path="training" element={<Training />} />
        <Route path="nlm-edp" element={<NLMEDP />} />
        <Route path="r-dev" element={<ResearchDevelopment />} />
        <Route path="scheme" element={< Scheme/>} />
        <Route path="embryo-transfer-programme" element={< Moet/>} />
        <Route path="sire-selection" element={< SireSelection/>} />
        <Route path="rlfmc" element={< RLFMC/>} />
        <Route path="gallery-inner-1" element={< GalleryInner1/>} />
        <Route path="gallery-inner-2" element={< GalleryInner2/>} />
        <Route path="gallery-inner_2" element={< GalleryInnerSecond/>} />
        <Route path="career" element={< Recruitment/>} />
        <Route path="infra" element={< Infrastructure/>} />
        <Route path="product" element={< Product/>} />
        <Route path="current-breeding-program" element={< Scenario/>} />
        <Route path="reports-and-publications" element={<ReportsAndPublications />} />
        <Route path="infrastructure" element={<InfrastructureDev />} />
        <Route path="fodder-development" element={<FodderDevelopment />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
