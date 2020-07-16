import { ProductVariant } from "@saleor/fragments/types/ProductVariant";
import { AttributeInputTypeEnum } from "@saleor/types/globalTypes";
import { warehouseList } from "@saleor/warehouses/fixtures";

import { content } from "../storybook/stories/components/RichTextEditor";
import { ProductDetails_product } from "./types/ProductDetails";
import { ProductList_products_edges_node } from "./types/ProductList";
import { ProductVariantCreateData_product } from "./types/ProductVariantCreateData";

export const product: (
  placeholderImage: string
) => ProductDetails_product &
  ProductVariantCreateData_product = placeholderImage => ({
  __typename: "Product" as "Product",
  attributes: [
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute" as "Attribute",
        id: "pta18161",
        inputType: AttributeInputTypeEnum.DROPDOWN,
        name: "Borders",
        slug: "Borders",
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav47282",
            name: "portals",
            slug: "portals"
          },
          {
            __typename: "AttributeValue",
            id: "ptav17253",
            name: "Baht",
            slug: "Baht"
          }
        ]
      },
      values: [
        {
          __typename: "AttributeValue",
          id: "ptav47282",
          name: "portals",
          slug: "portals"
        }
      ]
    },
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute" as "Attribute",
        id: "pta22785",
        inputType: AttributeInputTypeEnum.MULTISELECT,
        name: "Legacy",
        slug: "Legacy",
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav31282",
            name: "payment",
            slug: "payment"
          },
          {
            __typename: "AttributeValue",
            id: "ptav14907",
            name: "Auto Loan Account",
            slug: "Auto-Loan-Account"
          },
          {
            __typename: "AttributeValue",
            id: "ptav27366",
            name: "Garden",
            slug: "Garden"
          },
          {
            __typename: "AttributeValue",
            id: "ptav11873",
            name: "override",
            slug: "override"
          }
        ]
      },
      values: [
        {
          __typename: "AttributeValue",
          id: "ptav14907",
          name: "Auto Loan Account",
          slug: "Auto-Loan-Account"
        }
      ]
    }
  ],
  basePrice: {
    __typename: "Money" as "Money",
    amount: 339.39,
    currency: "NZD",
    localized: "339.39 NZD"
  },
  category: { __typename: "Category", id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
  channelListing: [
    {
      __typename: "ProductChannelListing",
      channel: {
        __typename: "Channel",
        id: "123",
        name: "Channel1"
      },
      isPublished: true,
      publicationDate: "2020-07-14"
    },
    {
      __typename: "ProductChannelListing",
      channel: {
        __typename: "Channel",
        id: "124",
        name: "Channel2"
      },
      isPublished: false,
      publicationDate: "2020-07-30"
    }
  ],
  chargeTaxes: true,
  collections: [
    {
      __typename: "Collection",
      id: "Q29sbGVjdGlvbjoy",
      name: "Winter sale"
    }
  ],
  descriptionJson: JSON.stringify(content),
  id: "p10171",
  images: [
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYWdlOjE=",
      sortOrder: 0,
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYWdlOaE=",
      sortOrder: 2,
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UPJvZHVjdEltYWdlOjV=",
      sortOrder: 1,
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYHdlOjX=",
      sortOrder: 3,
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdIlnYWdlOjX=",
      sortOrder: 4,
      url: placeholderImage
    }
  ],
  isAvailable: false,
  isFeatured: false,
  margin: { __typename: "Margin", start: 2, stop: 7 },
  name: "Ergonomic Plastic Bacon",
  pricing: {
    __typename: "ProductPricingInfo",
    priceRangeUndiscounted: {
      __typename: "TaxedMoneyRange",
      start: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 12.3,
          currency: "USD"
        },
        net: {
          __typename: "Money",
          amount: 10,
          currency: "USD"
        }
      },
      stop: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 24.6,
          currency: "USD"
        },
        net: {
          __typename: "Money",
          amount: 20,
          currency: "USD"
        }
      }
    }
  },
  productType: {
    __typename: "ProductType",
    hasVariants: true,
    id: "pt76406",
    name: "Versatile",
    seoDescription: "Omnis rerum ea. Fugit dignissimos modi est rerum",
    seoTitle: "Ergonomic Plastic Bacon",
    variantAttributes: [
      {
        __typename: "Attribute",
        id: "pta18161",
        name: "Color",
        slug: "color",
        sortOrder: 0,
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptvav47282",
            name: "Black",
            slug: "black",
            sortOrder: 0
          },
          {
            __typename: "AttributeValue",
            id: "ptvav17253",
            name: "White",
            slug: "white",
            sortOrder: 1
          }
        ]
      }
    ]
  },
  publicationDate: "2018-08-25T18:45:54.125Z",
  purchaseCost: {
    __typename: "MoneyRange",
    start: {
      __typename: "Money",
      amount: 339.39,
      currency: "NZD",
      localized: "339.39 NZD"
    },
    stop: {
      __typename: "Money",
      amount: 678.78,
      currency: "NZD",
      localized: "678.78 NZD"
    }
  },
  seoDescription: "Seo description",
  seoTitle: "Seo title",
  sku: "59661-34207",
  thumbnail: { __typename: "Image" as "Image", url: placeholderImage },
  url: "/example-url",
  variants: [
    {
      __typename: "ProductVariant",
      id: "pv75934",
      images: [
        {
          __typename: "ProductImage",
          id: "pi92837",
          url: placeholderImage
        },
        {
          __typename: "ProductImage",
          id: "pi92838",
          url: placeholderImage
        }
      ],
      margin: 2,
      name: "Cordoba Oro",
      price: {
        __typename: "Money",
        amount: 678.78,
        currency: "USD"
      },
      sku: "87192-94370",
      stocks: [
        {
          __typename: "Stock",
          id: "1",
          quantity: 1,
          quantityAllocated: 0,
          warehouse: warehouseList[0]
        },
        {
          __typename: "Stock",
          id: "2",
          quantity: 4,
          quantityAllocated: 2,
          warehouse: warehouseList[1]
        }
      ],
      trackInventory: true
    },
    {
      __typename: "ProductVariant",
      id: "pv68615",
      images: [
        {
          __typename: "ProductImage",
          id: "pi81234",
          url: placeholderImage
        },
        {
          __typename: "ProductImage",
          id: "pi1236912",
          url: placeholderImage
        }
      ],
      margin: 7,
      name: "silver",
      price: null,
      sku: "69055-15190",
      stocks: [
        {
          __typename: "Stock",
          id: "1",
          quantity: 13,
          quantityAllocated: 2,
          warehouse: warehouseList[0]
        }
      ],
      trackInventory: false
    }
  ]
});
export const products = (
  placeholderImage: string
): ProductList_products_edges_node[] => [
  {
    __typename: "Product",
    attributes: [],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo2MQ==",
    isAvailable: true,
    name: "Nebula Night Sky Paint",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6Nw==",
      name: "Paint"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo2NA==",
    isAvailable: true,
    name: "Light Speed Yellow Paint",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6Nw==",
      name: "Paint"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo2NQ==",
    isAvailable: true,
    name: "Hyperspace Turquoise Paint",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6Nw==",
      name: "Paint"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6MQ==",
            name: "Pineapple"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo3NQ==",
    isAvailable: true,
    name: "Pineapple Juice",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6Mg==",
            name: "Coconut"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo3Ng==",
    isAvailable: true,
    name: "Coconut Juice",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6Mw==",
            name: "Apple"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo3Mg==",
    isAvailable: true,
    name: "Apple Juice",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NDk=",
            name: "Orange"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo3MQ==",
    isAvailable: true,
    name: "Orange Juice",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NTA=",
            name: "Banana"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo3NA==",
    isAvailable: true,
    name: "Banana Juice",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NTE=",
            name: "Bean"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo3OQ==",
    isAvailable: true,
    name: "Bean Juice",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NTI=",
            name: "Carrot"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo3Mw==",
    isAvailable: true,
    name: "Carrot Juice",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NTM=",
            name: "Sprouty"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo3OA==",
    isAvailable: true,
    name: "Green Juice",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo4OQ==",
    isAvailable: true,
    name: "Code Division T-shirt",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDoxMDc=",
    isAvailable: true,
    name: "Polo Shirt",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDoxMDg=",
    isAvailable: true,
    name: "Polo Shirt",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDoxMDk=",
    isAvailable: true,
    name: "Polo Shirt",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDoxMTA=",
    isAvailable: true,
    name: "Polo Shirt",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDoxMTU=",
    isAvailable: true,
    name: "Black Hoodie",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDoxMTY=",
    isAvailable: true,
    name: "Blue Hoodie",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDoxMTc=",
    isAvailable: true,
    name: "Mustard Hoodie",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjIz"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NzI=",
            name: "Cotton"
          }
        ]
      }
    ],
    channelListing: [
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "123",
          name: "Channel1"
        },
        isPublished: true,
        publicationDate: "2020-07-14"
      },
      {
        __typename: "ProductChannelListing",
        channel: {
          __typename: "Channel",
          id: "124",
          name: "Channel2"
        },
        isPublished: false,
        publicationDate: "2020-07-30"
      }
    ],
    id: "UHJvZHVjdDo4NQ==",
    isAvailable: true,
    name: "Colored Parrot Cushion",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTI=",
      name: "Cushion"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  }
];

