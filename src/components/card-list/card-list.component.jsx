import React from 'react';

import { Card } from '/Users/evi-edor/Desktop/reactcoding/monsters-rolodex/src/components/card/card.component.jsx';

import '/Users/evi-edor/Desktop/reactcoding/monsters-rolodex/src/components/card-list/card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))
        }
    </div>
);
