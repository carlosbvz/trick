import React from "react";

type Props = {};

export default function CreateProfile({}: Props) {
  return (
    <div>
      <input type="text" placeholder="Enter your nickname" />
      <button type="submit">Submit</button>
    </div>
  );
}
