const getList = async () => {
    const { data } = await axios.get('/test/checklist');
    console.log(data);
    const articleList = data.result.list;
    let html = ''
    for(const item of articleList){
        html = `${html}<button data-id="${item.id} type="submit"">${item.title}</button>`
        
        const containerEl = document.querySelector('.container');
        containerEl.innerHTML = html;
    } 
    //let show = ''
    // const a = await item.addEventListener('sumbit', (ev) => {
    //     ev.preventDefault();
    
    //     const data = new FormData(ev.target);
    //     // const val = form.get('test');
    //     // console.log('test');
    //     const info = data.get(article.list);
    //     const containerElTwo = document.querySelector('.container__two');
    //     containerElTwo.innerHTML = info 
    // }); return containerElTwo
};

getList();