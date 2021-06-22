import { Link } from 'umi';
import { useState } from 'react'

export default function User() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    let url = "/api/users"

    // setUsers(mockData)
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log("response ", response)
        setUsers(response)
      });
  }

  return (
    <div>
      User: jayChou, leehong <br />
      <Link to="/list">go to list</Link> <br />

      <button onClick={fetchUsers}>get users</button> <br />
      {
        users.map((user, index) => <li key={index}>姓名：{user.name}, 年龄: {user.age}</li>)
      }
    </div>
  );
}


const mockData = [
  { name: '李健', age: 32 },
  { name: '梅西', age: 34 },
  { name: 'C罗', age: 36 },
  { name: '莱万多夫斯基', age: 32 },
]