
import exce from './exce'

const actions = {
    bold:{
        title:'加粗',
        name:'bold',
        icon:'fa-bold',
        show:true,
        actions:(e)=>{
            var result = exce("bold");
            if(result){
                e.classList.toggle("active")
            }
            return result


        },
    },
    backColor:{
        title:'背景色',
        name:'backColor',
        icon:'',
        show:true,
        actions:()=>exce("backColor")
    },
    fontSize:{
        title:'字体大小',
        name:'fontSize',
        icon:'',
        show:true,
        actions:()=>exce("fontSize")
    },
    foreColor :{
        title:'字体颜色',
        name:'foreColor',
        icon:'',
        show:true,
        actions:()=>exce("foreColor")
    },
    italic:{
        title:'斜体',
        name:'italic',
        icon:'fa-italic',
        show:true,
        actions:()=>exce("italic")
    },
    indent:{
        title:'增加文本缩进',
        name:'indent',
        icon:'fa-indent',
        show:true,
        actions:()=>exce("indent")
    },
    outdent:{
        title:'减小文本缩进',
        name:'outdent',
        icon:'fa-outdent',
        show:true,
        actions:()=>exce("outdent")
    },
    copy:{
        title:'剪切',
        name:'copy',
        icon:'fa-cut',
        show:true,
        actions:()=>exce("copy")
    },
 }


export default  actions