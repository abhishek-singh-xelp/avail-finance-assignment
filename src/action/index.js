export const GET_PLP_DATA_REQUEST = "GET_PLP_DATA_REQUEST";
export const GET_PLP_DATA_SUCCESS = "GET_PLP_DATA_SUCCESS";
export const GET_PLP_DATA_ERROR = "GET_PLP_DATA_ERROR";
const mockPlp = [
  {
    averageRating: 0,
    brandname: "Killer",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "25.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003479623_437Wx649H_20180803115656.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003479623_252Wx374H_20180803115656.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1499,
        size: "M",
        formattedValue: "₹1499.00",
        formattedValueNoDecimal: "₹1499"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1124.25,
        formattedValue: "₹1124.25",
        formattedValueNoDecimal: "₹1124"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003479919",
    productname: "Killer White, Grey & Black Slim Fit T-Shirt (Pack of 3)",
    totalNoOfReviews: 0,
    ussid: "1000098907822265834",
    webURL:
      "/killer-white-grey-black-slim-fit-t-shirt-pack-of-3/p-mp000000003479927"
  },
  {
    averageRating: 0,
    brandname: "Westsport Mens",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003417284_437Wx649H_20180719024234.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003417284_252Wx374H_20180719024234.jpeg",
    isOfferExisting: true,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 499,
        size: "M",
        formattedValue: "₹499.00",
        formattedValueNoDecimal: "₹499"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 499,
        formattedValue: "₹499.00",
        formattedValueNoDecimal: "₹499"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003418502",
    productname: "Westsport by Westside Maroon Slim Fit Polo T-Shirt",
    totalNoOfReviews: 0,
    ussid: "100001300741626013",
    webURL:
      "/westsport-by-westside-maroon-slim-fit-polo-t-shirt/p-mp000000003417284"
  },
  {
    averageRating: 0,
    brandname: "Westsport Mens",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003418137_437Wx649H_20180719032209.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003418137_252Wx374H_20180719032209.jpeg",
    isOfferExisting: true,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 499,
        size: "M",
        formattedValue: "₹499.00",
        formattedValueNoDecimal: "₹499"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 499,
        formattedValue: "₹499.00",
        formattedValueNoDecimal: "₹499"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003418490",
    productname: "Westsport by Westside Dark Olive Slim Fit Polo T-Shirt",
    totalNoOfReviews: 0,
    ussid: "100001300741626018",
    webURL:
      "/westsport-by-westside-dark-olive-slim-fit-polo-t-shirt/p-mp000000003418491"
  },
  {
    averageRating: 0,
    brandname: "ETA",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i4/437Wx649H/MP000000003879258_437Wx649H_20181103152444.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i4/252Wx374H/MP000000003879258_252Wx374H_20181103152444.jpeg",
    isOfferExisting: false,
    newProduct: true,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 599,
        size: "M",
        formattedValue: "₹599.00",
        formattedValueNoDecimal: "₹599"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 599,
        size: "M",
        formattedValue: "₹599.00",
        formattedValueNoDecimal: "₹599"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003879258",
    productname: "ETA by Westside Black Slim Fit Pure Cotton T-Shirt",
    totalNoOfReviews: 0,
    ussid: "100001300764288005",
    webURL:
      "/eta-by-westside-black-slim-fit-pure-cotton-t-shirt/p-mp000000003879355"
  },
  {
    averageRating: 0,
    brandname: "Aeropostale",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "40.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003889932_437Wx649H_20181111032951.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003889932_252Wx374H_20181111032951.jpeg",
    isOfferExisting: false,
    newProduct: true,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 2199,
        size: "M",
        formattedValue: "₹2199.00",
        formattedValueNoDecimal: "₹2199"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1319,
        size: "M",
        formattedValue: "₹1319.00",
        formattedValueNoDecimal: "₹1319"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003890672",
    productname: "Aeropostale Grey Cotton Half Sleeves T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1240908907686531656",
    webURL: "/aeropostale-grey-cotton-half-sleeves-t-shirt/p-mp000000003890672"
  },
  {
    averageRating: 0,
    brandname: "Allen Solly",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "44.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003633791_437Wx649H_20180909052014.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003633791_252Wx374H_20180909052014.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1299,
        size: "M",
        formattedValue: "₹1299.00",
        formattedValueNoDecimal: "₹1299"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 715,
        formattedValue: "₹715.00",
        formattedValueNoDecimal: "₹715"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003633791",
    productname: "Allen Solly White Regular Fit Polo T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1000978907741615758",
    webURL: "/allen-solly-white-regular-fit-polo-t-shirt/p-mp000000003634032"
  },
  {
    averageRating: 0,
    brandname: "Arrow Sport",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "30.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003891093_437Wx649H_20181110200008.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003891093_252Wx374H_20181110200008.jpeg",
    isOfferExisting: false,
    newProduct: true,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1699,
        size: "M",
        formattedValue: "₹1699.00",
        formattedValueNoDecimal: "₹1699"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1189,
        formattedValue: "₹1189.00",
        formattedValueNoDecimal: "₹1189"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003891093",
    productname: "Arrow Sport Green Regular Fit Cotton T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1240908907797106361",
    webURL: "/arrow-sport-green-regular-fit-cotton-t-shirt/p-mp000000003891624"
  },
  {
    averageRating: 0,
    brandname: "Globus",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "30.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i4/437Wx649H/MP000000003688140_437Wx649H_20180923130740.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i4/252Wx374H/MP000000003688140_252Wx374H_20180923130740.jpeg",
    isOfferExisting: true,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 799,
        size: "L",
        formattedValue: "₹799.00",
        formattedValueNoDecimal: "₹799"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 559,
        formattedValue: "₹559.00",
        formattedValueNoDecimal: "₹559"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003689453",
    productname: "Globus Navy Color Block T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1240133222063",
    webURL: "/globus-navy-color-block-t-shirt/p-mp000000003688140"
  },
  {
    averageRating: 0,
    brandname: "Provogue",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "47.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i2/437Wx649H/MP000000003014490_437Wx649H_20180422021816.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i2/252Wx374H/MP000000003014490_252Wx374H_20180422021816.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1699,
        size: "L",
        formattedValue: "₹1699.00",
        formattedValueNoDecimal: "₹1699"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 899,
        formattedValue: "₹899.00",
        formattedValueNoDecimal: "₹899"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003014490",
    productname: "Provogue Grey & Navy Slim Fit Polo T-shirt",
    totalNoOfReviews: 0,
    ussid: "100014104741BL556S",
    webURL: "/provogue-grey-navy-slim-fit-polo-t-shirt/p-mp000000003016734"
  },
  {
    averageRating: 0,
    brandname: "ColorPlus",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i4/437Wx649H/MP000000003867716_437Wx649H_20181031215351.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i4/252Wx374H/MP000000003867716_252Wx374H_20181031215351.jpeg",
    isOfferExisting: false,
    newProduct: true,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 2895,
        size: "L",
        formattedValue: "₹2895.00",
        formattedValueNoDecimal: "₹2895"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 2895,
        formattedValue: "₹2895.00",
        formattedValueNoDecimal: "₹2895"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003868243",
    productname: "ColorPlus Yellow Slim Fit Polo T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1241078907397223277",
    webURL: "/colorplus-yellow-slim-fit-polo-t-shirt/p-mp000000003867716"
  },
  {
    averageRating: 0,
    brandname: "DC",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003546950_437Wx649H_20180826160356.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003546950_252Wx374H_20180826160356.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1995,
        size: "L",
        formattedValue: "₹1995.00",
        formattedValueNoDecimal: "₹1995"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1995,
        formattedValue: "₹1995.00",
        formattedValueNoDecimal: "₹1995"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003547102",
    productname: "DC Navy Printed T-Shirt",
    totalNoOfReviews: 0,
    ussid: "124049410084780014",
    webURL: "/dc-navy-printed-t-shirt/p-mp000000003547117"
  },
  {
    averageRating: 0,
    brandname: "Proline",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "30.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003548662_437Wx649H_20180828213910.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003548662_252Wx374H_20180828213910.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1199,
        size: "L",
        formattedValue: "₹1199.00",
        formattedValueNoDecimal: "₹1199"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 833,
        formattedValue: "₹833.00",
        formattedValueNoDecimal: "₹833"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003549029",
    productname: "Proline Navy Striped Mandarin Collar T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1001858907007569085",
    webURL: "/proline-navy-striped-mandarin-collar-t-shirt/p-mp000000003549027"
  },
  {
    averageRating: 0,
    brandname: "Flying Machine",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "50.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003561838_437Wx649H_20180830152526.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003561838_252Wx374H_20180830152526.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1399,
        size: "S",
        formattedValue: "₹1399.00",
        formattedValueNoDecimal: "₹1399"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 699,
        formattedValue: "₹699.00",
        formattedValueNoDecimal: "₹699"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003562136",
    productname: "Flying Machine Green Regular Fit Cotton Polo T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1240908907686145402",
    webURL:
      "/flying-machine-green-regular-fit-cotton-polo-t-shirt/p-mp000000003562140"
  },
  {
    averageRating: 0,
    brandname: "Proline",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003548660_437Wx649H_20180828213918.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003548660_252Wx374H_20180828213918.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 899,
        size: "S",
        formattedValue: "₹899.00",
        formattedValueNoDecimal: "₹899"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 899,
        formattedValue: "₹899.00",
        formattedValueNoDecimal: "₹899"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003548815",
    productname: "Proline Dark Blue & Black Printed T-Shirt (Pack Of 3)",
    totalNoOfReviews: 0,
    ussid: "1001858907007555422",
    webURL:
      "/proline-dark-blue-black-printed-t-shirt-pack-of-3/p-mp000000003548815"
  },
  {
    averageRating: 0,
    brandname: "Arrow Blue Jeans",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "30.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i4/437Wx649H/MP000000003516812_437Wx649H_20180911214700.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i4/252Wx374H/MP000000003516812_252Wx374H_20180911214700.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1199,
        size: "S",
        formattedValue: "₹1199.00",
        formattedValueNoDecimal: "₹1199"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 839,
        formattedValue: "₹839.00",
        formattedValueNoDecimal: "₹839"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003517228",
    productname: "Arrow Blue Jeans Brown Round Neck T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1242538907378463838",
    webURL: "/arrow-blue-jeans-brown-round-neck-t-shirt/p-mp000000003517228"
  },
  {
    averageRating: 0,
    brandname: "Arrow New York",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "50.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i4/437Wx649H/MP000000003517232_437Wx649H_20180911231425.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i4/252Wx374H/MP000000003517232_252Wx374H_20180911231425.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1699,
        size: "S",
        formattedValue: "₹1699.00",
        formattedValueNoDecimal: "₹1699"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 849,
        formattedValue: "₹849.00",
        formattedValueNoDecimal: "₹849"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003517232",
    productname: "Arrow New York Black Half Sleeves T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1242538907686467801",
    webURL: "/arrow-new-york-black-half-sleeves-t-shirt/p-mp000000003517232"
  },
  {
    averageRating: 0,
    brandname: "Arrow Blue Jeans",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "30.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i4/437Wx649H/MP000000003516545_437Wx649H_20180911215107.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i4/252Wx374H/MP000000003516545_252Wx374H_20180911215107.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 1399,
        size: "S",
        formattedValue: "₹1399.00",
        formattedValueNoDecimal: "₹1399"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 979,
        formattedValue: "₹979.00",
        formattedValueNoDecimal: "₹979"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003518200",
    productname: "Arrow Blue Jeans Mauve Regular Fit T-Shirt",
    totalNoOfReviews: 0,
    ussid: "1242538907378463425",
    webURL: "/arrow-blue-jeans-mauve-regular-fit-t-shirt/p-mp000000003517783"
  },
  {
    averageRating: 0,
    brandname: "ALCIS",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003496699_437Wx649H_20180808074906.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003496699_252Wx374H_20180808074906.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 999,
        size: "S",
        formattedValue: "₹999.00",
        formattedValueNoDecimal: "₹999"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 999,
        formattedValue: "₹999.00",
        formattedValueNoDecimal: "₹999"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003496795",
    productname: "Alcis Black Polo T-Shirt",
    totalNoOfReviews: 0,
    ussid: "124210ECMPO02017XXL",
    webURL: "/alcis-black-polo-t-shirt/p-mp000000003496917"
  },
  {
    averageRating: 0,
    brandname: "Hanes",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003425726_437Wx649H_20180721012823.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003425726_252Wx374H_20180721012823.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 699,
        size: "S",
        formattedValue: "₹699.00",
        formattedValueNoDecimal: "₹699"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 699,
        formattedValue: "₹699.00",
        formattedValueNoDecimal: "₹699"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003425964",
    productname: "Hanes Red Regular Fit Polo T-shirt",
    totalNoOfReviews: 0,
    ussid: "1240908907686660561",
    webURL: "/hanes-red-regular-fit-polo-t-shirt/p-mp000000003425964"
  },
  {
    averageRating: 0,
    brandname: "Octave",
    compareProductType: "MSH1116100",
    cumulativeStockLevel: true,
    discountPercent: "30.0",
    galleryImagesList: [
      {
        galleryImages: [
          {
            key: "product",
            value:
              "//img.tatacliq.com/images/i3/437Wx649H/MP000000003234511_437Wx649H_20180607205627.jpeg"
          }
        ],
        mediaType: "Image"
      }
    ],
    imageURL:
      "//img.tatacliq.com/images/i3/252Wx374H/MP000000003234511_252Wx374H_20180607205627.jpeg",
    isOfferExisting: false,
    onlineExclusive: false,
    price: {
      isRange: false,
      mrpPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 999,
        size: "S",
        formattedValue: "₹999.00",
        formattedValueNoDecimal: "₹999"
      },
      sellingPrice: {
        currencyIso: "INR",
        currencySymbol: "₹",
        doubleValue: 699,
        formattedValue: "₹699.00",
        formattedValueNoDecimal: "₹699"
      }
    },
    productCategoryType: "Apparel",
    productId: "MP000000003235174",
    productname: "Octave Red Printed T-Shirt",
    totalNoOfReviews: 0,
    ussid: "100376WO100218MIAMIREDXL",
    webURL: "/octave-red-printed-t-shirt/p-mp000000003235887"
  }
];
function getPlpRequest() {
  return {
    type: GET_PLP_DATA_REQUEST
  };
}
function getPlpSuccess(plp) {
  return {
    type: GET_PLP_DATA_SUCCESS,
    plp
  };
}
function getPlpError(error) {
  return {
    type: GET_PLP_DATA_ERROR,
    error
  };
}
export function getPlp() {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch(getPlpRequest());
      // const result = await api.get("plp");
      dispatch(getPlpSuccess(mockPlp));
    } catch (e) {
      dispatch(getPlpError(e.message));
    }
  };
}
