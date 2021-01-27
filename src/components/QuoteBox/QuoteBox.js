import React from 'react'

const QuoteBox = ({ quote, author }) => { //destructuring
   return (
      <React.Fragment>
         <div id='text'><p>{quote}</p></div>
         <div id='author'><h5>{author}</h5></div>
      </React.Fragment>
   )
}

export default QuoteBox;
