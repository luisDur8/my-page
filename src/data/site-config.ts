export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Luis LoHer',
    subtitle: 'Página Personal',
    description: 'Página Personal del Desarrollador Web Luis LoHer.',
    image: {
        src: '/dante-preview.jpg', //Modificar
        alt: 'Luis LoHer'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects' 
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Etiquetas',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre Mí',
            href: '/about'
        },
        {
            text: 'Contáctame',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/luisDur8'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/luisloher9/'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/luis-lopez-web-developer/'
        }
    ],
    hero: {
        title: '¡Hola! Bienvenidxs a mi Espacio',
        text: "Soy Luis LoHer, un Matemático y Programador apasionado, actualmente me dedico al Desarrollo Web. Mi enfoque implica abrazar la intuición, realizar la investigación suficiente y aprovechar la estética como catalizador para productos excepcionales. Aprecio profundamente el software de primer nivel, el diseño visual y los principios del crecimiento impulsado por productos. Siéntete libre de explorar algunos de mis esfuerzos de codificación en la pestaña de Trabajos.",
        image: {
            src: '/hero.jpeg',
            alt: 'Luis Loher foto'
        },
        actions: [
            {
                text: 'Ponte en contacto',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Suscríbete al boletín de Luis LoHer',
        text: 'Una actualización por semana. Todas las últimas publicaciones directamente en tu bandeja de entrada 😉',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
