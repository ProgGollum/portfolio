import {IProject} from "@/types/IProjects";
import {projects} from "@/projectsData/data";

export const getProjectsBySlug = (slug: string): IProject | undefined => {
    return projects.find((project) => project.slug === slug)
}