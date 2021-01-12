import './App.css';
import React, { Component } from 'react';
import Quote from './components/Quote';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      quotes:[],
      quote:{}
    }
    this.newQuote = this.newQuote.bind(this)
  }
  componentDidMount(){
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res=>res.json())
    .then(quotes=>{
      this.setState({
        quotes:quotes.quotes,
        quote: quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]
      })
    });
  }
  newQuote(){
    // console.log(this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)])
    this.setState(
      {
        quote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
      }
    )
  }

  render (){
    return (
      <div className="App">
        <Quote quote ={this.state.quote} newQuote ={this.newQuote}/>
  
      </div>
    );
  }
  
}

export default App;
