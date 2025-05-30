import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCarts from '../../Components/Navbar/TitleCart/TitleCarts'
import Footer from '../../Components/Navbar/Footer/Footer'

const Home = () => {
  
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discover his ties to a secret ancient order, a young man living in modern Istabul embarks on a quest to save the city from an immortal enermy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCarts/>
        </div>
      </div>
      <div className="more-cards">
       <TitleCarts title={"Blockbuster Movies"} category={"top_rated"}/> 
       <TitleCarts title={"Only on Netflix"} category={"popular"}/> 
       <TitleCarts title={"Upcoming"} category={"upcoming"}/> 
       <TitleCarts title={"Top Picks for You"} category={"now_playing"}/> 
      </div>
      <Footer/>
    </div>
  )
}

export default Home