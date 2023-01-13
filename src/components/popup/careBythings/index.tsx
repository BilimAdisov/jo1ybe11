import {GrClose} from 'react-icons/gr'

export const CareThings = ({setCareClose}:any) => {
  return (
    <>
    <div className="modal-care" onClick={() => setCareClose(false)}> 
        <div className="modal-container" onClick={e => e.stopPropagation()}>
            <GrClose className='close-modal' size={30} onClick={() => setCareClose(false)}/>
            <h1>Стандартные правила ухода:</h1>
            <p>Стирать в вывернутом состоянии, только в стиральной машине, до 40 градусов, не использовать машинную сушку, сушить только на вешалке, без попадания солнечных лучей на ткань</p>
        </div>
    </div>
    </>
  )
}
