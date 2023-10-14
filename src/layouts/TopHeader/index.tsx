import { Link } from 'react-router-dom'
import close from '../../assets/icons/close.svg'

function TopHeader() {
    return (
        <div className="text-xs h-[34px] lg:h-[38px] md:text-sm font-normal bg-black text-white flex items-center justify-center relative">
            <p className="text-center">
                Sign up and get 20% off to your first order.
                <Link
                    to="/sign-up"
                    className="font-medium ml-1 underline"
                >
                    Sign Up Now
                </Link>
            </p>
            <img
                src={close}
                alt="close.svg"
                className="hidden md:inline-block absolute right-20"
            />
        </div>
    )
}

export default TopHeader
