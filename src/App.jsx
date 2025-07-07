import logo from '/assets/logo.svg';
import Banner from './components/Banner';
import Feature_1 from './components/Feature_1';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <header>
        <img
          src={logo}
          alt="meet logo"
        />
      </header>
      <Banner />
      <Feature_1 />
      <Footer />
    </>
  );
}

export default App;
