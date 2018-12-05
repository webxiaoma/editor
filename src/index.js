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

        // 回车以div换行问题
        this.el.querySelector(".simple-editor-body").addEventListener("keyup",function(e){
            if(e.keyCode === 8){ //按下了删除键
                if(!this.innerHTML){
                    this.innerHTML = "<p><br/></p>"
                }
            }
        })

        this.el.querySelector(".simple-editor-body").addEventListener("input",(e)=>{
            this.onchange(e.target.innerHTML)
        })

        return this
    }

    // 事件
    Editor.prototype.onchange = function (content) {
          console.log(content)
    }

    // 私有
    Editor.prototype.layout = function(){ // 初始化富文本框构架以及样式
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
        //    a.onclick = actionsObj.actions;  // 采用有问题
           // 使用addEventListener 来绑定事件
           a.addEventListener("click",function(e){
               actionsObj.actions(this)
           })
           a.innerHTML = `<i class="fa ${actionsObj.icon}"></i>`;
           li.append(a)
           editorUl.append(li)
        }
        editorWarp.classList.add("simple-editor-wrap")
        editorHeader.classList.add("simple-editor-header")
        editorUl.classList.add("simple-editor-ul")
        editorBody.innerHTML = "<p><br/></p>" // 回车以div换行问题
        editorBody.classList.add("simple-editor-body")
        editorBody.setAttribute("contentEditable",true)

        editorHeader.append(editorUl)
        editorWarp.append(editorHeader)
        editorWarp.append(editorBody)
        this.el.innerHTML = "";
        this.el.append(editorWarp)
    }

    

    // editor 常见问题解决
    Editor.prototype.problem = function(){
       

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