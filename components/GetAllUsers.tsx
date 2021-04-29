import React,{FC} from 'react';
import { useAllUsersQuery } from '../generated/graphql';


const GetAllUsers: FC = () => {
  const { data, loading, error } = useAllUsersQuery();

  if (loading  || !data) return <p>Loading data...</p>;
  if (error) return <p>Oh no users Found.. {error.message}</p>;
  console.log({data})
  return (
    <div>
      <p>There are {data.users.length} users(s) in the database:</p>
      <ul>
        { data.users.map((user) => (
          <li key={user.id}>{user.name}  {user.id}  {user.email } {user.image}  </li>
        ))}
      </ul>
    </div>
  );
};
export default GetAllUsers;
