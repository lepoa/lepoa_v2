async function n(o){try{if(navigator.clipboard&&typeof ClipboardItem<"u"){const e=new Blob([o],{type:"text/plain;charset=utf-8"});return await navigator.clipboard.write([new ClipboardItem({"text/plain":e})]),!0}return navigator.clipboard?(await navigator.clipboard.writeText(o),!0):r(o)}catch(e){return console.warn("Clipboard API failed, using fallback:",e),r(o)}}function r(o){const e=document.createElement("textarea");e.value=o,e.style.cssText=`
    position: fixed;
    top: 0;
    left: -9999px;
    width: 1px;
    height: 1px;
    padding: 0;
    border: none;
    outline: none;
    box-shadow: none;
    background: transparent;
  `,document.body.appendChild(e),e.focus(),e.select();let t=!1;try{t=document.execCommand("copy")}catch(a){console.error("execCommand copy failed:",a)}return document.body.removeChild(e),t}export{n as c};
