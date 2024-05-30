import React from 'react'
import Footer from "../../Guest/components/Footer"
import Ads from '../components/Ads'
import CategoryLine from '../../Guest/components/CategoryLine'
import Banner from "../../Guest/components/Banner"
import { AppRoute } from './../../App';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    

   <Banner/>

   <Link to="/chatbot" className="text-decoration-none">

            <marquee className="text-dark" behavior="" direction="right" width="100%" id="home">Use AI ChatBot for Assistance</marquee>
</Link>

   <CategoryLine/>
      <Ads />
      <Footer/>
    
    </>
  )
}
