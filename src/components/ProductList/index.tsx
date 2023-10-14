import { Link } from 'react-router-dom'
import ListItem from './ListItem'

interface ProductList extends Props {}

function ProductList({ title }: ProductList) {
    return (
        <div className="ml-4 md:mx-[100px]">
            <h3 className="text-[32px] font-bold mt-[50px] mb-8 text-center md:text-5xl uppercase">{title}</h3>
            <ListItem />
            <Link
                to="/all"
                className="block mx-4 mt-6 mb-10 md:flex md:justify-center"
            >
                <button className="w-full md:w-40 py-4 px-10 border border-solid border-black border-opacity-10 rounded-full">
                    View All
                </button>
            </Link>
        </div>
    )
}

export default ProductList
