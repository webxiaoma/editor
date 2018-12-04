import './css/index.less'
import actions from './headerActions'

;(function(){
    
    function Editor(el,options = {}){
         this.el = document.querySelector(el);
         this.options = options;

         return this.init()
    }

    Editor.prototype.init = function(){
        this.layout()
        return this
    }

    Editor.prototype.layout = function(){ // 富文本框构架样式
        let D = document;

        let editorWarp = D.createElement('div');
        let editorHeader = D.createElement('div');
        let editorBody = D.createElement('div');
        let editorUl = D.createElement("ul")

        let keyAry = Object.keys(actions)
        for(let i=0,len=keyAry.length;i<len;i++){
           let actionsObj = actions[keyAry[i]]
           let li = D.createElement("li");
           let a = D.createElement("a");

           a.title = actionsObj.title;
           a.href = "javascript:;"
           a.classList.add("editor-a-btn");
           a.onclick = actionsObj.actions;
           a.innerHTML = `<i class="fa ${actionsObj.icon}"></i>`;
           li.append(a)
           editorUl.append(li)
        }

        editorWarp.classList.add("simple-editor-wrap")
        editorHeader.classList.add("simple-editor-header")
        editorUl.classList.add("simple-editor-ul")
        editorBody.classList.add("simple-editor-body")
        editorBody.setAttribute("contentEditable",true)

        editorHeader.append(editorUl)
        editorWarp.append(editorHeader)
        editorWarp.append(editorBody)
        this.el.innerHTML = "";
        this.el.append(editorWarp)
    }
    




    // document.querySelector('.simple-editor-ul li a').onclick = function(){
    //     console.log(111)
    //     let aa = document.execCommand("bold", false, null);
    //     console.log(aa);//若log输出true说明点击按钮后按钮生效；
    // }






















    let editorBar = new Editor("#editWarp",{

    })

    console.log(editorBar)

})()