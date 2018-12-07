
export default (name="",value=null)=>{
   return document.execCommand(name, false, value);
   // return document.execCommand("heading", true, "H1");
}