exports.textResize=(text,width)=>{
    if(width<text.length){
        text = text.substring(0,width)+"...";
    }
    return text;
}