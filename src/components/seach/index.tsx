import { useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import './index.scss'

export const SearchFCComponent = ({value, setValue, setActiveSearch }:any) => {

  // const [ searchOpen, setSearchOpen ] = useState(false)
 
  return (
    <>
        <input 
        type="seach" 
        className='inp'
        placeholder='Search'
        onChange={(e:any) => (setValue(e.target.value))}
        value={value}
        />
    </>
  )
}
