import * as React from 'react'

// import { ScrollReveal } from 'commons/atoms/scrollReveal'
import { HeroSection } from './heroSection/hero'
import { SecondSection } from './secondSection/secondSection'
import { FeaturesSection } from './featuresSection/featuresSection'
import { FourthSection } from './fourthSection/fourthSection'
import { FormSection } from './formSection/formSection'

export const LandingPage = () => (
  <>
  <HeroSection/>
  <SecondSection/>
  <FeaturesSection/>
  <FourthSection/>
  <FormSection/>
  </>
)
