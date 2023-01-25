import { useState } from 'react'

export const useForm = (initialState, refForm) => {

    
    const [state, setState] = useState(initialState);

    const handleChange = ({target: {name, value}}) => {
        setState({
            ...state,
            [name]:value
        })
    }

    const handleReset = () => {
        setState(initialState)
        refForm.current?.reset() //el signo de pregunta, pregunta si ya existe el formulario y si existe aplica el reset

    }

  return [state, setState, handleChange, handleReset];
}


