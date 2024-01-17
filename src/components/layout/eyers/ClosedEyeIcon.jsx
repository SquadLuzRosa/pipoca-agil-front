import React from 'react';

const ClosedEyeIcon = ({onClick}) => (
    <div onClick={(e) => { e.stopPropagation(); onClick(); }}>
        <img src="/closeEyer.svg" alt="Closed Eye" style={{ marginLeft: '5px', cursor: 'pointer' }} />
    </div>
);

export default ClosedEyeIcon;
