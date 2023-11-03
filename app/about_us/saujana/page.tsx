import React from 'react';
import Details from '../components/Details';

const text: React.ReactNode =
(
    <p className='text-md'>
        In the fog of war of the constant moral battles that are waged amongst us these days, we often forget those that are left behind...
        <br/><br/>
        The quintessential modern-day teenager: rough, gruff and a bit hypocritical. The epitome of modern-day parenting: sincere, 
        semi-progressive and somewhat confused about what is happening these days. Between all the fighting and bereaving, there are those 
        who are left alone, who try to fix this house built on sand.
        <br/><br/>
        ICN 2023 tells the story of those that we leave behind in the fight for righteousness through a modern-day Indonesian lens, 
        and examines how those affected get on with life and try to stay strong in an increasingly hostile and divisive world.
    </p>
)

export default function page() {
  return (
    <Details name="saujana" text={text} />
  );
}
