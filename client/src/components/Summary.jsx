import { useContext } from "react"
import ImageContext from "../context/ImageContext"

function Summary() {
  const { summary } = useContext(ImageContext)

  return (
    <>
      <div>
        <p className="text-justify pt-5 mt-8 bg-white p-4 rounded-md max-w-[35rem]">
          {summary}
        </p>
      </div>
    </>
  )
}

export default Summary
