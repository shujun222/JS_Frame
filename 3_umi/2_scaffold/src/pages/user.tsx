import {Link} from 'umi';

export default function User() {
  return (
    <div>
      User: jayChou, leehong <br/>
      <Link to="/list">list</Link> <br/>
      <button onClick={fetchUsers}>click me</button>
    </div>
  );
}

const fetchUsers = ()=> {
    let url = "/api/users"
    fetch(url)
    .then(response => response.json)
    .then(response => {
        console.log("response ", response);
        
    });
}
