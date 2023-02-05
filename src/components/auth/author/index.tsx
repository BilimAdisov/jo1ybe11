import { useNavigate } from "react-router-dom"


export const Authorization = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="register">
                <div className="author-wrapper">
                    <h1>авторизация</h1>
                    <div className="inp-author">
                        <input type="text" placeholder="login" className="login"/>
                        <input type="text" placeholder="password" className="password"/>
                    </div>
                    <div className="btn-author">
                        <button className="active-author">авторизоваться</button>
                        <div className="forgot">
                            <button className="forgot-password">Забыл пароль?</button>
                            <button className="reg-link" onClick={() => navigate('/register')}>Нет аккаунта</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}