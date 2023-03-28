import React from 'react'
import Footer from '../components/footer/Footer'
import PostCards from '../components/home/PostCards'
import Navbar from '../components/navbar/Navbar'

function HomePage() {
  return (
    <>
      <Navbar />
      <PostCards/>
      <Footer />
    </>
  )
}

export default HomePage