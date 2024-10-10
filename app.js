var makeupProduct = {
    Maybelline: {
      NewYork: {
       img:"images/differ.webp",
        productName: "Lipstick",
        shade: "Red",
        price: "$10",
      },
      turkey:{
        img:"images/mascara.jpg",
        productName: "mascara",
        shade: "blue",
        price: "$20",
      
      },
      Paris: {
        img:"./images/f3.webp",
        productName: "Foundation",
        shade: "Beige",
        price: "$15",
      },
      Pakistan:{
        img:"./images/mascara 4.webp",
        productName: "mascara",
        shade: "blue",
        price: "$20",
      
      }
    },
    LOreal: {
      Paris: {
        img:"images/f4.webp",
        productName: "Foundation",
        shade: "Beige",
        price: "$15",
      },
      Pakistan:{
        img:"./images/mascara 3.webp",
        productName: "mascara",
        shade: "blue",
        price: "$20",
      
      }
    },
    Revlon: {
      London: {
        img:"images/mascara 2.jpg",
        productName: "Mascara",
        shade: "Black",
        price: "$12",
      },
      Pakistan :{
        img:"images/brown.png",
        productName: "Lipstick",
        shade: "pink",
        price: "$8",
      },
       Paris: {
        img:"./images/f5.jpg",
        productName: "Foundation",
        shade: "Beige",
        price: "$15",
      }
    },
    MAC: {
      Toronto: {
        img:"images/e2.jpg",
        productName: "Eyeshadow",
        shade: "Gold",
        price: "$20",
      },
    },
    NARS: {
      Tokyo: {
        img:"images/e3.jpg",
        productName: "Eyeshadow",
        shade: "Pink",
        price: "$18",
      },
    Pakistan:{
        img:"./images/mascara 5.webp",
        productName: "mascara",
        shade: "blue",
        price: "$20",
      
      }
    }

  
  }


  var main = document.querySelector("#sec-2")
  var brand = document.querySelector("#brand")
  var country = document.querySelector("#country")

  brand.innerHTML = `<option value="">Select brand </option>`
  
  country.innerHTML = `<option value="">Select country name</option>`
 

  


  for(var key in makeupProduct){

    brand.innerHTML += `<option value="${key}">${key}</option>`
    for(var key1 in makeupProduct[key]){
         
        
        
        console.log(makeupProduct[key][key1]);
    var obj = makeupProduct[key][key1]

    main.innerHTML +=` <div class="card text-center" style="width: 18rem;">
            <img src="${obj.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${obj.productName}</h5>
              <p class="card-text">${obj.price}</p>
              <a href="#" class="btn btn-success">${obj.shade}</a>
            </div>
          </div>`
          
            
          }
  
        
    
  }


  function setCountry(){
    country.innerHTML = ""
    country.innerHTML =`<option value ="">select country name </option>`
for(var key in makeupProduct[brand.value]){
  country.innerHTML +=`<option value ="${key}">${key} </option>`
  
}
  
  }

var selectedCard = document.getElementById("selectedCard");

  function searchProduct(){

    // console.log(makeupProduct[brand.value][country.value]);
  
    var userVal = makeupProduct[brand.value][country.value]
   
    
    selectedCard.innerHTML = `<div class="card text-center" style="width: 18rem;">
            <img src="${userVal.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${userVal.productName}</h5>
              <p class="card-text">${userVal.price}</p>
              <a href="#" class="btn btn-primary">${userVal.shade}</a>
            </div>
          </div>`
             main.style.display = 'none'
          
    
    
  }
  function clearProduct (){
    selectedCard.style.display ='none'
    main.style.display= "flex"
  }

  