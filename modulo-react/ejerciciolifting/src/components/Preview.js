

//Pasamos el div de preview
const Preview =()=>{
<div className="preview">
          <h2>Tus datos son:</h2>
          <ul>
            <li>Nombre: {name}</li>
            <li>Email: {email}</li>
            <li>Región: {region}</li>
            <li>Método de pago: {renderPaymentTypeText()}</li>
            <li>Has aceptado nuestros términos legales: {legalTerms === true ? 'Sí' : 'No'}</li>
          </ul>
        </div>
}

export default Preview