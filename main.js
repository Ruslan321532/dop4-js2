const row = document.querySelector('.row')

fetch(`https://api.sampleapis.com/coffee/hot`) 
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        row.innerHTML += `
            <div class="card__coffee">
                <img src="${item.image}" alt=""/>
                <p class="">${item.title}</p>
                <p class="">${item.description}</p>
                <p class="">${item.ingredients}</p>
            </div>
        `
    })
})