export const variant = (placeholderImage: string): ProductVariant => ({
  __typename: "ProductVariant",
  attributes: [
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute" as "Attribute",
        id: "pta18161",
        name: "Borders",
        slug: "Borders",
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav47282",
            name: "portals",
            slug: "portals"
          },
          {
            __typename: "AttributeValue",
            id: "ptav17253",
            name: "Baht",
            slug: "Baht"
          }
        ]
      },
      values: [
        {
          __typename: "AttributeValue",
          id: "ptav47282",
          name: "portals",
          slug: "portals"
        }
      ]
    },
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute" as "Attribute",
        id: "pta22785",
        name: "Legacy",
        slug: "Legacy",
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav31282",
            name: "payment",
            slug: "payment"
          },
          {
            __typename: "AttributeValue",
            id: "ptav14907",
            name: "Auto Loan Account",
            slug: "Auto-Loan-Account"
          },
          {
            __typename: "AttributeValue",
            id: "ptav27366",
            name: "Garden",
            slug: "Garden"
          },
          {
            __typename: "AttributeValue",
            id: "ptav11873",
            name: "override",
            slug: "override"
          }
        ]
      },
      values: [
        {
          __typename: "AttributeValue",
          id: "ptav14907",
          name: "Auto Loan Account",
          slug: "Auto-Loan-Account"
        }
      ]
    }
  ],
  costPrice: {
    __typename: "Money",
    amount: 12,
    currency: "USD"
  },
  id: "var1",
  images: [
    {
      __typename: "ProductImage",
      id: "img1",
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      id: "img2",
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      id: "img7",
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      id: "img8",
      url: placeholderImage
    }
  ],
  name: "Extended Hard",
  price: {
    __typename: "Money",
    amount: 100,
    currency: "USD"
  },
  product: {
    __typename: "Product" as "Product",
    id: "prod1",
    images: [
      {
        __typename: "ProductImage",
        alt: "Front",
        id: "img1",
        sortOrder: 1,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Back",
        id: "img2",
        sortOrder: 4,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Right side",
        id: "img3",
        sortOrder: 2,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Left side",
        id: "img4",
        sortOrder: 3,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Paper",
        id: "img5",
        sortOrder: 0,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Hard cover",
        id: "img6",
        sortOrder: 1,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Extended version",
        id: "img7",
        sortOrder: 0,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Cut version",
        id: "img8",
        sortOrder: 2,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Soft cover",
        id: "img9",
        sortOrder: 2,
        url: placeholderImage
      }
    ],
    name: "Our Awesome Book",
    thumbnail: { __typename: "Image" as "Image", url: placeholderImage },
    variants: [
      {
        __typename: "ProductVariant",
        id: "var1",
        images: [
          {
            __typename: "ProductImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Extended Hard",
        sku: "13-1337"
      },
      {
        __typename: "ProductVariant",
        id: "var2",
        images: [
          {
            __typename: "ProductImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Extended Soft",
        sku: "13-1338"
      },
      {
        __typename: "ProductVariant",
        id: "var3",
        images: [
          {
            __typename: "ProductImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Normal Hard",
        sku: "13-1339"
      },
      {
        __typename: "ProductVariant",
        id: "var4",
        images: [
          {
            __typename: "ProductImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Normal Soft",
        sku: "13-1340"
      }
    ]
  },
  sku: "1230959124123",
  stocks: [
    {
      __typename: "Stock",
      id: "1",
      quantity: 1,
      quantityAllocated: 1,
      warehouse: {
        __typename: "Warehouse",
        id: "123",
        name: "Warehouse 1"
      }
    },
    {
      __typename: "Stock",
      id: "2",
      quantity: 4,
      quantityAllocated: 2,
      warehouse: {
        __typename: "Warehouse",
        id: "1234",
        name: "Warehouse 2"
      }
    }
  ],
  trackInventory: true
});
export const variantImages = (placeholderImage: string) =>
  variant(placeholderImage).images;
export const variantProductImages = (placeholderImage: string) =>
  variant(placeholderImage).product.images;
export const variantSiblings = (placeholderImage: string) =>
  variant(placeholderImage).product.variants;
