import React from 'react';
import Mainpart from './Mainpart';

const MainParts = ({mainParts}) => {
    return (
        <div>
            {
                mainParts.map(mainPart=><Mainpart key={mainPart.id} mainPart={mainPart}></Mainpart>)
            }
        </div>
    );
};

export default MainParts;