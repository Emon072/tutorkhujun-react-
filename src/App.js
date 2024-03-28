import './App.css';
import Home from './components/home_folder/Home';
import NavbarComponent from './components/navbar_folder/NavbarComponent';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(props) {
  

  return (
    <div className='main' style={{position:'realtive'}}>
      <NavbarComponent></NavbarComponent>
      <Home activeLink = {props.activeLink}></Home>
    </div>
  );
}

export default App;
