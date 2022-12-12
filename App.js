
import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Services from './services';
import About from './about';
// import List from './list';
// import Appz from './Appz';
// import TextButtons from './button';

function App() {
  return (
    <>
    <div className="App">
 <BrowserRouter>
<Routes>
  <Route path='' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/service' element={<Services/>}/>
  <Route path='/about'   element={<About/>} />
</Routes>

</BrowserRouter>
      
      
   </div>
   </>
   
  );
}

export default App;


// // import Radium from 'radium';
// // import React from 'react';

// // function App() {
// // const style={
// // 	':hover':{
// // 	backgroundColor: 'green'
// // 	}
// // }
// // return (
// // 	<div>
// // 	<h3>Now you can see hover is working in inline styling</h3>
// // 	<button style={style}>example of radium</button>
// // 	</div>
// // );
// // }

// // export default Radium(App);

// import './App.css';
// import Header from './nav';
// function App()
// {
//   return(
//     <div>
      
//     </div>
//   )
// }
