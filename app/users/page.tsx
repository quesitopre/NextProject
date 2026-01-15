interface User{
    id: number;
    name: string;
}

const UsersPage = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
         { next: { revalidate: 10} }); //refresh data every 10sec onn backend.
    const users: User[] = await res.json(); // await the response from the user 

  return (
    <> 
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p> {/* shows the date when the page was rendered on the server */}
        <ul>
            {users.map(user =><li key={user.id}>{user.name}</li>)}
        </ul>
    </>

  )
}

export default UsersPage