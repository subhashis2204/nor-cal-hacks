import ImageComponent from "./components/ImageComponent"
import ImageCarousel from "./components/ImageCarousel"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Flashcards from "./components/Flashcards"
import Navbar from "./components/Navbar"
import OutputSection from "./components/OutputSection"

function App() {
  return (
    <>
      <Navbar />
      <div className="px-7 py-2 bg-pink-100">
        <ImageComponent />
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="col-start-1 col-span-1">
            <ImageCarousel />
          </div>
          <div className="col-start-2 col-span-1">
            <OutputSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
