// import Home from './Home';
// import Navbar from './Navbar';
// import User from './User';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect, createContext, useContext } from "react";

// export const UsersContext = createContext();

// function App() {
//   const [users, setUsers] = useState(null)
//   const [isPending, setIsPending] = useState(true)

//   useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/users')
//           .then(res => {
//               if (!res.ok) {
//                   throw Error('could not fetch data');
//               }
//               return res.json()
//           })
//           .then((data) => {
//               setUsers(data);
//               setIsPending(false);
//               console.log(users);
//           })
//           .catch(err => {
//               console.log(err.message);
//           })
//   }, [])

//   return (
//     <UsersContext.Provider value={users}>
//       <Router>
//         <div className="App">
//           <Navbar/>
//           <div className="content">
//             <Routes>
//               {/* <Route path="/" element={<Home users={users} isPending={isPending}/>}/>
//               <Route path="/user/:id" element={<User users={users}/>}/> */}
//               <Route path="/" element={<Home/>}/>
//               <Route path="/user/:id" element={<User/>}/>}/>
//             </Routes>
//           </div>
//         </div>      
//       </Router>
//     </UsersContext.Provider>
//   );
// }

// export default App;

import Home from './Home';
import Navbar from './Navbar';
import User from './User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from "react";
import { UsersProvider, UsersContext } from './UsersContext';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Home users={users} isPending={isPending}/>}/>
            <Route path="/user/:id" element={<User users={users}/>}/> */}
              <Route path="/" element={<UsersProvider><Home/></UsersProvider>}/>
              <Route path="/user/:id" element={<UsersProvider><User/></UsersProvider>}/>
          </Routes>
        </div>
      </div>      
    </Router>
  );
}

export default App;

