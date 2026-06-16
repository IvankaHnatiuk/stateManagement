import Counter from './components/Counter'
import Form from './components/Form'
import Header from './components/Header';
import List from './components/List';
import Items from './components/Items';
import Main from './components/Main';
import { useState } from 'react';
import Section from './components/Section';
import Input from './components/Input';
import Button from './components/Button';
import LoadingData from './components/LoadingData';

function App() {
const [nameList, setNameList] = useState(['Anakin', 'Obi-wan']);
const [newName, setNewName] = useState();

const handleChange = (e)=> {
  setNewName(e.target.value);
}

const addNewName = (name) => {
  setNameList((prev) => [...prev, name]);
}


  return (
    <>
    <LoadingData />
    <Header>
      <h1>Hollo there!</h1>
    </Header>
    <Main>
    <Main.Section>
        <Main.Section.Input onChange={handleChange}></Main.Section.Input>
        <Main.Section.Button onClick={()=>addNewName(newName)}>Click Here!</Main.Section.Button>
      </Main.Section>
      <Main.List>
          {nameList.map((name, index)=> {
            return <Main.List.Items key={index}>{name}</Main.List.Items>
          })}
      </Main.List>
    </Main>

    <Counter />
    <Form />
    </>
  )
}

export default App
