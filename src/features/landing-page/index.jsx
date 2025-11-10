import React from 'react'
import Hero from '../../components/Hero'
import WhyTermbi from '../../components/WhyTermbi'
import TrustedRestaurants from '../../components/TrustedRestaurants'
import PricingPackages from '../../components/PricingPackages'
import FeaturesDashboard from '../../components/FeaturesDashboard'

export default function LandingPage() {
  return (
    <>
    <Hero></Hero>
    <WhyTermbi/>
    <TrustedRestaurants/>
    <PricingPackages/>
    <FeaturesDashboard/>
    </>
  )
}
