import {IProject} from "@/types/IProjects";

export  const projects:IProject[] = [
    {
        id: 1,
        img: "/projects/01.jpeg",
        slug: `bank`,
        text: "Your Bank",
        github: "https://github.com/ProgGollum/bank"
    },
    {
        id: 2,
        img: "/projects/02.jpeg",
        slug: "coffee",
        text: "Coffee Marketplace",
        github: "https://github.com/ProgGollum/coffee"
    },
    {
        id: 3,
        img: "/projects/03.jpeg",
        slug: "lease-cars",
        text: "Lease Cars",
        github: "https://github.com/ProgGollum/LeaseCars"
    }
]