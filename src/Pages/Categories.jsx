import categories from '../categoriesList.json'
import { Link } from 'react-router-dom'
export default function Categories(){
    return(
        <div>
            <h2 className='text-pink-600'>Categories</h2>

            <ul className='flex flex-wrap'>
                {categories.map(category =>(
                    <Link key={category.id} className='p-4 m-4' to={`/category/${category.name}`}>{category.name}</Link>
                ))}
            </ul>

        </div>
    )
}