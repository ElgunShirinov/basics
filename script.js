const head = document.querySelector('.head');
const dark = document.querySelector('.dark');

const whitebtn = document.querySelector('.whitebtn');
const darkbtn = document.querySelector('.darkbtn');

const showmenu = () => {
    head.attributes[0].value = "hide";
    dark.attributes[0].value = "show";
}

const hidemenu = () => {
    head.attributes[0].value = "show";
    dark.attributes[0].value = "hide";
}

whitebtn.onclick = showmenu;
darkbtn.onclick = hidemenu;