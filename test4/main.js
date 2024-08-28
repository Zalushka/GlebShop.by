var data = {
    login : 'admin',
    pass : 'Gleb lox'
};

document.onkeydown = (e)=>{
    if(e.code == 'KeyP'){
        const l = prompt('Введите логин');
        const p = prompt('Введите пароль');

        if(l == data.login & p == data.pass){
            console.log('hello')
        }
    }
};