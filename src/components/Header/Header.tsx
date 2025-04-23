'use client'

import React, {useState} from 'react';
import s from "./Header.module.scss"
import Link from 'next/link';
import {usePathname} from "next/navigation";
import classNames from "classnames";
import Menu from "@/components/Menu/Menu";
import IPage from "@/types/IPage";
import {RiMenuFoldLine} from "react-icons/ri";

const Header = () => {
    const pathname = usePathname()
    const [isActive, setIsActive] = useState<boolean>(false)
    const [menuActive, setMenuActive] = useState<boolean>(false);

    const pages: IPage[] = [
        {
            id: 1,
            href: "/",
            title: "Projects"
        },
        {
            id: 2,
            href: "/skills",
            title: "Skills"
        },
        {
            id: 3,
            href: "/contacts",
            title: "Contacts"
        }
    ]

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__wrapper}>
                    <Link href={"/"}><span>Freelancer</span> portfolio</Link>
                    <nav className={s.header__nav}>
                        <Link className={classNames(s.header__nav_link, pathname === "/" ? s.active : {})}
                              href={"/"}>Projects</Link>
                        <Link className={classNames(s.header__nav_link, pathname === "/skills" ? s.active : {})}
                              href={"/skills"}>Skills</Link>
                        <Link className={classNames(s.header__nav_link, pathname === "/contacts" ? s.active : {})}
                              href={"/contacts"}>Contacts</Link>
                    </nav>
                    <div className={s.header__menu_button} onClick={() => setMenuActive(!menuActive)}>
                        <RiMenuFoldLine color={"#ffffff"}/>
                    </div>
                    <Menu pages={pages} pathname={pathname} active={menuActive} setActive={setMenuActive}/>
                </div>
            </div>
        </header>
    );
};

export default Header;