import { getArticles } from '../data/articles';
export default function robots(){const site='https://anadia.co';return {rules:[{userAgent:'*',allow:'/',disallow:['/admin','/api/']}],sitemap:site+'/sitemap.xml',host:site}}
