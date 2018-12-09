import * as styles from './hero.scss'

import * as React from 'react'

import { Hero } from 'commons/atoms/hero'
import { Icon } from 'commons/atoms/icon'
import { Play } from 'commons/svg'
import { Button } from 'commons/atoms/button'
import { ScrollReveal } from 'commons/atoms/scrollReveal'

export const HeroSection = () => (
  <Hero className={styles.hero}>
    <div className={styles.content}>
    <ScrollReveal slideFrom="top">
      <div className={styles.label}>
        you will need no
        <br />
        other platform
      </div>
    </ScrollReveal>
      <Icon className={styles.icon} size={60} svg={<Play />} />
      <Button className={styles.button} label="try now"/>
      <span className={styles.subText}>* No need to add card details</span>
    </div>
  </Hero>
)
