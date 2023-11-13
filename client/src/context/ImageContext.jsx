import { createContext, useState } from "react"

const ImageContext = createContext()

function ImageProvider({ children }) {
  const [images, setImages] = useState([])
  const [questions, setQuestions] = useState([])
  const [processing, setProcessing] = useState(false)
  const [summary, setSummary] = useState("")

  return (
    <>
      <ImageContext.Provider
        value={{
          images,
          setImages,
          questions,
          setQuestions,
          processing,
          setProcessing,
          summary,
          setSummary,
        }}
      >
        {children}
      </ImageContext.Provider>
    </>
  )
}

export default ImageContext
export { ImageProvider }
