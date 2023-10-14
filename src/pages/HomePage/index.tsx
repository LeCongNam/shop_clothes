import Category from '../../components/Categories'
import Comments from '../../components/Comments'
import ProductList from '../../components/ProductList'
import Banner from '../../layouts/Banner'
import ListBrand from '../../layouts/Banner/ListBrand'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Navbar'
import TopHeader from '../../layouts/TopHeader'

function HomePage() {
    return (
        <>
            <TopHeader />
            <Header />
            <Banner />
            <ListBrand />
            <ProductList title="NEW ARRIVALS" />
            <div className="h-[1px] bg-black opacity-10 mx-4"></div>
            <ProductList title="top selling" />
            <Category />
            <Comments />
            <Footer />
        </>
    )
}

export default HomePage
