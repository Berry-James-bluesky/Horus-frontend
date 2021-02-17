import React, { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

export const Clock: React.FC = (props: any) => {

    const [difference, setDifference] = useState(0)
    const fetched = new Date('December 17, 2020 02:24:00');

    useEffect(() => {
        const interval = setInterval(() => {
            const current = new Date();
            const dif = differenceInSeconds(current, fetched);
            setDifference(dif)
            console.log(dif);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            {difference}
        </div>
    )

}
