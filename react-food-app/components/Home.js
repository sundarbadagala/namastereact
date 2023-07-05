import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import ShimmerHome from './ShimmerHome'
import '../styles/home.css'
import { LIST_API } from '../utils/api'


function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      const res = await axios.get(LIST_API)
      setData(res?.data?.data?.cards)
    })()
  }, [])
  if (data.length === 0) {
    return <ShimmerHome/>
  }
  return (
    <div className='home_container'>
      {
        data.map((item, index) => <Card key={index} data={item.data.data} />)
      }
    </div>
  )
}

export default Home