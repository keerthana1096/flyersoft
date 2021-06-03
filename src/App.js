/* eslint-disable no-use-before-define */
import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import News from './components/news'
import About from './components/about'
import Services from './components/services'
class App extends React.Component {
  render () {
    return (<div>
      <Header/>
      <About/>
      <Services/>
      <News/>
        <Footer/>
        
        </div>)
  }
}
export default App
