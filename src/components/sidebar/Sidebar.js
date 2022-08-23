import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
    MdOutlineDashboard,
    MdOutlineSupervisedUserCircle,
    MdOutlineProductionQuantityLimits,
    MdListAlt,
    MdDeliveryDining,
    MdQueryStats,
    MdNotificationsNone,
    MdOutlineHealthAndSafety,
    MdOutlinePsychology,
    MdOutlineSettingsSuggest,
    MdPersonOutline,
    MdLogout,
    MdOutlineMenuOpen,
    MdOutlineMenu
} from "react-icons/md"
import "./sidebar.scss"

const Sidebar = () => {

    const [menuOpen, setMenuOpen] = useState(true)

    const MenuItems = [
        { name: "Dashboard", title: "ANA", smallTitle: "ANA", icon: <MdOutlineDashboard className='icon' /> },
        { name: "Kullanıcılar", title: "LİSTELER", smallTitle: "LİSTE", icon: <MdOutlineSupervisedUserCircle className='icon' /> },
        { name: "Ürünler", icon: <MdOutlineProductionQuantityLimits className='icon' /> },
        { name: "Siparişler", icon: <MdListAlt className='icon' /> },
        { name: "Teslimat", icon: <MdDeliveryDining className='icon' /> },
        { name: "İstatistikler", title: "BİLGİLER", smallTitle: "BİLGİ", icon: <MdQueryStats className='icon' /> },
        { name: "Bildirimler", icon: <MdNotificationsNone className='icon' /> },
        { name: "Sistem Sağlığı", title: "HİZMETLER", smallTitle: "HİZMET", icon: <MdOutlineHealthAndSafety className='icon' /> },
        { name: "Kayıtlar", icon: <MdOutlinePsychology className='icon' /> },
        { name: "Ayarlar", icon: <MdOutlineSettingsSuggest className='icon' /> },
        { name: "Profil", title: "ÜYELER", smallTitle: "ÜYE", icon: <MdPersonOutline className='icon' /> },
        { name: "Çıkış Yap", icon: <MdLogout className='icon' /> },
    ]

    const Menu = MenuItems.map(item => {
        let id = uuidv4();
        return (
            <Fragment key={id.toString()}>
                {item.title && <p className='title'>{menuOpen ? item.title : item.smallTitle}</p>}
                <li>
                    <div className='d'>{item.icon}</div>
                    <span>{item.name}</span>
                </li>
            </Fragment>

        )
    })


    const menuHandler = () => setMenuOpen((prev) => !prev)


    return (
        <div className={menuOpen ? "sidebar" : "sidebar small"}>
            <div className="top">
                {menuOpen && <span className="logo">ON ADMİN</span>}
                {menuOpen ?
                    <MdOutlineMenu className='hamburgerMenu' onClick={menuHandler} /> :
                    <MdOutlineMenuOpen className='hamburgerMenu' onClick={menuHandler} />}

            </div>
            <div className="middle">
                <ul>
                    {Menu}
                </ul>
            </div>
            <div className="bottom">
                <div className="colorWhite"></div>
                <div className="colorBlack"></div>
            </div>
        </div>
    )
}

export default Sidebar