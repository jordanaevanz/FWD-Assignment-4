
const button = document.querySelector('#set-btn');
button.addEventListener('click', () => {

class UrlBuilder {
    constructor(base) {
      this.base = base;
    }
  

  
    build() {
      let url = this.base;
      return url;
    }
  }
  
const factsUrlBuilder = new UrlBuilder('https://api.thecatapi.com/v1/images/search');

const factsUrl = factsUrlBuilder.build();
    fetch(factsUrl, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'
    //    'Access-Control-Allow-Origin': 'http://10.0.0.185:8080'
    //     'Origin': 'http://10.0.0.185:8080'
    }
      })
        .then(response => response.json())
        .then(json => {
          for (const catfact of json) {
            const image = document.createElement('img');
            image.src = catfact.url;
            image.style.width = '40%';
            image.style.padding = '10px';
            document.body.appendChild(image);
          }
        })
        .catch(error => {
          console.error(error);
        });  
});
