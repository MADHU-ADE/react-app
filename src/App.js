import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';


export default function App() {
  const [mode, setMode] =useState('light');
  const [alert, setAlert] =useState('null');

  const showAlert = (message,type)=>{
    setAlert({
      message :message,
      type    : type
      })
    setTimeout(() =>{
      setAlert(null);
    },1000);
  }

   const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='dark';
      showAlert("Dark mode has been enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "Success");
    }
   }
  return (
    <div>
      {/* about="About Utl" */}
      <Navbar  title="Text Utl"  mode={mode}  toggleMode={toggleMode} /> 
      <Alert alert ={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode} />
      </div>
      {/* <About/> */}
    </div>
  );
}

//export default App;