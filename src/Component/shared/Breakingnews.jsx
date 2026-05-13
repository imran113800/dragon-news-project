"use client";

import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const Breakingnews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/breakingnews.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className='container mx-auto flex border px-2 py-2 bg-amber-100'>
      <button className='btn bg-amber-700'>Breaking</button>

      <Marquee pauseOnHover={true} speed={100}>
        {data.map((item) => (
          <p key={item.id} className='mx-4'>
            {item.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default Breakingnews;
