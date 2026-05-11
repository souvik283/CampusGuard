import { createRoot } from 'react-dom/client'
import App from "./App"
import {BrowserRouter} from "react-router-dom"
// import TruOfferAuth from "./TruOfferAuth";

{/* <Routes>
  <Route path="/" element={<App />} />
  <Route path="/auth" element={<TruOfferAuth />} />
</Routes> */}



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>

)
