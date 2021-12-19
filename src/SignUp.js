import React from 'react'
import useForm from './usarForm';

const SignUp = () => {
    const {cambioValues, values, submit} = useForm();

    return (
        <div className="form-content">
            <form className="form"
            onSubmit={submit}> 
                <h1>¡Bienvenido!</h1>
                <h2>¡Ya casi formas parte de la comunidad!</h2>
                <div className="form-inputs">
                    <label
                    htmlFor="nombre"
                    className="form-label">
                    Nombre
                    </label>
                    <input 
                            id="nombre"
                            type="text"
                            name="nombre"
                            className="form-input"
                            placeholder="Escribe tu nombre"
                            value={values.nombre}
                            onChange={cambioValues}
                    />
                </div>
                <div className="form-inputs">
                    <label
                    htmlFor="email"
                    className="form-label">
                    Correo
                    </label>
                    <input 
                            id="email"
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Escribe tu correo electronico"
                            value={values.email}
                            onChange={cambioValues}
                    />
                </div>
                <div className="form-inputs">
                    <label
                    htmlFor="password"
                    className="form-label">
                    Contraseña
                    </label>
                    <input 
                            id="password"
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Escribe tu contraseña"
                            value={values.password}
                            onChange={cambioValues}
                    />
                </div>
                <div className="form-inputs">
                    <label
                    htmlFor="passwordConfirmation"
                    className="form-label">
                    Confirma la contraseña
                    </label>
                    <input 
                            id="passwordConfirmation"
                            type="password"
                            name="passwordConfirmation"
                            className="form-input"
                            placeholder="Repite tu contraseña"
                            value={values.passwordConfirmation}
                            onChange={cambioValues}
                    />
                </div>
                <div className="form-buttons">
                    <label
                    htmlFor="remind-me"
                    className="remind-me">
                    Recordar
                    </label>
                    <input 
                            id="remind-me"
                            type="checkbox"
                            name="remind-me"
                            className="form-input-remind"/>
                    <button 
                        className="form-input-btn"
                        type="submit">
                        Enviar Registro
                    </button>
                    <span
                        className="form-input-login">
                        ¿Ya tienes una cuenta? <a href="#">Entra aqui</a>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default SignUp
