
import { useState, useEffect} from 'react';
import { REACT_APP_API_ENDPOINT, GOOGLE_API_KEY } from '../Services/Settings';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Search() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (query.length > 0) {
            axios.get(`${REACT_APP_API_ENDPOINT}?q=intitle:${query}&projection=lite&key=${GOOGLE_API_KEY}`)
                .then(response => {
                    // Slice the array to include only the first 10 books
                    setBooks(response.data.items.slice(0, 10));
                    console.log(response.data)
                    console.log(response.data.items)
                })
                .catch(error => {
                    console.error('Error fetching book data:', error);
                });
        } else {
            setBooks([]);
        }
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    

    return (
        <div className='flex flex-col items-center'>
            <input
                type="text"
                placeholder="Search for books..."
                value={query}
                onChange={handleInputChange}
                className='border-2 w-80 h-10'
            />
            <ul className='w-1/2 border-2 my-4'>
                {books.map((book, index) => (
                    <Link  to={`/book/${book?.id}`} >
                        {console.log(book?.items?.id)}
                        {/* Render book image and title */}
                        <div className='flex item-center m-4 '>
                            <img src={book.volumeInfo?.imageLinks?.thumbnail} alt={book.volumeInfo?.title} className='w-28 h-32' />
                            <div className='flex flex-col'>
                                <p className='text-center  px-10 py-4'>{book.volumeInfo?.title}</p>
                                {/* Join authors array into a string */}
                                <p className='text-center  px-10 '>{book.volumeInfo?.authors?.join(', ')}</p>
                            </div>
                        </div>
                    </Link>
                ))}
                {query.length > 0 && <li>See More books on {query}</li>}
            </ul>
        </div>
    );
}
