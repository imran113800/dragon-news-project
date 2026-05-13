import Image from 'next/image';
import React from 'react';

const Card = ({ news }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex gap-1 items-center'>
                <div className='rounded-full'>

                    <Image
                        src={news.author?.img}
                        alt={news.author?.name}
                        height={40}
                        width={40}
                        className='rounded-full'></Image>
                </div>
                <div>
                    <h2>{news.author?.name}</h2>
                    <h2>{news.author?.published_date}</h2>

                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>
            <figure>

            </figure>
        </div>
    );
};

export default Card;