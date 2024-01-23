import About from "./components/About/About"
import Chef from "./components/Chef/Chef"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Gallery from "./components/Gallery/Gallery"
import Header from "./components/header/Header"
import Intro from "./components/Intro/Intro"
import Laurels from "./components/Laurels/Laurels"
import NavBar from "./components/NavBar/NavBar"
import SpecialMenu from "./components/SpecialMenu/SpecialMenu"

function App() {
  
  return (
    <>
    <NavBar />
    <Header />
    <About />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Contact />
    <Footer />
    </>
  )
}

export default App
