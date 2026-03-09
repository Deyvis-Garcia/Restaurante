import './App.css';
import {Logo,ProductoCard,Menu,Footer,Button} from "./componentes/portada.jsx"

function App() {
  return (
    <>
      <header>
        <Logo />
        <Menu />
      </header>
      <main>
        <div>
          <h1>Donde cada bocado cuenta una historia</h1>
          <p>Explora nuestra carta con una exquisita variedad</p>
          <Button text=". Ver carta"/>
        </div>
        <ProductoCard clase="card_carne" titulo="Costillas de carne" imagen="carne" descripcion="esto es lo mejor que he probado en mi vida"/>
        <ProductoCard clase="card_papas" titulo="Carshel de papas" imagen="papas" descripcion="Carne de res con papas glaciadas de miel"/>
        <ProductoCard clase="card_licor" titulo="Licores matzfel" imagen="licor" descripcion="Alta calidad de sabor, tradición en cada botella"/>
        <ProductoCard clase="card_leche" titulo="Frexhalt de milk" imagen="leche" descripcion="Fresas con arandanos y leche de vaca con una pisaca de licor"/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
