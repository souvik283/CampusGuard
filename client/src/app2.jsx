import { useState, useEffect } from 'react'
import axios from "axios"

const App = () => {
  const [array, setArray] = useState([])

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:4125/api/test")
      setArray(response.data.names) // adjust based on API
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching API:", error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>
      {/* {array.map((name, index) => (
        <div key={index}>
          <p>{name}</p>
        </div>
      ))} */}
    </div>
  )
}

export default App
