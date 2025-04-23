import React from 'react';
import s from "./page.module.scss"

const Page = () => {
    return (
        <main className={s.skills}>
            <h1 className={s.skills__title}>Skills</h1>
            <div className={s.skills__block_frontend}>
                <h2>Frontend</h2>
                <p>
                    JavaScript, TypeScript, ReactJS, NextJs, HTML, CSS, SCSS, NPM, Mantine, ReactIcons, GraphQL
                </p>
            </div>
            <div className={s.skills__block_backend}>
                <h2>Backend</h2>
                <p>NodeJS, Postgresql, Express</p>
            </div>
        </main>
    );
};

export default Page;