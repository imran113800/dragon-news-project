import Breakingnews from '@/Component/shared/Breakingnews';
import Header from '@/Component/shared/Header';
import Navbar from '@/Component/shared/Navbar';


const MainLayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <Breakingnews></Breakingnews>
        <Navbar></Navbar>
        {children}
        </>
    );
};

export default MainLayout;