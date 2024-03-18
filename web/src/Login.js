import React, {useState, useEffect} from 'react';
import axios from 'axios';

const baseURL = "http://localhost:10082/api/login";

export const Login = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => (
      console.log(response.data),
      setUsers(response.data)
    ));
  }, [])

  if (!users) return null;

  const show_employees_list = users.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.mail_address}</td>
        <td>{user.name}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <tr>
            <th>ID</th>
            <th>メールアドレス</th>
            <th>名前</th>
        </tr>
        {show_employees_list}
      </table>
    </>
  )
}
