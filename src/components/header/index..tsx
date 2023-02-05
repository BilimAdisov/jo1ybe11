import  { FC } from 'react'
import { BiUser,BiCart } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { categoryMenu } from '../../COMMON/moks'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../../assets/image/logo.svg'
import { IPropsHeader } from '../../COMMON/types/header/intex'

export const Header:FC<IPropsHeader> = ({toggleDrawer, setPath, setPaginatNone, setCurrentPage, toggleDrawer2, orderItems }:IPropsHeader):JSX.Element => {


    const navigate = useNavigate()

    let totalPrice = 0;

    for (const item of orderItems) {
        let allprice = item.price * item.amount
        totalPrice += allprice;
    }
    console.log(orderItems)

  return (
    <>
    <header>
        <div className="logo">
            <div className="logo-container">
                <div className="header-leftstrip"></div>
                <div className="main-logo">
                    <img src={Logo} alt="img alt" onClick={() => (navigate('/'),setPaginatNone(false),setCurrentPage(1))}/>
                </div>
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
                                        navigate(`${obj.path}`), setPath(`${obj.path}`),setPaginatNone(true),setCurrentPage(1)
                                    )}>{obj.rus}</a>
                                </li>)
                            }
                            <li>
                                <a >FAQ</a>
                            </li>
                            <li>
                                <a >Ваш заказ</a>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="under-list">
                <ul>
                    <li>
                        <a >РУС</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/authorization')}>
                            <BiUser className='user-icon' size={20}/>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => toggleDrawer(true)}> <BiCart className='cart-icon'/>{totalPrice} USD</a>
                    </li>
                    <li>
                        <GiHamburgerMenu color='white' size={30} className='burger' onClick={() => toggleDrawer2(true)}/>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    </>
  )
}
