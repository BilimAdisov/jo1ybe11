import React, { FC } from 'react'
import { ImArrowRight2 } from 'react-icons/im'
import { SpinnerCircular } from 'spinners-react'
import { SearchFCComponent } from '../../seach'
import { SorfFCComponent } from '../../sort'
import '../index.scss'

export const HoodieComponent:FC<any> = ({state, load, setSortProperty }:any):JSX.Element => {


    if(load) {
        return (<div className="loader">
            <h1 className='load-title'>loading...</h1>
            <SpinnerCircular color='white' size={100} thickness={150} speed={400}/>
        </div>)
    }    

  return (
    <>
        <div className="function-products">
            <div className="fc-prod">
                <SearchFCComponent/>
                <SorfFCComponent setSortProperty={setSortProperty}/>
            </div>
        </div>
            <h1>Худи</h1>
        <div className="products">
            <div className="products-wrapper">
            {
                state.map((obj:any) => (
                    <div key={obj.id} >
                        <div className="items">
                            <a href="/">
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
        </div>
    </>
  )
}
