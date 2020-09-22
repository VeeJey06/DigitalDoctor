import React from 'react';
import Dictaphone from '../Dictaphone/Dictaphone'

const Dictaphones = () => {
    const list = [1,2,3,4]
    return (
        <div>
            {list.map(d => <Dictaphone key={d}/>)}
        </div>
    )
}

export default Dictaphones;