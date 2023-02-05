import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';


function App() {
  return (
      
        <div className='App'>
          <Route>
          <Navbar/>
          <AllRoutes/>
          </Route>
        </div>
     
  ); 
}

export default App;
