import React from 'react';
import { add, multiply } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Shoes = () => {
    const first = 10;
    const second = 50;
    const total = multiply(first, second)
    const sum = add(first, second)
    return (
        <div>
            <h3>This is shoes components</h3>
            <p>Result: {total}</p>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default Shoes;