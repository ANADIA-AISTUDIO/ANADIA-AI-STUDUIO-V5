import { getArticles } from '../data/articles';
export default function sitemap(){const site='https://anadia.co';const pages=['','/studio','/empresas','/productos','/educacion','/factory','/equipo','/insights'];return [...pages.map(p=>({url:site+p,changeFrequency:'monthly',priority:p===''?1:0.7})),...getArticles().map(a=>({url:site+'/insights/'+a.slug,changeFrequency:'monthly',priority:0.6}))]}
