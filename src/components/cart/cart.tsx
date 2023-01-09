import {MdArrowBackIosNew} from 'react-icons/md'
import { FC } from 'react'
import './cart.scss'
import { IPropsCart } from '../../COMMON/types/cart'

export const Cart:FC<IPropsCart> = ({toggleDrawer}:IPropsCart):JSX.Element => {

  return (
    <>
    <div className='cart'>
      <div className="cart-wrapper">
        <button className='back-btn' onClick={() => toggleDrawer(false)}> <MdArrowBackIosNew size={40}/> Продолжить покупки</button>
        <div className="products">
            <div className="if-none">
              <h1>Мои покупки</h1>
            </div>
        </div>
        <div className="promocode">
            <h3>Промокод</h3>
          <div className="press-promo">
            <input type="text" className='inp'/>
            <button className='btn'>применить</button>
          </div>
        </div>
        <div className="finally">
          <div className='total-price'>
            <h3>итоги:</h3>
            <h2>0 USD</h2>
          </div>
          <button className='finall-btn'>Оформить заказ</button>
        </div>
      </div>
    </div>
    </>
  )
}