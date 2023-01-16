import {GrClose} from 'react-icons/gr'

export const ClothesSize = ({setClothesclose, clothesClose }:any) => {

  return (
    <>
    <div className={clothesClose ? 'modal active' : 'modal'} onClick={() => setClothesclose(false)}>
      <div className='modal-clothes' onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <GrClose className='close' size={20} onClick={() => setClothesclose(false)}/>
          <div className="title">
            <p>Как правильно выбрать размер</p>
            <p>Выбираете вашу футболку/вышиванку/кофту и замеряете метром</p>
            <p>Ширина на размерной сетке указана буквой А, меряете под подмышками, от шва до шва, как показано красной линией.</p>
            <p>Длина на размерной сетке указана буквой B, меряете от горловины и до самого низа вещи, как показано красной линией.</p>
            <p>Длина рукава на размерной сетке указана буквой С</p>
            <p>Далее сравниваете ваши показатели с нашей таблицей размеров, прикинув плюс/минус пару сантиметров и выбираете размер.</p>
          </div>
          <div className="img-size">
            <img src="https://cdn.jolybell.com/images/qIA0fOiLkYdRoZN.png?width=1120&height=1024" alt="" />
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>(cm)</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>48</td>
                <td>68</td>
                <td>65</td>
              </tr>
              <tr>
                <td>M</td>
                <td>50</td>
                <td>68</td>
                <td>65</td>
              </tr>
              <tr>
                <td>L</td>
                <td>52</td>
                <td>69</td>
                <td>65</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>54</td>
                <td>69</td>
                <td>66</td>
              </tr>
              <tr>
                <td>2XL</td>
                <td>56</td>
                <td>72</td>
                <td>66</td>
              </tr>
              <tr>
                <td>3XL</td>
                <td>58</td>
                <td>72</td>
                <td>66</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}
