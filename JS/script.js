
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

//news product
const newProducts = [
  {
    id: 1,
    name: "PATEK PHILIPPE GRAND COMPLICATION 5270P-001,41MM",
    img: '../IMG/products/patek philippe/f36745f95595b7d1b6bb97b5c5f4642f.jpg',
    price: 'Liên Hệ',
    discount:'',
    status: 'Còn Hàng'
  },
  {
    id: 2,
    name: "GRAND COMPLICATION PLATINUM MEN'S 5372P-010, 38.3MM",
    img: '../IMG/products/patek philippe/a96bc9b958b931436647a671ae2db49f.jpg',
    price: 'Liên Hệ',
    discount: '',
    status: 'Còn Hàng'
  },
  {
    id: 3,
    name: "ROLEX SKY DWELLER M326938-0003, 42MM",
    img: '../IMG/products/rolex/11ef51085f08c5f3e8e4cac1feedd63a.jpg',
    price: '1160000000 đ',
    discount:'7%',
    status: 'Còn Hàng'
  },
  {
    id: 4,
    name: "DATEJUST MEN'S WATCH 126331-0004, 41MM",
    img: '../IMG/products/rolex/9ee728ce68209ed84a9bda79ed7fd937.jpg',
    price: '379500000 đ',
    discount:'1%',
    status: 'Còn Hàng'
  },  
  {
    id: 5,
    name: "HUBLOT SPIRIT OF BIG BANG 665.OE.2080.RW.1204, 39MM",
    img: '../IMG/products/hublot/34c2cf058155a40670af6432a9f96cea.jpg',
    price: 'Liên Hệ',
    discount:'',
    status: 'Còn Hàng'
  },  
  {
    id: 6,
    name: "HUBLOT CLASSIC BIG BANG SANG BLEU 465CS1114VR1200MXM18,39MM",
    img: '../IMG/products/hublot/4a24e872a5f085342b3e75cc30c5f2b0.jpg',
    price: '344137500 đ',
    discount:'5%',
    status: 'Còn Hàng'
  },  
  {
    id: 7,
    name: "HUBLOT CLASSIC FUSION 511.CM.1771.RX, 45MM",
    img: '../IMG/products/hublot/b7f6adf7432e1b33d565d57877014fa0.jpg',
    price: '194580000 đ',
    discount:'',
    status: 'Còn Hàng'
  },
  {
    id: 8,
    name: "HUBLOT CLASSIC FUSION 581.NX.7071.LR.1104, 33MM",
    img: '../IMG/products/hublot/e4049894c1db68a032a7bfe0cb5ceb00.png',
    price: '187500000 đ',
    discount:'4%',
    status: 'Còn Hàng'
  }
]
//selling products
const sellingProducts = [
  {
    id: 1,
    name: "DATEJUST MEN'S WATCH 126331-0004, 41MM",
    img: '../IMG/products/rolex/9ee728ce68209ed84a9bda79ed7fd937.jpg',
    price: '3795000000 đ',
    discount:'34%',
    status: 'Còn Hàng'
  },
  {
    id: 2,
    name: "PATEX PHILIPPE GRAND COMPLICATION 5207G-001,41MM",
    img: '../IMG/products/patek philippe/dong-ho-patek-philippe-grand-complications-white-gold-tourbillon-5207g-001-mat-so-xanh-41mm-6.jpg',
    price: '1200000000 đ',
    discount:'',
    status: 'Còn Hàng'
  },
  {
    id: 3,
    name: "PATEX PHILIPPE GRAND COMPLICATIONS 5205G-013,40MM",
    img: '../IMG/products/patek philippe/patek-philippe-complications-5205-013.png',
    price: 'Liên Hệ',
    discount:'',  
    status: 'Còn Hàng'
  },
  {
    id: 4,
    name: "ROLEX COSMOGRAPH DAYTONA MEN'S WATCH 116518LN-0040, 40MM",
    img: '../IMG/products/rolex/rolex-oyster-perpetual-champagne-watch-40mm.jpg_980_980.webp',
    price: '695750000 đ',
    discount:'',
    status: 'Còn Hàng'
  },  
  {
    id: 5,
    name: "ROLEX DATEJUST M126233-0017, 36MM",
    img: '../IMG/products/rolex/oyster-perpetual-326933-0009-sky-dweller-42.png_980_980.webp',
    price: '312000000 đ',
    discount:'5%',
    status: 'Còn Hàng'
  },  
  {
    id: 6,
    name: "HUBLOT CLASSIC FUSION 525.NX.0170.RX.1804.ORL18, 45MM",
    img: '../IMG/products/hublot/dong-ho-hublot-classic-fusion-aerofusion-chronograph-orlinski-titanium-alternative-pave-525-nx-0170-rx-1804-orl18-9.jpg',
    price: 'Liên Hệ',
    discount:'',
    status: 'Còn Hàng'
  },  
  {
    id: 7,
    name: "HUBLOT SPIRIT OF BIG BANG 601.HX.0173.LR, 45MM",
    img: '../IMG/products/hublot/dong-ho-hublot-spirit-of-big-bang-titanium-642-nx-0170-rx-642nx0170rx.jpg',
    price: '599000000 đ',
    discount:'3%',
    status: 'Còn Hàng'
  },
  {
    id: 8,
    name: "HUBLOT CLASSIC FUSION 510.CM.7170.CM, 45MM",
    img: '../IMG/products/hublot/510_f9b692bf671c4451be8ca3f5925b9e33_master.webp',
    price: '258750000 đ',
    discount:'2%',
    status: 'Còn Hàng'
  }
]
// PROMOTIONAL PRODUCTS

