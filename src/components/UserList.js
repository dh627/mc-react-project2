import { Link } from "react-router-dom";

const UserList = ({ users }) => {
    return ( 
        <div className="user-list">
            <h2>Users</h2>
            {users.map((user) => (
                <div className="user-preview" key={user.id}> 
                    {/* <a href="/user"><h2>{user.name}</h2></a> */}
                    <Link to="/user" state = {{ from: "Hello" }}><h2>{user.name}</h2></Link>
                    <p>{user.address.city}</p>
                </div>
            ))}
        </div>
     );
}
 
export default UserList;