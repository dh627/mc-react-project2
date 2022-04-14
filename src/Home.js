import { useState, useEffect } from "react";
import UserList from './UserList';

const Home = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setUsers(data);
            console.log(users);
        })
    }, [])
    return ( 
        <div className="home">
            { users && <UserList users={users}/> }
        </div>
     );
}
 
export default Home;