import PropTypes from 'prop-types';

const Friend = ({ isOnline, avatar, name }) => {
  return (
    <div>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name + ' avatar'} width="48" />
      <p class="name">{name}</p>
    </div>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
