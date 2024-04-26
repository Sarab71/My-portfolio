import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
function Header() {
    const router = useRouter()
    const isActive = (r) => {
    if(r === router.pathname){
        return "active"
    }
    else{
        return ""
    }
}
    const [showMenu, setShowMenu] = useState('hidden')
    const handleClick = () => {
        if (showMenu == 'hidden') {
            setShowMenu('')
        } else {
            setShowMenu('hidden')
        }
    }
    return (
        <div className="fixed top-0 inset-x-0 z-50 shadow-lg">
            <div className="navbar bg-slate-400 flex justify-between items-center p-4 h-12">
                <div className="mobilemenu flex text-2xl space-x-4 ">
                    <motion.h1 whileHover={{scale: 1.2, transition: {duration: .2}}} className="logo text-4xl font-medium">NERD</motion.h1>
                </div>
                <div className="pc_navbar logo flex mt-1">
                    <div className="hidden md:flex py-2 space-x-5 justify-end rounded list-none text-xl">
                        <motion.li whileHover={{scale: 1.2, transition: {duration: .2}}} className="hover:underline"><Link href="/"><a className={"font-bold" + isActive('/contact')} >Home</a></Link></motion.li>
                        <motion.li whileHover={{scale: 1.2, transition: {duration: .2}}} className="hover:underline"><Link href="/contact"><a className={"font-bold" + isActive('/')}>Contact Me</a></Link></motion.li>
                    </div>
                    <button className="block md:hidden text-2xl"><GiHamburgerMenu onClick={handleClick} /></button>
                </div>
            </div>
            <div className={`mobilemenu bg-slate-400 flex-col space-y-3 w-full md:hidden list-none ${showMenu}`}>
                <li className="mx-3" ><Link href="/"><a className={"font-bold" + isActive('/contact')} onClick={handleClick} >Home</a></Link></li>
                <hr />
                <li className="mx-3"><Link href="/contact"><a className={"font-bold" + isActive('/')} onClick={handleClick} >Contact Me</a></Link></li>
                <hr />
            </div>
        </div>
    )
}

export default Header;