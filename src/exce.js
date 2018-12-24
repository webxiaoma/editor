const exce = (name="",value=null)=>{
   return document.execCommand(name, false, value);
}
const getStyle = (style)=>{ // 获取样式
   return document.queryCommandValue(style).toString()
}


export {
  exce,
  getStyle
}

