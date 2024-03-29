import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Search from '../components/Search';
import axios from 'axios';
export default function Home(){

    return(
        <div>
            <h1>Home Page</h1>
            
            {/* <input type="text" placeholder='Search any books' className='border-2 w-80 h-9'/> */}
            <Search />
        </div>
    )
}