'use client'

import React from 'react';
import s from "./footer.module.scss"
import {FaGithub, FaVk} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {


    return (
        <footer className={s.footer}>
            <div className={s.footer__block}>
                <ul className={s.footer__socials}>
                    <li className={s.footer__socials_item}>
                        <Link target={"_blank"} href={"https://vk.com/id536371394"}><FaVk color={"#ffffff"}/></Link>
                    </li>
                    <li className={s.footer__socials_item}>
                        <Link target={"_blank"} href={"https://github.com/ProgGollum"}><FaGithub color={"#ffffff"}/></Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;