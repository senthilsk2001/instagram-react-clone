import React, { useEffect, useState } from 'react'

function Stories() {
  const [stories, setStories] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/story')
    .then(data => data.json())
    .then(data => setStories(data))
    .catch(err => console.log(err))
  },[])


  return (
    <div className='story d-flex'>
      {stories.length > 0 ? (
        stories.map((story)=>(
          <div className='inner-story' key={story.id}>
            <div className='gradient-border'>
              <img className='rounded-circle' src={story.user.profile_pic} />
            </div> 
            <p className='text-truncate'>{story.user.username}</p>
          </div>
        ))
      ):(
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Stories