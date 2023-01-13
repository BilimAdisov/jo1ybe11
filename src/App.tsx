import {  Route, Routes } from 'react-router-dom';
import { AuthRootComponents } from './components/auth';
import { Body } from './components/body';
import { Footer } from './components/footer';
import { Header } from './components/header/index.';
import { Item } from './components/item';
import { TShirtComponent } from './components/productsPageComponent/t-shirt';
import { Cart } from './components/cart/cart';
import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer'
import axios from 'axios';
import { BagComponent } from './components/productsPageComponent/bags';
import { SweatshirtComponent } from './components/productsPageComponent/sweatshirt';
import { HoodieComponent } from './components/productsPageComponent/hoodie/hoodie';
import { PantsShortsComponent } from './components/productsPageComponent/pants-shorts';
import { PoloComponent } from './components/productsPageComponent/polo/inex';
import { PajamsComponent } from './components/productsPageComponent/pajams';
import { HatsComponent } from './components/productsPageComponent/hats';
import { CapsComponent } from './components/productsPageComponent/caps';
import { MemesComponent } from './components/productsPageComponent/memes';
import 'react-modern-drawer/dist/index.css'
import './App.css';
import { PaginationFcComponent } from './components/pagination';
import { ClothesSize } from './components/popup/clothesSize';
import { CareThings } from './components/popup/careBythings';
import { SearchFCComponent } from './components/seach';
import { SorfFCComponent } from './components/sort';


function App() {
  //sorting
  const [ sortProperty, setSortProperty ] = useState('')
  const orderBy = sortProperty.includes('-') ? 'asc' : 'desc'
  const sortBy = sortProperty.replace('-', '')  
  
  //search
  const [value, setValue ] = useState('')
  const [activeSearch, setActiveSearch ] = useState(false)
  
  const searchRequest = value ? `&search=${value}` : ''

  // const finall = activeSearch === true ? searchRequest : ''

  
  //pagination
  const [load, setLoad ] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(6)
  
  //navigate
  const [path, setPath] = useState(``)
  
  
  //API
  const [state, setState] = useState([])
  const URL = 'https://63a9c82c594f75dc1dc040b7.mockapi.io'
  
  //get request
  useEffect(() => {
      async function FetchData() {
        setLoad(true)
        await axios.get(`${URL}${path}?sortBy=${sortBy}&order=${orderBy}${searchRequest}`)
        .then(res => setState(res.data))
        .catch(err => console.error(err))
        setLoad(false)
        // setActiveSearch(false)
      }
      FetchData()
    }, [path, sortBy, orderBy,searchRequest])
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
    }

    //pagination
    const lastItemIndex = currentPage * itemPerPage
    const firstItemIndex = lastItemIndex - itemPerPage
    const currentItem = state.slice(firstItemIndex, lastItemIndex)

    const paginate = (pageNumber:any) => setCurrentPage(pageNumber)
    // const itemID = state.map((elem:any) => elem.id)

    //item page enter
    const [IdItemPage, setIdItemPage] = useState(null)
    
    //pagination none
    const [ paginateNone, setPaginatNone ] = useState(false)
     
    //modal windows
    const [clothesClose, setClothesclose] = useState(false)
    const [careClose, setCareClose ] = useState(false)

    //order
    const [ chooseSize, setChooseSize ] = useState('S')
    const [ amount, setAmount ] = useState(1)
    const [ cartAmount, setCartAmount ] = useState(amount)


    return (
      <>
      <Header toggleDrawer={toggleDrawer} setPath={setPath} setPaginatNone={setPaginatNone}/>
      {
        paginateNone === true ?  <div className="function-products">
        <div className="fc-prod">
            <SearchFCComponent value={value} setValue={setValue} setActiveSearch={setActiveSearch}/>
            <SorfFCComponent setSortProperty={setSortProperty}/>
        </div>
      </div> : ''
      }
      <Routes>
        <Route path={`${path}/${IdItemPage}`} element={<Item 
        state={state} 
        IdItemPage={IdItemPage} path={path} 
        setClothesclose={setClothesclose} 
        setCareClose={setCareClose} 
        chooseSize={chooseSize} 
        setChooseSize={setChooseSize}
        amount={amount}
        setAmount={setAmount}
        value={value}
        setValue={setValue}
        />}/>
        <Route path='/t-shirts' element={<TShirtComponent 
        state={currentItem} 
        load={load} 
        setIdItemPage={setIdItemPage} 
        setPaginatNone={setPaginatNone}
        />}/>
        <Route path='/bags' element={<BagComponent 
        state={currentItem} 
        load={load} 
        setSortProperty={setSortProperty} 
        setIdItemPage={setIdItemPage} 
        setPaginatNone={setPaginatNone}
        value={value}
        setValue={setValue}
        /> }/>
        <Route path='/hoodies' element={<HoodieComponent 
        state={currentItem} 
        load={load} 
        setSortProperty={setSortProperty} 
        setIdItemPage={setIdItemPage} 
        setPaginatNone={setPaginatNone}
        value={value}
        setValue={setValue}
        />}/>
        <Route path='/sweatshirts' element={<SweatshirtComponent 
        state={currentItem} 
        load={load} 
        setSortProperty={setSortProperty} 
        setIdItemPage={setIdItemPage} 
        setPaginatNone={setPaginatNone}
        value={value}
        setValue={setValue}
        />}/>
        <Route path='/' element={<Body/>}/>
        <Route path='/register' element={<AuthRootComponents/>}/>
        <Route path='/login' element={<AuthRootComponents/>}/>
        <Route path='/pants-shorts' element={<PantsShortsComponent/>}/>
        <Route path='/polo' element={<PoloComponent/>}/>
        <Route path='/pajams' element={<PajamsComponent/>}/>
        <Route path='/hats' element={<HatsComponent/>}/>
        <Route path='/caps' element={<CapsComponent/>}/>
        <Route path='/memes' element={<MemesComponent/>}/>
      </Routes>
      {
         paginateNone === true && load === false ? <PaginationFcComponent itemPerPage={itemPerPage} totalItem={state.length} paginate={paginate}/> : ''
      }
      <Footer setPath={setPath} setPaginatNone={setPaginatNone}/>
      <Drawer style={{width: '380px',height: '200%', pointerEvents: 'none'}} open={isOpen} onClose={toggleDrawer} direction='right' >
        <Cart toggleDrawer={toggleDrawer} chooseSize={chooseSize} setChooseSize={setChooseSize} amount={amount} setAmount={setAmount} />
      </Drawer>
      {
        clothesClose === true ? <ClothesSize setClothesclose={setClothesclose} clothesClose={clothesClose}/> : ''
      }
      {
        careClose === true ? <CareThings setCareClose={setCareClose}/> : ''
      }
    </>
  );


}

export default App;
