var data = {
    login : 'admin',
    pass : 'Gleb lox'
};

const
panel = document.querySelector('.admin'),
btn = document.querySelector('.submit'),
catalog = document.querySelector('.catalog'),
name = document.querySelector('.card-name-in'),
desc = document.querySelector('.image-in'),
img = document.querySelector('.desc');

document.onkeydown = (e)=>{
    if(e.code == 'KeyP'){
        const l = prompt('Введите логин');
        const p = prompt('Введите пароль');

        if(l == data.login & p == data.pass){
            panel.classList.toggle('hidden')
        }
    }

    if(e.code == 'KeyQ' && panel.style.dissplay == 'block'){
        panel.classList.toggle('hidden')
    }
};

btn.onclick = ()=>{

    const div = document.createElement('div');
    div.setAttribute('class', "card");
    
    const label = document.createElement('label');
    label.setAttribute('class', "card-name");
    label.setAttribute('value', name.value)

    const img = document.createElement('img');
    img.setAttribute('class', "card-image");

    const label2 = document.createElement('label');
    label2.setAttribute('class', "card-desc");

    const btn = document.createElement('btn');
    btn.setAttribute('class', "Buy-btn");
    
    catalog.appendChild(div);
    div.appendChild(label);

};