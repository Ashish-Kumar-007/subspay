import React from 'react'
import { Header } from '../Header/Header'
import HeroBanner from '../HeroBanner/HeroBanner'
import SubscriptionSection from '../PricePlans/SubscriptionSection'
import Footer from '../Footer/Footer'
import Contents from '../Contents/Contents'
import AdminPanel from '../AdminPanel/AdminPanel'


export const Dashboard = () => {
  return (
    <div>
        <Header />
        <AdminPanel />
        {/* <Navbar /> */}
        {/* <HeroBanner /> */}
        {/* <Contents /> */}
        <SubscriptionSection  />
        <Footer />
    </div>
  )
}
