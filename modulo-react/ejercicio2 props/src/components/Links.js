import '../styles/main.scss'

const Links = (props) => {



  return (

   
      <li>
        <a tittle={props.title} class={props.class} href={props.href} target={props.openInNewTab ===true ? '_blank' : ''} rel="noreferrer">
          
        </a>
      </li>
     
  );
};

export default Links;
