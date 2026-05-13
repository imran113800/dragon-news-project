import Card from '@/Component/homepage/Card';
import Rightside from '@/Component/homepage/Rightside';
import Sidebar from '@/Component/homepage/Sidebar';
import { getNewsPostId, getPost } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "paramsRes")
    const categories = await getPost();
    const news = await getNewsPostId(id)
    return (
        <div className='grid grid-cols-12 mx-auto container gap-4'>

            <div className='col-span-3'>
                <Sidebar categories={categories} activeId={id}></Sidebar>
            </div>

            <div className='col-span-6 m-6'>
                <h2 className='text-lg font-bold mb-2'>News by category</h2>
                {
                   news.length > 0? (news.map(
                        (n) => {
                            return ( <Card key={n._id} news={n}></Card>)
                        })) : <h2>No data are founded</h2>

                }
            </div>

            <div className='col-span-3'>
                <Rightside></Rightside>
            </div>

        </div>
    );
};

export default NewsCategoryPage;