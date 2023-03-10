import { ImArrowRight2 } from 'react-icons/im'
import uuid from 'react-uuid'
import { sizeClothes } from '../../COMMON/moks'
import { SwiperSlider } from '../swiper'
import './item.scss'

export const Item = ({state, IdItemPage, path, setClothesclose, setCareClose, chooseSize, setChooseSize,amount,setAmount }:any) => {
       

    const newItem = state.filter((obj:any) => (obj.id === IdItemPage))
    
    
    

  return (
    <>
        {
            newItem.map((elem:any) => (
                <div className="item" key={elem.id}>
                <h1>{elem.name}</h1>
            <div className="item-container">
                <div className="item-nav">
                    <div className="slider">
                        <SwiperSlider className='slideres' newItem={newItem}/>
                    </div>
                    <div className="item-info">
                        <div className="price">
                            <span className='cost'>{elem.price} USD</span>
                        </div>
                        <div className="compound">
                            <p>
                                {elem.title1}
                            </p>
                            
                            
                            <p>
                                {elem.title2}
                            </p>
                              {
                                path === '/bags' ?   <ul className='bags-listes'>
                                    <li className='bags-list'>{elem.li}</li>
                                    <li className='bags-list'>{elem.li2}</li>
                                    <li className='bags-list'>{elem.li3}</li>
                                    <li className='bags-list'>{elem.li4}</li>
                                    <li className='bags-list'>{elem.li5}</li>
                                    <li className='bags-list'>{elem.li6}</li>
                                </ul> : ''
                              }
                            <p>
                                {elem.title3}
                            </p>
                        </div>
                        <div className="more-info">
                            <button className='how' onClick={() => setClothesclose(true)}>?????????????????? ??????????</button>
                            <button className='how' onClick={() => setCareClose(true)}>???????? ???? ??????????</button>
                        </div>
                        <div className="select-size">
                            <h5>???????????????? ????????????:</h5>
                            <div className="size">
                                {
                                    sizeClothes.map(elem => (
                                        <button className={chooseSize === elem.size ? 'active' : ''} key={elem.id} onClick={() => (setChooseSize(elem.size))}>{elem.size}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="buy">
                            <div className="amount">
                                <h5>????????????????????:</h5>
                                <div className="counter">
                                    <button className='minus' onClick={() => (amount === 1 ? '' : setAmount(amount-1))}>---</button>
                                    <input type="button" value={amount} className='result'/>
                                    <button className='plus' onClick={() => (setAmount(amount+1))}>+</button>
                                </div>
                            </div>
                            <div className="add-cart">
                                <button className='btn' >???????????????? ?? ?????????????? <ImArrowRight2 className='on-right'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            ))
        }
    </>
  )
}
