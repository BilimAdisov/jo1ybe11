import React from 'react'
import './footer.scss'
import { BsInstagram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'
import { categoryMenu } from '../../COMMON/moks'
import { useNavigate } from 'react-router-dom'

export const Footer = ({setPath}:any) => {

    const navigate = useNavigate()

  return (
    <>
    <footer>
        <div className="footer">
            <div className="footer-list">
                <ul>
                    {
                        categoryMenu.map(obj => <li key={obj.id}>
                                <a onClick={() => (navigate(`${obj.path}`), setPath(`${obj.path}`))}>{obj.rus}</a>
                            </li>)
                    }
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="footer-info">
                <div className="link-icons">
                        <div className="jolybell"></div>
                        <div className="instagram">
                            <BsInstagram className='inst-icon'/>
                        </div>
                        <div className="vk">
                            <SlSocialVkontakte className='vk-icon'/>
                        </div>
                </div>
                <div className="info-years">© 2022, JolyBell.com</div>
                <a href="/" className='public-offerta'>Публичная оферта</a>
                <div className="on-right">
                    <div className="email">
                        <h4>E-MAIL:</h4>
                        <h3>support@jolybell.com</h3>
                    </div>
                    <div className="support">
                        <h4>ВРЕМЯ РАБОТЫ СЛУЖБЫ ПОДДЕРЖКИ:</h4>
                        <h3>ПН-ПТ: 9:00 - 21:00</h3>
                    </div>
                    <div className="payway">
                        <h4>ПРИНИМАЕМ К ОПЛАТЕ:</h4>
                        <div className='pay-icons'>
                            <img src="https://jolybell.com/img/footer/visa.png" alt="visa" className='visa'/>
                            <img src="https://jolybell.com/img/footer/wayforpay.png" alt="wayforpay" className='wayforpay'/>
                            <img src="https://jolybell.com/img/footer/mastercard.png" alt="mastercard" className='mastercard'/>
                            <img src="https://jolybell.com/img/footer/privat24.png" alt="privat24" className='privat24'/>
                        </div>
                    </div>
                    <div className="delivery">
                        Доставка по Украине осуществляется службой доставки: Новая Почта.
                        <br />
                        Доставка за границу осуществляется службой доставки: Укр Почта.
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
