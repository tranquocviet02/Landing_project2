function toggleBorder(clickedDiv) {
  const costDiv = document.querySelector('.info-right-price-cost');
  const oldDiv = document.querySelector('.info-right-price-old');
  const costDiv1 = document.querySelector('.info-right-price-cost1');
  const costDiv2 = document.querySelector('.info-right-price-cost2');
  const costDiv3 = document.querySelector('.info-right-price-cost3');

  if (clickedDiv === 'cost') {
    costDiv.style.border = '2px solid red';
    oldDiv.style.border = '2px solid transparent';

    costDiv.classList.add('active');
    oldDiv.classList.remove('active');
  } else if (clickedDiv === 'old') {
    costDiv.style.border = '2px solid transparent';
    oldDiv.style.border = '2px solid red';

    oldDiv.classList.add('active');
    costDiv.classList.remove('active');
  }
  else if (clickedDiv === 'cost1') {
    costDiv1.style.border = '2px solid red';
    costDiv2.style.border = '2px solid transparent';
    costDiv3.style.border = '2px solid transparent';

    costDiv1.classList.add('active');
    costDiv2.classList.remove('active');
    costDiv3.classList.remove('active');
  } else if (clickedDiv === 'cost2') {
    costDiv2.style.border = '2px solid red';
    costDiv1.style.border = '2px solid transparent';
    costDiv3.style.border = '2px solid transparent';

    costDiv2.classList.add('active');
    costDiv1.classList.remove('active');
    costDiv3.classList.remove('active');
  } else if (clickedDiv === 'cost3') {
    costDiv3.style.border = '2px solid red';
    costDiv2.style.border = '2px solid transparent';
    costDiv1.style.border = '2px solid transparent';

    costDiv3.classList.add('active');
    costDiv2.classList.remove('active');
    costDiv1.classList.remove('active');
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const oldDiv = document.querySelector('.info-right-price-old');
  oldDiv.classList.add('active');
});



function changeIcon() {
  var heartIcon = document.getElementById("heart-icon");
  if (heartIcon.classList.contains("fa-regular")) {
    heartIcon.classList.remove("fa-regular");
    heartIcon.classList.add("fa-solid");
  } else {
    heartIcon.classList.remove("fa-solid");
    heartIcon.classList.add("fa-regular");
  }
}



const districtsByCity = {
  hanoi: ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng", "Đống Đa", "Tây Hồ", "Cầu Giấy", "Thanh Xuân", "Hoàng Mai"],
  danang: ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu"],
  hochiminh: ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8"]
};

function populateDistricts() {
  const citySelect = document.getElementById("city");
  const districtSelect = document.getElementById("district");
  const selectedCity = citySelect.value;

  districtSelect.innerHTML = "";
  districtsByCity[selectedCity].forEach(district => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
  });
}

populateDistricts();


const desContent = document.querySelector('.info-left-des-content-p');
const seeMoreButton = document.getElementById('see-more-content');
let isContentExpanded = false;

seeMoreButton.addEventListener('click', function () {

  const computedStyles = window.getComputedStyle(desContent);

  if (computedStyles.maxHeight === '190px') {
    desContent.style.maxHeight = 'initial';
    seeMoreButton.innerHTML = '<h3>Thu gọn bài viết </h3><i class="fa-solid fa-caret-up"></i>';
    desContent.classList.add('open');
  } else {
    desContent.style.maxHeight = '190px';
    seeMoreButton.innerHTML = '<h3>Xem thêm bài viết </h3> <i class="fa-solid fa-caret-down"></i>';
    desContent.classList.remove('open');
  }
});


const checkboxes = document.querySelectorAll('.option-checkbox');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      checkboxes.forEach(cb => {
        if (cb !== this) {
          cb.checked = false;
        }
      });
    }
  });
});


const offerContent = document.querySelector('.info-right-offer-content');
const seeMoreOfferButton = document.getElementById('see-more-offer');
let isContentExpandedOffer = false;

