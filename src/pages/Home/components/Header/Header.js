import React from 'react'
import './Header.css'
import instaLogo from '../../../../assets/instagram-text.png'
import homeIcon from '../../../../assets/icons/header-home-icon.png'
import messagesIcon from '../../../../assets/icons/header-messages-icon.png'
import createIcon from '../../../../assets/icons/header-create-icon.png'
import exploreIcon from '../../../../assets/icons/header-explore-icon.png'
import favsIcon from '../../../../assets/icons/header-favs-icon.png'
import profileAvatar from '../../../../assets/header-profile-avatar.jpg'


const Header = () => {
  return (
    <header>
        <div id='header-logo'>
            <img src={instaLogo} alt="Instagram Logo" id='header-logo-img'/>
        </div>
        <div id='header-options'>
            <img src={homeIcon} alt="Home icon" className='header-options-icon'/>
            <img src={messagesIcon} alt="Home icon" className='header-options-icon'/>
            <img src={createIcon} alt="Home icon" className='header-options-icon'/>
            <img src={exploreIcon} alt="Home icon" className='header-options-icon'/>
            <img src={favsIcon} alt="Home icon" className='header-options-icon'/>
            <img src={profileAvatar} alt="Home icon" id='header-profile-avatar'/>
        </div>
    </header>
  )
}

export default Header