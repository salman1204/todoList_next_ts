import { useContext } from 'react';
import { modalContext } from '../context/ModalProvider';
const Test = () => {
    const {modal, handleModal} = useContext(modalContext);
    
    return (
        <div>
           <button onClick={handleModal}>Test</button>
        </div>
    );
}

export default Test;

