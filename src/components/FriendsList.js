import { Friend } from "./Friend";

export function FriendsList({ friends, onSelectClick, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectClick={onSelectClick}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
