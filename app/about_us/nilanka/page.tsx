import React from 'react';
import Details from '../components/Details';

const text: React.ReactNode =
(
    <p className='text-md'>
        The aftermath of a civil war in the late nineteenth century saw the emergence of various family groups of the Batak tribe in North Sumatra.
        A kingdom in the East is home to Arta, the crown prince, whose leadership style has always been questioned by the people. Deemed spineless and weak, 
        Arta loses confidence each day closer to his coronation despite constant reassurance from his doting sister Manik.
        Their fierce uncle, Kareang, is a visionary with an ambitious plan for the kingdom. As a wise temporary ruler, his plan is catalysed by Hasea, 
        a royal physician, who is captivated by the king’s charm.
        <br/><br/>
        Across the forest stands the kingdom of the West, led by Batara, who is known for his unrivaled wisdom. Greatly respected by his people, 
        the only person whom he cannot seem to get through to is his beloved daughter, Nihita.
        <br/><br/>  
        Restricted by the expectations of being a graceful princess, Nihita longs to break free and prove her worth to lead the kingdom as an equal. 
        Yet, her father hardly even lets her out of the palace walls.
        A retelling of the Batak folklore 'Dayang Bandir and Sandean Raja', Nilanka chronicles the characters' intertwined journey in fighting for their own purpose. 
        When a decision goes wrong, one step could change the course of their lives - forever.
    </p>
)

export default function page() {
  return (
    <Details name="nilanka" text={text} />
  );
}
