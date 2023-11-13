import { useContext } from "react"
import ImageContext from "../context/ImageContext"
import Slider from "react-slick"

function ImageCarousel() {
  const { images } = useContext(ImageContext)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const content = (
    <Slider
      {...settings}
      className="min-h-[30rem] w-[22rem] rounded-md mx-auto"
    >
      {images.map((image, index) => {
        return (
          <div key={index} className="min-h-[30rem] w-full m-0 p-0">
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="w-full mx-auto rounded-md m-0 p-0"
            />
          </div>
        )
      })}
    </Slider>
  )
  return (
    <>
      {images.length > 0 && content}
      {!images.length > 0 && (
        <div className="h-[30rem] w-[22rem] bg-gray-200 flex items-center justify-center p-5 text-center rounded-md outline outline-gray-400">
          Select Some Images to Show Them Here
        </div>
      )}
    </>
  )
}

export default ImageCarousel
