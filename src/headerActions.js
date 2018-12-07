
import exce from './exce'

const actions = {
    bold:{
        title:'加粗',
        name:'bold',
        icon:'icon-fuhao-jiacu',
        show:true,
        actions:(e)=>{
            var result = exce("bold");
            console.log(result)
            if(result){
                e.classList.toggle("active")
            }
            return result
        },
    },
    formatBlock:{
        title:'H1~H6标题',
        name:'formatBlock',
        icon:'icon-titleicon',
        show:true,
        actions:()=>{
            var result =  exce("formatBlock","<h1>");
            console.log(result)



            return result
        }
    },
    backColor:{
        title:'背景色',
        name:'backColor',
        icon:'icon-zitibeijingse',
        show:true,
        actions:()=>exce("backColor","red")
    },
    fontName:{
        title:'字体样式',
        name:'fontSize',
        icon:'icon-728bianjiqi_zitidaxiao',
        show:true,
        actions:()=>exce("fontName","Serif")
    },
    fontSize:{
        title:'字体大小',
        name:'fontSize',
        icon:'icon-728bianjiqi_zitidaxiao',
        show:true,
        actions:()=>exce("fontSize","18px")
    },
    foreColor :{
        title:'字体颜色',
        name:'foreColor',
        icon:'icon-716bianjiqi_zitiyanse',
        show:true,
        actions:()=>exce("foreColor","green")
    },
    italic:{
        title:'斜体',
        name:'italic',
        icon:'icon-italic',
        show:true,
        actions:()=>exce("italic")
    },
    underline:{
        title:'下划线',
        name:'italic',
        icon:'icon-705bianjiqi_Uxiahuaxian',
        show:true,
        actions:()=>exce("underline")
    },
    Strikethrough:{
        title:'删除线',
        name:'italic',
        icon:'icon-strikethrough',
        show:true,
        actions:()=>exce("Strikethrough")
    },
    justifyLeft:{
        title:'左对齐',
        name:'italic',
        icon:'icon-juzuoduiqi',
        show:true,
        actions:()=>exce("justifyLeft")
    },
    justifyCenter:{
        title:'居中',
        name:'italic',
        icon:'icon-juzhongduiqi',
        show:true,
        actions:()=>exce("justifyCenter")
    },
    justifyRight:{
        title:'右对齐',
        name:'italic',
        icon:'icon-juyouduiqi',
        show:true,
        actions:()=>exce("justifyRight")
    },
    indent:{
        title:'右缩进',
        name:'indent',
        icon:'icon-yousuojin',
        show:true,
        actions:()=>exce("indent")
    },
    outdent:{
        title:'左缩进',
        name:'outdent',
        icon:'icon-zuosuojin',
        show:true,
        actions:()=>exce("outdent")
    },
    insertOrderedList:{
        title:'有序列表',
        name:'italic',
        icon:'icon-youxuliebiao',
        show:true,
        actions:()=>{
            exce("formatBlock","<ol>");
            var result =  exce("insertOrderedList");
                
             


            return result;
        }
    },
    insertUnorderedList:{
        title:'无序列表',
        name:'italic',
        icon:'icon-liebiao',
        show:true,
        actions:()=>exce("insertUnorderedList")
    },
    createLink:{
        title:'超链接',
        name:'italic',
        icon:'icon-link',
        show:true,
        actions:()=>exce("createLink")
    },
    inserHorizontalRule:{
        title:'分割线',
        name:'copy',
        icon:'icon-758bianjiqi_fengexian',
        show:true,
        actions:()=>exce("inserHorizontalRule")
    },
    copy:{
        title:'复制',
        name:'copy',
        icon:'fa-cut',
        show:true,
        actions:()=>exce("copy")
    },
    cut:{
        title:'剪切',
        name:'copy',
        icon:'fa-cut',
        show:true,
        actions:()=>exce("cut")
    },
 }


export default  actions