const promotionalProducts = [
  {
    id: 1,
    name: "PATEX PHILIPPE GOLDEN ELLIPSE 5738R-001, 34.5 X 39.5MM",
    img: '../IMG/products/patek philippe/5738R_001_1@2x.jpg',
    price: 'Liên Hệ',
    discount:'',
    status: 'Còn Hàng'
  },
  {
    id: 2,
    name: "PATEX PHILIPPE NAUTILUS 5740-1G-001, 40MM",
    img: '../IMG/products/patek philippe/5740-1g.png',
    price: 'Liên Hệ',
    discount:'',
    status: 'Còn Hàng'
  },
  {
    id: 3,
    name: "PATEX PHILIPPE AQUANAUT 5968A-001, 42.2MM",
    img: '../IMG/products/patek philippe/5968A_001_1@2x.jpg',
    price: 'Liên Hệ',
    discount:'',
    status: 'Còn Hàng'
  },
  {
    id: 4,
    name: "DATEJUST MEN'S WATCH 126301-0001, 41MM",
    img: '../IMG/products/rolex/oyster-perpetual-126301-datejust-414.png_980_980.webp',
    price: '311.190.000 đ',
    discount:'',
    status: 'Còn Hàng'
  },  
]

//new products defauler
const newProductsItems = document.querySelector('.product-items');
const productItem = newProductsItems.querySelectorAll('.product-item');
const newProductsTemplate = newProducts.map((product) => {
  const discount = product.discount !== '' ? `<input type="text" readonly value="-${product.discount}">` : '';
  const dis = product.discount !== '' ? (parseInt(product.discount)/100) : 1;
  const price = product.price !== 'Liên Hệ' ? parseInt(product.price) : product.price;
  const decPrice = product.discount !== '' ? `<h3>${(price - price * dis).toLocaleString() + ' đ' }</h3>`: '';
  const stringPrice = product.price !== 'Liên Hệ' ? parseInt(product.price).toLocaleString() + ' đ' : price;
  const newPrice = product.discount === '' ? `<h3>${stringPrice}</h3>`: `<h3><del>${price.toLocaleString() + ' đ'}</del></h3>`;

  return `
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
        <button type="button" class="btn btn-secondary"><a href="./chitietsanpham.html">Xem chi tiết</a></button>
        <button type="button" class="cart btn btn-secondary"><i class="bi bi-cart-plus"></i></button>
        <button type="button" class="inline btn btn-secondary"><i class="bi bi-arrow-left-right"></i></i></button>
        <button type="button" class="tim btn btn-secondary"><i class="bi bi-heart"></i></button>
    </div>
  `
});
productItem.forEach((item, index) => {
  item.innerHTML = newProductsTemplate[index];
  if (index > newProducts.length - 1) {
    item.style.display = 'none';
  }else{
    item.style.display = 'flex';
  }
});
const btnCart = document.querySelectorAll('.cart');
btnCart.forEach((btn) => {
    const info = btn.parentElement;
    const item = info.parentElement.children[0];
    const price = item.querySelector('h3').textContent;
    if(price == 'Liên Hệ'){
      // btn.classList.add('disabled');
      btn.style.display = 'none';
    }
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
})

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
        const dis = product.discount !== '' ? (parseInt(product.discount)/100) : 1;
        const price = product.price !== 'Liên Hệ' ? parseInt(product.price) : product.price;
        const decPrice = product.discount !== '' ? `<h3>${(price - price * dis).toLocaleString() + ' đ' }</h3>`: '';
        const stringPrice = product.price !== 'Liên Hệ' ? parseInt(product.price).toLocaleString() + ' đ' : price;
        const newPrice = product.discount === '' ? `<h3>${stringPrice}</h3>`: `<h3><del>${price.toLocaleString() + ' đ'}</del></h3>`;

      
        return `
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
              <button type="button" class="btn btn-secondary"><a href="./chitietsanpham.html">Xem chi tiết</a></button>
              <button type="button" class="cart btn btn-secondary"><i class="bi bi-cart-plus"></i></button>
              <button type="button" class="inline btn btn-secondary"><i class="bi bi-arrow-left-right"></i></i></button>
              <button type="button" class="tim btn btn-secondary"><i class="bi bi-heart"></i></button>
          </div>
        `
      });
      productItem.forEach((item, index) => {
        console.log(item)
        item.innerHTML = newProductsTemplate[index];
        if (index > newProducts.length - 1) {
          item.style.display = 'none';
        }else{
          item.style.display = 'flex';
        }
      });
      const btnCart = document.querySelectorAll('.cart');
      btnCart.forEach((btn) => {
        const info = btn.parentElement;
        const item = info.parentElement.children[0];
        const price = item.querySelector('h3').textContent;
        if(price == 'Liên Hệ'){
          btn.style.display = 'none';
        }
      });
      // selling products
    } else if (btn.classList.contains('selling')) {
      const newProductsItems = document.querySelector('.product-items');
      const productItem = newProductsItems.querySelectorAll('.product-item');
      const newProductsTemplate = sellingProducts.map((product) => {
        const discount = product.discount !== '' ? `<input type="text" readonly value="-${product.discount}">` : '';
        const dis = product.discount !== '' ? (parseInt(product.discount)/100) : 1;
        const price = product.price !== 'Liên Hệ' ? parseInt(product.price) : product.price;
        const decPrice = product.discount !== '' ? `<h3>${(price - price * dis).toLocaleString() + ' đ' }</h3>`: '';
        const stringPrice = product.price !== 'Liên Hệ' ? parseInt(product.price).toLocaleString() + ' đ' : price;
        const newPrice = product.discount === '' ? `<h3>${stringPrice}</h3>`: `<h3><del>${price.toLocaleString() + ' đ'}</del></h3>`;

      
        return `
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
              <button type="button" class="btn btn-secondary"><a href="./chitietsanpham.html">Xem chi tiết</a></button>
              <button type="button" class="cart btn btn-secondary"><i class="bi bi-cart-plus"></i></button>
              <button type="button" class="inline btn btn-secondary"><i class="bi bi-arrow-left-right"></i></i></button>
              <button type="button" class="tim btn btn-secondary"><i class="bi bi-heart"></i></button>
          </div>
        `
      });
      productItem.forEach((item, index) => {
        item.innerHTML = newProductsTemplate[index];
        if (index > sellingProducts.length - 1) {
          item.style.display = 'none';
        }else{
          item.style.display = 'flex';
        }
      });
      const btnCart = document.querySelectorAll('.cart');
      btnCart.forEach((btn) => {
        const info = btn.parentElement;
        const item = info.parentElement.children[0];
        const price = item.querySelector('h3').textContent;
        if(price == 'Liên Hệ'){
          btn.style.display = 'none';
        }
      });
    }
    // promotional products
    else if (btn.classList.contains('promotional')) {
      const newProductsItems = document.querySelector('.product-items');
      const productItem = newProductsItems.querySelectorAll('.product-item');
      const newProductsTemplate = promotionalProducts.map((product) => {
        const discount = product.discount !== '' ? `<input type="text" readonly value="-${product.discount}">` : '';
        const dis = product.discount !== '' ? (parseInt(product.discount)/100) : 1;
        const price = product.price !== 'Liên Hệ' ? parseInt(product.price) : product.price;
        const decPrice = product.discount !== '' ? `<h3>${(price - price * dis).toLocaleString() + ' đ' }</h3>`: '';
        const stringPrice = product.price !== 'Liên Hệ' ? parseInt(product.price).toLocaleString() + ' đ' : price;
        const newPrice = product.discount === '' ? `<h3>${stringPrice}</h3>`: `<h3><del>${price.toLocaleString() + ' đ'}</del></h3>`;

      
        return `
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
              <button type="button" class="btn btn-secondary"><a href="./chitietsanpham.html">Xem chi tiết</a></button>
              <button type="button" class="cart btn btn-secondary"><i class="bi bi-cart-plus"></i></button>
              <button type="button" class="inline btn btn-secondary"><i class="bi bi-arrow-left-right"></i></i></button>
              <button type="button" class="tim btn btn-secondary"><i class="bi bi-heart"></i></button>
          </div>
        `
      });
      productItem.forEach((item, index) => {
        item.innerHTML = newProductsTemplate[index];
        if (index > promotionalProducts.length - 1) {
          item.style.display = 'none';
        }else{
          item.style.display = 'flex';
        }
      });
      const btnCart = document.querySelectorAll('.cart');
      btnCart.forEach((btn) => {
        const info = btn.parentElement;
        const item = info.parentElement.children[0];
        const price = item.querySelector('h3').textContent;
        if(price == 'Liên Hệ'){
          btn.style.display = 'none';
        }
      });
    }
  });
});


const info = document.querySelectorAll('.info');
console.log(info)
