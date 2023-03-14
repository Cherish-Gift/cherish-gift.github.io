import React, {ReactNode } from 'react';
import * as reactDOM from 'react-dom';

type ModalProps ={
  children:ReactNode
}
const Modal=({children}:ModalProps)=>{
  const modalEl = document.getElementById("modal") as HTMLElement;
  return reactDOM.createPortal(
    <div 
      className='modal'        
    >
      <div className="modal-inner">
        {children}
      </div>
    </div>
    ,modalEl);
};
export default  React.memo(Modal);