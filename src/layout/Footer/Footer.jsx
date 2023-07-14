import {Github} from 'react-bootstrap-icons';

export default function Footer(){
    const gitHubUrl= 'https://github.com/allietted/allietted-portfolio';
    
    const currentYear = newDate().getFullTear();

    return(
        <footer className='p-5'>
           <p className='footer-text text-center'>
            <a href= {gitHubUrl}
            target='_blank'
            rel='noreferrer'
            className='button=effect'>
                <Github size='50' className='github-icon'/>
            </a>
            <div>
                <small>&copy;{currentYear} Alliette Dortelus</small>
            </div>
           </p>
        </footer>
    )
}