import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button{
        margin:0;padding:0
    }
fieldset,img{
    border:0 none
}
dl,ul,ol,menu,li{
    list-style:none
}
blockquote, q{
    quotes: none
}
blockquote:before, blockquote:after,q:before, q:after{
    content:'';content:none
}
input,select,textarea,button{
    vertical-align:middle
}
input::-ms-clear{
    display:none
}
button{
    border:0 none;background-color:transparent;cursor:pointer
}
body{
    background:#fff
}
body,th,td,input,select,textarea,button{
    font-size:12px;line-height:1.5;font-family:'돋움',dotum,sans-serif;outline:none
}
a{
    color:#333;text-decoration:none
}
a:active{
    background-color:transparent
}
address,caption,cite,code,dfn,em,var{
    font-style:normal;font-weight:normal
}
/* global */
.direct-link{
    position:absolute;top:-1px;left:0;z-index:1000;height:1px
}
.direct-link a{
    position:absolute;top:-999px;padding:5px 10px;font-weight:bold;color:#fff;background:#333;text-decoration:none;white-space:nowrap
}
.direct-link a:focus{top:0}
.ir_pm{display:block;overflow:hidden;font-size:0;line-height:0;text-indent:-9999px}
.screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}
`

export default GlobalStyle;