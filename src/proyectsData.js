import KotlinIcon from 'src/assets/icons/kotlin'
import JavaIcon from 'src/assets/icons/java' 
import VueIcon from './assets/icons/vue'
import ReactIcon from './assets/icons/react'


export const moreSkills = ['adaptabilidad y flexibilidad','autodidacta','entendimiento','compromiso','Inglés','Bootstrap','Bug and Issue Tracking Tools - JIRA',
    'cli','Scrum agile','fast-learner','figma', 'flex', 'FullStack Jr', 'github','html','Ionic','Front-end','jira platform','Loopback','MySql','npm','PhpMyAdmin',
    'Operational Role - Freelancer','Project Management Software - JIRA','swift', 'Teacher','useEffect','REST API','JSON','Visual studio','Angular','Xcode','Firebase'
    ,'postman','Bitbucket','Herramientas de Diseño','git cli','Kotlin', 'css', 'JavaScript', 'React-Router', 'GraphQL', 'Redux', 'TypeScript', 'LocalStorage', 'Fetch', 
    'API', 'MarvelAPI', 'moment', 'Notistack', 'MaterialUI', 'Amplify', ' Google Geocoding Api', 'Tailwind', 'React-pdf', 'Formik', 'Next.js ', 'svg', 'AnimeJs', 'SQLite'
    ,'Java']
