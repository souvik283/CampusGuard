import { createRoot } from 'react-dom/client'
import App from "./app"
// import TruOfferAuth from "./TruOfferAuth";

{/* <Routes>
  <Route path="/" element={<App />} />
  <Route path="/auth" element={<TruOfferAuth />} />
</Routes> */}



createRoot(document.getElementById('root')).render(
 <App/>
)
