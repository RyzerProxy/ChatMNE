function setTitle(){
    var title = document.getElementById('title').value;
    localStorage.setItem('title',title);
    document.title = title;
}
function setIcon(){
    var icon = document.getElementById('icon').value;
    localStorage.setItem('icon',icon);
    setIcoLink(icon);
}
function setBlank(){
    var blanktab = document.getElementById('blanktab').value;
    console.log(blanktab);
    localStorage.setItem('blanktab',blanktab);
}
function reset(){
    localStorage.removeItem('title');
    localStorage.removeItem('icon');
    setIcoLink('icon36.png');
    document.title = 'Totally Science'
}
function setIcoLink(linkIcon){
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = linkIcon;
}
var btnTitle = document.getElementById("btnTitle");
btnTitle.addEventListener("click", setTitle);

var btnIcon = document.getElementById("btnIcon");
btnIcon.addEventListener("click", setIcon);

var btnBlank = document.getElementById("btnBlank");
btnBlank.addEventListener("click", setBlank);

var btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", reset);
