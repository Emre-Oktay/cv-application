import { useState } from 'react';
import General from './components/General.jsx';
import Educational from './components/Educational.jsx';
import Practical from './components/Practical.jsx';
import ButtonSection from './components/ButtonSection.jsx';
import CvPage from './components/CvPage.jsx';
import './styles/App.css';

function App() {
    const [state, setState] = useState(0);
    const [general, setGeneral] = useState({
        'first-name': 'John',
        'last-name': 'Smith',
        email: 'john.smith@email.com',
        phone: '+1-555-0123',
    });
    const [educational, setEducational] = useState([
        {
            id: crypto.randomUUID(),
            school: 'University of California, Berkeley',
            'study-title': 'Bachelor of Science in Computer Science',
            'start-date': '2018-09-01',
            'end-date': '2022-05-15',
            location: 'Berkeley, CA',
        },
    ]);
    const [practical, setPractical] = useState([
        {
            id: crypto.randomUUID(),
            company: 'Tech Solutions Inc.',
            position: 'Software Developer',
            'start-date': '2022-06-01',
            'end-date': '2024-12-31',
            location: 'San Francisco, CA',
            description:
                'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive designs and optimized application performance.',
        },
    ]);

    function generalHandler(e) {
        const newGeneral = { ...general, [e.target.name]: e.target.value };
        setGeneral(newGeneral);
    }

    function educationalHandler(id, e) {
        const newEducational = educational.map((item) =>
            item.id === id ? { ...item, [e.target.name]: e.target.value } : item
        );

        setEducational(newEducational);
    }

    function addEducationalItem() {
        const newItem = {
            id: crypto.randomUUID(),
            school: '',
            'study-title': '',
            'start-date': '',
            'end-date': '',
            location: '',
        };
        setEducational([...educational, newItem]);
    }

    function removeEducationalItem(id) {
        setEducational(educational.filter((item) => item.id !== id));
    }

    function practicalHandler(id, e) {
        const newPractical = practical.map((item) =>
            item.id === id ? { ...item, [e.target.name]: e.target.value } : item
        );
        setPractical(newPractical);
    }

    function addPracticalItem() {
        const newItem = {
            id: crypto.randomUUID(),
            company: '',
            position: '',
            'start-date': '',
            'end-date': '',
            location: '',
            description: '',
        };
        setPractical([...practical, newItem]);
    }

    function removePracticalItem(id) {
        setPractical(practical.filter((item) => item.id !== id));
    }

    return (
        <>
            <form>
                <General state={state} initial={general} handler={generalHandler} />
                <Educational
                    state={state}
                    items={educational}
                    handler={educationalHandler}
                    onAdd={addEducationalItem}
                    onRemove={removeEducationalItem}
                />
                <Practical
                    state={state}
                    items={practical}
                    handler={practicalHandler}
                    onAdd={addPracticalItem}
                    onRemove={removePracticalItem}
                />
                <ButtonSection state={state} stateSetter={setState} />
            </form>
            <CvPage general={general} educational={educational} practical={practical} />
        </>
    );
}

export default App;
