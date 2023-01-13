import React, { FC } from 'react'

export const PaginationFcComponent:FC<any> = ({ itemPerPage, totalItem, paginate }:any):JSX.Element => {
    const pageNumber = []

    for(let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
        pageNumber.push(i)
    }


  return (
    <>
        <div className='paginate-container'>
            <ul className="pagination">
                {
                    pageNumber.map(number => (
                        <li className="pageItem" key={number} onClick={() => paginate(number)}>
                            <span className='pagNum' >
                                {number}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}
