const handleCategory = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json()
    const categoryItem = data.data
    console.log(categoryItem);

    const tabContainer = document.getElementById('tab_container')
    categoryItem.forEach(category =>{
      const div = document.createElement('div')
      div.innerHTML = `
         <a onclick="handleLoadNews('${category.category_id}')">${category.category}</a>
      `
      tabContainer.appendChild(div)

    })   
}


const handleLoadNews = async (id) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await response.json()
    const items = data.data
    console.log(items);
    const cardContainer = document.getElementById('cardContainer')
    cardContainer.textContent = ''
    items?.forEach(item =>{
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="card" style="width: 18rem;">
        <img src="${item.thumbnail}" class="card-img-top banner_img" alt="...">
        <div class="card-body">
           <div class="d-flex justify-content-start align-items-start">
               <img class="profile_img" src="${item.authors[0].profile_picture}" alt="">
               <div class="desc">
                  <p class="title">${item.title}</p>
                  <p class='pro_desc'>${item.authors[0].profile_name}</p>
                  <p class='pro_desc'>${item.others.views}</p>
               </div>
           </div>
        </div>
    </div>      
   `
  cardContainer.appendChild(div)
    })
    console.log(items);
}

handleCategory()
handleLoadNews('1000')