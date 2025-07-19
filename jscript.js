function showOnly(idToShow){
    const section=['skills','education'];
    section.forEach(id => {
        const el = document.getElementById(id);
        if(id === idToShow){
            el.classList.add('show');
        }else{
            el.classList.remove('show')
        }
    });
}