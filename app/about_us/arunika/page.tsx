import React from 'react';
import Details from '../components/Details';

const text: React.ReactNode =
(
    <p className='text-md'>
        In the early nineteenth century, Batavia was the capital of the trading giant: the Dutch East India Company. Many Dutch traders enslaved native people from different parts of the Indonesian archipelago, giving rise to discrimination and violence within the social hierarchy.
        <br/><br/>
        The vibrant city was home to Anika, a Dutch-Indonesian girl with a big dream, and her down-to-earth mother, Ningsih, who had always advised her to be aware of their social standing. As her Dutch father left before she was born, she became ostracized by her peers--her only friend being a friendly slave girl from the Moluccan village, Deya. One day, they met a new slave boy, Raka, who showed his desire to escape and rebel against the oppression of the Dutch.
        <br/><br/>
        At the same time, the company was facing bankruptcy, which affected the lives of the Dutch traders in Batavia. One of them being Gustaaf, the owner of Deya and Raka. As he was troubled by the situation in Batavia, his old friend and a Dutch officer, Clement, came to Batavia with an attempt to challenge the status quo.
        <br/><br/>
        As the characters’ lives intertwined with each unexpected turn of events, stories were told, the past was revealed, and difficult choices must be made.
    </p>
)

export default function page() {
  return (
    <Details name="arunika" text={text} />
  );
}
