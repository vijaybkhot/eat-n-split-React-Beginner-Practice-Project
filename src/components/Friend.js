import { Button } from "./Button";

export function Friend({ friend, onSelectClick, selectedFriend }) {
  return (
    <li
      className={
        selectedFriend && friend.id === selectedFriend.id ? "selected" : ""
      }
    >
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} $ {Math.abs(friend.balance)}.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you $ {Math.abs(friend.balance)}.
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      {selectedFriend && friend.id === selectedFriend.id ? (
        <Button onClick={() => onSelectClick(friend)}>Close</Button>
      ) : (
        <Button onClick={() => onSelectClick(friend)}>Select</Button>
      )}
    </li>
  );
}
