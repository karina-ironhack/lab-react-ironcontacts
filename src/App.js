import "./App.css";
import contactList from "./contacts.json";
import React, { useState } from "react";

function App() {


  const newList = [...contactList].slice(0, 4);

  const [contacts, setContacts] = useState(newList);

  const getRandomContact = () => {
    let remainingList = [...contactList].slice(5, contactList.length-1);
    let randomContact = remainingList[Math.floor(Math.random()*remainingList.length)];
    setContacts(contacts => [...contacts, randomContact])
  }

  const sortByAlphabet = () => {
    setContacts(contacts => [...contacts].sort((a,b) => a.name.localeCompare(b.name)))
  }

  const sortByPopularity = () => {
    setContacts(contacts => [...contacts].sort((a,b) => b.popularity - a.popularity))
  }

  const deleteContact = (id) => {
    setContacts(contacts => contacts.filter(c => c.id !== id))
  }

  return (
    <div className="app">
    <h1>IronContacts</h1>
    <div className="buttons">
      <button onClick = { getRandomContact }>Add Random Contact</button>
      <button onClick = { sortByAlphabet }>Sort by alphabet</button>
      <button onClick = { sortByPopularity }>Sort by popularity</button>
    </div>

      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => {
            return (
              <tr key={c.id} className="table-row">
                <td>
                  <img src={c.pictureUrl} alt="" height="100px" />
                </td>
                <td>{c.name}</td>
                <td>{c.popularity.toFixed(2)}</td>
                <td>{c.wonOscar ?  '🏆' : ''}</td>
                <td>{c.wonEmmy ? '🏆' : ''}</td>
                <td><button onClick={ () => deleteContact(c.id) }>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
