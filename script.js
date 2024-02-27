var h1 = document.createElement(`h1`);
document.body.append(h1);

setTimeout(function(){
    document.querySelector(`h1`).innerText = `counter : ${10}`} , 1000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${9}`;
    }, 2000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${8}`;
    }, 3000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${7}`;
    }, 4000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${6}`;
    }, 5000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${5}`;
    }, 6000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${4}`;
    }, 7000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${3}`;
    }, 8000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${2}`;
    }, 9000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `counter : ${1}`;
    }, 10000);

    setTimeout(function(){
        document.querySelector(`h1`).innerText = `Happy Independence Day`;
    }, 11000);
