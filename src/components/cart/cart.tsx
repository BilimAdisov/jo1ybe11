import {MdArrowBackIosNew} from 'react-icons/md'
import { FC, useEffect, useState } from 'react'
import {GrClose, GrProductHunt} from 'react-icons/gr'
import { sizeClothes } from '../../COMMON/moks'
import { IOrderItems, IPropsCart } from '../../COMMON/types/cart'

export const Cart:FC<IPropsCart> = ({toggleDrawer, orderItems, setOrderItems}:IPropsCart):JSX.Element => {

  
  // delete item
  const deleteProduct = (id:any) => {
    setOrderItems(orderItems.filter((product:any) => id !== product.id))
  }
  

  //change size
  const [ cartSize, setCartSize ]:any = useState(null)
  const [ID, setID ] = useState('')

  useEffect(() => {
    if(cartSize) {
      const changeSize = () => {
        if(orderItems.length) {
            let newSizeItem:any = orderItems.find((product:any) => ID === product.id) //obj
            newSizeItem.size = cartSize // change
        }
        setCartSize(null)
      }
      changeSize()
    }
  }, [cartSize])
  
  
  // increament
  const [ plusID, setPlusID ]:any = useState(null)
  const [ itemAmount, setItemAmount ]:any = useState()
  
  useEffect(() => {
    if(plusID) {
      const plus = () => {
        const newPlusAmount:any = orderItems.find((product:any) => plusID === product.id );
        newPlusAmount.amount++
      }
      setItemAmount()
      plus()
      setPlusID(null)
    }
  }, [itemAmount])
  
  

  // decreament
  const [ minusID, setMinusID ]:any = useState(null)
  const [ minusItemAmount, setminusItemAmount ]:any = useState()

useEffect(() => {
  if(minusID) {
    const minus = () => {
      const newMinusAmount:any = orderItems.find((product:any) => minusID === product.id );
      newMinusAmount.amount > 1 ? newMinusAmount.amount-- : console.log()
      
    }
    setminusItemAmount()
    minus()
    setMinusID(null)
  }
}, [minusItemAmount])

  //total price
  let totalPrice = 0;

  for (const item of orderItems) {
    let allprice = item.price * item.amount
    totalPrice += allprice;
  }


  return (
    <>
    <div className='cart'>
      <div className="cart-wrapper">
        <button className='back-btn' onClick={() => toggleDrawer(false)}> <MdArrowBackIosNew size={40}/> Продолжить покупки</button>
        <div className="products">
            <div className="if-none">
              <h1>Мои покупки</h1>
            </div>
            {
              orderItems && (orderItems.map((obj:any, i:number ) => (
                <div className="things" key={obj.id}>
                  <div className="image">
                    <img src={obj.img} alt="amg" />
                    <span className='delete-things' onClick={() => deleteProduct(obj.id)}>
                      <GrClose size={10} className='delete-btn'/>
                    </span>
                  </div>
                  <div className="things-info">
                    <h4>{obj.name}</h4>
                    <p>размер:</p>
                    {obj.size && ( <div className="things-size">
                      {
                        sizeClothes.map((elem:any) => (
                          <button 
                          className={obj.size === elem.size ? 'active-btn' : ''} 
                          key={elem.id} 
                          onClick={() => ( setCartSize(elem.size), setID(obj.id) )}
                          >{elem.size}</button>
                        ))
                      }
                    </div>)}
                    <p>количество:</p>
                    <div className="things-amount">
                      <input type="button" value={obj.amount}/>
                      <button onClick={() => (setPlusID(obj.id),setItemAmount(obj.amount))}>+</button>
                      <button onClick={() => (setMinusID(obj.id), setminusItemAmount(obj.amount))}>---</button>
                    </div>
                    <span className='things-coast'>{obj.price * obj.amount} USD</span>
                  </div>
                </div>
              )))
            } 
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
            <h2>{totalPrice} USD</h2>
          </div>
          <button className='finall-btn'>Оформить заказ</button>
        </div>
      </div>
    </div>
    </>
  )
}
          