seeMoreOfferButton.addEventListener('click', function () {

  const computedStyles = window.getComputedStyle(offerContent);

  if (computedStyles.maxHeight === '270px') {
    offerContent.style.maxHeight = 'initial';
    // seeMoreOfferButton.style.borderTopLeftRadius = '0';
    // seeMoreOfferButton.style.borderTopRightRadius = '0';
    // seeMoreOfferButton.style.borderBottomLeftRadius = '10px';
    // seeMoreOfferButton.style.borderBottomRightRadius = '10px';
    seeMoreOfferButton.style.textTransform = 'uppercase';
    seeMoreOfferButton.innerHTML = '<h3>Thu gọn bài viết </h3><i class="fa-solid fa-caret-up"></i>';
    offerContent.classList.add('open');

  } else {
    offerContent.style.maxHeight = '270px';
    // seeMoreOfferButton.style.borderTopLeftRadius = '10px';
    // seeMoreOfferButton.style.borderTopRightRadius = '10px';
    // seeMoreOfferButton.style.borderBottomLeftRadius = '0';
    // seeMoreOfferButton.style.borderBottomRightRadius = '0';
    seeMoreOfferButton.style.textTransform = 'uppercase';
    seeMoreOfferButton.innerHTML = '<h3>Xem thêm bài viết </h3> <i class="fa-solid fa-caret-down"></i>';
    offerContent.classList.remove('open');

  }
});



// document.addEventListener("DOMContentLoaded", function () {
//   const offerMoreContentone = document.querySelector('.info-right-offer-content-one');
//   const contentContainer = document.getElementById("content-detail");
//   const seeMoreOfferMoreButtonone = document.getElementById('see-more-offer-one');
// debugger
//   let isExpanded = false; // Biến để theo dõi trạng thái mở rộng/đóng lại

//   // Số lượng phần tử được hiển thị ban đầu
//   var initialItemCount = 4;
//   // Ẩn tất cả nội dung ban đầu nếu không được mở rộng
//   if (!isExpanded) {
//     for (var i = initialItemCount; i < contentContainer.children.length; i++) {
//       contentContainer.children[i].style.display = 'none';
//     }
//   }

//   // Xử lý sự kiện khi người dùng nhấp vào nút "Xem thêm/Thu gọn"
//   seeMoreOfferMoreButtonone.addEventListener("click", function () {
//     if (isExpanded) {
//       // Nếu đang mở rộng, ẩn nội dung
//       for (var i = initialItemCount; i < contentContainer.children.length; i++) {
//         contentContainer.children[i].style.display = 'none';
//       }
//       seeMoreOfferMoreButtonone.style.textTransform = 'uppercase';
//       seeMoreOfferMoreButtonone.innerHTML = '<h3>Xem thêm bài viết </h3> <i class="fa-solid fa-caret-down"></i>';
//       offerMoreContentone.classList.remove('open');
//     } else {
//       // Nếu đang đóng lại, hiển thị nội dung
//       for (var i = initialItemCount; i < contentContainer.children.length; i++) {
//         contentContainer.children[i].style.display = 'inline-flex';
//       }
//       seeMoreOfferMoreButtonone.style.textTransform = 'uppercase';
//       seeMoreOfferMoreButtonone.innerHTML = '<h3>Thu gọn bài viết </h3> <i class="fa-solid fa-caret-up"></i>';
//       offerMoreContentone.classList.add('open');
//     }

//     // Đảo ngược trạng thái mở rộng/đóng lại
//     isExpanded = !isExpanded;
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  const offerMoreContentone = document.querySelector('.info-right-offer-content-one');
  var content = document.getElementById('content-detail');
  var toggleButton = document.getElementById('see-more-offer-one');
  var isExpanded = false; // Trạng thái mở rộng ban đầu

  // Số lượng phần tử được hiển thị ban đầu
  var initialItemCount = 4;
  // Ẩn tất cả nội dung ban đầu nếu không được mở rộng
  if (!isExpanded) {
    for (var i = initialItemCount; i < content.children.length; i++) {
      content.children[i].style.display = 'none';
    }
  }



  // Thêm sự kiện click cho nút "Xem thêm / Thu gọn"
  toggleButton.addEventListener('click', function () {
    if (isExpanded) {
      // Nếu đã mở rộng, thu gọn nội dung
      for (var i = initialItemCount; i < content.children.length; i++) {
        content.children[i].style.display = 'none';
      }
      toggleButton.style.textTransform = 'uppercase';
      toggleButton.innerHTML = '<h3>Xem thêm bài viết </h3> <i class="fa-solid fa-caret-down"></i>';
      offerMoreContentone.classList.remove('open');
    } else {
      // Nếu chưa mở rộng, hiển thị toàn bộ nội dung
      for (var i = initialItemCount; i < content.children.length; i++) {
        content.children[i].style.display = 'inline-flex';
      }
      toggleButton.style.textTransform = 'uppercase';
      toggleButton.innerHTML = '<h3>Thu gọn bài viết </h3> <i class="fa-solid fa-caret-up"></i>';
      offerMoreContentone.classList.add('open');
    }
    // Đảo ngược trạng thái mở rộng
    isExpanded = !isExpanded;
  });
});




