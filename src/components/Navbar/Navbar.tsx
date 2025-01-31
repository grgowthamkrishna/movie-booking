import Link from "next/link";
import React from "react";
import './Navbar.css'
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiArrowDownBoxFill } from "react-icons/ri";
import logo from '@/assets/image.jpg'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="left"></div>
            <Image src = {logo} alt="logo" width={100} height={1000} />
            <div className="searchbox">
                <BiSearch className="searchbtn"/>
                <input type="text" placeholders="Search for a Movie" />
            </div>
            <div className="right">
                <p className="dropdown"> Mumbai <RiArrowDownBoxFill className="dropicon"/> </p>
                <Link href="/" className="theme_btn1 linkstylenone">Logout</Link>
                <Link href="/" className="linkstylenone"> <BiUserCircle className="theme_icon1"/> </Link>
            </div>
        </nav> 
    )
}

export default Navbar