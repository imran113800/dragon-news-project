import Link from "next/link";


const Sidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className='text-lg font-bold mb-2'>
                All Category


            </h2>
            <ul className='gap-2 flex flex-col'>
                {
                    categories.news_category.map((category) => (
                        <li
                            key={category.category_id}
                            className={`${String(activeId) === String(category.category_id)
                                    ? "bg-gray-700 text-white"
                                    : ""
                                } px-2 py-2 text-lg text-center font-bold`}
                        >
                            <Link href={`/category/${category.category_id}`} className="block">{category.category_name}</Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Sidebar;