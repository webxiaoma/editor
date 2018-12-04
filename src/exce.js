
export default (name="",value=null)=>{
   return document.execCommand(name, false, value);
}