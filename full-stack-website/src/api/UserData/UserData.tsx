import { useState, useEffect } from 'react';
import axios from 'axios';

export const UserData = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/userAuth/fetchUserName`)
          .then(res => setUsername(res.data))
          .catch(err => console.log(err))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUserData();
  }, [username])

  return {
    username
  }
}