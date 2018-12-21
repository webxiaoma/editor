
import exce from './exce'


let getStyle = (style)=>{ // 设置样式
    return document.queryCommandValue(style).toString()
}

const actions = {
    editorEl:'', // 实例editor
    bold:{
        title:'加粗',
        element:'',  // 存储元素
        icon:'icon-fuhao-jiacu',
        show:true,
        active(){  //激活状态
           var bol = getStyle("bold")
           bol === "true"?this.element.classList.add("active")
              :this.element.classList.remove("active")
        },
        actions(e){ // 按钮事件
            var result = exce("bold");
            this.active()
            return result
        },
    },
    title:{
        title:'H1~H6标题',
        element:'',
        icon:'icon-titleicon',
        show:true,
        active(){
            var bol = getStyle("formatBlock");
            var bolAry = bol.split("");
            if(bolAry[0] === 'h'){
                this.element.classList.add("active")
            }else{
                this.element.classList.remove("active")
            }
           
            
        },
        actions(tag){
            var result =  exce("formatBlock",tag);
            this.active()
            return result
        },
        hoverLeave(el,bol){
            let ul = document.createElement('ul');
            ul.classList.add("simple-editor-ul-h")
            let liStr = `<li data-h="">
                            <a href="javascript:;">
                                正文
                            </a>
                        </li>`,
            h = this.children
            for(let i=0,len=h.length;i<len;i++){
                liStr += `<li data-h="${h[i]}">
                            <a href="javascript:;">
                            <${h[i]}>${h[i]}</${h[i]}>
                            </a>
                        </li>`
            }
            ul.innerHTML = liStr;
            ul.addEventListener("click",(e)=>{
                var isInt = e.target.innerText ==="正文"
                var htmlTag = isInt?"<div>"
                                   :`<${e.target.innerText}>`
                
                let liAry = this.element.parentElement.querySelectorAll("ul li")
                
                for(var i = 0,len=liAry.length;i<len;i++){
                    liAry[i].querySelector('a').classList.remove("active")
                }

                if(!isInt){ // 点击的非正文时
                    e.target.parentElement.classList.add("active")
                }

                this.actions(htmlTag)
                el.querySelector(".simple-editor-ul-h").style.display = "none"

            })

            el.appendChild(ul)

             // 添加事件
            el.addEventListener("mouseenter",function(e){
                el.querySelector(".simple-editor-ul-h").style.display = "block"
            })
            el.addEventListener("mouseleave",function(e){
                el.querySelector(".simple-editor-ul-h").style.display = "none"
            })


        },
        children:['h1','h2','h3','h4']
    },
    backColor:{
        title:'背景色',
        element:'',
        icon:'icon-zitibeijingse',
        show:true,
        active(){
           
        },
        actions:(color)=>exce("backColor",color),
        hoverLeave(el,bol){
            let div = document.createElement('div')
            let ul = document.createElement('ul');
            div.classList.add("simple-editor-wrap-bg")
            ul.classList.add("simple-editor-ul-bg")
            let liStr = '';
            let aColor = this.children
            for(let i=0,len=aColor.length;i<len;i++){
            liStr += `<li>
                        <a href="javascript:;"  data-color="${aColor[i]}" style="background-color:${aColor[i]}">
                       
                        </a>
                      </li>`
            }
            liStr += `<li class="input-color">
               <input type="text" maxLength="25"/>
               <p>确定</p>
            </li>`
            ul.innerHTML = liStr;
            
            // 添加事件
            ul.addEventListener("click",(e)=>{
                var color = e.target.getAttribute("data-color")
                if(color){
                    this.actions(color)
                    el.querySelector(".simple-editor-wrap-bg").style.display = "none"
                }
                // debugger
                if(e.target.nodeName === "P"){
                    let inpColor = el.querySelector(".input-color input").value
                    this.actions(inpColor)
                }

            })

            div.appendChild(ul)
            el.appendChild(div)
            el.querySelector(".simple-editor-wrap-bg").style.display = "block"

            // // 添加事件
            el.addEventListener("mouseenter",function(e){
                el.querySelector(".simple-editor-wrap-bg").style.display = "block"
            })
            el.addEventListener("mouseleave",function(e){
                el.querySelector(".simple-editor-wrap-bg").style.display = "none"
            })

        },
        children:['#111','#354','#354','#458','#423','#987','#347','#742','#458','#423','#987','#347','#742','#235','#853','#243']
    },
    blockquote:{
        title:'引用块',
        element:'',
        icon:'icon-quoteleft',
        show:true,
        active(){},
        actions:()=>exce("formatBlock","<blockquote>")
    },
    preCode:{
        title:'代码块',
        element:'',
        icon:'icon-code',
        show:true,
        active(){},
        actions:()=>exce("formatBlock","<pre>")
    },
    fontelement:{
        title:'字体样式',
        element:'',
        icon:'icon-728bianjiqi_zitidaxiao',
        show:true,
        active(){},
        actions:()=>exce("fontelement","Serif")
    },
    fontSize:{
        title:'字体大小',
        element:'',
        icon:'icon-728bianjiqi_zitidaxiao',
        show:true,
        active(){},
        actions:()=>exce("fontSize","18px")
    },
    foreColor :{
        title:'字体颜色',
        element:'',
        icon:'icon-716bianjiqi_zitiyanse',
        show:true,
        active(){},
        actions:()=>exce("foreColor","green")
    },
    italic:{
        title:'斜体',
        element:'',
        icon:'icon-italic',
        show:true,
        active(){
            var bol = getStyle("italic")
            // console.log(bol)
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("italic")
    },
    underline:{
        title:'下划线',
        element:'',
        icon:'icon-705bianjiqi_Uxiahuaxian',
        show:true,
        active(){
            var bol = getStyle("underline")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("underline")
    },
    Strikethrough:{
        title:'删除线',
        element:'',
        icon:'icon-strikethrough',
        show:true,
        active(){
            var bol = getStyle("Strikethrough")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("Strikethrough")
    },
    justifyLeft:{
        title:'左对齐',
        element:'',
        icon:'icon-juzuoduiqi',
        show:true,
        active(){
            var bol = getStyle("justifyLeft")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("justifyLeft")
    },
    justifyCenter:{
        title:'居中',
        element:'',
        icon:'icon-juzhongduiqi',
        show:true,
        active(){
            var bol = getStyle("justifyCenter")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("justifyCenter")
    },
    justifyRight:{
        title:'右对齐',
        element:'',
        icon:'icon-juyouduiqi',
        show:true,
        active(){
            var bol = getStyle("justifyRight")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("justifyRight")
    },
    indent:{
        title:'右缩进',
        element:'',
        icon:'icon-yousuojin',
        show:true,
        active(){
            var bol = getStyle("indent")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("indent")
    },
    outdent:{
        title:'左缩进',
        element:'',
        icon:'icon-zuosuojin',
        show:true,
        active(){
            var bol = getStyle("outdent")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("outdent")
    },
    insertOrderedList:{
        title:'有序列表',
        element:'',
        icon:'icon-youxuliebiao',
        show:true,
        active(){
            var bol = getStyle("insertOrderedList")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions(){
            var result =  exce("insertOrderedList");
            this.active()
            return result;
        }
    },
    insertUnorderedList:{
        title:'无序列表',
        element:'',
        icon:'icon-liebiao',
        show:true,
        active(){
            var bol = getStyle("insertUnorderedList")
            bol === "true"?this.element.classList.add("active")
               :this.element.classList.remove("active")
          
        },
        actions:()=>exce("insertUnorderedList")
    },
    createLink:{
        title:'超链接',
        element:'',
        icon:'icon-link',
        show:true,
        active(){},
        actions:()=>exce("createLink","https://webxiaoma.com")
    },
    inserHorizontalRule:{
        title:'分割线',
        element:'',
        icon:'icon-758bianjiqi_fengexian',
        show:true,
        active(){},
        actions:()=>exce("InsertHorizontalRule")
    },
    copy:{
        title:'复制',
        element:'',
        icon:'fa-cut',
        show:true,
        active(){},
        actions:()=>exce("copy")
    },
    cut:{
        title:'剪切',
        element:'',
        icon:'fa-cut',
        show:true,
        active(){},
        actions:()=>exce("cut")
    },
 }



let actionsKeys = (function(){
    let keys = Object.keys(actions),
        keyAry = [];

    for(let i=0,len=keys.length;i<len;i++){
          if(actions[keys[i]].show){
             keyAry.push(keys[i])
          }
    }

    return keyAry;
})()

export  {
    actions,
    actionsKeys
}