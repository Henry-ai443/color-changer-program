function changeColor(){
    const colors = ['red', 'blue', 'green','yellow','purple', 'pink'];
    const currentColor = document.body.style.backgroundColor;
    let colorIndex = colors.indexOf(currentColor);

    if(currentColor === -1){
        colorIndex = 0;
    }else{
        colorIndex = (colorIndex + 1) % colors.length;
    }

    document.body.style.backgroundColor = colors[colorIndex];
}