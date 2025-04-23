import s from "./page.module.scss"
import {projects} from "../projectsData/data"
import {Button} from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <section className={s.hero}>
            <div className={s.hero__block}>
                <h1><span>Hi, my name is <span>Kirill</span></span> <br/> a frontend developer</h1>
                <p>with passion for learning and creating</p>
                <Button size={"md"}>Download CV</Button>
            </div>
        </section>
        <section className={s.projects}>
            <div className="container">
                <h1 className={s.projects__title}>Projects</h1>
                <div className={s.projects__list}>
                    {projects.map(project => (
                        <Link key={project.id} className={s.projects__list_item} href={`project/${project.slug}`}>
                            <img src={project.img} alt={"Projects"} width={370} height={280}/>
                            <p>{project.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </main>
  );
}
