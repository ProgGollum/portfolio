'use client'

import React, {useState} from 'react';
import s from "./Header.module.scss"
import Link from 'next/link';
import {usePathname} from "next/navigation";
import classNames from "classnames";

const Header = () => {
    const pathname = usePathname()
    const [isActive, setIsActive] = useState<boolean>(false)

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
                </div>
            </div>
        </header>
    );
};

export default Header;