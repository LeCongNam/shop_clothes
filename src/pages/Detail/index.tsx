import BreadCrumb from '../../components/BreadCrumb'
import HR from '../../components/Hr'
import PropertiesProduct from '../../components/PropertiesProduct'
import SlideProduct from '../../components/SlideProduct'
import Header from '../../layouts/Navbar'
import TopHeader from '../../layouts/TopHeader'

function Detail() {
    return (
        <div>
            <TopHeader />
            <Header />
            <HR />
            <BreadCrumb />
            <div className="md:flex">
                <SlideProduct />
                <PropertiesProduct />
            </div>
        </div>
    )
}

export default Detail
