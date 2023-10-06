import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';
import menu from '../../assets/icons/menu.svg';
import search from '../../assets/icons/search.svg';
import cart from '../../assets/icons/cart.svg';
import user from '../../assets/icons/user.svg';
import dropDown from '../../assets/icons/drop-down.svg';

function Header() {
    return (
        <div className="flex justify-between items-center mx-4 md:gap-10 md:mx-lg">
            <span className="flex justify-start items-center gap-4">
                <img
                    src={menu}
                    alt="menu.svg"
                    className="w-6 h-6 md:hidden"
                />
                <Logo className="py-3" />
                <nav className="hidden md:flex gap-6 items-center">
                    <Link
                        to="/"
                        className="flex">
                        Shop
                        <img
                            src={dropDown}
                            alt="drop-down.svg"
                            className="ml-1"
                        />
                    </Link>
                    <Link to="/">On Sale</Link>
                    <Link to="/">New Arrivals</Link>
                    <Link to="/">Brands</Link>
                </nav>
            </span>

            <div className="hidden md:flex md:flex-1 relative">
                <input
                    type="text"
                    name="search"
                    className="block outline-none  h-full w-full bg-F0F0F0  py-4 px-[54px] rounded-full"
                    placeholder="Search for products..."
                />
                <div className="absolute top-0 bottom-0 left-0 flex items-center px-3">
                    <img
                        src={search}
                        alt=""
                        className="w-6 h-6 opacity-40"
                    />
                </div>
            </div>

            <div className="flex gap-3">
                <img
                    src={search}
                    alt=""
                    className="w-6 h-6 md:hidden"
                />
                <img
                    src={cart}
                    alt=""
                    className="w-6 h-6"
                />
                <img
                    src={user}
                    alt=""
                    className="w-6 h-6"
                />
            </div>
        </div>
    );
}

export default Header;
