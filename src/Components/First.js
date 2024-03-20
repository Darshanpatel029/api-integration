import React, { useState } from "react";
import { useEffect } from "react";


const First = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => setUsers(data)).catch(error => console.error('Error Fetching user:', error)
        );
    }, []);
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">UserId</th>
                        <th scope="col">Todos</th>

                    </tr>

                </thead>



                {users.map(user => <div className="container">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td >{user.userId}</td>
                                <td>{user.title}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>)}
            </table>



        </div>
    )

};
export default First;