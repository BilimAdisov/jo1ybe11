import {MdArrowBackIosNew} from 'react-icons/md'
import { FC } from 'react'
import {GrClose} from 'react-icons/gr'
import { sizeClothes } from '../../COMMON/moks'

export const Cart:FC<any> = ({toggleDrawer, amount, setAmount, chooseSize, setChooseSize }:any):JSX.Element => {

  // orderItem.map((elem:any) => console.log(elem))

  return (
    <>
    <div className='cart'>
      <div className="cart-wrapper">
        <button className='back-btn' onClick={() => toggleDrawer(false)}> <MdArrowBackIosNew size={40}/> Продолжить покупки</button>
        <div className="products">
            <div className="if-none">
              <h1>Мои покупки</h1>
            </div>
            <div className="things">
              <div className="image">
                <img src="https://cdn.jolybell.com/images/rjM38ixualwwCmQ.webp?width=566&height=540&quality=90" alt="" />
                <span className='delete-things'>
                  <GrClose size={10} className='delete-btn'/>
                </span>
              </div>
              <div className="things-info">
                <h4>Вышиванка Ромб</h4>
                <p>размер:</p>
                <div className="things-size">
                  {
                    sizeClothes.map((elem:any) => (
                      <button className={chooseSize === elem.size ? 'active-btn' : ''} key={elem.id} onClick={() => setChooseSize(elem.size)}>{elem.size}</button>
                    ))
                  }
                </div>
                <p>количество:</p>
                <div className="things-amount">
                  <input type="button" value={amount}/>
                  <button onClick={() => (setAmount(amount+1))}>+</button>
                  <button onClick={() => (amount === 1 ? '' : setAmount(amount-1))}>---</button>
                </div>
                <span className='things-coast'>70.38 USD</span>
              </div>
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