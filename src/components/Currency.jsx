import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';
let BASE_URL ="https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_nQ0t28Oj6U2x0XlZlnUed3sLlILwlZrOlnYH8gC5";



function Currency() {

    const [amount,setAmount]=useState(0)
    const [fromCurrency,setFromCurrency] = useState('USD');
    const [toCurrency,setToCurrency]=useState('TRY');
    const [result,setResult]=useState(0);


    const exchange=async()=>{
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);
        // console.log(result);

        const response=await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result=(response.data.data[toCurrency]*amount).toFixed(2);
       setResult(result);
    }
  return (
    <div className='currency-div'>
        <div>
            <h3 style={{marginTop:'-30px',fontFamily:'arial',color:'black'}}>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        <div>
        <input value={amount} onChange={(e)=>setAmount(e.target.value)}
         type="number" className='amount' />

        <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option'>
            <option >USD</option>
            <option >EUR</option>
            <option >TRY</option>
            <option >GBP</option>
            <option >JPY</option>
            <option >BGN</option>
            <option >CZK</option>
            <option >DKK</option>
            <option >HUF</option>
            <option >PLN</option>
            <option >RON</option>
            <option >SEK</option>
            <option >CHF</option>
            <option >NOK</option>
            <option >HRK</option>
            <option >RUB</option>
            <option >AUD</option>
            <option >BRL</option>
            <option >CAD</option>

        </select>
        <FaRegArrowAltCircleRight style={{fontSize:'25px', margin:'-7px 10px', color:'black'}} />
        <select onChange={(e)=>setToCurrency(e.target.value)} className='to-currency-option'>
        <option >TRY</option>
        <option >USD</option>
            <option >EUR</option>
            <option >GBP</option>
            <option >JPY</option>
            <option >BGN</option>
            <option >CZK</option>
            <option >DKK</option>
            <option >HUF</option>
            <option >PLN</option>
            <option >RON</option>
            <option >SEK</option>
            <option >CHF</option>
            <option >NOK</option>
            <option >HRK</option>
            <option >RUB</option>
            <option >AUD</option>
            <option >BRL</option>
            <option >CAD</option>
        </select>
        <input value={result} onChange={(e)=>setResult(e.target.value)} type="number" className='result' />
        </div>
        <div >
            <button onClick={exchange}
             style={{marginTop:'30px', width:'80px', height:'30px',backgroundColor:'rgb(5, 156, 86)', color:'black',borderRadius:'5px',fontSize:'20px', cursor:'pointer'}}>Çevir</button>
        </div>
        
    </div>
  )
}

export default Currency
