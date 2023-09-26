const { gql } = require('apollo-server-express');

const typeDefs = gql`
type ProductSingleResponse {
    data: Product
    prev: Product
    next: Product
    related: [Product] 
}
type SpecialProducts {
    featured: [Product]
    bestSelling: [Product]
    topRated: [Product]
    latest: [Product]
    onSale: [Product]
}

type ShopSidebarResponse {
    categories: [ProductCategoryResponse],
    featured: [Product]
}

type ShopResponse {
    data: [Product]
    total: Int
    categoryFamily: [ProductCategory]
}

type PostsResponse {
    data: [Post]
    total: Int
}
type Post {
    id: Int!
    title: String
    slug: ID
    author: String
    date: String
    comments: Int
    content: String
    type: PostType
    picture: [Media]
    small_picture: [Media]
    video: Boolean
    categories: [PostCategory]
}

type ProductCategoryResponse {
    id: Int!
    name: String
    slug: ID
    count: Int
}


type PostSidebarResponse {
    categories: [PostCategory]
    recent: [Post]
}
type PostSingleResponse {
    data: Post
    related: [Post]
}
type PostCategory {
    id: Int!
    name: String
    slug: ID
}

enum PostType {
    image
    video
    gallery
}




  input MediaInput {
    width: Int
    height: Int
    url: String
  }

  input ProductInput {
    id: Int!
    name: String
    slug: String
    price: Float
    sale_price: Float
    short_description: String
    stock: Int
    ratings: Float
    reviews: Int
    sale_count: Int
    is_new: Boolean
    is_hot: Boolean
    is_out_of_stock: Boolean
    rated: Int
    until: String
    variants: [VariantInput]
    large_pictures: [MediaInput]
    pictures: [MediaInput]
    small_pictures: [MediaInput]
    categories: [ProductCategoryInput]
    tags: [ProductTagInput]
  }

  input VariantInput {
    price: Float
    sale_price: Float
    size: SizeInput
    color: ColorInput
  }

  input SizeInput {
    name: String
    size: String
  }

  input ColorInput {
    name: String
    color: String
  }

  input ProductTagInput {
    name: String
    slug: String
  }

  input ProductCategoryInput {
    name: String
    parent: String
    slug: String
  }

  type Product {
    id: Int!
    name: String
    slug: String
    price: Float
    sale_price: Float
    short_description: String
    stock: Int
    ratings: Float
    reviews: Int
    sale_count: Int
    is_new: Boolean
    is_hot: Boolean
    is_out_of_stock: Boolean
    rated: Int
    until: String
    variants: [Variant]
    large_pictures: [Media]
    pictures: [Media]
    small_pictures: [Media]
    categories: [ProductCategory]
    tags: [ProductTag]
  }

  type Variant {
    price: Float
    sale_price: Float
    size: Size
    color: Color
  }

  type Size {
    name: String
    size: String
  }

  type Color {
    name: String
    color: String
  }

  type Media {
    width: Int
    height: Int
    url: String
  }

  type ProductCategory {
    name: String
    parent: String
    slug: String
  }

  type ProductTag {
    name: String
    slug: String
  }

  type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(id: Int!, input: ProductInput!): Product
    deleteProduct(id: Int!): Boolean
  }

  type Query {
    hello: String
    products(demo: Int! search: String, colors: [String] = [], sizes: [String] = [], brands: [String] = [], min_price: Int = null, max_price: Int = null, category: String, tag: String, ratings:[Int] = [], sortBy: String, from: Int = 0, to: Int): ShopResponse
    product(demo: Int!, slug: String!, onlyData: Boolean): ProductSingleResponse
    specialProducts(demo: Int!, featured: Boolean, bestSelling: Boolean, topRated: Boolean, latest: Boolean, onSale: Boolean, count: Int): SpecialProducts
    shopSidebarData(demo: Int!, featured: Boolean): ShopSidebarResponse
    dealProducts(demo: Int!, count: Int = 1): [Product]

    posts(demo: Int!, category: String, from: Int = 0, to: Int): PostsResponse
    post(demo: Int!, slug: String!): PostSingleResponse
    postSidebarData(demo: Int!): PostSidebarResponse
}
`;

module.exports = typeDefs;
