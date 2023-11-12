import React from 'react'
import HeroTop from '../components/marketing/pageSections/HeroTop'
import LastProduct from '../components/marketing/pageSections/LastProduct'
import Products from '../components/marketing/pageSections/Products'
import Event from '../components/marketing/pageSections/Event'
import Booking from '../components/marketing/pageSections/Booking'
import Footer from '../components/marketing/pageSections/Footer'

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <LastProduct />
      <Products />
      <Event />
      <Booking />
      <Footer />
    </>
  )
}
