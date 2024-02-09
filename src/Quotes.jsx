import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './Quotes.css'

function QuoteGenerator() {
    const [quote, setQuote] = useState('');
  
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/quotes/random');
        setQuote(response.data.quote);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };
  
    useEffect(() => {
      fetchQuote();
    }, []);
  
    return (

      <div style={{height:"300px",width:"450px", borderRadius:"25px"}} className='card'>
        <div className='container' >
      <div style={{textAlign:'center',marginTop:'5px', paddingTop:"45px"}}>
        <div style={{justifyContent:"center"}}>
          <h6 style={{color:'black',fontSize:"25px"}}>"{quote}"</h6> 
          <Button onClick={fetchQuote}>Get Another Quote</Button></div>
      
        </div>
      
        </div>
      </div>


    );
  }
  
  export default QuoteGenerator;