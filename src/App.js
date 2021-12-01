import './App.scss';

// Task 1 Profile
import Profile from './components/Profile/Profile';
import user from './data/user.json';

// Task 2 Statistics
import Statistics from './components/Statistics/Statistics';
import stats from './data/data.json';

// Task 3 Friends
import FriendsList from './components/FriendList/FriendList';
import friends from './data/friends.json';

//  Task 4 Transactions
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
