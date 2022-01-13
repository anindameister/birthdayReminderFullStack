
import './App.css';
import {Fragment} from "react"

//components

import InputBirthday from './components/InputBirthday';
import ListBirthday from './components/ListBirthday';

function App() {
  return (
    <Fragment>
    <div className="container">
      <InputBirthday/>
      <ListBirthday/>
      </div>
      
    </Fragment>
    
  );
}

export default App;




