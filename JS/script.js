// products
const products = [{
    id: 'HL1',
    brand: 'Hublot',
    name: "HUBLOT CLASSIC BIG BANG SANG BLEU 465CS1114VR1200MXM18, 39MM",
    img: '../IMG/products/hublot/4a24e872a5f085342b3e75cc30c5f2b0.jpg',
    price: '344137500 đ',
    discount: '5%',
    style: 'Dây da-Đen-39mm',
    status: 'Còn Hàng',
    type: 'New'
  },
  {
    id: 'HL2',
    brand: 'Hublot',
    name: "HUBLOT SPIRIT OF BIG BANG 665.OE.2080.RW.1204, 39MM",
    img: '../IMG/products/hublot/34c2cf058155a40670af6432a9f96cea.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây da-Trắng-41mm',
    status: 'Còn Hàng',
    type: 'New'
  },
  {
    id: 'HL3',
    brand: 'Hublot',
    name: "HUBLOT CLASSIC FUSION 510.CM.7170.CM, 45MM",
    img: '../IMG/products/hublot/510_f9b692bf671c4451be8ca3f5925b9e33_master.webp',
    price: '258750000 đ',
    discount: '2%',
    style: 'Dây khác-Đen-45mm',
    status: 'Còn Hàng',
    type: 'Selling'
  },
  {
    id: 'HL4',
    brand: 'Hublot',
    name: "HUBLOT CLASSIC FUSION 511.CM.1771.RX, 45MM",
    img: '../IMG/products/hublot/b7f6adf7432e1b33d565d57877014fa0.jpg',
    price: '194580000 đ',
    discount: '',
    style: 'Dây khác-Đen-45mm',
    status: 'Còn Hàng',
    type: 'New'
  },
  {
    id: 'HL5',
    brand: 'Hublot',
    name: "HUBLOT CLASSIC FUSION 525.NX.0170.RX.1804.ORL18, 45MM",
    img: '../IMG/products/hublot/dong-ho-hublot-classic-fusion-aerofusion-chronograph-orlinski-titanium-alternative-pave-525-nx-0170-rx-1804-orl18-9.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây da-Trắng-45mm',
    status: 'Còn Hàng',
    type: 'Selling'
  },
  {
    id: 'HL6',
    brand: 'Hublot',
    name: "HUBLOT SPIRIT OF BIG BANG 601.HX.0173.LR, 45MM",
    img: '../IMG/products/hublot/dong-ho-hublot-spirit-of-big-bang-titanium-642-nx-0170-rx-642nx0170rx.jpg',
    price: '599000000 đ',
    discount: '3%',
    style: 'Dây da-Trắng-45mm',
    status: 'Còn Hàng',
    type: 'Selling'
  },
  {
    id: 'HL7',
    brand: 'Hublot',
    name: "HUBLOT CLASSIC FUSION 581.NX.7071.LR.1104, 33MM",
    img: '../IMG/products/hublot/e4049894c1db68a032a7bfe0cb5ceb00.png',
    price: '187500000 đ',
    discount: '4%',
    style: 'Dây da-Trắng-33mm',
    status: 'Còn Hàng',
    type: 'New'
  },
  {
    id: 'PPL1',
    brand: 'Patek Philippe',
    name: "PATEK PHILIPPE GRAND COMPLICATIONS 7150-250R-001, 38MM",
    img: '../IMG/products/patek philippe/250r-001-7150250r001.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây da-Trắng-38mm',
    status: 'Còn Hàng',
    type: 'Selling'
  },
  {
    id: 'PPL2',
    name: "PATEX PHILIPPE GOLDEN ELLIPSE 5738R-001, 34.5X39.5MM",
    img: '../IMG/products/patek philippe/5738R_001_1@2x.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây da-Đen-39.5mm',
    status: 'Còn Hàng',
    type: 'Promotion'
  },
  {
    id: 'PPL3',
    brand: 'Patek Philippe',
    name: "PATEX PHILIPPE NAUTILUS 5740-1G-001, 40MM",
    img: '../IMG/products/patek philippe/5740-1g.png',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây khác-Trắng-40mm',
    status: 'Còn Hàng',
    type: 'Promotion'
  },
  {
    id: 'PPL4',
    brand: 'Patek Philippe',
    name: "PATEX PHILIPPE AQUANAUT 5968A-001, 42.2MM",
    img: '../IMG/products/patek philippe/5968A_001_1@2x.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây khác-Đen-42.2mm',
    status: 'Còn Hàng',
    type: 'Promotion'
  },
  {
    id: 'PPL5',
    brand: 'Patek Philippe',
    name: "GRAND COMPLICATION PLATINUM MEN'S 5372P-010, 38.3MM",
    img: '../IMG/products/patek philippe/a96bc9b958b931436647a671ae2db49f.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây khác-Trắng-38.3mm',
    status: 'Còn Hàng',
    type: 'New'
  },
  {
    id: 'PPL6',
    brand: 'Patek Philippe',
    name: "PATEK PHILIPPE COMPLICATIONS 7234R-001, 37.5MM",
    img: '../IMG/products/patek philippe/dong-ho-patek-philippe-complications-automatic-7234r-001-7234r001.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây da-Trắng-37.5mm',
    status: 'Còn Hàng',
    type: ''
  },
  {
    id: 'PPL7',
    brand: 'Patek Philippe',
    name: "COMPLICATIONS ROSE GOLD MEN'S 5180/1R-001, 39MM",
    img: '../IMG/products/patek philippe/dong-ho-patek-philippe-complications-rose-gold-skeleton-5180-1r-001-39mm-3.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây khác-trắng-39mm',
    status: 'Còn Hàng',
    type: ''
  },
  {
    id: 'PPL8',
    brand: 'Patek Philippe',
    name: "GRAND COMPLICATIONS ROSE GOLD MEN'S 5940R-001, 37x44.6MM",
    img: '../IMG/products/patek philippe/dong-ho-patek-philippe-grand-complications-automatic-5940r-001-5940r001.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây da-Trắng-44.6mm',
    status: 'Còn Hàng',
    type: ''
  },
  {
    id: 'PPL9',
    brand: 'Patek Philippe',
    name: "PATEX PHILIPPE GRAND COMPLICATION 5207G-001, 41MM",
    img: '../IMG/products/patek philippe/dong-ho-patek-philippe-grand-complications-white-gold-tourbillon-5207g-001-mat-so-xanh-41mm-6.jpg',
    price: '1200000000 đ',
    discount: '',
    style: 'Dây Da-Trắng-41mm',
    status: 'Còn Hàng',
    type: 'Selling'
  },
  {
    id: 'PPL10',
    brand: 'Patek Philippe',
    name: "PATEK PHILIPPE GRAND COMPLICATION 5270P-001, 41MM",
    img: '../IMG/products/patek philippe/f36745f95595b7d1b6bb97b5c5f4642f.jpg',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây khác-Đen-41mm',
    status: 'Còn Hàng',
    type: 'New'
  },
  {
    id: 'PPL11',
    brand: 'Patek Philippe',
    name: "PATEX PHILIPPE GRAND COMPLICATIONS 5205G-013, 40MM",
    img: '../IMG/products/patek philippe/patek-philippe-complications-5205-013.png',
    price: 'Liên Hệ',
    discount: '',
    style: 'Dây da-Trắng-40mm',
    status: 'Còn Hàng',
    type: 'Selling'
  },
  {
    id: 'RL1',
    brand: 'Rolex',
    name: "SEA-DWELLER STAINLESS STEEL 126600-0001, 43MM",
    img: '../IMG/products/rolex/1-0569439f-ae47-460c-9f94-88c6fbbe29c6.webp',
    price: '373180000 đ',
    discount: '',
    style: 'Dây khác-Đen-43mm',
    status: 'Còn Hàng',
    type: ''
  },
  {
    id: 'RL2',
    brand: 'Rolex',
    name: "DATEJUST MEN'S WATCH 126331-0004, 41MM",
    img: '../IMG/products/rolex/9ee728ce68209ed84a9bda79ed7fd937.jpg',
    price: '379500000 đ',
    discount: '1%',
    style: 'Dây khác-Trắng-41mm',
    status: 'Còn Hàng',
    type: 'Promotion'
  },
  {
    id: 'RL3',
    brand: 'Rolex',
    name: "ROLEX SKY DWELLER M326938-0003, 42MM",
    img: '../IMG/products/rolex/11ef51085f08c5f3e8e4cac1feedd63a.jpg',
    price: '1160000000 đ',
    discount: '7%',
    style: 'Dây khác-Trắng-42mm',
    status: 'Còn Hàng',
    type: 'New'
  },
  {
    id: 'RL4',
    brand: 'Rolex',
    name: "DATEJUST MEN'S WATCH 126331-0004, 41MM",
    img: '../IMG/products/rolex/9ee728ce68209ed84a9bda79ed7fd937.jpg',
    price: '3795000000 đ',
    discount: '34%',
    style: 'Dây khác-Trắng-42mm',
    status: 'Còn Hàng',
    type: 'New'
  },
  {
    id: 'RL5',
    brand: 'Rolex',
    name: "ROLEX DATEJUST M126233-0017, 36MM",
    img: '../IMG/products/rolex/oyster-perpetual-326933-0009-sky-dweller-42.png_980_980.webp',
    price: '312000000 đ',
    discount: '5%',
    style: 'Dây khác-Trắng-42mm',
    status: 'Còn Hàng',
    type: 'Selling'
  },
  {
    id: 'RL6',
    brand: 'Rolex',
    name: "ROLEX COSMOGRAPH DAYTONA MEN'S WATCH 116518LN-0040, 40MM",
    img: '../IMG/products/rolex/rolex-oyster-perpetual-champagne-watch-40mm.jpg_980_980.webp',
    price: '695750000 đ',
    discount: '',
    style: 'Dây khác-Đen-42mm',
    status: 'Còn Hàng',
    type: 'Selling'
  },

];
localStorage.setItem('products', JSON.stringify(products));
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
// slider multiple items
const slider = tns({
  container: ".my-slider",
  "items": "4",
  "slideBy": "1",
  "speed": "400",
  autoplay: true,
  controls: false,
  "nav": false,
  autoplayButtonOutput: false,
});

