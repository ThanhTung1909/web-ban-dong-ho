const products =JSON.parse(localStorage.getItem('products'));
let carts = JSON.parse(localStorage.getItem('carts'));

//menu bar
const menuBar = document.querySelector('.menu-bar');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  document.querySelector('.menu-items').classList.toggle('active');
})

//sub menu
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', () => {
  const subMenu = document.querySelector('.sub-menu');
  subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
  icon.classList.toggle('bi-plus');
  icon.classList.toggle('bi-dash');
})

const subIcon = document.querySelector('.sub-icon-menu');
subIcon.addEventListener('click', () => {
  const subMenu = document.querySelector('.sub-sub-menu');
  subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
  subIcon.classList.toggle('bi-plus');
  subIcon.classList.toggle('bi-dash');

})

// add product
const newProductsItems = document.getElementById('product');
const newProductsTemplate = products.map((product) => {
  const discount = product.discount !== '' ? `<input type="text" readonly value="-${product.discount}">` : '';
  const dis = product.discount !== '' ? (parseInt(product.discount) / 100) : 1;
  const price = product.price !== 'Liên Hệ' ? parseInt(product.price) : product.price;
  const decPrice = product.discount !== '' ? `<h3>${(price - price * dis).toLocaleString() + ' đ' }</h3>` : '';
  const stringPrice = product.price !== 'Liên Hệ' ? parseInt(product.price).toLocaleString() + ' đ' : price;
  const newPrice = product.discount === '' ? `<h3>${stringPrice}</h3>` : `<h3><del>${price.toLocaleString() + ' đ'}</del></h3>`;

  return `
    <div class="product-item">
      <div class="item">
        <img src="${product.img}" alt="">
        ${discount}
        <h2>${product.name}</h2>
        ${decPrice}
        ${newPrice}
        <h3>${product.status}</h3>
      </div>
      <div class="layer"></div>
      <div class="info">
          <button type="button" class="detail btn btn-secondary"><a href="./chitietsanpham.html">Xem chi tiết</a></button>
          <button type="button" class="cart btn btn-secondary"><i class="bi bi-cart-plus"></i></button>
          <button type="button" class="inline btn btn-secondary"><i class="bi bi-arrow-left-right"></i></i></button>
          <button type="button" class="tim btn btn-secondary"><i class="bi bi-heart"></i></button>
      </div>
    </div>  
  `
});
newProductsItems.innerHTML = newProductsTemplate.join('');
const btnCart = document.querySelectorAll('.cart');
btnCart.forEach((btn) => {
  const info = btn.parentElement;
  const item = info.parentElement.children[0];
  const price = item.querySelector('h3').textContent;
  if (price == 'Liên Hệ') {
    btn.style.display = 'none';
  }
});
// add to cart
btnCart.forEach((btn) => {
  btn.addEventListener('click', () => {
    const info = btn.parentElement;
    const item = info.parentElement.children[0];
    const name = item.querySelector('h2').textContent;
    const price = item.querySelectorAll('h3')[0].textContent;
    const img = item.querySelector('img').src;
    const prd = products.find((product) => product.name === name);
    const style = prd.style;
    const qty = 1;
    if (carts === null) {
      carts = [];
      const product = {
        name: name,
        price: price,
        img: img,
        style: style,
        qty: qty
      };

      carts.push(product);
      localStorage.setItem('carts', JSON.stringify(carts));
      location.reload();
    } else {
      const prd = carts.find((product) => product.name === name);
      if (prd) {
        prd.qty += 1;
      } else {
        const product = {
          name: name,
          price: price,
          img: img,
          style: style,
          qty: qty
        };
        carts.push(product);
      }
      localStorage.setItem('carts', JSON.stringify(carts));
      location.reload();
    }
  });

});
// product detail
let productDetail = JSON.parse(localStorage.getItem('productDetail'));
      const btnDetail = document.querySelectorAll('.detail');
      btnDetail.forEach((btn) => {
        btn.addEventListener('click', () => {
          localStorage.removeItem('productDetail');
          const info = btn.parentElement;
          const item = info.parentElement.children[0];
          const name = item.querySelector('h2').textContent;
          productDetail = {};
          productDetail = products.find((product) => product.name === name);
          localStorage.setItem('productDetail', JSON.stringify(productDetail));
        });
      });
