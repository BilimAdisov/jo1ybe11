import { useState } from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { ClothesSize } from '../popup/clothesSize'
import './item.scss'

export const Item = () => {

    const [ chooseSize, setChooseSize ] = useState('')
    const [ amount, setAmount ] = useState(1)
    console.log(amount);
    
    console.log(chooseSize);
    
    const sizeClothes = [
        {
            id: 1,
            size: 'S'
        },
        {
            id: 2,
            size: 'M'
        },
        {
            id: 3,
            size: 'L'
        },
        {
            id: 4,
            size: 'XL'
        },
        {
            id: 5,
            size: '2XL'
        },
        {
            id: 6,
            size: '3XL'
        },
        {
            id: 7,
            size: '4XL'
        },
    ]

  return (
    <>
    <div className="item">
            <h1>Item Name</h1>
        <div className="item-container">
            <div className="item-nav">
                <div className="slider"></div>
                <div className="item-info">
                    <div className="price">
                        <span className='cost'>35.19 USD</span>
                    </div>
                    <div className="compound">
                        <p>
                            Традиционная черная вышиванка из приятной к телу ткани
                             лакоста с вышитым орнаментом ромба на горловине,
                              груди и рукавах. Модель свободного прямого кроя с 
                              воротником-стойкой, вырезом со скрытыми застежками 
                              на полке и длинными рукавами с манжетами на застежке.
                        </p>
                        <p>
                            Вышиванка идеально сочетается как с брюками, 
                            так и с джинсами любого цвета, она дополнит ваш обычный образ.
                        </p>
                        <p>
                            Состав ткани 100% хлопок.
                        </p>
                    </div>
                    <div className="more-info">
                        <button className='how'>РАЗМЕРНАЯ СЕТКА</button>
                        <button className='how'>УХОД ЗА ВЕЩЬЮ</button>
                    </div>
                    <div className="select-size">
                        <h5>Выберите размер:</h5>
                        <div className="size">
                            {
                                sizeClothes.map(elem => (
                                    <button key={elem.id} onClick={() => (setChooseSize(elem.size))}>{elem.size}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="buy">
                        <div className="amount">
                            <h5>Количество:</h5>
                            <div className="counter">
                                <button className='minus' onClick={() => (setAmount(amount-1))}>---</button>
                                <input type="button" value={amount} className='result'/>
                                <button className='plus' onClick={() => (setAmount(amount+1))}>+</button>
                            </div>
                        </div>
                        <div className="add-cart">
                            <button className='btn'>Добавить в Корзину <ImArrowRight2 className='on-right'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
