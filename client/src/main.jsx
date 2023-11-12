import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "@fontsource/poppins"
import { Auth0Provider } from "@auth0/auth0-react"
import { BrowserRouter } from "react-router-dom"
import { ImageProvider } from "./context/ImageContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-1zkimo336xf4o25l.us.auth0.com"
    clientId="jl6Wo2TNbde4cVD3RNodCXvzVzSYRFBB"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ImageProvider>
      <App />
    </ImageProvider>
  </Auth0Provider>
)
