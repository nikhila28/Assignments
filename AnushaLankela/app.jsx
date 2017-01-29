import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>

           <Header/>
           <Body/>
           <Footer/>
            
         </div>
      );
   }
}
const Header = () => <img src="./images/header.jpg" alt="header image"/>
const Body = () => <p>this is Body Text </p>
const Footer = () => <p>this is Footer &copy;Anusha 2017 </p>

export default App;