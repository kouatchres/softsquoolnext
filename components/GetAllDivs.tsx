import React, { FC } from 'react';
import { useAllDivisionsQuery } from '../generated/graphql';
import CircularProgress from "@material-ui/core/CircularProgress"

const GetAllDivs: FC = () => {
  const { data, loading, error } = useAllDivisionsQuery();

  if (loading || !data) return <p>Loading data...<CircularProgress /></p>;
  if (error) return <p>Oh no regions Found.. {error.message}</p>;
  console.log({ data })
  return (
    <div>
      <p>There are {data && data.divisions.length} Divisions(s) in the database:</p>
      <ul>
        {data && data.divisions.map((division) => (
          <li key={division.id}>  {division.id}  {division.divisionName}  {division.divisionCode}   </li>
        ))}
      </ul>
    </div>
  );
};
export default GetAllDivs;
