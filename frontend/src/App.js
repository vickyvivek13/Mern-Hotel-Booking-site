import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Route,  Link, Routes} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Adminscreen from './screens/Adminscreen';
import Landingscreen from './screens/Landingscreen';
import Flightscreen from './screens/Flightscreen';
import Trainscreen from './screens/Trainscreen';
import Editscreen from './screens/Editscreen';
import Userbookingscreen from './screens/Userbookingscreen';

function App() {
  return (
    <div className="App">
         
        <Navbar/>
        < BrowserRouter>
            <Routes>
               <Route path='/home' exact element ={<Homescreen/>}/> 
               <Route path='/book/:roomid' exact element ={<Bookingscreen/>}/>
               <Route path='/register' exact element ={<Registerscreen/>}/>
               <Route path='/login' exact element ={<Loginscreen/>}/>
               <Route path='/admin' exact element ={<Adminscreen/>}/>
               <Route path='/' exact element ={<Landingscreen/>}/>
               <Route path='/flight' exact element ={<Flightscreen/>}/>
               <Route path='/train' exact element ={<Trainscreen/>}/>
               <Route path='/room/:roomid' exact element ={<Editscreen/>}/>
               <Route path='/usersbookings' exact element ={<Userbookingscreen/>}/>
            </Routes>

        </BrowserRouter>
    
      
    </div>
  );
}

export default App;
