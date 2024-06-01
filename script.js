document.addEventListener("DOMContentLoaded", leftPos);
document.addEventListener("DOMContentLoaded", positionNode);
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

const intervalSize = 500;

function positionNode(){
    const containerRect = document.getElementById('container').getBoundingClientRect();
    const nodes = document.getElementsByClassName('historyNode');
    let height = 150;
    for(let i = 0; i < nodes.length; i++){
        nodes[i].style.position = 'absolute';
        if(i%2 == 0){
            const pos = (containerRect.width / 2) + 210;
            nodes[i].style.left = `${pos}px`;
        } else {
            const pos = (containerRect.width / 2) - 210 - nodes[i].offsetWidth;
            nodes[i].style.left = `${pos}px`;
            let text1 = nodes[i].firstElementChild;
            const pp1 = nodes[i].offsetWidth - text1.offsetWidth;
            text1.style.marginLeft = `${pp1}px`;
            
        }
        if (i > 0){
            height += intervalSize;
            if(i === nodes.length-1){
                height += 350;
            }
            nodes[i].style.top = `${height-30}px`;
        } else {
            nodes[i].style.top = `90px`;
        }
    }

    for(let i = 0; i < nodes.length; i++){
        const modal = nodes[i].getElementsByClassName('modal');
        nodes[i].addEventListener('click', () => {
            modal[0].style.display = 'block';
        });
    }

}

function leftPos(){
    const containerRect = document.getElementById('container').getBoundingClientRect();
    const box = document.getElementsByClassName('hl');
    let Height = 150;
    for(let i = 0; i < box.length; i++){
        box[i].style.position = 'absolute';
        if(i%2 == 0){
            box[i].style.left = '50%';
        } else {
            const boxWidth = box[i].offsetWidth;
            const leftPosition = (containerRect.width / 2) - boxWidth;
            box[i].style.left = `${leftPosition}px`;
        }
        if(i > 0){
            Height += intervalSize;
            if(i === box.length-1){
                Height += 350;
            }
            box[i].style.top = `${Height}px`; 
        }
    }

}