const UserList = ({ users }) => {
    return ( 
        <div className="user-list">
            <h2>Users</h2>
            {users.map((user) => (
                <div className="user-preview" key={user.id}> 
                    <a href=""><h2>{user.name}</h2></a>
                    <p>{user.address.city}</p>
                </div>
            ))}
        </div>
     );
}
 
export default UserList;