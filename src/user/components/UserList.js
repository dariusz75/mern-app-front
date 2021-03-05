import React from 'react';

import './UserList.css';
import Card from '../../shared/components/uIElements/Card';
import UserItem from './UserItem';

const UserList = (props) => {
  const { users } = props;
  if (!users.length) {
    return (
      <div className='center'>
        <Card>
          <h2>No Users found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className='users-list'>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places.length}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
