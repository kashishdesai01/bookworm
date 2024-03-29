import BookCover from "./BookCover"
import Rating from "./Rating"
export default function BookSideMenu({children}){
    return(
        <div className="w-2/5 border-2 flex flex-col items-center -ml-44">
            {children}
            <Rating />
            
        </div>
    )
}