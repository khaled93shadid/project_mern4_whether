import { useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [da, setData] = useState({})
  const [location, setLocation] = useState("")
  const [load, setLoad] = useState(false)


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=19b15efc74b01eb7cc0574d85791c65c&units=metric`

  const searchLocation = async (e) => {
    if (e.key === 'Enter') {
      setLoad(true)
      const res = await axios.get(url)
      console.log(res.data)
      setData(res.data)
      setLoad(false)
    }

  }
  const searchLocation2 = async () => {
    
      setLoad(true)
      const res = await axios.get(url)
      console.log(res.data)
      setData(res.data)
      setLoad(false)
    

  }

  return (
    <>
      <div className='app'>
        <div className='search'>
          <input
            type="text"
            value={location}
            placeholder='ENTER LOCATION'
            onKeyDown={searchLocation}
            onChange={e => setLocation(e.target.value)}

          />
          <br />
          <br />
          <button onClick={searchLocation2} className='btn1'>Check Weather</button>

        </div>
        {load && <p style={{ "textAlign": "center" }}>Loading... </p>}
        <div className='container'>

          <div className='top'>
            <div className='location'>
              <p>{da.name ? da.name : ""}</p>
            </div>
            <div className='temp'>
              <h1>{da.main ? da.main.temp.toFixed() : ""}<small><sup>&deg;c</sup></small></h1>
            </div>
            <div className='description'>
              <p>{da.weather ? da.weather[0].description : ""}</p>
            </div>


          </div>

          <div className='bottom'>

            <div className='feels'>
              <p>{da.main?da.main.feels_like.toFixed():""}</p>
              <p>Feels Like</p>
            </div>
            <div className='humidty'>
              <p>{da.main?da.main.humidity:""}</p>
              <p>Humidty</p>
            </div>
            <div className='wind'>
              <p>{da.main?da.wind.speed:""}</p>
              <p>Wind</p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
