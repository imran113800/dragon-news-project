
import Link from 'next/link';
const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-[80vh] flex-col gap-5">
            <h1 className="font-bold text-5xl ">The page is not found</h1>
            <Link href ="/">
                <button className="btn bg-amber-300 text-white"> Back to Home</button>
            </Link>

        </div>
    );
};

export default NotFound;