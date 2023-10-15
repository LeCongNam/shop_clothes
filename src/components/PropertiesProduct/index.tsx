import HR from '../Hr'
import StarRatings from '../StarRatings'

function PropertiesProduct() {
    return (
        <div className="teter z-0 mx-4 flex flex-col gap-4">
            <p className="font-bold text-2xl">One Life Graphic T-shirt</p>
            <div className="flex">
                <StarRatings star={4.5} />
                <span className="flex">
                    4.5/ <span className="opacity-60">5</span>
                </span>
            </div>
            <div className="flex gap-3 items-center">
                <span>$260</span>
                <span className="opacity-60">$300</span>
                <span className="py-[6px] px-3 text-[#FF3333] bg-pink10 rounded-3xl">-40%</span>
            </div>
            <HR />
            <p>
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it
                offers superior comfort and style.
            </p>
        </div>
    )
}

export default PropertiesProduct
