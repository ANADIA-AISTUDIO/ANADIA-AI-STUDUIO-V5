import './legacy.css';
import './modern.css';
import Shell from '../components/Shell';
export const metadata={title:{default:'Anadia AI Studio | La IA como punto de partida',template:'%s | Anadia AI Studio'},description:'Estrategia, innovación y formación en inteligencia artificial para empresas hispanohablantes.',icons:{icon:[{url:'/favicon.ico'},{url:'/favicon-64.png',sizes:'64x64',type:'image/png'}],apple:'/apple-touch-icon.png'}};
export default function RootLayout({children}){return <html lang="es"><body><Shell>{children}</Shell></body></html>}
