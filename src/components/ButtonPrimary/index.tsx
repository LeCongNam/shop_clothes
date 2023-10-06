import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface ButtonPrimary extends Props {
    content?: string;
}

function ButtonPrimary({ content, className }: ButtonPrimary) {
    return (
        <Link
            to="/buy"
            className="block mx-sm">
            <button
                // to="/buy"
                className={clsx(
                    'py-4 px-[54px] capitalize bg-black text-white rounded-[62px] font-medium text-base',
                    className
                )}>
                {content || 'shop now'}
            </button>
        </Link>
    );
}

export default ButtonPrimary;
