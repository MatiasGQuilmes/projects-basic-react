import {useState} from 'react';


export const useShow = (initialState) => {


    const [show, setShow] = useState(initialState);

    const handLeShowMessage = () => setShow(!show);

    return {show, handLeShowMessage}

}


