import { useState, useEffect } from 'react';
import axios from 'axios';

export const UserData = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    let isMounted = true; // variable to check if the component is still mounted

    const fetchUserData = async () => {
      try {
        await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/userAuth/fetchUserName`)
          .then(res => {
            if (isMounted) {
              setUsername(res.data)
            }
          })
          .catch(err => console.log(err))
      } catch (error) {
        alert(error.message)
      }
    }

    fetchUserData();

    return () => {
      isMounted = false; // set isMounted to false to cancel the API call
      setUsername(() => ''); // reset the state when the component unmounts or when the dependency array changes
    };
  }, [])

  return {
    username
  }
}