//news products
const newProducts = products.filter((product) => product.type === 'New');
//selling products
const sellingProducts = products.filter((product) => product.type === 'Selling');
//promotional products
const promotionalProducts = products.filter((product) => product.type === 'Promotion');
// 
let carts = JSON.parse(localStorage.getItem('carts'));

//new products defauler
const newProductsItems = document.querySelector('.product-items');
const productItem = newProductsItems.querySelectorAll('.product-item');
const newProductsTemplate = newProducts.map((product) => {
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

// add active button
const btns = document.querySelectorAll('.btn-product');
btns[0].classList.add('active');
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btns.forEach((btn) => {
      btn.classList.remove('active');
    })
    btn.classList.add('active');
  })
});


// change product items
btns.forEach((btn) => {
  // add event click
  btn.addEventListener('click', () => {
    // new products
    if (btn.classList.contains('new')) {
      const newProductsItems = document.querySelector('.product-items');
      const productItem = newProductsItems.querySelectorAll('.product-item');
      const newProductsTemplate = newProducts.map((product) => {
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
      // selling products
    } else if (btn.classList.contains('selling')) {
      const newProductsItems = document.querySelector('.product-items');
      const productItem = newProductsItems.querySelectorAll('.product-item');
      const newProductsTemplate = sellingProducts.map((product) => {
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
    }
    // promotional products
    else if (btn.classList.contains('promotional')) {
      const newProductsItems = document.querySelector('.product-items');
      const productItem = newProductsItems.querySelectorAll('.product-item');
      const newProductsTemplate = promotionalProducts.map((product) => {
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
    }
  });
});