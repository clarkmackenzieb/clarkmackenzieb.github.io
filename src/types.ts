export interface PostItem {
  desc: string;
  date: string;
  title: string;
  markdown: string;
  id: string;
}

export const ROUTES = {
  home: '/',
  about: '/about',
  reference: '/reference',
  blog: '/blog',
  todo: '/todo',
}