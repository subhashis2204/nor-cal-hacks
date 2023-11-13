import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom"
import Flashcards from "./Flashcards"
import Summary from "./Summary"
import ImageContext from "../context/ImageContext"
import { useContext } from "react"

function OutputSection() {
  const { questions } = useContext(ImageContext)

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col justify-start items-center min-h-[30rem]">
          {questions.length > 0 ? (
            <>
              <nav className="my-4 flex gap-4 items-center justify-center">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `${
                      isActive ? "bg-purple-600 text-white" : ""
                    } py-1 px-3 rounded-full`
                  }}
                >
                  Flashcards
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return `${
                      isActive ? "bg-purple-600 text-white" : ""
                    } py-1 px-3 rounded-full`
                  }}
                >
                  Summary
                </NavLink>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => {
                    return `${
                      isActive ? "bg-purple-600 text-white" : ""
                    } py-1 px-3 rounded-full`
                  }}
                >
                  MCQs
                </NavLink>
              </nav>
            </>
          ) : (
            <></>
          )}
          <Routes>
            <Route path="/" element={<Flashcards />} />
            <Route path="/about" element={<Summary />} />
            <Route path="/contacts" element={<div>helloworld3</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default OutputSection
