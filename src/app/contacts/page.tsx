import React from 'react';
import s from "./page.module.scss"

const Page = () => {
    return (
        <main className={s.contacts}>
            <h1 className={s.contacts__title}>Contacts</h1>
            <div className={s.contacts__block_location}>
                <h2>Location</h2>
                <p>
                    Voronezh, Russia
                </p>
            </div>
            <div className={s.contacts__block_messengers}>
                <h2>Telegram/WhatsApp</h2>
                <p>+7 (980) 538-11-44</p>
            </div>
            <div className={s.contacts__block_email}>
                <h2>Email</h2>
                <a href={"mailto:k.dann2005@gmail.com"}>k.dann2005@gmail.com</a>
            </div>
        </main>
    );
};

export default Page;