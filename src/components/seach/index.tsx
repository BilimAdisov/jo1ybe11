
export const SearchFCComponent = ({value, setValue }:any) => {
 
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
