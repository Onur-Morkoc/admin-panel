import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
    MdSearch,
    MdLanguage,
    MdOutlineDarkMode,
    MdOutlineFullscreenExit,
    MdOutlineNotificationsNone,
    MdOutlineChatBubbleOutline,
    MdList
} from "react-icons/md"
import "./navbar.scss"

const Navbar = () => {

    let navbarMenuItems = [
        { icon: <MdLanguage />, text: "English" },
        { icon: <MdOutlineDarkMode /> },
        { icon: <MdOutlineFullscreenExit /> },
        { icon: <MdOutlineNotificationsNone />, notification: 1 },
        { icon: <MdOutlineChatBubbleOutline />, notification: 1 },
        { icon: <MdList /> }
    ]

    const navbarMenu = navbarMenuItems.map(item => {
        let id = uuidv4();
        return (
            <div className="item" key={id.toString()}>
                {item.icon}
                {item.text && item.text}
                {item.notification && (
                    <div className="notification">
                        {item.notification}
                    </div>
                )}
            </div>
        )
    })

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Ara...' />
                    <div><MdSearch /></div>
                </div>
                <div className="items">
                    {navbarMenu}
                    <div className="item">
                        <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="Profil" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar