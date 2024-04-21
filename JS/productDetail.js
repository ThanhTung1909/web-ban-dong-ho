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

// Modal cart
const cart_bar = document.querySelector('.cart-bar');
const modall = document.querySelector('.modal');
cart_bar.addEventListener('mouseover', () => {
    modall.style.visibility = 'visible';
});
cart_bar.addEventListener('mouseout', () => {
  modall.style.visibility = 'hidden';
});
modall.addEventListener('mouseover', () => {
  modall.style.visibility = 'visible';
})
modall.addEventListener('mouseout', () => {
  modall.style.visibility = 'hidden';
})

// show modal cart
const cartModal = document.querySelector('.modal-body');
const table = cartModal.querySelector('table');
const cartsModal = JSON.parse(localStorage.getItem('carts')) || [];
if (cartsModal.length == 0) {
  table.innerHTML = '<h2>Không có sản phẩm';
  cartModal.style.height = 'auto';
} else {
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
// account
const btnAccount = document.querySelector('.account-bar').querySelector('button');
btnAccount.addEventListener('click', () => {
  const account = document.querySelector('.account');
  account.style.visibility = account.style.visibility === 'visible' ? 'hidden' : 'visible';
});
// rút gọn nội dung của thẻ div
const btnRutGon = document.getElementById('rut-gon');
const btnXemThem = document.getElementById('xem-them');
const fullDescription = document.querySelector('.full-describe');
const partialDescription = document.querySelector('.partial-describe');
btnRutGon.addEventListener('click', () => {
    fullDescription.style.display = 'none';
    partialDescription.style.display = 'block';
    btnRutGon.style.display = 'none';
    btnXemThem.style.display = 'block';
});
btnXemThem.addEventListener('click', () => {
    fullDescription.style.display = 'block';
    partialDescription.style.display = 'none';
    btnRutGon.style.display = 'block';
    btnXemThem.style.display = 'none';
});

// product detail
const product = JSON.parse(localStorage.getItem('productDetail'));
const productBrand = document.getElementById('brand');
const productName = document.getElementById('name');
const productId = document.getElementById('id');
const productPrice = document.getElementById('price');
const productImg = document.getElementById('img');
const productHangSanXuat = document.getElementById('hxs');
const productModelNumber = document.getElementById('modelNumber');
const productCollection = document.getElementById('collection');
const productStyle = document.getElementById('style');
const dis = product.discount !== '' ? (parseInt(product.discount) / 100) : 1;
const price = product.price !== 'Liên Hệ' ? parseInt(product.price) : product.price;
const decPrice = product.discount !== '' ? (price - price * dis) : price;
const modal = product.name.split(' ');
const modalNumber = modal[modal.length - 2].slice(0,-1);
const collection = modal[modal.length - 3];


productBrand.innerHTML = product.brand;
productName.innerHTML = product.name;
if(product.price === 'Liên Hệ') {
    productPrice.innerHTML = product.price;
} else if(product.discount === '' && product.price !== 'Liên Hệ') {
    productPrice.innerHTML = price.toLocaleString() + 'đ';
}
else {
    productPrice.innerHTML = `<span>${decPrice.toLocaleString()} đ</span> <span><del>${price.toLocaleString()} đ</del></span>`;
}

productImg.src = product.img;
productId.querySelector('span').innerHTML = product.id;
productStyle.querySelector('span').innerHTML = product.style;
productCollection.querySelector('span').innerHTML = collection;
productModelNumber.querySelector('span').innerHTML = modalNumber;
productHangSanXuat.querySelector('span').innerHTML = product.brand;




