import Friend from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={s.item} key={id}>
          <Friend isOnline={isOnline} avatar={avatar} name={name} id={id} />
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
