import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/profile')
    .then(response => response.json())
    .then(data => setProfile(data))
    .catch(err => console.log(err))
    
    fetch('http://localhost:3000/suggestions')
    .then(response => response.json())
    .then(data => setSuggestions(data))
    .catch(err => console.log(err))
  
  },[]);

  return (
    <div>
      <div className="m-4 suggestions">
          {profile ?
          <div className='d-flex username'>
            <img className='rounded-circle dp' src={profile.profile_pic} />
            <h6>{profile.username}</h6>
            <small className=' text-primary'>switch</small>
          </div> : <p>Loading...</p>}

          <div className='d-flex mt-4'>
            <p>Suggested for you</p>
            <b className='ms-auto'>See all</b>
          </div>
          {suggestions.length >0 ? (
            suggestions.map((suggestion)=>(
              <div className='my-2' key={suggestion.id}>
                  <div className='d-flex username'>
                      <img className='rounded-circle dp' src={suggestion.profile_pic}/>
                      <h6>{suggestion.username}</h6>
                      <p className='text-primary ms-auto'>Follow</p>
                  </div>
              </div>
            ))
          ):(
            <div>loading...</div>
          )}
            
      </div>
    </div>
  )
}

export default Suggestions