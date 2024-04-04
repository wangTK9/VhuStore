function openTab(tabName) {
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function populateCards(containerId, data) {
  var container = document.getElementById(containerId);

  data.forEach(function (item) {
    var cardElement = document.createElement("a");
    cardElement.classList.add("custom-card");
    cardElement.href = "product_detail.html?id=" + item.id;

    var topCardElement = document.createElement("div");
    topCardElement.classList.add("top-card");
    var imgElement = document.createElement("img");
    imgElement.src = item.imageUrl;
    imgElement.alt = "Image";

    var bottomCardElement = document.createElement("div");
    bottomCardElement.classList.add("bottom-card");
    var nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = item.name;
    var priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.textContent = item.price;

    topCardElement.appendChild(imgElement);
    bottomCardElement.appendChild(nameElement);
    bottomCardElement.appendChild(priceElement);

    cardElement.appendChild(topCardElement);
    cardElement.appendChild(bottomCardElement);

    container.appendChild(cardElement);

    cardElement.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = cardElement.href;
    });
  });
}

var watchesData = [
  {
    id: 1,
    name: "Apple Watch SE GPS",
    price: "$100",
    imageUrl: "../imgs/watch1.jpg",
  },
  {
    id: 2,
    name: "Apple Watch seri 3",
    price: "$150",
    imageUrl: "../imgs/watch2.webp",
  },
  {
    id: 3,
    name: "Apple Watch blur 1",
    price: "$120",
    imageUrl: "../imgs/watch3.jpeg",
  },
  {
    id: 4,
    name: "Apple Watch Zenx",
    price: "$120",
    imageUrl: "../imgs/watch4.jpg",
  },
  {
    id: 5,
    name: "Apple Watch Stranform",
    price: "$120",
    imageUrl: "../imgs/watch5.jpg",
  },
  {
    id: 6,
    name: "Apple Watch seri 2",
    price: "$120",
    imageUrl: "../imgs/watch6.webp",
  },
  {
    id: 7,
    name: "Apple Watch oPi",
    price: "$120",
    imageUrl: "../imgs/watch7.jpeg",
  },
  {
    id: 8,
    name: "Apple Watch ZenK",
    price: "$120",
    imageUrl: "../imgs/watch8.jpg",
  },
  // Thêm dữ liệu cho các đồng hồ khác nếu cần
];
populateCards("watches-card-container", watchesData);

var tabletsData = [
  {
    id: 9,
    name: "Galaxy Tab A",
    price: "$300",
    imageUrl: "../imgs/tablet1.jpg",
  },
  { id: 10, name: "TiPad Air", price: "$400", imageUrl: "../imgs/tablet2.jpg" },
  {
    id: 11,
    name: "Surface Go",
    price: "$350",
    imageUrl: "../imgs/tablet3.jpg",
  },
  {
    id: 12,
    name: "Fire HD 10",
    price: "$300",
    imageUrl: "../imgs/tablet4.jpg",
  },
  {
    id: 13,
    name: "Lenovo Tab M10",
    price: "$400",
    imageUrl: "../imgs/tablet5.webp",
  },
  {
    id: 14,
    name: "THuawei MediaPad M5",
    price: "$350",
    imageUrl: "../imgs/tablet6.jpg",
  },
  {
    id: 15,
    name: "Galaxy Tab S6 Lite",
    price: "$300",
    imageUrl: "../imgs/tablet7.jpg",
  },
  { id: 16, name: "iPad Mini", price: "$400", imageUrl: "../imgs/tablet8.jpg" },
  // Thêm dữ liệu cho các máy tính bảng khác nếu cần
];
populateCards("tablets-card-container", tabletsData);

var headphonesData = [
  {
    id: 17,
    name: "Sony WH-CH510",
    price: "$50",
    imageUrl: "../imgs/head1.jpg",
  },
  {
    id: 18,
    name: "Bose SoundLink",
    price: "$80",
    imageUrl: "../imgs/head2.jpg",
  },
  { id: 19, name: "JBL Tune 500", price: "$70", imageUrl: "../imgs/head3.jpg" },
  {
    id: 20,
    name: "Skullcandy Hesh 2",
    price: "$50",
    imageUrl: "../imgs/head4.jpg",
  },
  {
    id: 21,
    name: "Sennheiser HD 400S",
    price: "$80",
    imageUrl: "../imgs/head5.jpg",
  },
  { id: 22, name: "Beats Solo3", price: "$70", imageUrl: "../imgs/head6.jpg" },
  {
    id: 23,
    name: "Audio-Technica ATH-M20x",
    price: "$50",
    imageUrl: "../imgs/head7.webp",
  },
  { id: 24, name: "AKG K240", price: "$80", imageUrl: "../imgs/head8.webp" },
  // Thêm dữ liệu cho các tai nghe khác nếu cần
];
populateCards("headphones-card-container", headphonesData);
