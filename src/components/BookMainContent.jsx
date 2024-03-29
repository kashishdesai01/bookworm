import BookSummary from "./BookSummary"
export default function BookMainContent({children}){
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}