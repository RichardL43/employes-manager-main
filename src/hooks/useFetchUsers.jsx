import { useEffect, useState } from "react"

export const useFetchUsers = () => {
    const [users, setUser] = useState([]);
    const getUser = () => {
    fetch('http://localhost:3005/users')
        .then((resp) => resp.json())
        .then((data) => {
            // console.log(data)
            setUser(data)
        });
    }
    
    useEffect(() => {
        getUser()
    }, []);
    
  return users;
}
