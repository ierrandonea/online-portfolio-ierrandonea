const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            activeTab: "home",
            projects: [
                {
                    name: "The Coffee Club",
                    cover: "the-coffee-club.jpg",
                    route: "coffee-club",
                    github_front: "proyecto-final-4geeks-front",
                    github_back: "proyecto-final-4geeks-back",
                    website: ""
                },
                {
                    name: "Fintual Investment Simulator",
                    cover: "fintual-investment-simulator.jpg",
                    route: "fintual-investment-simulator",
                    github_front: "fintual-invest-simulator",
                    github_back: "",
                    website: "https://invest-simulator.vercel.app"
                },
                {
                    name: "Studio Ghibli Visual Guide",
                    cover: "ghibli-visual-guide.png",
                    route: "ghibli-visual-guide",
                    github_front: "Studio-Ghibli-Reading-App",
                    github_back: "",
                    website: "https://ghiblivisualguide.vercel.app"
                }
            ],
            designProjects: [
                {
                    name: "La Colonia Entobakery",
                    cover: "la-colonia-entobakery.jpg",
                    route: "la-colonia-entobakery"
                },
                {
                    name: "KR Social Training",
                    cover: "keep-runners.jpg",
                    route: "keeprunners-a-kr"
                },                
                {
                    name: "Cuncumen",
                    cover: "cuncumen.jpg",
                    route: "agua-cuncumen"
                },                
                {
                    name: "Este no es un afiche de Oscar Ríos",
                    cover: "poster-oscar.png",
                    route: "poster-oscar-rios"
                }
            ],
            otherProjects: [                
                {
                    name: "Otros Proyectos",
                    cover: "otros.jpg",
                    route: "cool-stuff"
                }
            ]
        },
        actions: {

        }
    }
}

export default getState;