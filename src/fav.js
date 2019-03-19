  
           var favourites=JSON.parse(localStorage.getItem('favourites'));
        //    var faid=document.querySelector(".container-fluid");
    
            for(let l=0;l<favourites.length;l++){
               
            
             // faid.setAttribute("src","https://image.tmdb.org/t/p/w500"+myData.results[i].poster_path);
            //   faid.innerHTML=favourites[l].original_title;
            //   faid.innerHTML=favourites[l].vote_average;
            //   faid.innerHTML=favourites[l].overview;
              

        var container = document.querySelector('.container-fluid');
        var divCard = document.createElement('a');
        divCard.style.color="#000";
        var movieId =favourites[l]['id'];
        //divCard.href='/html/modal.html';
      //  divCard.href='/html/favourites.html';
        // divCard.onclick= await addtofavourites.bind(null, movieId);
      //  divCard.onclick= await addtofavourites.bind(null, trendResult['results'][i]);
       // divCard.onclick = await fun(movieId,results);
       // divCard.href=await fun(movieId);
        divCard.style.textDecoration='none';
        divCard.className='card col  col-md-3 shadow-lg p-1 mb-3 bg-white rounded d-inline-flex';    // script for div with class card
        // divCard.className='card col col-md-4 shadow-lg p-1 mb-3 bg-white rounded d-inline-flex';
        divCard.style.width='20rem';
        container.appendChild(divCard);

        var imageUrl = 'https://image.tmdb.org/t/p/w500';
        var image = document.createElement('img');
        image.className='card-img-top img-responsive';         // script for image 
        image.src = imageUrl.concat(favourites[l]['poster_path']);
        divCard.appendChild(image);

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';            //script for body div
        divCard.appendChild(cardBody);

        var cardTitle = document.createElement('h6');
        cardTitle.className = 'card-title alert alert-primary';   //script for body title
        if(favourites[l]['title'].length>15)
             cardTitle.textContent = favourites[l]['title'].substr(0,15);
        else
        cardTitle.textContent = favourites[l]['title'];
    
        cardBody.appendChild(cardTitle);

        var cardOverview = document.createElement('p');
        cardOverview.className='card-text'; //script to add overview of movie
        if(favourites[l]['overview'].length>100)
             cardOverview.textContent = favourites[l]['overview'].substr(0,100);
        else
           cardOverview.textContent = favourites[l]['overview'];
        cardBody.appendChild(cardOverview);

        var div = document.createElement('div');     //add readmore to text
        div.className = 'badge badge-primary';
        div.textContent = 'readmore';
        cardBody.append(div);

        var ul = document.createElement('ul');
        ul.className='list-group list-group-flush';  //script for ul
        divCard.appendChild(ul);

        var li = document.createElement('li');
        li.className='list-group-item bg-light';   
        var txt ='Release date : '   //script to add release date
        li.textContent = txt.concat(favourites[l]['release_date']);
        ul.appendChild(li);

     
                 
              }