import React, { Component } from 'react';
import './App.css';
// import './navbar.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero'
import Cards from './components/cards/cards'
import Tables from './components/tables/tables'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Hero/>
        <br/>
        <br/>
        <div className="cardsBottomMargin">
          <Cards country="Chile" link='http://chile.travel/en/' flag='images/chile_flag.svg' />
          <Cards country="Aruba" link='http://www.arubatourism.com/' flag='images/aruba_flag.svg'/>
          <Cards country="Italy" link='http://www.italia.it/en/home.html/' flag='images/italy_flag.svg'/>
          <Cards country="Spain" link='http://www.spain.info/en_US/' flag='images/spain_flag.svg'/>
        </div>
        <br/>
        <br/>
        <div className="tableFormatting">
          <Tables/>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default App;
