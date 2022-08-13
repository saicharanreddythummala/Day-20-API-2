// function to get data
const getData = async()=>{
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = await response.json()
    createCard(data);
}
getData();


// container element
const container  = document.createElement('div');
container.classList.add("container","border","border-3")

document.body.append(container);

// create card function
const createCard = (data)=>{
   data.map(item=>{
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = `${item.image}`;
    img.classList.add("card-img");

    const sideDiv = document.createElement("div");

    const org = document.createElement('h6');
    org.innerText = `Original title: ${item.original_title}`

    const desc = document.createElement("p");
    desc.innerText = `${item.description}`

    sideDiv.append(org)
    sideDiv.append(desc)

    card.append(img);
    card.appendChild(sideDiv)

    document.querySelector('.container').append(card);
   })
}
