import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import {
    faFacebook,
    faGithub,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="mt-12 md:mx-[100px]">
            <div className="subcribe md:flex md:justify-between md:gap-[212px] mx-4 bg-black text-white py-8 pl-6 pr-7 rounded-3xl md:px-16 md:py-9">
                <p className="text-[40px] font-bold leading-10 mb-8 flex-[4]">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </p>
                <div className="flex flex-col gap-4 flex-[3]">
                    <div className="relative w-full">
                        <input
                            className="block min-w-[300px]  w-full h-full py-3 px-4 rounded-3xl pl-10"
                            type="text"
                            placeholder="Enter your email address"
                        />
                        <div className="absolute top-0 left-0 bottom-0 flex items-center pl-4">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-black opacity-40"
                            />
                        </div>
                    </div>
                    <Link
                        to=""
                        className="block outline-none px-4 py-3 bg-white text-black rounded-3xl text-center">
                        Subscribe to Newsletter
                    </Link>
                </div>
            </div>

            <div>
                <Logo />
                <p className='mt-4 mb-5'>
                    We have clothes that suits your style and which you're proud
                    to wear. From women to men.
                </p>
                <div className="flex gap-4 ">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-2xl"
                    />
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-2xl"
                    />
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-2xl"
                    />
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="text-2xl"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
