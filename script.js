let box = document.querySelector('.box');

function capcha(){
    let str = `1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCBNM`
    let store = '';
    
    for(let i=0;i<4;i++){
        let lenghtOfStr = str.length;
        let fetchRandom = Math.random();

        let RandomNumber = Math.floor(lenghtOfStr*fetchRandom);
        let char = str.charAt(RandomNumber);
        store+=char;
    }

    box.innerHTML = store;
}

