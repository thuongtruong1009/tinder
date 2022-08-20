import React from 'react';
import { IHeart } from './HeartWrapper';
type PropsT = {
    data: IHeart;
};

const SmallHeart = ({ data }: PropsT) => {
    return (
        <svg
            className="little-heart"
            style={
                data.top
                    ? {
                          top: `${data.top}%`,
                          left: `${data.left}%`,
                          transform: `rotate(${data.tilt}deg)`,
                      }
                    : {
                          bottom: `${data.bottom}%`,
                          left: `${data.left}%`,
                          transform: `rotate(${data.tilt}deg)`,
                      }
            }
            width={data.width}
            height="27"
            viewBox="0 0 34 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.26536 7.78124C2.43202 3.85346 
          6.23231 0.975442 10.7264 0.975442C13.1978 
          0.975442 15.3607 1.96796 17.0877 3.40153C18.8152 
          1.96755 20.9779 0.975442 23.449 0.975442C28.1543 
          0.975442 32.1002 4.13223 33.058 8.34381C33.2363 
          8.99004 33.3084 9.64411 33.2963 10.2886C33.2717 
          11.6472 32.9065 12.9562 32.4381 14.0992C31.085 
          17.4061 28.5966 20.3863 25.8015 22.5861C23.0065 
          24.7859 19.9209 26.2516 17.0854 26.2516C14.2624 
          26.2516 11.1995 24.7974 8.41779 22.6125C5.64534 
          20.4348 3.17268 17.4828 1.79046 14.2069C0.820776 
          12.1952 0.632713 9.90967 1.26536 7.78124Z"
            />
        </svg>
    );
};

export default SmallHeart;