export const allProjects = [
    {
        name: 'Gestor de citas acupunturista',
        techno: { name: 'Java', logo: JavaIcon },
        description: 'Aplicación para un consultorio de acupuntura, que ayuda a la gestion de citas, hacer citas y espacio para hacer publicaciones como doctor',
        gitUrl: '',
        image: [],
        type: 'Freelance',
        skill: ['Java']
    },
    {
        name: 'Sistema completo para los usuarios de un gimnasio',
        techno: { name: 'Java', logo: JavaIcon },
        description: 'Proyecto ganador a mejor proyecto de la carrera. Sistema completo para los usuarios de un gimnasio (cliente, instructor, nutriólogo y administrador)',
        gitUrl: 'https://github.com/Zaratee/GymApp-AndroidStudio',
        image: [],
        type: 'Proyecto Integrador CETI Colomos',
        skill: ['Java', 'SQLite']
    },
    {
        name: 'Portafolio Anterior',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Mi primer portafolio que usé en su momento para mostrar mis proyectos',
        gitUrl: 'https://github.com/Zaratee/myWebPage/tree/main',
        image: [],
        type: 'Proyecto Personal ',
        skill: ['Tailwind', 'AnimeJs', 'JavaScript', 'React-Router']
    },
    {
        name: 'Portafolio Actual',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Mi portafolio actual para mostrar mis proyectos hechos de forma freelance y de proyectos personales',
        gitUrl: 'https://portafolio-flax-three.vercel.app/',
        image: [],
        type: 'Proyecto Personal ',
        skill: ['Tailwind', 'AnimeJs', 'JavaScript', 'React-Router', 'svg']
    },
    {
        name: 'Sistema Deportivo Fútbol usuarios',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Sistema personalizado para la visualización de liguillas e información del deportivo',
        gitUrl: 'https://deportivomorelos.com/',
        image: [],
        type: 'Freelance',
        skill: ['css', 'Next.js ', 'moment', 'Formik', 'JavaScript', 'React-Router']
    },
    {
        name: 'Sistema Deportivo Fútbol Administrador',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Sistema Privado para usuario Administrador que sirve para la gestión de liguillas , crear eqipos, poner marcadores, postear noticias o avisos y un sistema para gestionar las imagenes mostradas en la página principal',
        gitUrl: '',
        image: [],
        type: 'Freelance',
        skill: ['Tailwind', 'Nextjs', 'React-pdf', 'moment', 'Formik', 'JavaScript', 'React-Router']
    },
    {
        name: 'Sistema para solicitar de vehiculos de carga',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Sistema Privado para la solicitud y gestión de vehículos de carga (sistema conformado de 4 plataformas usando React)',
        gitUrl: '',
        image: [],
        type: 'Freelance',
        skill: ['Amplify', 'moment', 'JavaScript','React-Router', 'Redux', 'Notistack', 'MaterialUI', ' Google Geocoding Api']
    },
    {
        name: 'Administrador de inventario en hospital',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Sistema privado para administrar el stock de los insumos dentro de un Hospital situado en Canada',
        gitUrl: '',
        image: [],
        type: 'Freelance',
        skill: ['css', 'JavaScript', 'Fetch', 'React-Router']
    },
    {
        name: 'MarvelHeroes api',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Aplicación web personal donde se hace uso de Fetch con MarvelAPI y manejando los datos con Redux',
        gitUrl: 'https://9kt63y.csb.app/',
        image: [],
        type: 'Proyecto Personal ',
        skill: ['Redux', 'Fetch', 'MarvelAPI','JavaScript']
    },
    {
        name: 'Calendario',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Calendario con asignacion de eventos personalizaos y otros eventos fijos los cuales son consumidos desde una api',
        gitUrl: 'https://github.com/Zaratee/Calendario/tree/main',
        image: [],
        type: 'Proyecto Personal',
        skill: ['Redux', 'Fetch', 'API', 'LocalStorage', 'Tailwind', 'JavaScript' ]
    },
    {
        name: 'Calculadora',
        techno: { name: 'Kotlin', logo: KotlinIcon },
        description: 'Aplicación de calculadora para celulares Android',
        gitUrl: 'https://github.com/Zaratee/Calculator',
        image: [],
        type: 'Proyecto Personal',
        skill: ['Kotlin']
    },
    {
        name: 'Responsive Grid',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Aplicación personal web con grid responsive',
        gitUrl: 'https://github.com/Zaratee/Responsive-Grid-Website',
        image: [],
        type: 'Proyecto Personal',
        skill: ['css', 'TypeScript']
    },
    {
        name: 'Vue Course',
        techno: { name: 'Vue', logo: VueIcon },
        description: 'Curso de Vue',
        gitUrl: 'https://zhlgwx.csb.app/',
        image: [],
        type: 'Proyecto Personal',
        skill: ['JavaScript', 'css']
    },
    {
        name: 'Todo list',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Todo list app hecho con React y haciendo uso de Redux',
        gitUrl: 'https://github.com/Zaratee/ToDoListRedux',
        image: [],
        type: 'Proyecto Personal',
        skill: ['Redux', 'JavaScript', 'css']
    },
    {
        name: 'State of Water',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Aplicación del bootcamp de React, donde se practica el manejo de los estados (useState)',
        gitUrl: 'https://github.com/Zaratee/StateOfWater/tree/main',
        image: [],
        type: 'Proyecto Personal',
        skill: [ 'JavaScript', 'css']
    },
    {
        name: 'Pokedex',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Aplicacion hecha con React, haciendo uso de la api Pokedex',
        gitUrl: 'https://github.com/Zaratee/Pokedex',
        image: [],
        type: 'Proyecto Personal',
        skill: ['GraphQL', 'JavaScript', 'css', 'React-Router']
    },
    {
        name: 'React Bootcamp',
        techno: { name: 'React', logo: ReactIcon },
        description: 'Aplicaciones hechas en el bootcamp de react',
        gitUrl: 'https://github.com/Zaratee/All-Task-From-React-Training',
        image: [],
        type: 'Proyecto Personal',
        skill: ['JavaScript', 'css']
    },
    {
        name: 'Convertidor de años a minutos',
        techno: { name: 'Kotlin', logo: KotlinIcon },
        description: 'Aplicación que sirve de herramienta para hacer conversión de años a minutos',
        gitUrl: 'https://github.com/Zaratee/AgeInMinutes',
        image: [],
        type: 'Proyecto Personal',
        skill: ['Kotlin']
    },


]