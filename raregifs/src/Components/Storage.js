// import React, { useEffect, useState } from 'react';
import React from 'react';
import StorageList from './StorageList'

function Storage({ 
      currentUser, 
 }) {
   
  return (
      <div className="storage" >
        <StorageList
          currentUser={currentUser} 
        />
      </div>
  );
}

export default Storage;