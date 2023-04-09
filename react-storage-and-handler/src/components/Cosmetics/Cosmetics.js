import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add(first, second)

    // const cosmetics = [
    //     {
    //       "id": "641ebf2c04782c9a1c2b5e79",
    //       "price": 80,
    //       "name": "Peck Andrews"
    //     },
    //     {
    //       "id": "641ebf2c384e0635548a090c",
    //       "price": 214,
    //       "name": "Sharlene Mayo"
    //     },
    //     {
    //       "id": "641ebf2cbbc2959ef5edbcdc",
    //       "price": 181,
    //       "name": "Lana Elliott"
    //     },
    //     {
    //       "id": "641ebf2cd4a4032853b61e69",
    //       "price": 256,
    //       "name": "Blackwell Alford"
    //     },
    //     {
    //       "id": "641ebf2ccb47cbff3cabac43",
    //       "price": 400,
    //       "name": "Mann Harding"
    //     },
    //     {
    //       "id": "641ebf2c7ea721d10a56a8da",
    //       "price": 398,
    //       "name": "Jackson Dotson"
    //     },
    //     {
    //       "id": "641ebf2c602fcf21165222cb",
    //       "price": 417,
    //       "name": "Mccarty Mclean"
    //     }
    //   ]
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    const total = getTotal(cosmetics)
    return (
        <div>
            <h3>Welcome to my cosmetics store</h3>
            <p>Money Needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    cosmetic={cosmetic}
                    key={cosmetic.id}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;