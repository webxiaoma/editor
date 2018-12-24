import './css/index.less'
import {exce} from './exce'
import {actions,actionsKeys} from './headerActions'
import initOptions from './options'

;(function(W){
    
    W.Editor = function (el,options = {}){
        this.el = document.querySelector(el);
        this.options = Object.assign(initOptions,options);
        this.blurRange = null;

        return this.init()
    }

    Editor.fn = Editor.prototype = {
        /**
         * 初始化
         */
        init(){ 
            this.layout()
    
            // 回车以div换行问题
            this.el.querySelector(".simple-editor-body").addEventListener("keyup",function(e){
                if(e.keyCode === 8){ //按下了删除键
                    if(!this.innerHTML || this.innerHTML === "<br>"){
                        // this.innerHTML = "<p><br/></p>"
                        this.innerHTML = "<div><br/></div>"
                    }
                }
            })
            
            // 富文本input事件
            this.el.querySelector(".simple-editor-body").addEventListener("input",(e)=>{
                //  this.onchange(e.target.innerHTML)
                 // 头部active
                 this.activeIcon()
                 this.options.onchange(e.target.innerHTML)
            })
    
    
            // 光标变化事件
            this.el.querySelector(".simple-editor-body").addEventListener("click",()=>{
                 
                 // 头部active
                 this.activeIcon()

                 var range = this.getCursor()
                 this.options.cursorChange(range)
            })

            // 监听回车事件
            this.el.querySelector(".simple-editor-body").addEventListener("keyup",(e)=>{

                  // 回车时触发
                if(e.keyCode == 13&&this.getCursor().commonAncestorContainer.localName === "blockquote"){

                    this.changeTag("p")
                }
           })

            // 富文本blur事件
            this.el.querySelector(".simple-editor-body").addEventListener("blur",(e)=>{
                 // 头部active
                 this.blurRange = this.getCursor()
                 console.log(this.blurRange)
            })
    
            return this
        },
        /**
         * 初始化富文本框构架以及样式
         */
        layout(){ 
            let D = document;
            let editorWarp = D.createElement('div');
            let editorHeader = D.createElement('div');
            let editorBody = D.createElement('div');
            let editorUl = D.createElement("ul")
            let keyAryLength = actionsKeys.length
            for(let i=0;i<keyAryLength;i++){
               let actionsObj = actions[actionsKeys[i]]
               let li = D.createElement("li");
               let a = D.createElement("a");
    
               a.title = actionsObj.title;
               a.href = "javascript:;"
               a.classList.add("editor-a-btn");
            //    a.onclick = actionsObj.actions;  // 采用有问题

               // 使用addEventListener 来绑定事件
               actionsObj.element = a;
               

               if(actionsObj.hoverLeave){
                 actionsObj.hoverLeave(li,this)
               }

               a.addEventListener("click",function(e){
                   if(!actionsObj.hoverLeave){
                     actionsObj.actions(this)
                   }
               })

               a.innerHTML = `<i class="iconfont ${actionsObj.icon}"></i>`;
               li.append(a)
               editorUl.append(li)
            }
            editorWarp.classList.add("simple-editor-wrap")
            editorHeader.classList.add("simple-editor-header")
            editorUl.classList.add("simple-editor-ul")
            editorBody.innerHTML = "<div><br/></div>" // 回车以div换行问题
            editorBody.classList.add("simple-editor-body")
            editorBody.setAttribute("contentEditable",true)
    
            editorHeader.append(editorUl)
            editorWarp.append(editorHeader)
            editorWarp.append(editorBody)
            this.el.innerHTML = "";
            this.el.append(editorWarp)
        },
        /**
         * 
         * 扩展功能 
         */
        extends(obj = {}){
            Editor.prototype = Object.assign(this,obj)
        }
    
    }

    /**
     * 扩展功能
     */
    Editor.fn.extends({
        // 获取光标对象
        getCursor(){
            let  selection = window.getSelection();
            let range = selection.getRangeAt(0);
            return range
        },

        // 头部样式激活
        activeIcon(){
            // console.log("加粗" +document.queryCommandValue("bold"))
            // console.log("背景色" +document.queryCommandValue("backColor"))
            // console.log("字体颜色" +document.queryCommandValue("foreColor"))
            // console.log("斜体" +document.queryCommandValue("italic"))
            // console.log("删除线" +document.queryCommandValue("Strikethrough"))
            // console.log("左对齐" +document.queryCommandValue("justifyLeft"))
            // console.log("居中" +document.queryCommandValue("justifyCenter"))
            // console.log("右对齐" +document.queryCommandValue("justifyRight"))
            // console.log("下划线" + document.queryCommandValue("underline"))
            // console.log("有序列表" +document.queryCommandValue("insertOrderedList"))
            // console.log("无序列表" +document.queryCommandValue("insertUnorderedList"))
            let keyAryLength = actionsKeys.length
            for(let i=0;i<keyAryLength;i++){
                actions[actionsKeys[i]].active()
            }

        },
        changeTag(tag){ // 改变标签
            exce("formatBlock",tag)
        },
        focusResetRange(){ // 获取焦点
            this.el.querySelector(".simple-editor-body").focus()
            let range = this.blurRange
            this.resetRange(
                    range.startContainer,
                    range.startOffset,
                    range.endContainer,
                    range.endOffset
            )

            return range
             
        },
        resetRange(startContainer,startOffset,endContainer,endOffset){ // 定位光标
            let selection  =  window.getSelection();

            selection.removeAllRanges();
        
            let range  =  document.createRange();
            
            range.setStart(startContainer,startOffset);
            
            range.setEnd(endContainer,endOffset);
            
            selection.addRange(range);
        }
        
    })








    
    /**
     * 常用工具方法
     */


    
    /**
     * 事件
     **/

    // change 事件
    // Editor.prototype.onchange = function (callback=()=>{}){
    //       // 回调
    //     //   this.options.onchange(content)
    //       callback(this.data.inputContent)
    // }

    // 光标变化事件
    // Editor.prototype.cursorChange = function(content){
    //     // 回调
    //     this.options.onchange(content)
    //     // callback(this.data.inputContent)
    // }


    // 工具方法

    // Editor.prototype.utils = function(){
       
    //     // 获取光标信息
    //     function getCursor(){
    //         let  selection = window.getSelection();
    //         let range = selection.getRangeAt(0);
    //         console.log(range)
    //  }
        
    //     return {
    //         getCursor,
    //     }

    // }


    






    


    // document.querySelector('.simple-editor-ul li a').onclick = function(){
    //     console.log(111)
    //     let aa = document.execCommand("bold", false, null);
    //     console.log(aa);//若log输出true说明点击按钮后按钮生效；
    // }




})(window)



let editorBar = new Editor("#editWarp",{
                
})




