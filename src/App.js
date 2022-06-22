import { useState } from 'react';
import SearchBar from './components/search-bar';
import styled from 'styled-components';

const people = [
  {
    id: '001',
    title: 'Edson Galan'
  },
  {
    id: '002',
    title: 'Juan Perez'
  },
  {
    id: '003',
    title: 'Carlos García'
  },
  {
    id: '004',
    title: 'María Sanchez'
  },
];

const calendar = [
  {
    id: 'calendar-01',
    title: 'Actividad 1'
  },
  {
    id: 'calendar-02',
    title: 'Actividad 2'
  },
  {
    id: 'calendar-03',
    title: 'Actividad 3'
  },
];

const emails = [
  {
    id: 'email-01',
    title: 'Correo 1',
  },
  {
    id: 'email-02',
    title: 'Correo 2',
  },
  {
    id: 'email-03',
    title: 'Correo 3',
  },
];

function App() {
  const [data, setData] = useState([... people, ... calendar, ... emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState('all');

  function handleClick(e) {
    const option = e.target.name;
    switch(option) {
      case 'all':
        setData([... people, ... calendar, ... emails]);
        setCurrentOption('all');
        break;
      case 'people':
        setData([... people]);
        setCurrentOption('people');
        break;
      case 'calendar':
        setData([... calendar]);
        setCurrentOption('calendar');
        break;
      case 'emails':
        setData([... emails]);
        setCurrentOption('emails');
        break;
      default:
        break;
      
    }
  }

  return (
    <div>
      <button onClick={ handleClick } name='all'> All </button>
      <button onClick={ handleClick } name='people'> People </button>
      <button onClick={ handleClick } name='calendar'> Calendar </button>
      <button onClick={ handleClick } name='emails'> Emails </button>

      <SearchBar items={ data } onSelected={ () => {} } />

    </div>
  );
}

export default App;
