import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/posts")
        .then((response)=>response.json())
        .then((response=>setPosts (response)))
        .catch(err=>console.log(err))
    },[]);

  return (
    <div className='d-flex justify-content-center posts'>
        {posts.length>0 ? (
            <div>
                {posts.map((post)=> (
                    <div className='my-3' key={post.id}>
                        <div className='d-flex username'>
                            <img className='rounded-circle dp' src={post.user.profile_pic} alt="" />
                            <h6>{post.user.username}</h6>
                        </div>
                        <div>
                            <img className='image' src={post.image}/>
                        </div>
                        <div className='interact'>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-send"></i>
                        </div>
                        <div>
                            <b>{post.likes} likes</b>
                        </div>
                        <div>
                            {post.caption}
                        </div>
                    </div>
                ))}                
            </div>
        ):(
            <div>
                Loading...
            </div>
        )}
    </div>
  )
}

export default Posts