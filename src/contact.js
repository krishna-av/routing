import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function Contact() {

useEffect(() => {
   fetchItems();
}, [])    

const [items, setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const items = await data.json();
    console.log(items);
    setItems(items);
} ;

return (
    <div>
    {items.splice(1,10).map(item => {
        return (<span key={item.id}>
                         <Link to={`/contact/${item.id}`}>{item.title}</Link> 
                          <br/><br/><br/> 
                </span>); 
    })}  

 </div>
  );
}

export default Contact;
