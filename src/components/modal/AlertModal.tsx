import React from "react";
import Modal from "./Modal";
type AlertModalProps ={
  contents: string|null,
  closeModal :()=>void
};
const AlertModal=({contents ,closeModal}:AlertModalProps)=>{
  return ( 
    <Modal>
      <button
        type="button"
        onClick={closeModal}
      >
        close
      </button>
      <div className="content">
        {contents}
      </div>
    </Modal>
  )
};
export default React.memo(AlertModal)