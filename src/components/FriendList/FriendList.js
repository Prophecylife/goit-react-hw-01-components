import Friend from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <Friend
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
            id={friend.id}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
