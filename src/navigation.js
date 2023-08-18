import { getPermalink, getBlogPermalink } from './utils/permalinks';

const diventaSocioLink = getPermalink('/diventa-socio');

export const headerData = {
  links: [
    {
      text: "L'associazione",
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
