import React from 'react';
import Details from '../components/Details';

const text: React.ReactNode =
(
    <p className='text-md'>
        Pariatur ut nostrud mollit qui ad amet deserunt irure elit. Exercitation aliquip id veniam quis id proident officia culpa ea sit esse ad. 
        Ex do esse elit voluptate sit excepteur aliqua tempor veniam amet velit magna ea laborum. Ea consectetur nulla deserunt laboris laboris elit 
        ea Lorem exercitation cupidatat eiusmod reprehenderit magna.
        <br/><br/>
        Elit qui qui qui do occaecat veniam ad nulla dolore culpa reprehenderit elit laboris Lorem. Anim nulla qui pariatur nulla esse. 
        Dolore amet et cillum commodo ut. Sunt culpa sint sunt anim esse ullamco dolore ad esse sint qui velit occaecat nulla.
        <br/><br/>
        Minim Lorem nisi dolor non laborum voluptate ut aute magna mollit ad ullamco ex. Magna qui aute est mollit officia est consequat cupidatat 
        cupidatat irure culpa ipsum et. Aliqua Lorem Lorem amet veniam irure veniam amet anim excepteur ad ullamco.
    </p>
)

export default function page() {
  return (
    <Details name="nirwata" text={text} />
  );
}
