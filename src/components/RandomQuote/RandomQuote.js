import React from 'react';
import QuoteBox from '../QuoteBox/QuoteBox';
import Button from '../Button/Button';
import './RandomQuote.css';
import axios from 'axios';
import randomColor from "randomcolor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faTwitterF } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

class RandomQuote extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      quote: "",
      author: "",
      color:'#f8f9a7'
    }
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
      this.getQuote()
      this.applyColor()
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  applyColor() {
    const color = randomColor();
    document.body.style.background = color;
  }

  getQuote(){
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    axios.get(url)
    .then(res => {
      let data = res.data.quotes;
      let quoteNum = Math.floor(Math.random()* data.length);
      let randomQuote = data[quoteNum];
      this.setState({
        quote: randomQuote['quote'],
        author: randomQuote['author'],
      })
    })
  }

  getNewQuote = () =>{
    this.getQuote()
  }



  render(){
    const {quote, author} = this.state;
    return (
      <>
      <div className="wrapper" >
        <h1 className="title">Random Quote Generator</h1>
        <div id="quote-box">
          <QuoteBox quote={quote} author={author} />

              <div id="buttons">
                <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target='_blank' title="Post this quote on twitter!">
                <span>
                  <FontAwesomeIcon icon={['fab','twitter']} />
                </span>
                </a>
                <Button id='new-quote' title='New Quote' onClick={this.getNewQuote} />
              </div>
        </div>
      </div>
      </>
      )
  }
}

export default RandomQuote;
