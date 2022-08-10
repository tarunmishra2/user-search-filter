import { useState, useEffect } from 'react'
import axios from 'axios'
import './Dropdown.css'

function Dropdown() {

    const [data, setData] = useState([])
    const [category, setCategory] = useState()
    
    // ========== FETCHING API DATA ==========
    useEffect(() => {
        async function getData() {
            const res = await axios.get("https://612619c7e40e1900170727fe.mockapi.io/api/users")
            setData(res.data)
        }
        getData()
    }, [])
    

// ======= UPDATING CATEGORY WITH DROPDOWN VALUE =========
    function handleCatChange(e) {
        setCategory(e.target.value)
    }

    // ======== FUNCTION TO GET FILTERED ITEMS ========
    const filteredItems = data.filter(
        (val) => val.country === category
    );

    // FUNCTION TO RESET SEARCH RESULT
    function reset() {
        return (
            <div className='reset-search'>
            {data.map(item => (
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
    
    // MAIN JSX
    return (
        <div className='dropdown'>
            {/* LOADING DROPDOWN OPTIONS */}
            <div className='dropdown-options'>

            <select className='dd-item' onChange={handleCatChange} value={category}>
            <option value="Country">Country</option>
            {data.map((item) => 
            <option key={item.id} value={item.country}>{item.country}</option>
            )}
                </select>

            <select className='dd-item' onChange={handleCatChange} value={category}>
            <option value="Vehicle">Vehicle</option>
            {data.map((item) => 
                <option key={item.id} value={item.vehicle}>{item.vehicle}</option>
                )}
                </select>

                <button className='reset' onClick={reset}>RESET</button>

                </div>
                
                {/* RENDERING RESULTS BASED ON DROPDOWN OPTIONS */}
                <div className='filtered-items'>
                    {filteredItems.map((result) => {
                        <div className='user-profile'>

                            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="pfp" alt='user-avatar' />
                            <p style={{fontWeight: 'bold'}}>{result.name}</p>
                            <p style={{opacity: '0.8'}}>{result.email}</p>
                            <p>{result.country}</p>
                            <p>{result.vehicle}</p>

                            </div>
                    })}
                    </div>
                
                </div>
    )
}

export default Dropdown