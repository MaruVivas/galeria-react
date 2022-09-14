import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Card from './components/Card/Card.jsx'

function App() {
  const titulo = "Galeria de Imágenes con React";

  const data = [
    {
      titulo: "Roma",
      img: "https://images.unsplash.com/photo-1583422095309-55daabc9cc78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      desc: "La ciudad eterna"
    },
    {
      titulo: "Paris",
      img: "https://images.unsplash.com/photo-1584266337361-679ae80c8519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      desc: "La ciudad del amor"
    },
    {
      titulo: "Tokyo",
      img: "https://images.unsplash.com/photo-1553292770-c3d14b814242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80",
      desc: "La ciudad del futuro"
    },
    {
      titulo: "Miami",
      img: "https://images.unsplash.com/photo-1514922395-03b635d50612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
      desc: "La ciudad mágica"
    }
  ]
  
  return (
    
    <div className="App">
      <Header titulo={titulo}></Header>
      <div class="container row row-sm-cols-1 row-cols-lg-2 m-4 g-4 justify-content-center">
        <Card contenido = {data[0]}></Card>
        <Card contenido = {data[1]}></Card>
        <Card contenido = {data[2]}></Card>
        <Card contenido = {data[3]}></Card>
      </div>
      
      <Footer></Footer>
        
      
    </div>
  );
}

export default App;
