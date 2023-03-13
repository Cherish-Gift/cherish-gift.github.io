import React, { ReactNode } from 'react';

import * as reactDOM from 'react-dom';

type ModalPortalProps ={
  child:ReactNode
}
const ModalPortal=({child}:ModalPortalProps)=>{
  const el = document.getElementById("modal") as HTMLElement;
  return reactDOM.createPortal(child,el);
};
export default ModalPortal;