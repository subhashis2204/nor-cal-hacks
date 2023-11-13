import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom"
import Flashcards from "./Flashcards"
import Summary from "./Summary"

function OutputSection() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col justify-between items-center min-h-[30rem]">
          <nav className="my-4">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `${
                  isActive ? "bg-purple-200" : ""
                } py-1 px-5 rounded-full`
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return `${
                  isActive ? "bg-purple-200" : ""
                } py-1 px-5 rounded-full`
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) => {
                return `${
                  isActive ? "bg-purple-200" : ""
                } py-1 px-5 rounded-full`
              }}
            >
              Contacts
            </NavLink>
          </nav>

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
