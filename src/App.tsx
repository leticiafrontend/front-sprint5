import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import GlobalStyle from './styles/global'
import { Footer } from './components/Footer/Footer'

import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Product } from './pages/Product'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/404' component={NotFound} />
        <Route path='/product/:id' component={Product} />
        <Redirect from='*' to='/404' />
      </Switch>
      <Footer />
    </BrowserRouter>
  </>
)
