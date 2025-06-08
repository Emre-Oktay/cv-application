import { useState } from 'react';
import General from './components/General.jsx';
import Educational from './components/Educational.jsx';
import Practical from './components/Practical.jsx';
import ButtonSection from './components/ButtonSection.jsx';
import './styles/App.css';

function App() {
    const [state, setState] = useState(0);

    return (
        <>
            <General state={state} />
            <Educational state={state} />
            <Practical state={state} />
            <ButtonSection state={state} stateSetter={setState} />
        </>
    );
}

export default App;
