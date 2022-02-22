import logo from './logo.svg';
import './App.css';
import{Routes,Route,Link} from "react-router-dom";
import { Home } from './Components/Home';
import { Allproduct } from './Components/Allproduct';
import {Productdetails} from "./Components/Productdetails";

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/all_product">All Product</Link>
       
      </div>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/all_product" element={<Allproduct/>}>
       <Route path=":id" element={<Productdetails/>}/>

       </Route>

       
     </Routes>
      
    </div>
  );
}

export default App;
