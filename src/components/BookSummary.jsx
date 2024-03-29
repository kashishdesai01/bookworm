export default function BookSummary({book}){
    return(
        <div className="px-12 m-20">
            {/* {book && book.volumeInfo && <p>{book?.volumeInfo?.description}</p>} */}
            <p>{book?.volumeInfo?.description}</p>
        </div>
    )
}