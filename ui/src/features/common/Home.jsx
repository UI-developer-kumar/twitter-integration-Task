import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { logout } from '../user/loginSlice'
import TweetForm from '../pages/TweetForm'
import TweetFeed from '../pages/TweetFeed'
import { IoMdHome, IoIosSearch, IoIosNotificationsOutline } from 'react-icons/io'
import { SlEnvolope } from 'react-icons/sl'
import { FaUserGroup, FaXTwitter } from 'react-icons/fa6'
import { ImPower } from 'react-icons/im'
import { BsPerson } from 'react-icons/bs'
import { CiCircleMore } from 'react-icons/ci'
import SearchBox from '../pages/SearchBox'
import { useState } from 'react'

function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
   var isLoggedIn = useSelector(state=> state.auth)
   var navigate = useNavigate()
   var dispatch = useDispatch()
    console.log(isLoggedIn);
    
    const toggleNavbar = () => {
        setIsNavOpen(prevState => !prevState); 
      };
    
        
  return (
    <div className='container'>
        <div className='left-menu'>
                <div className={`navbar-collapse-custom ${isNavOpen ? 'show' : ''}`}>
                     <nav className="navbar navbar-expand-lg ">
                        <Link className="navbar-brand" to="/home"><FaXTwitter /></Link>
                            <ul className="navbar-nav mr-auto column-links">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home"><IoMdHome /> Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/explore"><IoIosSearch /> Explore</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus"><IoIosNotificationsOutline /> Notifications</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus"><SlEnvolope /> Messages</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus"><FaUserGroup /> Community</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus"><FaXTwitter /> Premium</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus"><ImPower /> Verified Orgs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus"><BsPerson /> Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus"><CiCircleMore /> More</Link>
                                </li>
                                <button className="btn btn-info nav-post-btn">
                                    <Link className="nav-link" to="/aboutus">post</Link>
                                </button>

                                <li className="nav-item">
                                    {isLoggedIn ? (<button className="btn btn-info loggedOut-btn" onClick={() => {dispatch(logout()); navigate("/")}}>Logout</button>) : (<Link to="/login" className="btn btn-success" href="#">Login</Link>)  }
                                    {/* {isLoggedIn && } */}
                                    
                                </li>
                            </ul>
                     </nav>
            </div>
        </div>
        <div className='middle-content'>
                <button className="navbar-toggler-custom" type="button" onClick={toggleNavbar}>
                         <span className="navbar-toggler-icon">☰</span> 
                </button>
            <div className='tweet-section-container'>
                <TweetForm></TweetForm>
            </div>
            <div className='feed-section-container'>
                <TweetFeed></TweetFeed>
            </div>
            <div className='posts-container'>
                <h3>Posts Here</h3>
            </div>
        </div>
        <div className='right-content'>
            <SearchBox></SearchBox>
        </div>

        
    </div>
    
  )

}

export default Home
