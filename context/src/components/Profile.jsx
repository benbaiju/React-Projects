import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const{user} = useContext(UserContext)

    if(!user) return <h1>Not logged in</h1>
  return (
    <div>
      Profile : {user.username}
    </div>
  )
}

export default Profile
