export default function BookDetails({book}){
    console.log(book)
    return (
        <div className="flex flex-col">
        <div className="flex  justify-center">

        <div className="flex flex-col mx-4">
            <p>First Published </p>
            <p>{book?.volumeInfo?.publishedDate}</p>
        </div>
        <div className="flex flex-col mx-4">
            <p>Pages </p>
            <p>{book?.volumeInfo?.pageCount || 'N/A'}</p>
           
        </div>
        <div className="flex flex-col mx-4">
            <p>Language </p>
            <p>{book?.volumeInfo?.language || 'N/A'}</p>
           
        </div>
        </div>
        <div className="flex flex-row justify-center">
            <p>Categories:</p>
            <p className="px-4">{book?.volumeInfo?.categories?.join(', ')}</p>
        </div>
        </div>
    )

}