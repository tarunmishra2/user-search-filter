import { useState, useEffect } from 'react'
import axios from 'axios'
import './Search.css'

function Search() {

  const [searchData, setSearchData] = useState([]) 
  const [input, setInput] = useState("")
  const [output, setOutput] = useState([])
  
  // =============== GETTING API DATA ===============

  useEffect(() => {
    async function getData(){
      const res = await axios.get('https://612619c7e40e1900170727fe.mockapi.io/api/users')
      setSearchData(res.data)
      setOutput(res.data)
    }
    getData()
  }, [])

// ========== MATCHING SEARCH INPUT WITH API DATA ==========

  useEffect(() => {
    setOutput([])
    searchData.filter(item => {
      if(item.name.toLowerCase().includes(input.toLowerCase()) 
      || item.country.toLowerCase().includes(input.toLowerCase()) 
      || item.email.toLowerCase().includes(input.toLowerCase()) 
      || item.vehicle.toLowerCase().includes(input.toLowerCase())){
        setOutput(output => [...output, item])
      }
    })
  }, [input])


  function searchInput(e) {
    setInput(e.target.value);
  }

  // ================== MAIN JSX ==================
  return (
    <div className='user-search'>

        <input className='searchbar' type='text' placeholder='SEARCH' onChange={searchInput} ></input>

          {output.map(item => (
                <div className='user-profile' key={item.id}>

                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="pfp" alt='user-avatar' />
                <p style={{fontWeight: 'bold'}}>{item.name}</p>
                <p style={{opacity: '0.8'}}>{item.email}</p>
                <p>{item.country}</p>
                <p>{item.vehicle}</p>
                
                </div>
            ))}

    </div>
  )
}

export default Search