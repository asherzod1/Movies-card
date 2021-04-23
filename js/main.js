let cardsDiv= document.querySelector('.cards');
let containerDiv=document.querySelector('.container');

function chiqarish(){
    for(let i=0; i<movies.length; i++){
        let movie=movies[i];
        let cardDiv=document.createElement('div');
        cardDiv.classList.add('card');
    
        let img=document.createElement('img');
        img.src=movie.posterurl;
        img.classList.add('card_img');
    
        let cardInfoDiv=document.createElement('div');
        cardInfoDiv.classList.add('cardInfo');
    
        let title_movie=document.createElement('a');
        title_movie.innerText=movie.title;
        title_movie.classList.add('cardInfo_a')
    
        let year_movie=document.createElement('h3');
        year_movie.innerText=movie.year;
    
        let rating_movie=document.createElement('h3');
        rating_movie.innerText=movie.imdbRating;
    
        let genres_movie=document.createElement('h3');
        genres_movie.innerText=movie.genres;
    
        cardInfoDiv.appendChild(title_movie);
        cardInfoDiv.appendChild(year_movie);
        cardInfoDiv.appendChild(rating_movie);
        cardInfoDiv.appendChild(genres_movie);
    
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardInfoDiv);
    
        cardsDiv.appendChild(cardDiv);
    
    }
}


chiqarish();

function saralash(qiymat){
    let a=qiymat;
    cardsDiv.innerHTML='';
    for(let i=0; i<movies.length; i++){
        if(movies[i].genres.includes(a)){
            
                let movie=movies[i];
                let cardDiv=document.createElement('div');
                cardDiv.classList.add('card');
            
                let img=document.createElement('img');
                img.src=movie.posterurl;
                img.classList.add('card_img');
            
                let cardInfoDiv=document.createElement('div');
                cardInfoDiv.classList.add('cardInfo');
            
                let title_movie=document.createElement('a');
                title_movie.innerText=movie.title;
                title_movie.classList.add('cardInfo_a')
            
                let year_movie=document.createElement('h3');
                year_movie.innerText=movie.year;
            
                let rating_movie=document.createElement('h3');
                rating_movie.innerText=movie.imdbRating;
            
                let genres_movie=document.createElement('h3');
                genres_movie.innerText=movie.genres;
            
                cardInfoDiv.appendChild(title_movie);
                cardInfoDiv.appendChild(year_movie);
                cardInfoDiv.appendChild(rating_movie);
                cardInfoDiv.appendChild(genres_movie);
            
                cardDiv.appendChild(img);
                cardDiv.appendChild(cardInfoDiv);
            
                cardsDiv.appendChild(cardDiv);
            
            
            
        }
    }
}

