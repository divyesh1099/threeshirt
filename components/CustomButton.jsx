import React from 'react';     
import state from '../store';
import { useSnapshot } from 'valtio';
const CustomButton = (propertiesObject) => {
    const snap = useSnapshot(state);
    const generateStyle = (propertiesObject) => {
        if(propertiesObject.type === 'filled'){
            return {
                backgroundColor: snap.color,
                color: '#fff'
            }
        }
    }
  return (
    <button onClick={propertiesObject.handleClick} className={`px-2 py-1.5 flex-1 rounded-md ${propertiesObject.customStyles}`} style={generateStyle(propertiesObject.type)}>{ propertiesObject.title }</button>
  )
}

export default CustomButton