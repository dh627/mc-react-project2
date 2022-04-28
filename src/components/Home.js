import { useState, useEffect, useContext } from "react";
import UserList from './UserList';
// import { UsersContext } from './App';
import { UsersContext } from './UsersContext'

const Home = ({ users, isPending }) => {
    const contextData = useContext(UsersContext);
    console.log(contextData.contextUsers);

    return ( 
        <div className="home">
            {/* { isPending && <div>Loading...</div>} */}
            {/* { users && <UserList users={users}/> } */}
            { contextData.contextUsers && <UserList/> }
        </div>
     );
}
 
export default Home;