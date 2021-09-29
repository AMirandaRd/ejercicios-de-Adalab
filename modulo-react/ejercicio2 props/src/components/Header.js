import image from '../images/adalab-logo-155x61.png'
import Links from './Links';

const Header=()=>{
    return (
<div>
    
        <header className="header">
    
            <a href="https://adalab.es/"> <img className="logo" src={image} alt="adalab-logo" title="Go to Adalab"/> </a>
            <nav>
     <Links title="Blog" className='menu-link' href='https://adalab.blog/' openInNewTab={true} rel="noreferrer" />
     <Links title="Contacto" className='menu-link' href='https://adalab.blog/' openInNewTab={false} rel="noreferrer"  />
            </nav>
        </header>
</div>
    );
}

export default Header;
