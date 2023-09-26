const { gql } = require( 'apollo-server-express' );

const typeDefs = gql`
	input MediaInput {
    width: Int
    height: Int
    url: String
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
    thumb: MediaInput
}

input ColorInput {
    name: String
    color: String
    thumb: MediaInput
}

input ProductTagInput {
    id: Int!
    name: String
    slug: ID
}

input ProductBrandInput {
    id: Int!
    name: String
    slug: ID
}

input ProductCategoryInput {
    id: Int!
    name: String
    slug: ID
}


type Product {
    id: ID!
    name: String!
    slug: String!
    price: Float!
    sale_price: Float!
    short_description: String!
    stock: Int!
    ratings: Float!
    reviews: Int!
    sale_count: Int!
    is_hot: Boolean!
    large_pictures: [Picture!]!
    pictures: [Picture!]!
    small_pictures: [Picture!]!
    categories: [Category!]!
    tags: [Tag!]!
  }
  type Picture {
    width: Int!
    height: Int!
    url: String!
  }
  
type Category {
    name: String!
    parent: Category
    slug: String!
  }
  
  type Tag {
    name: String!
    slug: String!
  }
  

    type Media {
        width: Int
        height: Int
        url: String
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
        thumb: Media
    }

    type Color {
        name: String
        color: String
        thumb: Media
    }

    type ProductTag {
        id: Int!
        name: String
        slug: ID
    }

    type ProductCategory {
		_id: ID!
        id: Int!
        name: String
        slug: ID
    }

    type ProductCategoryResponse {
        id: Int!
        name: String
        slug: ID
        count: Int
    }

    type ProductBrand {
        id: Int!
        name: String
        slug: ID
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

    type PostSingleResponse {
        data: Post
        related: [Post]
    }

    type PostSidebarResponse {
        categories: [PostCategory]
        recent: [Post]
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
	scalar Date

	input ProductInput {
        id: ID!
        name: String!
        slug: String!
        price: Float!
        sale_price: Float!
        short_description: String!
        stock: String!
        ratings: Float!
        reviews: Int!
        sale_count: Int!
        is_new: Boolean
        is_hot: Boolean
        is_out_of_stock: Boolean
        rated: Boolean
        until: Date
        variants: [VariantInput!]!
        large_pictures: [PictureInput!]!
        pictures: [PictureInput!]!
        small_pictures: [PictureInput!]!
        categories: [CategoryInput!]!
        tags: [TagInput!]!
      }
      
input PictureInput {
    width: Int!
    height: Int!
    url: String!
  }

  input CategoryInput {
    name: String!
    parent: String
    slug: String!
  }
  
  input TagInput {
    name: String!
    slug: String!
  }
    
type Mutation {
    createProduct(input: ProductInput!): Product!
  }

	
`

module.exports = typeDefs;