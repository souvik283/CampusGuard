
import AuthPage from "./pages/AuthPage";
import App2 from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";

import {Routes, Route} from "react-router-dom"



export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background:"#763764", minHeight: "100vh", position: "relative" }}>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
 

<Routes>
    <Route path="/" element={<App2/>}/>
      <Route path="/login" element={<AuthPage/>}/>
      <Route path="/verify" element={<DashBoard/>}/>

    </Routes>


    </div>
  );
}