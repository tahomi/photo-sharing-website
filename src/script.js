function classAdder(obg,_class){
    obg.className = _class;
    return obg;
}

function photoAdder (ref){
    var container = classAdder(document.createElement("div"), 'photo-container');
    var mainImg = classAdder(document.createElement("img"),'main-img');
    var date = classAdder(document.createElement("span"),'date');
    var imgStar = classAdder(document.createElement("div"), 'img-star');
    var imgText = classAdder(document.createElement("span"),'img-text');
    var star = classAdder(document.createElement("img"),'star');
    var hr = classAdder(document.createElement("hr"),'hr');
    var share = classAdder(document.createElement("span"),'share');
    var tumler = classAdder(document.createElement("a"),'tumbler link');
    var facebook = classAdder(document.createElement("a"),'facebook link');
    var pinterest = classAdder(document.createElement("a"),'pinterest link');
    var twitter = classAdder(document.createElement("a"),'twitter link');
    mainImg.src = ref;
    star.src = 'src/img/star.gif'
    date.id='date-text'
    
    

    container.appendChild(mainImg)
    container.appendChild(date)
    container.appendChild(imgStar)
    imgStar.appendChild(imgText)
    imgStar.appendChild(star)
    container.appendChild(hr)
    container.appendChild(share)
    container.appendChild(twitter)
    container.appendChild(facebook)
    container.appendChild(pinterest)
    container.appendChild(tumler) 

    content.appendChild(container)
    
    var now = new Date();
    
    date.innerHTML = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear()
    imgText.innerHTML = 'Lorem Ipsum is simply '
    share.innerHTML = 'Share'
}
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')
photoAdder('src/img/1.jpg')






