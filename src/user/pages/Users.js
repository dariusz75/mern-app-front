import React, { useEffect, useState } from 'react';

import { useHttpClient } from '../../shared/hooks/useHttpClient';

import UserList from '../components/UserList';
import ErrorModal from '../../shared/components/uIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/uIElements/LoadingSpinner';

const Users = () => {
  const [loadedUsers, setLoadedUsers] = useState(false);
  const { isLoading, isError, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users'
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };

    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={isError} onClear={clearError} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UserList users={loadedUsers} />}
    </>
  );
};

export default Users;
