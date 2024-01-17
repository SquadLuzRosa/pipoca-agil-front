import React from 'react';

const OpenEyeIcon = ({ onClick }) => (
  <div onClick={(e) => { e.stopPropagation(); onClick(); }}>
    <img src="/openEyer.svg" alt="Open Eye" style={{ marginLeft: '5px', cursor: 'pointer' }} />
  </div>
);

export default OpenEyeIcon;