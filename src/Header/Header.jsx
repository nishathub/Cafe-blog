
import profile from  '../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex items-center justify-between border-b border-gray-400 mb-5 py-5'>
            <div>
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            </div>
            <div>
                <img src={profile} alt="user-image" />
            </div>
        </div>
    );
};

export default Header;