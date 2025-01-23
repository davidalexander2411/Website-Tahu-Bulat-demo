import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import Logo from '../../public/img/Logo.png'

function Footer() {
    return (
        <div className="bg-black flex flex-row px-20 py-32 items-center justify-between h-20"> 
            <div>
                <img className="w-80" src={Logo} alt="Logo" />
                <div className=" text-[rgb(254,215,0)] pt-4 px-1 text-lg hover:text-white">
                    <a href="/about" className="figtree-normal">About</a>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex items-center">
                    <BsTelephone className="w-6 h-6 text-[rgb(254,215,0)]" /> 
                    <p className="text-[rgb(254,215,0)] figtree-normal ml-2">+62 82705 18732</p> 
                </div>
                <div className="flex items-center">
                    <IoMailOutline className="w-7 h-7 text-[rgb(254,215,0)]"/>
                    <p className="text-[rgb(254,215,0)] figtree-normal ml-2">tahubulat@gmail.com</p> 
                </div>
                
            </div>
        </div>
    );
}

export default Footer;