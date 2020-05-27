const url = 'https://my-json-server.typicode.com/jubs16/Products/Products'


function getPosts() {
  fetch(url)
  .then(response => response.json())
  .then((posts) => {
    return posts.forEach(function(x) {
      const ul = document.getElementById('fetch')

      let img = document.createElement('img')
      img.src = `${x.imgUrl}`

      let li = document.createElement('li')
      li.innerHTML = `${x.name} $${x.price}`
     
      ul.appendChild(li)
      ul.appendChild(img)
    })
  
  })
}
getPosts()