import profile from '../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between md:container mx-auto items-center py-4 border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;