import React from "react";
import Details from "../components/Details";

const text: React.ReactNode = (
  <p className="text-md">
    Inspired by a renowned Torajan folktale ‘Batingna Lebonna’, Lakonna is a
    story about choices. It is a tale of pursuit; a hunt for glory; a search for
    happiness.
    <br />
    <br />
    Centuries ago, among the mountains that ornamented Tana Toraja, stood a
    village under the ruling of its wise leader. The leader had two sons whom he
    loved dearly. The firstborn, Arrang, was a charming man admired by not only
    the villagers, but also by Malitta, his long-time friend. Witnessing
    Arrang’s success, the younger son of the two, Bayo, felt unloved by the
    people who often compared him to his older brother. Despite his
    insecurities, he had Tinuwu, his childhood friend who always tried to cheer
    him up.
    <br />
    <br />
    As time went by, the village leader grew old and his body weakened. As a
    result, Arrang was chosen to take his father’s place in leading the village.
    His life soared to even greater heights when he met the love of his life,
    Tanoana. Their devoted love for each other was so great that they made a vow
    to always be together in life and in death. It seemed as if Arrang’s life
    couldn’t be any more perfect. However, with jealousy looming in the shadows,
    an ill-fated choice would change the course of his life, and of the people
    around him, forever.
  </p>
);

export default function page() {
  return <Details name="lakonna" text={text} />;
}
