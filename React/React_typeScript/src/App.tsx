import Greet from './components/Greet'
import Person from './components/Person'
import './App.css';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import { ThemeContextProvider } from './components/state/context/ThemeContext';
import Box from './components/state/context/Box';
import React from 'react';
import { UserContextProvider } from './components/state/context/UserContext';
import User from './components/state/context/User';

function App() {
  const personName ={
    first: 'Haku',
    last: 'rinro',
  }
  const nameList = [
    {
      first: 'Haku',
      last: 'rinro',
    },
    {
      first: 'Haku',
      last: 'rinro',
    },
    {
      first: 'Haku',
      last: 'rinro',
    },
    {
      first: 'Haku',
      last: 'rinro',
    },
  ]
  return (
    <div className="App">
      <Greet name='Haku' messageCount={20} isLoginedIn={true}></Greet>
      <Greet name='Son' isLoginedIn={true}></Greet>
      <Person name={personName}/>
      <PersonList names={nameList} />
      <hr />
      <Status status='loading'/>
      <Oscar>
        <Heading>Children - AAAAA</Heading>
      </Oscar>
      <hr />
      <Button handleClick={(event, id) => {console.log('Button cliked', event, id)}}></Button>
      <Input value='' handleChange={(event) => {console.log(event)}}></Input>
      <Container styles={{border: '1px solid green', padding: '1rem'}}></Container>
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
