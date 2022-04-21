import { useState, useEffect, useContext } from "react";
import UserList from './UserList';
import { UsersContext } from './App';

const Home = ({ users, isPending }) => {
    const contextData = useContext(UsersContext);

    return ( 
        <div className="home">
            {/* { isPending && <div>Loading...</div>} */}
            {/* { users && <UserList users={users}/> } */}
            { contextData && <UserList/> }
        </div>
     );
}
 
export default Home;