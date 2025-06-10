import { useState } from 'react';
import General from './components/General.jsx';
import Educational from './components/Educational.jsx';
import Practical from './components/Practical.jsx';
import ButtonSection from './components/ButtonSection.jsx';
import './styles/App.css';

function App() {
    const [state, setState] = useState(0);
    const [general, setGeneral] = useState({ 'first-name': '', 'last-name': '', email: '', phone: '' });
    const [educational, setEducational] = useState({
        school: '',
        'study-title': '',
        'start-date': '',
        'end-date': '',
        location: '',
    });
    const [practical, setPractical] = useState({
        company: '',
        position: '',
        'start-date': '',
        'end-date': '',
        location: '',
        description: '',
    });

    function generalHandler(e) {
        const newGeneral = { ...general, [e.target.name]: e.target.value };
        setGeneral(newGeneral);
    }

    function educationalHandler(e) {
        const newEducational = { ...educational, [e.target.name]: e.target.value };
        setEducational(newEducational);
    }

    function practicalHandler(e) {
        const newPractical = { ...practical, [e.target.name]: e.target.value };
        setPractical(newPractical);
    }

    return (
        <>
            <General state={state} initial={general} handler={generalHandler} />
            <Educational state={state} initial={educational} handler={educationalHandler} />
            <Practical state={state} initial={practical} handler={practicalHandler} />
            <ButtonSection state={state} stateSetter={setState} />
        </>
    );
}

export default App;
