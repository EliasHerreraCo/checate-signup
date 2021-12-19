import { useState, useEffect } from "react";

const useForm = () => {
    const [values, setValues] = useState ({
        nombre: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const [errors, setErrors] = useState({});

    const cambioValues = evento => {
        const {name, value} = evento.target;
        setValues ({
            ...values,
            [name]: value
        });
    };

    const submit = evento => {
        evento.preventDefault(); 
    };

    return { cambioValues, values, submit };
};

export default useForm;
