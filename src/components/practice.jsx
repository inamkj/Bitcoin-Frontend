import React, { useState } from 'react'

function Practice() {
    const [count,setcount]=useState(0);
    function handleclick(){
        setcount(count+1);
    }
    
      
        return (
            <>
            <button onClick={handleclick}>
                Clicked {count} times
            </button>
            </>
        );
}


export default Practice;