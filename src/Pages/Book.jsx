import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {REACT_APP_API_ENDPOINT, GOOGLE_API_KEY} from '../Services/Settings'
import BookCover from "../components/BookCover"
import BookSideMenu from "../components/BookSideMenu"
import BookMainContent from "../components/BookMainContent"
import BookDetails from "../components/BookDetails"
import BookSummary from "../components/BookSummary"

export default function Book(){
  const [book, setBook] = useState(null)
    const {id} = useParams()
    

    useEffect(() => {
        fetch(`${REACT_APP_API_ENDPOINT}/${id}?key=${GOOGLE_API_KEY}`)
        
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(responseData => {
            
            setBook(responseData);
            console.log(book)
            
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [id]);
    return(
      <div className="flex justify-center">
        
        <BookSideMenu >
          <BookCover book={book}/>
          
        </BookSideMenu>
        <BookMainContent>
          <BookSummary book={book} />
          <BookDetails book={book}/>
        </BookMainContent>
      </div>
    )
}