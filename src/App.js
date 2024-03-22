import './App.css';
import Home from './components/home_folder/Home';
import NavbarComponent from './components/navbar_folder/NavbarComponent';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className='main' style={{position:'realtive'}}>
      <NavbarComponent></NavbarComponent>
      <Home></Home>
    </div>
  );
}

export default App;
