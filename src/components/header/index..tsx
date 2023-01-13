import  { FC } from 'react'
import { BiUser,BiCart } from 'react-icons/bi'
import { IPropsHeader } from '../../COMMON/types/header/intex'
import { useNavigate } from 'react-router-dom'
import { categoryMenu } from '../../COMMON/moks'
import './header.scss'
import Logo from '../../assets/image/logo.svg'

export const Header:FC<any> = ({toggleDrawer, setPath, setPaginatNone}:any):JSX.Element => {


    const navigate = useNavigate()

  return (
    <>
    <header>
        <div className="logo">
            <div className="logo-container">
                <div className="header-leftstrip"></div>
                    <img src={Logo} alt="img alt" onClick={() => (navigate('/'),setPaginatNone(false))}/>
                <div className="header-rightstrip"></div>
            </div>
        </div>
        <div className="header">
            <div className="header-container">
                <div className="header-list">
                    <ul>
                            {
                                categoryMenu.map(obj => <li key={obj.id}>
                                    <a onClick={() => (
                                        navigate(`${obj.path}`), setPath(`${obj.path}`),setPaginatNone(true)
                                    )}>{obj.rus}</a>
                                </li>)
                            }
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Ваш заказ</a>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="under-list">
                <ul>
                    <li>
                        <a href="#">РУС</a>
                    </li>
                    <li>
                        <a href="#">USD</a>
                    </li>
                    <li>
                        <a href="#">
                            <BiUser className='user-icon'/>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => toggleDrawer(true)}> <BiCart className='cart-icon' /> 0 USD</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    </>
  )
}
