import { useContext } from "react"
import ImageContext from "../context/ImageContext"

function Summary() {
  const { summary } = useContext(ImageContext)

  return (
    <>
      <div>
        <p className="text-justify">{summary}</p>
      </div>
    </>
  )
}

export default Summary
