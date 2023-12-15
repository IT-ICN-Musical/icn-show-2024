import React from "react";
import Details from "../components/Details";

const text: React.ReactNode = (
  <p className="text-md">
    The island of Bali is known as the “Island of the Gods” because of its
    beautiful nature and strong religious traditions. However, only few know the
    truth behind that name and the kingdom from whence the name originated.
    Hundreds of years ago, a grave disaster struck the island and crippled the
    entire realm of Wanekeling Kalianget. So devastating was the calamity that
    the king himself fell into a state of despair. It was as if the gods had
    left the people of Bali to fend for themselves.
    <br />
    <br />
    However, out of the ruins of the westernmost village of the island, rose a
    young man who refused to surrender to the vast hopelessness. His decision
    led to an eventful encounter with a woman after his own heart and a
    kingsguard that would change his fate—and ultimately the entire
    island—forever. Would the young man eventually succeed in restoring the hope
    that was lost in the catastrophe? What kind of end would befall the kingdom?
    And would the gods finally turn their gaze upon Bali once more?
    <br />
    <br />
    This is the story of mankind in a paradise abandoned by the gods.
  </p>
);

export default function page() {
  return <Details name="nirwata" text={text} />;
}