const offerMoreContent = document.querySelector('.info-right-offer-more-content');
const seeMoreOfferMoreButton = document.getElementById('see-more-offer-more');
let isContentExpandedOfferMore = false;

seeMoreOfferMoreButton.addEventListener('click', function () {

  const computedStyles = window.getComputedStyle(offerMoreContent);

  if (computedStyles.maxHeight === '290px') {
    offerMoreContent.style.maxHeight = 'initial';
    // seeMoreOfferMoreButton.style.borderTopLeftRadius = '0';
    // seeMoreOfferMoreButton.style.borderTopRightRadius = '0';
    // seeMoreOfferMoreButton.style.borderBottomLeftRadius = '10px';
    // seeMoreOfferMoreButton.style.borderBottomRightRadius = '10px';
    seeMoreOfferMoreButton.style.textTransform = 'uppercase';
    seeMoreOfferMoreButton.innerHTML = '<h3>Thu gọn bài viết </h3> <i class="fa-solid fa-caret-up"></i>';
    offerMoreContent.classList.add('open');

  } else {
    offerMoreContent.style.maxHeight = '290px';
    // seeMoreOfferMoreButton.style.borderTopLeftRadius = '10px';
    // seeMoreOfferMoreButton.style.borderTopRightRadius = '10px';
    // seeMoreOfferMoreButton.style.borderBottomLeftRadius = '0';
    // seeMoreOfferMoreButton.style.borderBottomRightRadius = '0';
    seeMoreOfferMoreButton.style.textTransform = 'uppercase';
    seeMoreOfferMoreButton.innerHTML = '<h3>Xem thêm bài viết </h3> <i class="fa-solid fa-caret-down"></i>';
    offerMoreContent.classList.remove('open');

  }
});



// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("Mymodaladd");
// Get the button that opens the modal
var btn = document.getElementById("see-more-speci");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//swiper


var slideIndex = 1;

var stop_new = 1;
function myfunctionStop_new() {
  stop_new = 2;
}

if (stop_new == 1) {
  showDivs(slideIndex);
}


function plusDivs(n = 1) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {

  //thu cũ đổi mới
  var i;
  var x = document.getElementsByClassName("mySlides_new");
  var dots = document.getElementsByClassName("demo_new");

  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replaceAll(" w3-badge", "");
  }


  x[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " w3-badge";

  // if(stop_new == 1) {
  //   setTimeout(plusDivs, 15000);
  // }
}

//sản phẩm so sánh

var slideIndex_compare = 1;
//nếu chưa dạm vào function thì tự chạy

var stop_compare = 1;
function myfunctionStop_compare() {
  stop_compare = 2;
}

if (stop_compare == 1) {
  showDivs_compare(slideIndex_compare);
}


function plusDivs_compare(n = 1) {
  showDivs_compare(slideIndex_compare += n);
}

function currentDiv_compare(n) {
  showDivs_compare(slideIndex_compare = n);
}

function showDivs_compare(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_compare");
  var dots_compare = document.getElementsByClassName("demo_compare");
  if (n > x.length) { slideIndex_compare = 1 }
  if (n < 1) { slideIndex_compare = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots_compare.length; i++) {
    dots_compare[i].className = dots_compare[i].className.replaceAll(" w3-badge", "");
  }

  x[slideIndex_compare - 1].style.display = "flex";
  dots_compare[slideIndex_compare - 1].className += " w3-badge";
  // //chạy
  // if(stop_compare == 1) {
  //     setTimeout(plusDivs_compare, 15000);
  // }

}


// thu cũ đổi mới


var slideIndex_accessory = 1;
//nếu chưa dạm vào function thì tự chạy

var stop_accessory = 1;
function myfunctionStop_accessory() {
  stop_accessory = 2;
}

