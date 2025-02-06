import React, { useEffect, useState } from 'react'
import './FetchData.css';

const DefaultFetchData = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://api.npoint.io/9045c260b1565daa9e15")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setItems(data);
        })
    }, [])
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        {items.map((item, index) => (
            <li className="list_data" key={index}>
                <h3>{item.name}</h3>
                <p>Benefits: {item.benefits}</p>
                <img src={item.image} height="100px" />
                <p>Importance: {item.importance}</p>
                <p>Best time to intake: {item.best_time_to_intake}</p>
            </li>
        ))}
     </ul>
    </>
  )
}

export default DefaultFetchData