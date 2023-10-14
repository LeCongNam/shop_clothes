import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import TextItemFooter from './TextItemFooter'

import applePay from '../../assets/payments/apple-pay.svg'
import ggPay from '../../assets/payments/gg-pay.svg'
import masterCard from '../../assets/payments/master-card.svg'
import paypal from '../../assets/payments/paypal.svg'
import visa from '../../assets/payments/visa.svg'

interface PaymentImage {
    imgSrc: string
    alt: string
    link: string
}

function Footer() {
    const listPayment: PaymentImage[] = [
        {
            imgSrc: visa,
            alt: visa + 'svvg',
            link: '',
        },
        {
            imgSrc: masterCard,
            alt: masterCard + 'svvg',
            link: '',
        },
        {
            imgSrc: paypal,
            alt: paypal + 'svvg',
            link: '',
        },
        {
            imgSrc: applePay,
            alt: applePay + 'svvg',
            link: '',
        },
        {
            imgSrc: ggPay,
            alt: ggPay + 'svvg',
            link: '',
        },
    ]
    return (
        <footer className="mt-12 bg-black bg-opacity-10">
            <div className="md:mx-[100px]">
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
                            className="block outline-none px-4 py-3 bg-white text-black rounded-3xl text-center"
                        >
                            Subscribe to Newsletter
                        </Link>
                    </div>
                </div>

                {/* list text item */}
                <div className="flex flex-col md:flex-row md:justify-between gap-6 mx-4 md:mt-[50px] md:pb-32 pt-8 md:pt-12">
                    <div className="md:flex-1">
                        <Logo />
                        <p className="mt-4 mb-5">
                            We have clothes that suits your style and which you're proud to wear. From women to men.
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
                    <div className="flex gap-[89px] md:flex-1 md:justify-evenly">
                        <TextItemFooter
                            items={[{ text: 'about' }, { text: 'features' }, { text: 'works' }, { text: 'career' }]}
                            title="Company"
                        />

                        <TextItemFooter
                            items={[{ text: 'about' }, { text: 'features' }, { text: 'works' }, { text: 'career' }]}
                            title="Company"
                        />
                    </div>
                    <div className="flex gap-[89px] md:flex-1 md:justify-evenly">
                        <TextItemFooter
                            items={[{ text: 'about' }, { text: 'features' }, { text: 'works' }, { text: 'career' }]}
                            title="Company"
                        />

                        <TextItemFooter
                            items={[{ text: 'about' }, { text: 'features' }, { text: 'works' }, { text: 'career' }]}
                            title="Company"
                        />
                    </div>
                </div>
                <div className="flex justify-center px-4">
                    <div className="h-[1px] bg-black bg-opacity-40 w-full mt-10"></div>
                </div>
            </div>

            <div className="flex items-center flex-col mt-4 gap-4 pb-20 md:flex-row md:justify-between md:mx-[100px]">
                <p className="text-sm font-normal opacity-60">Shop.co © 2000-2023, All Rights Reserved</p>

                <section className="flex">
                    {listPayment.map((payment) => (
                        <Link
                            to={payment.link}
                            key={payment.imgSrc}
                        >
                            <img
                                src={payment.imgSrc}
                                alt={payment.alt}
                            />
                        </Link>
                    ))}
                </section>
            </div>
        </footer>
    )
}

export default Footer
