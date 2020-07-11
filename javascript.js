function set() {
    const sections = document.getElementsByClassName('sections')
    sections[0].style.display = 'flex'
}
set()
function btn(id) {
    const btn = document.getElementById(id)
    const sections = document.getElementsByClassName('sections')
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none'
    }
    sections[id].style.display = 'flex'

}


function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // -46.5
         if (elmnt.offsetTop - pos2 < window.innerHeight-446.5 && elmnt.offsetTop - pos2 > 0) {
             elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
         }
         if (elmnt.offsetLeft - pos1 < window.innerWidth-320 && elmnt.offsetLeft - pos1 > 0) {
             elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
         }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const drag = document.getElementById("drag")
dragElement(drag);

drag.style.bottom = document.getElementById('footer').offsetHeight +'px'



