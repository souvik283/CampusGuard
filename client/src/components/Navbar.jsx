import React from 'react'
import { useState,  } from 'react'; 
import { useNavigate } from 'react-router-dom';
import ShieldIcon from './ShieldIcon';

const Navbar = () => {
      const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);



  const navigate = useNavigate()

  return (
          <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 48px",
          boxShadow: "10px 2px 10px  #434343",
          background: "#121212",
          position: "static",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ShieldIcon />
          <span style={{ fontSize: 18, fontWeight: 700, color: "#e4e3e3", cursor: "pointer" }}
          onClick={()=>{
            navigate("/")
          }}
          >
            SusScan
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button
            style={{
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              backgroundColor: hover1 ? "#2563EB" : "#e9eaed",
              color: hover1 ? "White" : "Black",
              padding: hover1 ? "11px 22px" : "9px 20px",
              transition: "0.3s",
            }}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            // onClick={onLogin}
            onClick={()=> navigate("/login")}
          >
            Register/ Login
          </button>
          <button
            style={{
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              backgroundColor: hover2 ? "#e9eaed" : "#2563EB",
              color: hover2 ? "Black" : "white",
              padding: hover2 ? "11px 22px" : "9px 20px",
              transition: "0.3s",
            }}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
            // onClick={onGetStarted}
            onClick={()=>{
              navigate("/verify")
            }}
          >
            Get Started
          </button>
        </div>
      </nav>
  )
}

export default Navbar
