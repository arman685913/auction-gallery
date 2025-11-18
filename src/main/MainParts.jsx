import React from 'react';
import Mainpart from './Mainpart';

const MainParts = ({mainParts, handleHeartBtn}) => {
    return (
        <div>
            {
                mainParts.map(mainPart=><Mainpart handleHeartBtn={handleHeartBtn} key={mainPart.id} mainPart={mainPart}></Mainpart>)
            }
        </div>
    );
};

export default MainParts;