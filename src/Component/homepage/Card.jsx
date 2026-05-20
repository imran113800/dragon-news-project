import Image from 'next/image';
import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

const Card = ({ news }) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className='flex justify-between items-center bg-slate-400 p-4'>


                <div className='flex gap-2 items-center'>

                    <div className='w-10 h-10 overflow-hidden rounded-full'>
                        <Image
                            src={news.author?.img}
                            alt={news.author?.name}
                            height={40}
                            width={40}
                            className='object-cover w-full h-full'
                        />
                    </div>

                    <div>
                        <h2 className='font-bold'>{news.author?.name}</h2>
                        <h2 className='text-xl'>{news.author?.published_date}</h2>
                    </div>
                </div>


                <div className='flex gap-3 text-2xl'>
                    <CiBookmark />
                    <CiShare2 />
                </div>

            </div>
            <div className='flex flex-col px-2'>

                <div className="card-body">
                    <h2 className="card-title py-3 font-bold">{news.title}</h2>

                </div>
                <figure>
                    <Image src={news.image_url}
                        alt={news.title}
                        width={800}
                        height={800}
                        className='w-full'
                    ></Image>

                </figure>
                <div>

                    <p className='py-3'>{news.details}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;