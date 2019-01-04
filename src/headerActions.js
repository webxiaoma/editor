import { exce,getStyle } from './exce'

const actions = {
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
        hoverLeave(el,editor){
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
            ul.innerHTML = liStr;
            
            // 添加事件
            ul.addEventListener("click",(e)=>{
                var color = e.target.getAttribute("data-color")
                if(color){
                    this.actions(color)
                    el.querySelector(".simple-editor-wrap-bg").style.display = "none"
                }

            })

            div.appendChild(ul)
            el.appendChild(div)
            el.querySelector(".simple-editor-wrap-bg").style.display = "none"

            // // 添加事件
            el.addEventListener("mouseenter",function(e){
                el.querySelector(".simple-editor-wrap-bg").style.display = "block"
            })
            el.addEventListener("mouseleave",function(e){
                el.querySelector(".simple-editor-wrap-bg").style.display = "none"
            })

        },
        children:['#fff','#111','#354','#354','#458','#423','#987','#347','#742','#458','#423','#987','#347','#742','#235','#853','#243']
    },
    foreColor :{
        title:'字体颜色',
        element:'',
        icon:'icon-716bianjiqi_zitiyanse',
        show:true,
        active(){},
        actions:(color,editor)=>{
            var result =  exce("foreColor",color)
            var range = editor.getCursor()
            var cloneRange = range.cloneRange();
            console.log(cloneRange)

            // var fontTagReg =  /(\<|\<\/)(font)/ig
            // var colorStyleReg = /color=(\"|\')[#\w]+(\"|\')/ig
            // if(cloneRange.commonAncestorContainer.parentNode.nodeName === 'FONT'){
            //     var oldnode = cloneRange.commonAncestorContainer.parentNode;
            //     var newNode = document.createElement("span")
            //     newNode.style.color = color
            //     newNode.innerHTML = oldnode.innerHTML;
            //     oldnode.parentNode.replaceChild(newNode,oldnode);
            // }else{
            //     if(cloneRange.commonAncestorContainer.nodeName === 'FONT'){
            //         var oldnode = cloneRange.commonAncestorContainer;
            //         var newNode = document.createElement("span")
            //         newNode.style.color = color
            //         newNode.innerHTML = cloneRange.commonAncestorContainer.innerHTML;
            //         oldnode.parentNode.replaceChild(newNode,oldnode);
            //     }else{
            //         var selectHTML = cloneRange.commonAncestorContainer.innerHTML
            //         var newHTML = selectHTML.replace(fontTagReg,"$1span").replace(colorStyleReg,`style="color:${color}"`)
            //         cloneRange.commonAncestorContainer.innerHTML = newHTML
            //     }
            // }
            editor.restoreRange()
           
            // editor.resetRange(
            //     cloneRange.startContainer,
            //     cloneRange.startOffset,
            //     cloneRange.endContainer,
            //     cloneRange.endOffset
            // )

          
        },
        hoverLeave(el,editor){


            let div = document.createElement('div')
            let ul = document.createElement('ul');
            div.classList.add("simple-editor-wrap-color")
            ul.classList.add("simple-editor-ul-bg")
            let liStr = '';
            let aColor = this.children
            for(let i=0,len=aColor.length;i<len;i++){
            liStr += `<li>
                        <a href="javascript:;"  data-color="${aColor[i]}" style="background-color:${aColor[i]}">
                       
                        </a>
                      </li>`
            }
            ul.innerHTML = liStr;
            // 添加事件
            ul.addEventListener("click",(e)=>{
               
                var color = e.target.getAttribute("data-color")
                if(color){
                    this.actions(color,editor)
                    el.querySelector(".simple-editor-wrap-color").style.display = "none"
                }

            })

            div.appendChild(ul)
            el.appendChild(div)
            el.querySelector(".simple-editor-wrap-color").style.display = "none"
           console.log()
            // // 添加事件
            el.addEventListener("mouseenter",function(e){
                el.querySelector(".simple-editor-wrap-color").style.display = "block"
            })
            el.addEventListener("mouseleave",function(e){
                el.querySelector(".simple-editor-wrap-color").style.display = "none"
            })

        },
        children:['#fff','#111','#354','#354','#458','#423','#987','#347','#742','#458','#423','#987','#347','#742','#235','#853','#243']
    },
    fontelement:{
        title:'字体样式',
        element:'',
        icon:'icon-728bianjiqi_zitidaxiao',
        show:true,
        active(){},
        actions:(style)=>{
            exce("fontName",style)
        },
        hoverLeave(el,bol){
            let ul = document.createElement('ul');
            ul.classList.add("simple-editor-ul-style")
            let liStr = `<li data-h="">
                            <a href="javascript:;">
                                正常
                            </a>
                        </li>`,
            style = this.children
            for(let i=0,len=style.length;i<len;i++){
                liStr += `<li data-h="${style[i]}">
                            <a href="javascript:;">
                               ${style[i]}
                            </a>
                        </li>`
            }
            ul.innerHTML = liStr;
            ul.addEventListener("click",(e)=>{

                var isInt = e.target.innerText ==="正常"
                var htmlStyle = isInt?""
                                   :`${e.target.innerText}`
                             
                let liAry = this.element.parentElement.querySelectorAll("ul li")

                
                for(var i = 0,len=liAry.length;i<len;i++){
                    liAry[i].querySelector('a').classList.remove("active")
                }

                if(!isInt){ // 点击的非正常样式时
                    e.target.classList.add("active")
                }
                this.actions(htmlStyle)
                el.querySelector(".simple-editor-ul-style").style.display = "none"
            })

            el.appendChild(ul)

             // 添加事件
            el.addEventListener("mouseenter",function(e){
                el.querySelector(".simple-editor-ul-style").style.display = "block"
            })
            el.addEventListener("mouseleave",function(e){
                el.querySelector(".simple-editor-ul-style").style.display = "none"
            })


        },
        children:['宋体','微软雅黑','Arial','Tahoma','Verdana']
    },
    fontSize:{
        title:'字体大小',
        element:'',
        icon:'icon-728bianjiqi_zitidaxiao',
        show:true,
        active(){},
        actions:(size)=>exce("fontSize",6),
        hoverLeave(el,bol){
            let ul = document.createElement('ul');
            ul.classList.add("simple-editor-ul-size")
            let liStr = `<li data-h="">
                            <a href="javascript:;">
                                正文
                            </a>
                        </li>`,
            h = this.children
            for(let i=0,len=h.length;i<len;i++){
                liStr += `<li data-h="${h[i]}">
                            <a href="javascript:;" style="font-size:${h[i]};">
                               <span style="font-size:${h[i]};">${h[i]}</span>
                            </a>
                        </li>`
            }
            ul.innerHTML = liStr;
            ul.addEventListener("click",(e)=>{
                var isInt = e.target.innerText ==="正文"
                var sizeTag = isInt?"<div>"
                                   :`'${e.target.innerText}'`
                
                let liAry = this.element.parentElement.querySelectorAll("ul li")
                
                for(var i = 0,len=liAry.length;i<len;i++){
                    liAry[i].querySelector('a').classList.remove("active")
                }
                if(!isInt){ // 点击的非正文时
                    e.target.parentElement.classList.add("active")
                }
                this.actions(sizeTag)
                el.querySelector(".simple-editor-ul-size").style.display = "none"

            })

            el.appendChild(ul)

             // 添加事件
            el.addEventListener("mouseenter",function(e){
                el.querySelector(".simple-editor-ul-size").style.display = "block"
            })
            el.addEventListener("mouseleave",function(e){
                el.querySelector(".simple-editor-ul-size").style.display = "none"
            })


        },
        children:['12px','14px','18px','26px','32px']
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
    blockquote:{
        title:'引用块',
        element:'',
        icon:'icon-quoteleft',
        show:true,
        active(){
            var bol = getStyle("formatBlock")
            bol === "blockquote"?this.element.classList.add("active")
               :this.element.classList.remove("active")
        },
        actions:()=>{
           var bol = getStyle("formatBlock")
           var tag = bol === "blockquote"?"<p>":"<blockquote>"
           return exce("formatBlock",tag)
        }
    },
    preCode:{
        title:'代码块',
        element:'',
        icon:'icon-code',
        show:true,
        active(){},
        actions:()=>exce("formatBlock","<pre>")
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
        active(range){
            if(range.commonAncestorContainer.parentNode.nodeName === 'A'){
                this.element.classList.add("active")
            }else{
                this.element.classList.remove("active")
            }
        },
        actions:(title,url,isBank,range,editor)=>{
            // 判断光标是否在a标签中，如果是则执行替换
            if(range.commonAncestorContainer.parentNode.nodeName === 'A'){
                range.commonAncestorContainer.parentNode.parentNode.removeChild(range.commonAncestorContainer.parentNode)
            }

            let a = `<a  href="${url}" target="_blank">${title}</a>`

            let result = exce('inserthtml',a)
            return result
        },
        deleteLink(range){
            if(range.startContainer.parentNode.nodeName === 'A'){
                var oldnode = range.startContainer.parentNode;
                var newNode;
                oldnode.parentNode.className === 'simple-editor-body'
                ?newNode = document.createElement("p")
                :newNode = document.createElement("span")
                newNode.innerHTML = oldnode.innerHTML;
                oldnode.parentNode.replaceChild(newNode,oldnode);
            }
         
        },
        hoverLeave(el,editor){
            let div = document.createElement('div');
            div.classList.add("simple-editor-link")
            let linkStr = `<div class="simple-editor-wrap">
                                <div class="simple-editor-link-header">添加超链接</div>
                                <div class="simple-editor-link-text"><input type="text" placeholder="超链接标题"/></div>
                                <div class="simple-editor-link-links"><input type="text" placeholder="超链接地址"/></div>
                                <div class="simple-editor-link-btn">
                                    <span class="inset">插入</span>
                                    <span class="delete">删除</span>
                                </div>
                            </div>`
           
            div.addEventListener("click",(e)=>{ // 点击超链接时
                e.stopPropagation();
                let text = e.target.innerText 

                if(text === "插入"){
                    var textInp = el.querySelector('.simple-editor-link-text input').value
                    var linkInp = el.querySelector('.simple-editor-link-links input').value
                    if(textInp&&linkInp){
                        editor.restoreRange()
                        let range = editor.getCursor()
                        this.actions(textInp,linkInp,true,range,editor)
                    }
                }

                if(text === "删除"){
                    let range = editor.getCursor()
                    this.deleteLink(range)
                }

            })

            
            div.innerHTML = linkStr;
            el.appendChild(div)
            el.querySelector(".simple-editor-link").style.display = "none"


             // 添加事件
            el.addEventListener("click",function(e){
                let range = editor.getCursor(),
                    inpTitle = "",
                    inpLink;
               
                // 获取选择区域的文本
                if(range.collapsed){ 
                    if(range.commonAncestorContainer.parentNode.nodeName === 'A'){ // 判断父节点是否是A标签
                        inpTitle = range.commonAncestorContainer.nodeValue
                        inpLink = range.commonAncestorContainer.parentNode.href
                    }else{
                        inpTitle =  ""
                        inpLink = ""
                    }
                }else{ // 有蓝拖时
                    inpTitle =  window.getSelection().toString()
                    if(range.commonAncestorContainer.parentNode.nodeName === 'A'){
                        inpLink = range.commonAncestorContainer.parentNode.href
                    }else{
                        inpLink = ""
                    }
                }

                // 初始化输入框内容
                el.querySelector('.simple-editor-link-text input').value = inpTitle
                el.querySelector('.simple-editor-link-links input').value = inpLink

                el.querySelector(".simple-editor-link").style.display = "block"
            })
            el.addEventListener("mouseleave",function(e){
                el.querySelector(".simple-editor-link").style.display = "none"
            })
            
        }
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