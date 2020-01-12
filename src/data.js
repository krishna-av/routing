import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function Contact(match) {

useEffect(() => {
   console.log('match', match.match.params.id);
   fetchItem();
}, [])    

const [item, setItem] = useState([]);

const fetchItem = async () => {
    const item = await fetch (`https://jsonplaceholder.typicode.com/posts/${match.match.params.id}`);
    const singleItem = await item.json();
    setItem(singleItem);
} ;

return (
    <div>
        <h1>Item</h1>
       <h1>{item.title}</h1>
     </div>
  );
}

export default Contact;
