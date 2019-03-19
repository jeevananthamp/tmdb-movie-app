
  async function trendingFun()
  {
      var response={};
    //var divLength = document.getElementById('container-div');//check clicking count
      var response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a2a00a05223270ce080591e23927a98d');
      var results = await response.json();   //results array contain the result from tmdb
      var divLength = document.getElementById('container-div');
      if(divLength.children.length===0)
      {
      moviecard(results);
     // console.log(results);
    }
    else if(divLength.children.length>0&& divLength.children.length<=12)
    {
      document.querySelector('.container-fluid').innerHTML="";
      trendingFun();
    }
  }
      // console.log(results['results'][0]);
      // console.log(results['results'][0]['title']);
      // console.log(results['results'][0]['poster_path']);
      async function searchFun()
{   
    var response={};
    var search = document.getElementById('search-id');
    var searchText = search.textContent;
    searchText = search.value;
    var starttxt=`https://api.themoviedb.org/3/search/movie?api_key=a2a00a05223270ce080591e23927a98d&language=en-US&query=${searchText}&page=${1}&include_adult=false`;
        var response = await fetch(starttxt);
        var results = await response.json();   //results array contain the result from tmdb
        var divLength = document.getElementById('container-div');
    
        if(divLength.children.length===0)
        {
        moviecard(results);
      }
      else if(divLength.children.length>0&& divLength.children.length<=12)
      {
        document.querySelector('.container-fluid').innerHTML="";
        searchFun();
      }
      }

 
function moviecard(results){

              var carousel = document.querySelector('.carousel-inner');
              
              var carouselactive = document.createElement('div'); 
              carouselactive.className='carousel-item active';  
              carousel.appendChild(carouselactive);

              var row = document.createElement('div'); 
              row.className='row';  
              carouselactive.appendChild(row);

          for(let i=0;i<results['results'].length;i++){
             
              var col= document.createElement('div'); 
              row.className='col-md-4';  
              row.appendChild(col);

              var itembox = document.createElement('div'); 
              itembox.className='item-box-blog';  
              col.appendChild(itembox);

              var itemboximage = document.createElement('div');
              itemboximage.className='item-box-blog-image'; 
              itembox.appendChild(itemboximage);   // script for div with class card
              // divCard.className='card col col-md-4 shadow-lg p-1 mb-3 bg-white rounded d-inline-flex';
              var imageUrl = 'https://image.tmdb.org/t/p/w500';
              var image = document.createElement('img');
              image.className='card-img-top img-responsive';         // script for image 
              image.src = imageUrl.concat(results['results'][i]['poster_path']);
              itemboximage.appendChild(image);

              
      
              var cardBody = document.createElement('div');
              cardBody.className = 'item-box-blog-body';            //script for body div
              itembox.appendChild(cardBody);
      
              var cardTitle = document.createElement('h6');
              cardTitle.className = 'item-box-blog-heading';   //script for body title
              if(results['results'][i]['title'].length>15)
                   cardTitle.textContent = results['results'][i]['title'].substr(0,15);
              else
              cardTitle.textContent = results['results'][i]['title'];
          
              cardBody.appendChild(cardTitle);
      
              var cardOverview = document.createElement('p');
              cardOverview.className='item-box-blog-data'; //script to add overview of movie
              if(results['results'][i]['overview'].length>100)
                   cardOverview.textContent = results['results'][i]['overview'].substr(0,100);
              else
                 cardOverview.textContent = results['results'][i]['overview'];
              cardBody.appendChild(cardOverview);
      
              var div = document.createElement('div');     //add readmore to text
              div.className = 'badge badge-primary';
              div.textContent = 'readmore';
              cardBody.append(div);
      
              var ul = document.createElement('ul');
              ul.className='list-group list-group-flush';  //script for ul
              itembox.appendChild(ul);
      
              var li = document.createElement('li');
              li.className='list-group-item bg-light';   
              var txt ='Ratings : '   //script to add release date
              li.textContent = txt.concat(results['results'][i]['vote_average']);
              ul.appendChild(li);
      
                 var addfavDiv = document.createElement('div');
                 addfavDiv.style.textAlign='center';
                 addfavDiv.className = 'card-footer';  // script for div to insert add to favourites button
                   itembox.appendChild(addfavDiv);
      
                  var favButton = document.createElement('BUTTON');
                 favButton.className = 'btn btn-warning';
              
              var text = document.createTextNode("Add to favourites");
                  favButton.appendChild(text);
                  favButton.id = `myBtn${i}`;
                addfavDiv.appendChild(favButton);
              console.log(results['results'][i]['id']);
              document.getElementById(`myBtn${i}`).addEventListener("click", fav);
              
              function fav()
              {
        
                //let id=alert(event.srcElement.id);
                let favourites = JSON.parse(localStorage.getItem('favourites'))||[];
                //console.log("test"+id);
                console.log(results['results'][i]['vote_average']);
                favourites.push(results['results'][i]);
                console.log(results['results'][i]);
                localStorage.setItem('favourites', JSON.stringify(favourites));

            
        
          }
        }
      }  
      
     
