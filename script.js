const allMovies = [
    {
      id: 0,
      title: "Her",
      src: "img/1.jpeg",
    },
    {
      id: 1,
      title: "Star Wars",
      src: "img/2.jpeg",
    },
    {
      id: 2,
      title: "Storm",
      src: "img/3.jpg",
    },
    {
      id: 3,
      title: "1917",
      src: "img/4.jpg",
    },
    {
      id: 4,
      title: "Avengers",
      src: "img/5.jpg",
    },
    {
      id: 5,
      title: "Oblivion",
      src: "img/8.jpg",
    },
    {
      id: 6,
      title: "The Hobbit",
      src: "img/9.jpg",
    },
    {
      id: 7,
      title: "Aquaman",
      src: "img/17.jpg",
    },
    {
      id: 8,
      title: "Amazing Spider-Man 2",
      src: "img/19.jpg",
    },
]
const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list')
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle')

movieLists.forEach(item=>{
    allMovies.forEach(({id,title,src})=>{
        item.innerHTML += `
            <div class="movie-list-item" id='${id}'>
                <img class="movie-list-item-img" src="${src}" alt="">
                <span class="movie-list-item-title">${title}</span>
                <p class="movie-list-item-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo dolor
                    deserunt nam assumenda ipsa eligendi dolore</p>
                <button class="movie-list-item-button">Watch</button>
            </div>`
    })
})


console.log(movieLists.innerHTML)

arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll('img').length
    let clickedCounter = 0;
    arrow.addEventListener('click', ()=>{
        clickedCounter++;
        if(itemNumber - (4+clickedCounter)>=0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
                -300}px)`
        }else{
            movieLists[i].style.transform = 'translateX(0)'
            clickedCounter = 0
        }
        
    });
    console.log(movieLists[i].querySelectorAll('img').length)

})

ball.addEventListener('click',()=>{
    items.forEach(item =>{
        item.classList.toggle("active")
    })
    ball.classList.toggle('active')
    console.log(ball.className)
})
