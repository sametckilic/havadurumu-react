import './App.css';
import Navbar from './components/Navbar.js';
import SearchBar from './components/SearchBar.js';
import City from './components/City.js';
import CityList from './components/CityList.js';
import { useEffect,useState } from 'react'



function App() {
  
  const [cities, setCities] = useState();
  
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((data) => {
        if (data.status === 200 && data.ok) {
          return data.json();
        }
      })
      .then((data) => {setCities(data)});

  }, [])

  const getCity = async (city) => {
    console.log(city);
    await fetch(`http://localhost:3001/${city}`)
    .then((data) => {
      if (data.status === 200 && data.ok) {
        return data.json();
      }
    })
    .then((data) => {setCurrentCity(data)});
  };

  const [currentCity, setCurrentCity] = useState({ value: "Bir şehir arayın veya haritadan seçin.", city: {SEHIRADI: ""}});

  return (
    <>
    <header>
      <Navbar/>
      <SearchBar/>
      <City city = {currentCity}/>
    </header>
    <CityList cities = {cities} getCity = {getCity} />
    </>
  );
}

export default App;
