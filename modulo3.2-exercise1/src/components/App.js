//import '../styles/App.css';

function App() {
  const handleInput = (ev) => {
    ev.preventDefault();
    console.log('El evento lanzado es: ',ev);
    console.log('La última tecla pulsada es: ', ev.key);
    console.log('El valor del input es: ', ev.target.value);
  }

  return (
    <form action="">
      <input type="text" onKeyUp={handleInput}/>
      
    </form>
  );
}
export default App;