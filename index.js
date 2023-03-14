var searchBox = document.querySelector('.search');
var searchIcon = document.querySelector('.searchIcon');
var body = document.querySelector('.app-body');


searchBox.value = '';
searchBox.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        apiRequest();
    }
})


  

  
  apiRequest = () => {
    body.textContent = "";
  
    const url = 'https://api.unsplash.com/search/photos?query='+searchBox.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    searchBox.value = '';
    fetch(url)
    
      .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
  
     .then(data => {
        loadImages(data);
     })
  
     .catch(error => console.log(error));   
  }
  
  loadImages = (data) => {
    for(let i = 0;i < data.results.length;i++){
      let image = document.createElement("div");
      image.className = "img";
      image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
      image.addEventListener("dblclick", function(){
        window.open(data.results[i].links.download, '_blank');
      })

        body.appendChild(image)
    }
  }