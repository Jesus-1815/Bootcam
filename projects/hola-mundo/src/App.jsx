import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName} // Agregar una key única
          userName={userName}
          name={name}
          initialIsFollowing={isFollowing}
        />
      ))}
    </section>
  );
}
