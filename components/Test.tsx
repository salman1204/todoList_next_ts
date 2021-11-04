import { useContext } from 'react';
import { modalContext } from '../context/ContextProvider';
const Test = () => {
    const {modal, handleModal} = useContext(modalContext);
    
    return (
        <div>
           <button onClick={handleModal}>Test</button>
        </div>
    );
}

export default Test;

