import { useLocation, useNavigate } from "react-router-dom"
import { Authorization } from "./author"
import { RegisterComponent } from "./register"
import Logo from '../../assets/image/logo.svg'


export const LayoutComponent = () => {

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <div className="auth">
            <img src={Logo} alt="Logo" onClick={() => navigate('/')} className='logo'/>
                {
                    location.pathname === '/register' && <RegisterComponent/> || location.pathname === '/authorization' && <Authorization/>
                }
            </div>
        </>
    )
}