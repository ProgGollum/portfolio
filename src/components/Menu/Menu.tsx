import React, {FC} from 'react';
import s from "./Menu.module.scss"
import IPage from "@/types/IPage";
import Link from 'next/link';
import classNames from "classnames";

interface MenuProps {
    pages: IPage[],
    pathname: string,
    active: boolean,
    setActive: (value: boolean) => void
}

const Menu: FC<MenuProps> = ({pages, pathname, active, setActive}) => {
    return (
        <div onClick={() => setActive(false)} className={classNames(s.menu, active ? s.active : {})}>
            <div className={s.menu__content} onClick={(event) => event.stopPropagation()}>
                <ul className={s.menu__list}>
                    {pages.map(page => (
                        <li key={page.id} className={s.menu__item}>
                            <Link onClick={() => setActive(false)}
                                  className={classNames(s.menu__item_link, pathname == page.href ? s.active__link : {})}
                                  href={page.href}>{page.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;