import { useState, useEffect } from "react";
import { REACT_APP_API_ENDPOINT, GOOGLE_API_KEY } from "../Services/Settings";
export default function BookCover({book}){
   
    const title = book && book.volumeInfo && book.volumeInfo.title
    const author = book && book.volumeInfo && book.volumeInfo.authors
    const imageUrl = book && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail

    return (
        <div >
            <div className="flex flex-col items-center m-6">
            <img src={imageUrl} className='w-40'/>
            <h3 className="text-3xl text-blue-900 font-bold text-center">{title}</h3>
            <h3>{author}</h3>
            </div>
        </div>
    )

      
       
}