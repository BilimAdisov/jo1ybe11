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


function App() {
  //sorting
  const [ sortProperty, setSortProperty ] = useState('')
  const orderBy = sortProperty.includes('-') ? 'asc' : 'desc'
  const sortBy = sortProperty.replace('-', '')  
  
  

  //pagination
  const [load, setLoad ] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(6)
  
  //navigate
  const [path, setPath] = useState(``)
  path.replace(`/`,``)
  console.log(path);
  
  
  //API
  const [state, setState] = useState([])
  const URL = 'https://63a9c82c594f75dc1dc040b7.mockapi.io'
  
  //get request
  useEffect(() => {
      async function FetchData() {
        setLoad(true)
        await axios.get(`${URL}/${path}?sortBy=${sortBy}&order=${orderBy}`)
        .then(res => setState(res.data))
        .catch(err => console.error(err))
        setLoad(false)
      }
      FetchData()
    }, [path, sortBy, orderBy])
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
    }

    //pagination
    const lastItemIndex = currentPage * itemPerPage
    const firstItemIndex = lastItemIndex - itemPerPage
    const currentItem = state.slice(firstItemIndex, lastItemIndex)

    const paginate = (pageNumber:any) => setCurrentPage(pageNumber)

    const itemID = state.map((elem:any) => elem.id)
    
     
    return (
      <>
      <Header toggleDrawer={toggleDrawer} setPath={setPath}/>
      <Routes>
        <Route path='/t-shirts' element={<TShirtComponent state={currentItem} load={load} setSortProperty={setSortProperty}/>}/>
        <Route path='/bags' element={<BagComponent state={currentItem} load={load} setSortProperty={setSortProperty}/> }/>
        <Route path='/hoodies' element={<HoodieComponent state={currentItem} load={load} setSortProperty={setSortProperty}/>}/>
        <Route path='/sweatshirts' element={<SweatshirtComponent state={currentItem} load={load} setSortProperty={setSortProperty}/>}/>
        <Route path='/1' element={<Item/>}/>
        <Route path='/' element={<Body/>}/>
        <Route path='/register' element={<AuthRootComponents/>}/>
        <Route path='/login' element={<AuthRootComponents/>}/>
        <Route path='/pants-shorts' element={<PantsShortsComponent/>}/>
        <Route path='/polo' element={<PoloComponent/>}/>
        <Route path='/pajams' element={<PajamsComponent/>}/>
        <Route path='/hats' element={<HatsComponent/>}/>
        <Route path='/caps' element={<CapsComponent/>}/>
        <Route path='/memes' element={<MemesComponent/>}/>
        <Route path={`${path}/${itemID}`} element={<Item/>}/>
      </Routes>
      {
        itemID.length >= 5  ? <PaginationFcComponent itemPerPage={itemPerPage} totalItem={state.length} paginate={paginate}/> : ''
      }
      <Footer setPath={setPath}/>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='right' className='drawer' size={380}>
        <Cart toggleDrawer={toggleDrawer}/>
      </Drawer>
    </>
  );
}

export default App;
