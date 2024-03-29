import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { REACT_APP_API_ENDPOINT, GOOGLE_API_KEY } from "../Services/Settings"
import BookCover from "../components/BookCover"
export default function Category(){
    const [books, setBooks] = useState(null)
    const {name} = useParams

    useEffect(()=>{
        fetch(`${REACT_APP_API_ENDPOINT}?q=subject:${name}&key=${GOOGLE_API_KEY}`)
        .then(response =>{
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData =>{
            setBooks(responseData?.data?.items?.slice(0,50));

        })
        .catch(error=>{
            console.error('Error fetching data:', error)
        })
    }, [name]);
    return(
        
        <div>
            <ul className="flex justify-center">
                {books && books.map(book =>(
                    <BookCover book={book}/>
                ))}
            </ul>
        </div>
    )
}