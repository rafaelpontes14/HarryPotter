const getPosts = async () => {
  const url = await fetch(`http://hp-api.herokuapp.com/api/characters`)
  data = await url.json()
  console.log(data)

  data.forEach(function(oi) {
    document.querySelector('.container').innerHTML += `
    <h1>${oi.name}</h1>
    <img src="${oi.image}">
    <p>${oi.gender}</p>
    
    `
  })
}

getPosts()



// button     background: linear-gradient(
// 269.16deg, #FFE580 -15.83%, #FF7571 -4.97%, #FF7270 15.69%, #EA5DAD 32.43%, #C2A0FD 50.09%, #9867F0 67.47%, #3BF0E4 84.13%, #33CE43 105.13%, #B2F4B6 123.24%);


