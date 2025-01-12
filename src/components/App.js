import { useState } from "react";
import { Button } from "./Button";
import { FriendsList } from "./FriendsList";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function toggleAddFriendForm() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriendSubmit(newFriend) {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelectClick(friend) {
    setSelectedFriend((current) =>
      current && current.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectClick={handleSelectClick}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend onAddFriendSubmit={handleAddFriendSubmit} />
        )}
        <Button onClick={toggleAddFriendForm}>Add Friend</Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
