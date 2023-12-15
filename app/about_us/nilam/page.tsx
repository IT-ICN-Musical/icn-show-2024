import React from "react";
import Details from "../components/Details";

const text: React.ReactNode = (
  <p className="text-md">
    Nilam tells the adventure of Malin Kundang, a young fisherman whose dream
    was to sail the seas and find riches in the lands yonder. The departure of
    Malin's father years ago had made his mother, Mirah, afraid of letting Malin
    go to pursue his dreams, of losing another piece of her heart, leaving this
    mother and son in a never-ending dispute. With the help of his childhood
    friend, Delima, and the power of a mysterious magical relic, Malin's
    anchored dream finally set sail.
    <br />
    <br />
    Malin started from the bottom as a ship crew under Bara Abu's tutelage, a
    merchant turned Malin's best friend. He met Rijang, Bara's simple-minded
    assistant, Galih, Bara's boss and captain, and Mustika, Galih's daughter,
    and quickly rose through the ranks, ending up as the right-hand man of the
    captain, and also the right man for Mustika's heart. However, every action
    has its consequences, and every secret has its price. Would all of Malin's
    dreams come true, and at what cost?
  </p>
);

export default function page() {
  return <Details name="nilam" text={text} />;
}
