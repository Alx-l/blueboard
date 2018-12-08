if (process.env.ISPROD) {
  require('./polyfill')
}

import './styles/base/index.scss'

import * as React from 'react'
import { render } from 'react-dom'

import 'space-lift/es/all'

import { Main } from 'commons/layouts'
import { LandingPage } from 'views/landingPage'

const App = (
  <Main>
    <LandingPage />
  </Main>
)

render(App, document.querySelector('#app'))

// hmr: only refresh the page if necessary
if (module.hot) {
  module.hot.accept()
}
