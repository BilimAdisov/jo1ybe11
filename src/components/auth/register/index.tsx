import { useNavigate } from "react-router-dom"


export const RegisterComponent = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="register">
                <div className="reg-wrapper">
                    <h1>регистрация</h1>
                    <div className="input-reg">
                        <input type="text" placeholder="name" className="inp-name"/>
                        <input type="text" placeholder="login" className="inp-login"/>
                        <input type="text" placeholder="password" className="inp-password"/>
                        <input type="text" placeholder="password repeat" className="inp-password-repeat"/>
                    </div>
                    <div className="btn-reg">
                        <button className="log-up">Зарегистрироваться</button>
                        <div className="forgot">
                            <button className="exist-account" onClick={() => navigate('/authorization')}>Уже есть аккаунт</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}