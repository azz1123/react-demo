'use strict';

let UE = window.UE;

const checkEnv = () => {
  if(UE || window.UE) {
    return UE = window.UE
  } else {
    console.log('Umeditor not exist')
  }
};

export const getEditor = (id, config = {}) => {
  if(checkEnv()) {
    return UE.getEditor(id, config)
  }
  return null
};


export const getContent = (editor) => {
  if(editor) {
    let content = "";
    editor.ready(() => {
      content = editor.getContent()
    });
    return content
  }
};


export const destroy = (editor) => {
  if(editor){
    editor.destroy();
  }
};