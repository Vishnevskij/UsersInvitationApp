import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useState } from 'react';

// List of users: https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([]);
  React.useEffect(()=>{
    fetch('https://reqres.in/api/users').then(response=>response.json()).then(JSON=>setUsers(JSON.data));
  },[])

  const [searchValue, setSearchValue] = useState("");
  const onInputChange = (event) => {
    setSearchValue(event.target.value);
  }

  const [invite, setInvite] = useState([]);
  const onClickInvite = (id) => {
if (invite.includes(id)) {
  setInvite(prev => prev.filter(_id => _id != id))
} else {
  setInvite(prev => [...prev, id])
}
  }

  const [sendEmail, setSendEmail] = useState(false);
  const onButtonClickSendEmail = () => {
    setSendEmail(true);
  }

  return (
    <div className="App">
      {sendEmail ? <Success count={invite.length}/> : <Users items={users} searchValue={searchValue} onInputChange={onInputChange} invite={invite} onClickInvite={onClickInvite} sendEmail={sendEmail} onButtonClickSendEmail={onButtonClickSendEmail} />}
    
    </div>
  );
}

export default App;
