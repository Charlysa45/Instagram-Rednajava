import React, { useEffect, useState } from 'react'
import './Stories.css'
// import profileAvatar from '../../../../assets/header-profile-avatar.jpg'
import storieFrame from '../../../../assets/stories-rainbowframe.png'
import data from '../../../../api/IGJSON.json';


const Stories = () => {

  const [usersStories, setUsersStories] = useState([]);

  useEffect(() => {
    let storiesList = data.posts.filter(res => res.stories) 
    setUsersStories(storiesList)
  }, [])
  

  return (
    <section id='stories'>
        <ul>
            {usersStories.map(({avatarUrl, user}) => 
              <li>
                  <div key={user} className='stories-box'>
                    <img src={avatarUrl} alt="Your Storie" className='stories-user-icon'/>
                    <img src={storieFrame} alt="StorieFrame" className='stories-frame' />
                    <div className='stories-username'>{user}</div>
                  </div>
              </li>
              )
            }
        </ul>
    </section>
  )
}

export default Stories