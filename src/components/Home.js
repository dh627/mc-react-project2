import { useState, useEffect } from "react";
import UserList from './UserList';

const Home = () => {
    const [users, setUsers] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data');
                }
                return res.json()
            })
            .then((data) => {
                setUsers(data);
                setIsPending(false);
                console.log(users);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])
    return ( 
        <div className="home">
            { isPending && <div>Loading...</div>}
            { users && <UserList users={users}/> }
        </div>
     );
}
 
export default Home;