if (stop_accessory == 1) {
  showDivs_accessory(slideIndex_accessory);
}


function plusDivs_accessory(n = 1) {
  showDivs_accessory(slideIndex_accessory += n);
}

function currentDiv_accessory(n) {
  showDivs_accessory(slideIndex_accessory = n);
}

function showDivs_accessory(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_accessory");
  var dots_accessory = document.getElementsByClassName("demo_accessory");
  if (n > x.length) { slideIndex_accessory = 1 }
  if (n < 1) { slideIndex_accessory = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots_accessory.length; i++) {
    dots_accessory[i].className = dots_accessory[i].className.replaceAll(" w3-badge", "");
  }

  x[slideIndex_accessory - 1].style.display = "flex";
  dots_accessory[slideIndex_accessory - 1].className += " w3-badge";
  // //chạy
  // if(stop_compare == 1) {
  //     // setTimeout(plusDivs_accessory, 3000);
  // }

}



// tin tức liên quan

var slideIndex_news = 1;
//nếu chưa dạm vào function thì tự chạy

var stop_news = 1;
function myfunctionStop_news() {
  stop_news = 2;
}

if (stop_news == 1) {
  showDivs_news(slideIndex_news);
}


function plusDivs_news(n = 1) {
  showDivs_news(slideIndex_news += n);
}

function currentDiv_news(n) {
  showDivs_news(slideIndex_news = n);
}

function showDivs_news(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_news");
  var dots_news = document.getElementsByClassName("demo_news");
  if (n > x.length) { slideIndex_news = 1 }
  if (n < 1) { slideIndex_news = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots_news.length; i++) {
    dots_news[i].className = dots_news[i].className.replaceAll(" w3-badge", "");
  }

  x[slideIndex_news - 1].style.display = "grid";
  dots_news[slideIndex_news - 1].className += " w3-badge";
  // //chạy
  // if(stop_compare == 1) {
  //     setTimeout(plusDivs_news, 15000);
  // }

}



// tin tức liên quan

var slideIndex_detail = 1;
//nếu chưa dạm vào function thì tự chạy

var stop_detail = 1;
function myfunctionStop_detail() {
  stop_detail = 2;
}

if (stop_detail == 1) {
  showDivs_detail(slideIndex_detail);
}


function plusDivs_detail(n = 1) {
  showDivs_detail(slideIndex_detail += n);
}

function currentDiv_detail(n) {
  showDivs_detail(slideIndex_detail = n);
}

function showDivs_detail(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_detail");
  var dots_detail = document.getElementsByClassName("demo_detail");
  var dots_img = document.getElementsByClassName("demo_img");
  var img_item = document.getElementsByClassName("img_item");
  var slider_right = document.getElementById("button-slider-right-detail");
  if (n > x.length) { slideIndex_detail = 1 }
  if (n < 1) { slideIndex_detail = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots_detail.length; i++) {
    dots_detail[i].className = dots_detail[i].className.replaceAll(" w3-badge1", "");
    dots_img[i].className = dots_img[i].className.replaceAll(" w3_opacity", "");
    // img_item[i].className = img_item[i].className.replaceAll(" w3_opacity1", "");
  }

  x[slideIndex_detail - 1].style.display = "flex";
  dots_detail[slideIndex_detail - 1].className += " w3-badge1";
  dots_img[slideIndex_detail - 1].className += " w3_opacity";
  // //chạy
  // if(stop_compare == 1) {
  //      setTimeout(plusDivs_detail, 15000);
  // }

}

// máy cũ giá tốt gần bạn


var slideIndex_machine = 1;
//nếu chưa dạm vào function thì tự chạy

var stop_machine = 1;
function myfunctionStop_machine() {
  stop_machine = 2;
}

if (stop_machine == 1) {
  showDivs_machine(slideIndex_machine);
}


function plusDivs_machine(n = 1) {
  showDivs_machine(slideIndex_machine += n);
}

function currentDiv_machine(n) {
  showDivs_machine(slideIndex_machine = n);
}

function showDivs_machine(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_machine");
  var dots_machine = document.getElementsByClassName("demo_machine");
  if (n > x.length) { slideIndex_machine = 1 }
  if (n < 1) { slideIndex_machine = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots_machine.length; i++) {
    dots_machine[i].className = dots_machine[i].className.replaceAll(" w3-badge", "");
  }

  x[slideIndex_machine - 1].style.display = "flex";
  dots_machine[slideIndex_machine - 1].className += " w3-badge";
  // //chạy
  // if(stop_compare == 1) {
  //     // setTimeout(plusDivs_machine, 3000);
  // }

}

