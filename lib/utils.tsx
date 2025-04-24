
import { useState } from 'react';


export const handlePromise = async (asyncFunction: any) => {
  try {
    const data = await asyncFunction;
    return [data, null];
  } catch (e) {
    return [null, e];
  }
};




export const useNumericInput = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (inputText: any) => {
    const numericValue = parseFloat(inputText.replace(/[^0-9]/g, ''));
    if (!isNaN(numericValue)) {
      setValue(numericValue);
    } else {
      setValue(0);
    }
  };

  const formattedValue = value ? `₦ ${value.toLocaleString('en-US')}` : '';
  return {
    value, 
    formattedValue,
    handleChange,
  };
};
