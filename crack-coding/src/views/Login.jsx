import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import '../syles/login.css'
// import { Context } from '../js/store/appContext.js';
// import { useNavigate } from 'react-router-dom';
const Login = () => {

    // const { store, actions } = useContext(Context)

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    //   });

    // const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    // };

    // const handleRegister = () => {
    //     const { name, email, password } = formData;
    //     actions.register(name, email, password);
    //   }; 

    return (
        <div className='login-container'>
            <div className='back-home'>
                <a href='/'>
                    <FaLongArrowAltLeft />
                    <span>Volver a Inicio</span>

                </a>
            </div>
            <div>
                <h2>Login</h2>
                <h3>Test store: {store.personas}</h3>
                <form>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <button onClick={handleRegister}>Register</button>
            </div>

        </div>
    );
};

export default Login;