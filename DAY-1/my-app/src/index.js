import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import reportWebVitals from './reportWebVitals';
// import { BrowserRouter} from 'react-router-dom';
// import { Toaster}  from   'react-hot-toast'
// import providercountercontext from './components/contex/counterContex';
// import Authcontextcomponent from './components/context/authcontext';


 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //  <BrowserRouter>
//    <Authcontextcomponent>
//     <providercountercontext>
//       <Toaster
//       position ="top-center"
//       reverseorder={false}
//       gutter={8}
//       containclassname=""
//       countainerstyle={{}}
//       Toasteroption={{

//         classname:'',
//         duration:5000,
//         style:{
//           background:'#363636',
//           color: '#fff',
//         },

//         success: {
//           duratoin:3000,
//           theme: {
//           primary :'green',
//           secondary:'black',
//         },
         
//       },
//     }}
//     />

    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>
    
    // </providercountercontext>
    // </Authcontextcomponent>
    // </BrowserRouter>
);

  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
