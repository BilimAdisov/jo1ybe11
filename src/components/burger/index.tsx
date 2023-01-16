import { categoryMenu } from '../../COMMON/moks/index'
import {GrClose} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'


export const Burger = ({toggleDrawer, setPath, setPaginatNone, setCurrentPage}:any) => {

    const navigate = useNavigate()

  return (
    <>
        <div className="burger-wrapper">
            <button className="close-burger" onClick={() => toggleDrawer(false)}> <GrClose/> Скрыть</button>
            <ul className="burger-menu">
                {
                    categoryMenu.map((elem:any) => (
                            <li className="burger-item" key={elem.id} onClick={() => (navigate(`${elem.path}`), setPath(`${elem.path}`),setPaginatNone(true),setCurrentPage(1),toggleDrawer(false)
                            )}>{elem.rus}</li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}
