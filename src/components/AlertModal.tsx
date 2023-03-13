import React from "react";
import { Background, ModalInner } from "./Modals";
type AlertModalProps ={
  content: string|null,
  closeModal :()=>void
};
const AlertModal=({content ,closeModal}:AlertModalProps)=>{
  return ( 
    <Background 
      id="alert-modal"
    >
      <ModalInner
        className="inner"
      >
        <button
          onClick={closeModal}
        >
          close
        </button>
        <div className="content">
          {content}
        </div>
      </ModalInner>
    </Background>
  )
};
export default React.memo(AlertModal)