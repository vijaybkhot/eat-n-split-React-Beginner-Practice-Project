import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriendSubmit }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !imageUrl) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: name.trim(),
      image: `${imageUrl}?=${id}`,
      balance: 0,
    };
    onAddFriendSubmit(newFriend);
    setName("");
    setImageUrl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter friend's name"
        required
      />
      <label>🌄 Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL"
        required
      />

      <Button>Add</Button>
    </form>
  );
}
