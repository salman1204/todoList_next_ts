import React, { createContext, useState } from 'react'

interface StarContext {
    star: boolean;
    handleStar ?: () => void;
  }
  
  const defaultState = {
    star: false,
  };

export const starContext = createContext<StarContext>(defaultState)

const StarListProvider = (props) => {
  const [star, setStar] = useState<boolean>(false)
  const handleStar = () => {
    setStar(!star)
  }

    return (
        <starContext.Provider value={{star,handleStar}}>
        {props.children}
      </starContext.Provider>
    );
}

export default StarListProvider;