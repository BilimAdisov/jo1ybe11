import React, { FC } from 'react'
import '../index.scss'


export const PoloComponent:FC = ():JSX.Element => {
  return (
    <>
      <div className="function-products">
      </div>
          <h1>Поло</h1>
      <div className="products">
        <div className="if-noneItem">
            <h1>Пока в этой категории пусто...</h1>
        </div>
      </div>
  </>
  )
}
