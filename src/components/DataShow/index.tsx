import { useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface DataShow extends Props {
    number: number;
    title: string;
}

function DataShow({ number, title, className }: DataShow) {
    const [numAnimation, setNumAnimation] = useState<number | undefined>(1);

    const timer = useRef<number>();

    useLayoutEffect(() => {
        timer.current = setInterval(() => {
            setNumAnimation((prev) => {
                if (prev && prev < number) {
                    if (number < 1000) {
                        return prev + 10;
                    } else {
                        return prev + 123;
                    }
                } else {
                    setNumAnimation(number);
                    clearInterval(timer.current);
                }
            });
        }, 50);

        return () => {
            clearInterval(timer.current);
        };
    }, []);

    return (
        <div className={clsx('flex flex-col justify-start', className)}>
            <p className="text-2xl font-bold md:text-4xl">
                {numAnimation + '+'}
            </p>
            <p className="text-[12px] md:text-base opacity-60">{title}</p>
        </div>
    );
}

export default DataShow;
