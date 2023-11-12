import ImageComponent from "./components/ImageComponent";
import ImageCarousel from "./components/ImageCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flashcards from "./components/Flashcards";
import Navbar from "./components/Navbar";

function App() {
  return <>
    <Navbar />
    <div className="px-7 py-2 bg-pink-100">
      <ImageComponent />
      <div className="flex justify-around items-center py-4">
        <ImageCarousel />
        <Flashcards />
      </div>
    </div>
  </>;
}

export default App;
