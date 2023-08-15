import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const diventaSocioLink = getPermalink('/diventa-socio');

export const headerData = {
  links: [
    {
      text: 'L\'associazione',
      links: [
        {
          text: 'Chi siamo',
          href: getPermalink('/chi-siamo'),
        },
        {
          text: 'Amministrazione Trasparente',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Il consiglio direttivo',
          href: getPermalink('/landing/startup'),
        },
        {
          text: 'Diventa Socio',
          href: diventaSocioLink,
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Media',
          href: getPermalink('/landing/mobile-app'),
        },
      ],
    },
    {
      text: 'Progetti',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'News',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Spazio Magazine',
      href: getPermalink('/spazio-magazine'),
    },
    {
      text: 'Contatti',
      href: getPermalink('/contatti'),
    },
  ],
  actions: [{ type: 'button', text: 'Area Soci', href: 'https://www.adaa.it/area-soci/' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Supportaci',
      links: [
        { text: 'Diventa Socio', href: diventaSocioLink },
        { text: 'Abbonati a Spazio Magazine', href: '#' },
        { text: 'Dona il 5x1000', href: '#' },
        { text: 'Finanzia un progetto', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/adaa_stra' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/adaa_aps' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/associazioneADAA' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Axel92Dev' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://assets.super.so/66eb3abc-cf75-446b-b800-16d8ce1c0c35/uploads/favicon/20edcda1-5f92-4b0a-b1cf-a3d6c6198b34.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://aleromano.com/"> Alessandro Romano</a>
  `,
};
