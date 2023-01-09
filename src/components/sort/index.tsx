import { FC, useState } from 'react'
import './index.scss'
import { sortrus } from '../../COMMON/moks'

export const SorfFCComponent:FC<any> = ({setSortProperty}:any):JSX.Element => {



    const [ sortSelect, setSortSelect ] = useState('Cортировка')
    const [ sortOpen, setSortOpen ] = useState(false)
    


  return (
    <>
        <div className='sort'>
            <p onClick={() => setSortOpen(!sortOpen)}>{sortSelect} </p>
           {
            sortOpen ? <div className='sort-list'>
            {
                sortrus.map(elem => (
                    <span className='sort-item' key={elem.id} onClick={() => (setSortSelect(elem.name),setSortOpen(false),setSortProperty(elem.sortProperty))}>{elem.name}</span>
                ))
            }
                </div> : ''
           }
        </div>
    </>
  )
}
