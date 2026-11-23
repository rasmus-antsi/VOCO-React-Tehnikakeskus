import Header from './components/Header/Header.jsx';
import PageHeading from './components/PageHeading/PageHeading.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import Footer from './components/Footer/Footer.jsx';
import { categories, courses } from './data/courses.js';

function App() {
  return (
    <>
      <Header companyName="Tehnikakeskus" tagline="Inseneride täiendkoolitused" />
      <main className="container">
        <PageHeading
          title="Koolituste kataloog"
          intro="Praktilised koolitused 3D-printimise, CAD-disaini ja elektroonika valdkonnas – kogenud koolitajatelt."
        />
        <Catalog categories={categories} courses={courses} />
      </main>
      <Footer companyName="Tehnikakeskus" email="info@tehnikakeskus.ee" phone="+372 600 1234" />
    </>
  );
}

export default App;
