import { useState, useEffect, createContext, useContext } from "react";

const UsersContext = createContext();

function UsersProvider(props) {
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
          })
          .catch(err => {
              console.log(err.message);
          })
  }, [])

  return (
    //   <UsersContext.Provider value={{ contextUsers: users }}>
    <UsersContext.Provider value={{ contextUsers: users }}>
        {props.children}
    </UsersContext.Provider>
  )

}

export { UsersContext, UsersProvider};
