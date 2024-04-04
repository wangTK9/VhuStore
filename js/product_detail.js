document.addEventListener("DOMContentLoaded", function () {
  // Lấy id sản phẩm từ URL
  var urlParams = new URLSearchParams(window.location.search);
  var productId = urlParams.get("id");

  // Hiển thị chi tiết sản phẩm
  var product = getProductById(productId); // Hàm này cần được định nghĩa để lấy dữ liệu sản phẩm từ một nguồn dữ liệu nào đó
  displayProductDetails(product);
});

function getProductById(productId) {
  // Mảng dữ liệu sản phẩm
  var products = [
    {
      id: 1,
      name: "Apple Watch SE GPS",
      price: "$100",
      imageUrl: "../imgs/watch1.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "Apple Watch seri 3",
      price: "$150",
      imageUrl: "../imgs/watch2.webp",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      name: "Apple Watch blur 1",
      price: "$120",
      imageUrl: "../imgs/watch3.jpeg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      name: "Apple Watch Zenx",
      price: "$120",
      imageUrl: "../imgs/watch4.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      name: "Apple Watch Stranform",
      price: "$120",
      imageUrl: "../imgs/watch5.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 6,
      name: "Apple Watch seri 2",
      price: "$120",
      imageUrl: "../imgs/watch6.webp",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 7,
      name: "Apple Watch oPi",
      price: "$120",
      imageUrl: "../imgs/watch7.jpeg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 8,
      name: "Apple Watch ZenK",
      price: "$120",
      imageUrl: "../imgs/watch8.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 9,
      name: "Galaxy Tab A",
      price: "$300",
      imageUrl: "../imgs/tablet1.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 10,
      name: "TiPad Air",
      price: "$400",
      imageUrl: "../imgs/tablet2.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 11,
      name: "Surface Go",
      price: "$350",
      imageUrl: "../imgs/tablet3.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 12,
      name: "Fire HD 10",
      price: "$300",
      imageUrl: "../imgs/tablet4.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 13,
      name: "Lenovo Tab M10",
      price: "$400",
      imageUrl: "../imgs/tablet5.webp",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 14,
      name: "THuawei MediaPad M5",
      price: "$350",
      imageUrl: "../imgs/tablet6.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 15,
      name: "Galaxy Tab S6 Lite",
      price: "$300",
      imageUrl: "../imgs/tablet7.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 16,
      name: "iPad Mini",
      price: "$400",
      imageUrl: "../imgs/tablet8.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 17,
      name: "Sony WH-CH510",
      price: "$50",
      imageUrl: "../imgs/head1.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 18,
      name: "Bose SoundLink",
      price: "$80",
      imageUrl: "../imgs/head2.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 19,
      name: "JBL Tune 500",
      price: "$70",
      imageUrl: "../imgs/head3.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 20,
      name: "Skullcandy Hesh 2",
      price: "$50",
      imageUrl: "../imgs/head4.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 21,
      name: "Sennheiser HD 400S",
      price: "$80",
      imageUrl: "../imgs/head5.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 22,
      name: "Beats Solo3",
      price: "$70",
      imageUrl: "../imgs/head6.jpg",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 23,
      name: "Audio-Technica ATH-M20x",
      price: "$50",
      imageUrl: "../imgs/head7.webp",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
    {
      id: 24,
      name: "AKG K240",
      price: "$80",
      imageUrl: "../imgs/head8.webp",
      description:
        " laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet",
    },
  ];
  // Tìm kiếm sản phẩm với id tương ứng
  var foundProduct = products.find(function (product) {
    return product.id === parseInt(productId);
  });

  return foundProduct;
}

function displayProductDetails(product) {
  var productDetailContainer = document.querySelector(
    ".detail-product-container"
  );
  if (product) {
    // Hiển thị thông tin chi tiết sản phẩm
    var html = `
            <div class="desc-product">
                <div class="name">${product.name}</div>
                    <div class="rating-detail"> ⭐⭐⭐⭐</div>
                <div class="desc">Description: ${product.description}</div>
                <button class="addToCart">Add to Cart</button>
            </div>
            <div class="product-imgs-container">
                <img src="${product.imageUrl}" alt="${product.name}">
            </div>
        `;
    productDetailContainer.innerHTML = html;
  } else {
    productDetailContainer.innerHTML = "<p>Product not found</p>";
  }
}
