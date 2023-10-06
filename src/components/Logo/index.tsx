import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface Logo {
    className?: string[] | string;
}

function Logo({ className }: Logo) {
    return (
        <Link
            to="/"
            className={clsx('text-26 font-bold', className)}>
            SHOP.CO
        </Link>
    );
}

export default Logo;
