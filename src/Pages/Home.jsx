import AppLayout from '../layout/AppLayout';
import Portfolio from '../layout/Portfoilo';
import TrifectaCopy from '../layout/Trifecta/TrifectaCopy';
import Skills from '../layout/Skills';
import Header from '../layout/Header';
import Contact from '../layout/Contact';
import About from '../layout/About';


export default function Home(){
    return(

        <AppLayout>
            <Header/>
            <Portfolio/>
            <TrifectaCopy/>
            <Skills/>
            <About/>
            <Contact/>
        </AppLayout>

    );
}