// Modal cart
const cart_bar = document.querySelector('.cart-bar');
const modal = document.querySelector('.modal');
cart_bar.addEventListener('mouseover', () => {
    modal.style.visibility = 'visible';
});
cart_bar.addEventListener('mouseout', () => {
    modal.style.visibility = 'hidden';
});
modal.addEventListener('mouseover', () => {
    modal.style.visibility = 'visible';
})
modal.addEventListener('mouseout', () => {
    modal.style.visibility = 'hidden';
})

// show modal cart
const cartModal = document.querySelector('.modal-body');
const table = cartModal.querySelector('table');
const cartsModal = JSON.parse(localStorage.getItem('carts')) || [];
if (cartsModal.length == 0) {
  table.innerHTML = '<h2>Không có sản phẩm';
  cartModal.style.height = 'auto';
}
else{
  const cartTemplete = cartsModal.map((cart) => {
    return `
    <tr>
        <td><img src="${cart.img}" alt=""></td>
        <td>
            <p>${cart.name}</p>
            <p>${cart.style}</p>
            <p>${cart.price}</p>
            <p>X ${cart.qty}</p>
        </td>
        <td><button type="button">&times;</button></td>
    </tr>
    `
  });
  table.innerHTML = cartTemplete.join('');
  const cartBar = document.querySelector('.cart-bar').querySelector('input');
  cartBar.value = cartsModal.length;
}
// remove product modal cart
const btnRemove = document.querySelectorAll('.modal-body button');
btnRemove.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    cartsModal.splice(index, 1);
    localStorage.setItem('carts', JSON.stringify(cartsModal));
    location.reload();
  });
});

// end add to cart
// pagination
console.log(products);
if (products.length > 0) {
  let currentPage = 1;
  let limit = 6;
  let totalPages = Math.ceil(products.length / limit);
  let listProduct = document.querySelectorAll('.product-item');

  function loadItem() {
    let start = (currentPage - 1) * limit;
    let end = currentPage * limit - 1;
    listProduct.forEach((item, index) => {
      if (index >= start && index <= end) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    listPage();
  }
  loadItem();

  function listPage() {
    document.querySelector('.listPage').innerHTML = '';
    if (currentPage !== 1) {
      let prev = document.createElement('li');
      prev.innerText = 'Prev';
      prev.setAttribute('onclick', 'changePage(' + (currentPage - 1) + ')');
      if (currentPage === 1) {
        prev.style.display = 'none';
      }
      document.querySelector('.listPage').appendChild(prev);
    }
    for (i = 1; i <= totalPages; i++) {
      let newPage = document.createElement('li');
      newPage.innerText = i;
      if (i === currentPage) {
        newPage.classList.add('active');
      }
      newPage.setAttribute('onclick', 'changePage(' + i + ')');
      document.querySelector('.listPage').appendChild(newPage);
    }
    if (currentPage !== totalPages) {
      let next = document.createElement('li');
      next.innerText = 'Next';
      next.setAttribute('onclick', 'changePage(' + (currentPage + 1) + ')');
      document.querySelector('.listPage').appendChild(next);
    }
  }

  function changePage(number) {
    currentPage = number;
    loadItem();
  }
}
// end pagination
// account
const btnAccount = document.querySelector('.account-bar').querySelector('button');
btnAccount.addEventListener('click', ()=>{
  const account = document.querySelector('.account');
  account.style.visibility = account.style.visibility === 'visible' ? 'hidden' : 'visible';
});