//sản phẩm so sánh

var slideIndex_compare_pp = 1;
//nếu chưa dạm vào function thì tự chạy

var stop_compare_pp = 1;
function myfunctionStop_compare_pp() {
  stop_compare_pp = 2;
}

if (stop_compare_pp == 1) {
  showDivs_compare_pp(slideIndex_compare_pp);
}


function plusDivs_compare_pp(n = 1) {
  showDivs_compare_pp(slideIndex_compare_pp += n);
}

function currentDiv_compare_pp(n) {
  showDivs_compare_pp(slideIndex_compare_pp = n);
}

function showDivs_compare_pp(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_compare_pp");
  var dots_compare_pp = document.getElementsByClassName("demo_compare_pp");
  if (n > x.length) { slideIndex_compare_pp = 1 }
  if (n < 1) { slideIndex_compare_pp = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots_compare_pp.length; i++) {
    dots_compare_pp[i].className = dots_compare_pp[i].className.replaceAll(" w3-badge", "");
  }

  x[slideIndex_compare_pp - 1].style.display = "grid";
  dots_compare_pp[slideIndex_compare_pp - 1].className += " w3-badge";
  // //chạy
  if (stop_compare_pp == 1) {
    // setTimeout(plusDivs_compare_pp, 15000);
  }

}


// function onclickSearch(){
//   var element = document.getElementById("formdetail");
//   element.classList.add("input-focus");
//   window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//         modal.classList.remove("input-focus");
//     }
// })
// }

// Get the button that opens the modal
var clearall = document.getElementsByClassName("clearall");
clearall.onclick = function () {
  modal.style.display = "none";
}
function compare_add() {
  document.getElementById("collapse").style.display = "block";
  document.getElementById("popup-ss").style.display = "none";
}

function clearCompare() {
  document.getElementById("collapse").style.display = "none";
  document.getElementById("popup-ss").style.display = "block";
}

function showCompare() {
  document.getElementById("collapse").style.display = "block";
  document.getElementById("popup-ss").style.display = "none";
}

function removeCompare1() {
  document.getElementById("drum03090000").style.display = "flex";
  document.getElementById("have03092000").style.display = "none";
}
function removeCompare2() {
  document.getElementById("drum030900001").style.display = "flex";
  document.getElementById("have030920001").style.display = "none";
}
function removeCompare3() {
  document.getElementById("drum030900002").style.display = "flex";
  document.getElementById("have030920002").style.display = "none";
}
function ClosePopup() {
  document.getElementById("Mymodaladd").style.display = "none";
}

function OpenPopup() {
  document.getElementById("Mymodaladd").style.display = "flex";
}
function RemoveAllIdCompare() {
  document.getElementById("have03092000").style.display = "none";
  document.getElementById("drum03090000").style.display = "flex";
  document.getElementById("have030920001").style.display = "none";
  document.getElementById("drum030900001").style.display = "flex";
  document.getElementById("have030920002").style.display = "none";
  document.getElementById("drum030900002").style.display = "flex";
  document.getElementById("popup-ss").style.display = "none";
}



// xử lí sự kiện xem thêm cmt

var data = document.getElementsByClassName("ask-content-comment");
const loadMoreButton = document.getElementById("btn-xemthem");
let currentIndex = 0;
const itemsPerPage = 2;

// Hàm hiển thị 10 bản ghi tiếp theo
function displayNextItems() {

  const endIndex = currentIndex + itemsPerPage;
  for (let i = currentIndex; i < endIndex && i < data.length; i++) {
    data.itemsPerPage < data[i]
    data[i].style.display = "flex";
  }
  currentIndex = endIndex;

  // Ẩn nút "Xem thêm" nếu đã hiển thị hết dữ liệu
  if (currentIndex >= data.length) {
    loadMoreButton.style.display = "none";
  }
}

// Gọi hàm để hiển thị dữ liệu ban đầu
displayNextItems();

// Xử lý sự kiện khi người dùng ấn vào nút "Xem thêm"
loadMoreButton.addEventListener("click", displayNextItems);