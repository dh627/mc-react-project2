import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { UsersContext } from './App';

const User = ({ users }) => {
    const contextData = useContext(UsersContext);
    const { id } = useParams();

    const user = contextData.filter(user => user.id === parseInt(id));

    return ( 

        <div>
            <p>{user[0].name}</p>
            <p>{user[0].username}</p>
            <p>{user[0].email}</p>
        </div>
     );
}
 
export default User;