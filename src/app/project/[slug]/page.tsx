'use client'

import React from 'react';
import {getProjectsBySlug} from "@/projectsData/services";
import {useParams} from "next/navigation";
import s from "./page.module.scss"
import { Button } from '@mantine/core';
import {FaGithub} from "react-icons/fa";
import Link from "next/link";

const Page = () => {
    const {slug} = useParams<{slug: string}>()
    const project = getProjectsBySlug(slug);

    return (
        <main className={s.project}>
            <div className="container">
                <h1 className={s.project__title}>{project?.text}</h1>
                <img className={s.project__img} src={project?.img} alt={project?.text} width={865} height={650}/>
                <p className={s.project__skills}>Skills: React, Next js, TypeScript</p>
                <Link className={s.project__link} target={"_blank"} href={project!.github}><FaGithub size={"1.5rem"}/> GitHub repo</Link>
            </div>
        </main>
    );
};

export default Page;