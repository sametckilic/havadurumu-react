import Navbar from './components/Navbar.js';
import SearchBar from './components/SearchBar.js';
import City from './components/City.js';
import CityList from './components/CityList.js';
import MapOrList from './components/MapOrList.js';
import Map from './components/Map/Map.js';
import { useEffect,useState,useCallback } from 'react'



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

  const [loading, setLoading] = useState(false);
  
  const [currentCity, setCurrentCity] = useState({ value: "Bir şehir arayın veya haritadan seçin.", city: {SEHIRADI: ""}});
  
  const getCity = useCallback(async (city,cityName) => {
    setLoading(true);
    setCurrentCity({city:{SEHIRADI: cityName}})
    await fetch(`http://localhost:3001/${city}`)
    .then((data) => {
      if (data.status === 200 && data.ok) {
        return data.json();
      }
    })
    .then((data) => {setCurrentCity(data)});
    setLoading(false);
  },[]);

  const [mapOrList, setMapOrList] = useState(true);

  return (
    <>
    <header>
      <Navbar/>
      <SearchBar/>
      <City city = {currentCity} loading = {loading}/>
      <MapOrList mapOrList = {mapOrList} setMapOrList = {setMapOrList}/>
    </header>
    {mapOrList ? 
    <Map getCity = {getCity}/>:
    <CityList cities = {cities} getCity = {getCity} /> }
    </>
  );
}

export default App;


