import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {
    const [users,setUsers] = useState([])
    const [filtreduser, setFiltredUser]= useState([])
    useEffect(()=>{
        axios.get('....')
        .then(res=>{setUsers(res.data)}
        
    ).catch(err=>{console.error("Error fetching users:", err);})
    return ()=>{return false}
    } ,[])

    let handleChange = (e)=>{
        let filter = users.filter(user => user.name.toLowerCase().includes(e.target.value))
        setFiltredUser(filter)
    }

  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <h1 style={{color:'#00d0ad'}}>Search For a User:</h1>
        <input onInput={handleChange}  style={{borderRadius:'20px',height:'20px',width:'300px',padding:'8px',borderColor:'#00d0ad'}} placeholder='Tape a name...'/>
      {filtreduser.map(
        user => 
        <h3 style={{color:'#00d0ad'}} key={user.id}>{user.name}</h3>)}
    </div>
  )
}

export default UserList
