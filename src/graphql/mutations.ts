/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          userPostsId
          blogPostsId
        }
        nextToken
      }
      picture
      given_name
      family_name
      gender
      address
      phone_number
      website
      locale
      occupation
      bioIntro
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          userPostsId
          blogPostsId
        }
        nextToken
      }
      picture
      given_name
      family_name
      gender
      address
      phone_number
      website
      locale
      occupation
      bioIntro
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          userPostsId
          blogPostsId
        }
        nextToken
      }
      picture
      given_name
      family_name
      gender
      address
      phone_number
      website
      locale
      occupation
      bioIntro
      createdAt
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          userPostsId
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          userPostsId
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          userPostsId
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
    createPost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        email
        posts {
          nextToken
        }
        picture
        given_name
        family_name
        gender
        address
        phone_number
        website
        locale
        occupation
        bioIntro
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
      blogPostsId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        email
        posts {
          nextToken
        }
        picture
        given_name
        family_name
        gender
        address
        phone_number
        website
        locale
        occupation
        bioIntro
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
      blogPostsId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        email
        posts {
          nextToken
        }
        picture
        given_name
        family_name
        gender
        address
        phone_number
        website
        locale
        occupation
        bioIntro
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
      blogPostsId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
    createComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          picture
          given_name
          family_name
          gender
          address
          phone_number
          website
          locale
          occupation
          bioIntro
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
    updateComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          picture
          given_name
          family_name
          gender
          address
          phone_number
          website
          locale
          occupation
          bioIntro
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
    deleteComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          picture
          given_name
          family_name
          gender
          address
          phone_number
          website
          locale
          occupation
          bioIntro
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
