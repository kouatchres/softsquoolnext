import React, { FC } from 'react';
import { useAllRegionsQuery } from '../../../generated/graphql';
import CircularProgress from '@material-ui/core/CircularProgress';

const GetAllRegions: FC = () => {
  const { data, loading, error } = useAllRegionsQuery();

  if (loading || !data)
    return (
      <p>
        Loading data...
        <CircularProgress />
      </p>
    );
  if (error) return <p>Oh no regions Found.. {error.message}</p>;
  console.log({ data });
  return (
    <div>
      <p>There are {data?.regions.length} regions(s) in the database:</p>
      <ul>
        {data?.regions.map(region => (
          <li key={region?.id}>
            {region?.regName} {region?.id} {region?.regCode}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GetAllRegions;
