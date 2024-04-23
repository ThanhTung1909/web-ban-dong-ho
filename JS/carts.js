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

//cart
let products = JSON.parse(localStorage.getItem('carts'));
const table = document.querySelector('.item1').querySelector('tbody');
if(!products){
    table.innerHTML = '<tr><td colspan="4" style="text-align: center;">Không có sản phẩm trong giỏ hàng</td></tr>';
}
else{
    products.forEach(product => {
        const price = Number(product.price.replace(/,/g, '').replace('đ', ''));
        const total = price * product.qty;
        table.innerHTML += `
        <tr>
            <td>
                <img src="${product.img}" alt="">
                <p>${product.name}</p>
                <button>Xóa</button>
            </td>
            <td>${product.price}</td>
            <td><input type="number" value="${product.qty}"></td>
            <td>${total.toLocaleString()+' đ'}</td>
        </tr>
        `;
    });
}
// update carrt
const inputs = document.querySelectorAll('.item1 input');
inputs.forEach((input, index) => {
    
    input.addEventListener('change', () => {
        products[index].qty = input.value;
        localStorage.setItem('carts', JSON.stringify(products));
        location.reload();
    })
})
// sum total
const total = document.querySelector('.total');
let sum = 0;
products.forEach(product => {
    const price = Number(product.price.replace(/,/g, '').replace('đ', ''));
    sum += price * product.qty;
})
total.innerHTML = sum.toLocaleString() + ' đ';

// delete product
const btns = document.querySelectorAll('.item1 button');
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        products.splice(index, 1);
        localStorage.setItem('carts', JSON.stringify(products));
        location.reload();
    })
})
//cartBar
const cartBar = document.querySelector('.cart-bar').querySelector('input');
cartBar.value = products.length;

// account
const btnAccount = document.querySelector('.account-bar').querySelector('button');
btnAccount.addEventListener('click', ()=>{
  const account = document.querySelector('.account');
  account.style.visibility = account.style.visibility === 'visible' ? 'hidden' : 'visible';
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
const table1 = cartModal.querySelector('table');
const cartsModal = JSON.parse(localStorage.getItem('carts')) || [];
if (cartsModal.length == 0) {
  table1.innerHTML = '<h2>Không có sản phẩm';
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
  table1.innerHTML = cartTemplete.join('');
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