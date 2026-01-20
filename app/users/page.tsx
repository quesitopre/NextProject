import { table } from "node:console";

interface User{
    id: number;
    name: string;
    email:string;
}

const UsersPage = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
         { next: { revalidate: 10} }); //refresh data every 10sec onn backend.
    const users: User[] = await res.json(); // await the response from the user 

  return (
    <> 
        <h1>Users</h1>
        <table className='table table-border'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user =><tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td></tr>)}
            </tbody>
        </table>
    </>

  )
}

export default UsersPage