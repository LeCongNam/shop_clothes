import casual from '../../assets/categories/casual.png';
import formal from '../../assets/categories/formal.png';
import party from '../../assets/categories/party.png';
import gym from '../../assets/categories/gym.png';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Category() {
    return (
        <div className="bg-F0F0F0 mx-4 pt-10 pb-7 rounded-3xl md:flex md:flex-col md:mx-[100px] flex-wrap">
            <p className="text-[32px] leading-8 font-bold text-center uppercase mx-14 mb-6">
                BROWSE BY dress STYLE
            </p>
            <div className="flex flex-col gap-4 mx-4 md:mx-16 mt-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <Link
                        to="/category"
                        className={clsx(
                            'block rounded-3xl overflow-hidden relative h-[250px] capitalize flex-[4]'
                        )}>
                        <p className="absolute text-2xl font-bold top-4 left-6">
                            Casual
                        </p>
                        <img
                            className="w-full object-cover h-full"
                            src={casual}
                            alt={casual + '.png'}
                        />
                    </Link>
                    <Link
                        to="/category"
                        className={clsx(
                            'block rounded-3xl overflow-hidden relative h-[250px] capitalize flex-[7]'
                        )}>
                        <p className="absolute text-2xl font-bold top-4 left-6">
                            formal
                        </p>
                        <img
                            className="w-full object-cover h-full"
                            src={formal}
                            alt={formal + '.png'}
                        />
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link
                        to="/category"
                        className={clsx(
                            'block rounded-3xl overflow-hidden relative h-[250px] capitalize flex-[7]'
                        )}>
                        <p className="absolute text-2xl font-bold top-4 left-6">
                            Casual
                        </p>
                        <img
                            className="w-full object-cover h-full"
                            src={party}
                            alt={party + '.png'}
                        />
                    </Link>
                    <Link
                        to="/category"
                        className={clsx(
                            'block rounded-3xl overflow-hidden relative h-[250px] capitalize flex-[4]'
                        )}>
                        <p className="absolute text-2xl font-bold top-4 left-6">
                            Casual
                        </p>
                        <img
                            className="w-full object-cover h-full"
                            src={gym}
                            alt={gym + '.png'}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Category;
