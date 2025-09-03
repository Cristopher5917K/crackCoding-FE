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
        
    </div>
    );
};

export default Login;