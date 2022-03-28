import './App.css';

import Calculator from './components/calculator/Calculator';
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header/>
            <Calculator/>
            <footer>
             <p style={{textAlign:'center', marginTop:'5rem', color:'black'}}>Copyright © 2022 Shubham Joshi</p>
         </footer>
        </div>
    );
}

export default App;
