import { useState, useEffect } from 'react'
import CustomCard from './Components/card';
import './App.css';
function App() {

  const [data, setData] = useState({});
  useEffect(() => {
    async function myData() {
      try {
        const val = await fetch('https://data.covid19india.org/data.json');
        const actualData = await val.json();
        console.log(5)
        // console.log(actualData);
        setData(actualData.statewise[0]);

      } catch (error) {
        console.log(error);
      }
    }
    myData();
  }, [])


  return (
    <>
      <div className='container'>
        <CustomCard title="Active" value={`${data.active}`} color="#3498db" />
        <CustomCard title="Confirmed" value={`${data.confirmed}`} color="#3498db" />
        <CustomCard title="Deaths" value={`${data.deaths}`} color="#3498db" />
        <CustomCard title="Delta Confirmed" value={`${data.deltaconfirmed}`} color="#3498db" />
      </div>
      <div className='container'>
        <CustomCard title="Delta Deaths" value={`${data.deltadeaths}`} color="#3498db" />
        <CustomCard title="Delta Recovered" value={`${data.deltarecovered}`} color="#3498db" />
        <CustomCard title="Recovered" value={`${data.recovered}`} color="#3498db" />
        <CustomCard title="Last Updated Time" value={`${data.lastupdatedtime}`} color="#3498db" />
      </div>
    </>
  )
}

export default App
