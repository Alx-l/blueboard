import * as styles from './featuresSection.scss'

import * as React from 'react'

import { Title } from 'commons/atoms/title'
import { Feature } from 'commons/atoms/feature'
import { ScrollReveal } from 'commons/atoms/scrollReveal'

const firstFeature = (
  <Feature key="first" iconUrl="/static/feature1.png" title="first feature">
    <p>
      Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit
      libero, a pharetra augue.
    </p>
  </Feature>
)

const secondFeature = (
  <Feature key="second" iconUrl="/static/feature2.png" title="second feature">
    <p>
      Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit
      libero, a pharetra augue.
    </p>
  </Feature>
)

const thirdFeature = (
  <Feature key="third" iconUrl="/static/feature3.png" title="third feature">
    <p>
      Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit
      libero, a pharetra augue.
    </p>
  </Feature>
)

const features = [firstFeature, secondFeature, thirdFeature]

export const FeaturesSection = () => (
  <div className={styles.root}>
    <div className={styles.children}>
      <ScrollReveal slideFrom="bottom">
        <Title
          className={styles.title}
          label="new features"
          description="some awesome features"
        />
      </ScrollReveal>
      <ScrollReveal slideFrom="left">
        <div className={styles.featuresContainer}>{features}</div>
      </ScrollReveal>
    </div>
  </div>
)
