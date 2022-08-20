import React, { useEffect, useRef, useState } from 'react';
import BigHeart from './BigHeart';
import SmallHeart from './SmallHeart';

export interface IHeart {
    top?: number;
    left?: number;
    bottom?: number;
    width: number;
    tilt: number;
}
interface IProps {
    matchedFriend: {
        id: string;
        imgUrl: string;
    };
}

const HeartContainer = ({ matchedFriend }: IProps) => {
    const firstImgUrl =
        'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/107731654_1640419816124272_6053304466875974080_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=vts1kTF9ifcAX8zIwQR&tn=CSyiAD4g1J8RrLXt&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT9PbkJzDlVqVPzzKRLC3fKSH_6ClqL-p7Rhvcoa1e6haQ&oe=63264DE3';
    const [friendImg, setFriendImg] = useState<string>('');
    useEffect(() => {
        setFriendImg(matchedFriend?.imgUrl);
    }, [matchedFriend]);
    const secondImgUrl = matchedFriend?.imgUrl;
    const generateRandomHearts = () => {
        const HEART_AMOUNT = 20;
        const heartWidths = [34, 24, 20, 10];
        const heartTilts = [-16, 16, 6, -18];
        const hearts: IHeart[] = [];
        for (let index = 0; index < HEART_AMOUNT / 2; index++) {
            const topHeart: IHeart = {
                width: heartWidths[Math.floor(Math.random() * 4)],
                tilt: heartTilts[Math.floor(Math.random() * 4)],
                top: Math.floor(Math.random() * 35 - 20),
                left: Math.floor(Math.random() * 80 + 10),
            };
            hearts.push(topHeart);
        }

        for (let index = HEART_AMOUNT / 2; index < HEART_AMOUNT; index++) {
            const bottomHeart: IHeart = {
                width: heartWidths[Math.floor(Math.random() * 4)],
                tilt: heartTilts[Math.floor(Math.random() * 4)],
                bottom: Math.floor(Math.random() * 35 - 10),
                left: Math.floor(Math.random() * 80 + 10),
            };
            hearts.push(bottomHeart);
        }
        return hearts;
    };
    const littleHearts =
        [
            { top: 11, left: 12, tilt: -16, width: 34 },
            { top: 5, left: 30, tilt: -16, width: 10 },
            { top: 11, left: 48, tilt: 16, width: 20 },
            { top: -2, left: 70, tilt: 18, width: 24 },
            { top: 10, left: 89, tilt: 18, width: 10 },
            { bottom: 22, left: 12, tilt: -16, width: 24 },
            { bottom: 7, left: 26, tilt: 16, width: 10 },
            { bottom: 22, left: 48, tilt: 18, width: 20 },
            { bottom: 16, left: 70, tilt: 18, width: 24 },
            { bottom: 7, left: 89, tilt: -6, width: 10 },
        ];
    return (
        <div className="heart-container h-[40%] flex-center relative ">
            <div className="icon left h-[60%] fill-transparent stroke-main-pink stroke-[8px] cursor-pointer">
                <BigHeart imgUrl={firstImgUrl} />
            </div>
            <div className="icon right h-[60%] fill-transparent stroke-main-pink stroke-[8px] cursor-pointer">
                <BigHeart imgUrl={friendImg} />
            </div>
            <div className="icon pop-up">
        <svg className="heart-secondary" viewBox="0 0 512 512">
          <path
            d="M6.94665 42.2498C13.4719 20.1941
        34.7272 4.03305 59.8627 4.03305C73.6857
        4.03305 85.7829 9.60637 95.442 17.6563C105.104
        9.60408 117.2 4.03305 131.021 4.03305C157.338
        4.03305 179.408 21.7595 184.765 45.4089C185.763
        49.0377 186.166 52.7105 186.098 56.3297C185.96
        63.9583 183.918 71.3092 181.298 77.7272C173.73
        96.2968 159.812 113.032 144.179 125.384C128.546
        137.736 111.288 145.967 95.429 145.967C79.64
        145.967 62.5088 137.801 46.9507 125.532C31.4442
        113.304 17.6144 96.7271 9.88355 78.3318C4.46006
        67.0355 3.40822 54.2017 6.94665 42.2498Z"
          />
        </svg>
      </div>
            {littleHearts?.map((littleHeart, index) => {
                return <SmallHeart key={`heart-${index}`} data={littleHeart} />;
            })}
        </div>
    );
};

export default HeartContainer;