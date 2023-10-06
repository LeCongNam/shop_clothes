import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface StarRatings extends Props {
    star: number;
}

function StarRatings({ star }: StarRatings) {
    const [starHalfNum] = useState<boolean>(() => {
        const odd = star - Math.floor(star);
        if (odd === 0) {
            return false;
        }

        return true;
    });

    return (
        <div className="flex">
            {new Array(Math.floor(star)).fill('').map((_, index) => (
                <div
                    className="text-FFC633"
                    key={index}>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            ))}
            {starHalfNum && (
                <div className="text-FFC633">
                    <FontAwesomeIcon icon={faStarHalf} />
                </div>
            )}
        </div>
    );
}

export default StarRatings;
