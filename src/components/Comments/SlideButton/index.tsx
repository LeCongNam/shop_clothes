import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSwiper } from 'swiper/react';

function SlideButton() {
    const swiper = useSwiper();
    return (
        <div className="flex gap-4 items-end absolute z-50 top-0 right-0">
            <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-2xl cursor-pointer"
                onClick={() => swiper.slidePrev()}
            />
            <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl cursor-pointer"
                onClick={() => swiper.slideNext()}
            />
        </div>
    );
}

export default SlideButton;
