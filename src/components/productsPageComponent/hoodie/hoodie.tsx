import React, { FC } from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'


export const HoodieComponent:FC<any> = ({state, load, setSortProperty, setIdItemPage, setPaginatNone }:any):JSX.Element => {

    const navigate = useNavigate()

  return (
    <>
            <h1>Худи</h1>
        <div className="products">
            {
                load === true ? (
                <div className="loader">
                    <h1 className='load-title'>loading...</h1>
                    <SpinnerCircular color='black' size={100} thickness={150} speed={400}/>
                </div>
                )
                :
                (
                <div className="products-wrapper">
                    {
                        state.map((obj:any) => (
                            <div key={obj.id} >
                                <div className="items">
                                    <a href="#" onClick={() => (setIdItemPage(obj.id),navigate(`/hoodies/${obj.id}`),setPaginatNone(false))}>
                                        <div className="item-container">
                                            <span className='price'>{obj.price} USD</span>
                                            <button className='btn-none'>Подробнее <ImArrowRight2/> </button>
                                            <img src={obj.image1} alt="img" />
                                        </div>
                                        <button className='btn'>{obj.name}</button>
                                    </a>
                                </div>  
                            </div>
                        
                        ))
                    }  
                </div>
                )
            } 
        </div>
    </>
  )
}
