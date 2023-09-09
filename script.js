// product
function menu(num) {
    if (num == 1000) {
      document.getElementById("check2").checked = false;
      document.getElementById("check3").checked = false;
      document.getElementById("check4").checked = false;
      document.getElementById("check5").checked = false;
      document.getElementById("check6").checked = false;
      var c=document.getElementById("check1").checked
    }else if(num==2000){
      document.getElementById("check1").checked = false;
      document.getElementById("check3").checked = false;
      document.getElementById("check4").checked = false;
      document.getElementById("check5").checked = false;
      document.getElementById("check6").checked = false;
      var c=document.getElementById("check2").checked
    }else if(num==3000){
      document.getElementById("check1").checked = false;
      document.getElementById("check2").checked = false;
      document.getElementById("check4").checked = false;
      document.getElementById("check5").checked = false;
      document.getElementById("check6").checked = false;
      var c=document.getElementById("check3").checked
    }else if(num==4000){
      document.getElementById("check1").checked = false;
      document.getElementById("check2").checked = false;
      document.getElementById("check3").checked = false;
      document.getElementById("check5").checked = false;
      document.getElementById("check6").checked = false;
      var c=document.getElementById("check4").checked
    }else if(num==5000){
      document.getElementById("check1").checked = false;
      document.getElementById("check2").checked = false;
      document.getElementById("check3").checked = false;
      document.getElementById("check4").checked = false;
      document.getElementById("check6").checked = false;
      var c=document.getElementById("check5").checked
    }else{
      document.getElementById("check1").checked = false;
      document.getElementById("check2").checked = false;
      document.getElementById("check3").checked = false;
      document.getElementById("check4").checked = false;
      document.getElementById("check5").checked = false;
      var c=document.getElementById("check6").checked
    }
    if(c==true){
        var len_num = num.length
    console.log(len_num)
    if (len_num == 4) {
      var item = document.getElementsByClassName("item")
      var len_i = item.length
      for (let i = 0; i < len_i; i++) {
        var val_item = parseInt(item[i].id)
        if (val_item <= num && val_item >= num - 1000) {
          console.log(val_item)
          let it = document.getElementById(val_item)
          it.classList.remove("none");
        } else {
          let it = document.getElementById(val_item)
          it.classList.add("none");
        }
      }
      console.log(len_i)
    } else {
      var item = document.getElementsByClassName("item")
      var len_i = item.length
      for (let i = 0; i < len_i; i++) {
        var val_item = parseInt(item[i].id)
        if (val_item > 5000) {
          console.log(val_item)
          let it = document.getElementById(val_item)
          it.classList.remove("none");
        } else {
          let it = document.getElementById(val_item)
          it.classList.add("none");
        }
      }
      console.log(len_i)
    }
    }else{
        var item = document.getElementsByClassName("item")
      var len_i = item.length
      for (let i = 0; i < len_i; i++) {
        var val_item = parseInt(item[i].id)
        let it = document.getElementById(val_item)
        it.classList.remove("none");
      }
    }
    
  }
  var i = 0;

function buy() {
    Swal.fire({
        title: 'You want to buy?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            location.href="history.html"
            i++;
            const name = document.getElementById("name").innerText;
            console.log(name);
            const price = document.getElementById("price").innerText;
            console.log(price);

            const purchase = {
                name: name,
                price: price
            };
            const existingPurchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
            existingPurchaseHistory.push(purchase);
            localStorage.setItem('purchaseHistory', JSON.stringify(existingPurchaseHistory));

            const tr = document.createElement("tr");
            const num = document.createElement("th");
            const val_num = document.createTextNode(i);
            const td = document.createElement("td");
            const val_td = document.createTextNode(name);
            const td2 = document.createElement("td");
            const val_td2 = document.createTextNode(price);
            num.appendChild(val_num);
            td.appendChild(val_td);
            td2.appendChild(val_td2);
            tr.appendChild(num);
            tr.appendChild(td);
            tr.appendChild(td2);
            const element = document.getElementById("his");
            element.appendChild(tr);
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory'));
    if (purchaseHistory && purchaseHistory.length > 0) {
        const his = document.getElementById("his");
        purchaseHistory.forEach(function(purchase, index) {
            const tr = document.createElement("tr");
            const num = document.createElement("th");
            const val_num = document.createTextNode(index + 1);
            const td = document.createElement("td");
            const val_td = document.createTextNode(purchase.name);
            const td2 = document.createElement("td");
            const val_td2 = document.createTextNode(purchase.price);
            num.appendChild(val_num);
            td.appendChild(val_td);
            td2.appendChild(val_td2);
            tr.appendChild(num);
            tr.appendChild(td);
            tr.appendChild(td2);
            his.appendChild(tr);
        });
    }
});

document.querySelector(".hamburger-menu").addEventListener("click", function () {
    var mobileMenu = document.querySelector(".menu");
    mobileMenu.classList.toggle("active");
    toggleHamburgerIcon();
});

function toggleHamburgerIcon() {
    var bars = document.querySelectorAll(".bar");
    bars.forEach(function (bar) {
        bar.classList.toggle("change");
    });
}
