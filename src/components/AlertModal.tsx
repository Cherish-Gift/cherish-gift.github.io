import React from "react";
type AlertModalProps ={
  content: string|null,
  closeModal :()=>void
};
const AlertModal=({content ,closeModal}:AlertModalProps)=>{
  return ( 
    <div 
      id="alert-modal"
      className ="background"
    >
      <div
        className="modal-inner"
      >
        <button
          onClick={closeModal}
        >
          close
        </button>
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  )
};
export default React.memo(AlertModal)