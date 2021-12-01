import PropTypes from 'prop-types';
import s from './FriendList.module.scss';
import React from 'react';

const Friend = ({ isOnline, avatar, name }) => {
  return (
    <React.Fragment>
      <span
        className={`${s.status} ${
          isOnline ? s.status__online : s.status__offline
        }`}
      ></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </React.Fragment>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
