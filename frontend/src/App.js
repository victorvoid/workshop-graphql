import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_USERS = gql`
  {
    users {
      leadName: name
      age
    }
  }
`

function App() {
  const { loading, data } = useQuery(GET_USERS)
  const users = data.users || []
  if(loading) {
    return <div>loading...</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { users.map(user => <li>{ user.leadName }</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
