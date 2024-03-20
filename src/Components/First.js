import React, { useState } from "react";
import { useEffect } from "react";


const First = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => setUsers(data)).catch(error => console.error('Error Fetching user:', error)
        );
    }, []);
    return (
        <div>

            {users.map(user => <div key={user.id}>{user.title}</div>)}
        </div>
    )

};
export default First;