// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UsersContext } from './App';

// const UserList = ({ users }) => {
//     const contextData = useContext(UsersContext);

//     return ( 
//         <div className="user-list">
//             <h2>Users</h2>
//             {contextData.map((user) => (
//                 <div className="user-preview" key={user.id}> 
//                     {/* <a href="/user"><h2>{user.name}</h2></a> */}
//                     <Link to={`/user/${user.id}`}><h2>{user.name}</h2></Link>
//                     <p>{user.address.city}</p>
//                 </div>
//             ))}
//         </div>
//      );
// }
 
// export default UserList;

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from './UsersContext';

const UserList = ({ users }) => {
    const contextData = useContext(UsersContext);
    console.log('context data from users list: ' + contextData);

    return ( 
        <div className="user-list">
            <h2>Users</h2>
            {contextData.contextUsers.map((user) => (
                <div className="user-preview" key={user.id}> 
                    {/* <a href="/user"><h2>{user.name}</h2></a> */}
                    <Link to={`/user/${user.id}`}><h2>{user.name}</h2></Link>
                    <p>{user.address.city}</p>
                </div>
            ))}
        </div>
     );
}
 
export default UserList;