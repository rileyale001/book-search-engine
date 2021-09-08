import gql from 'graphql-tag';
export const GET_ME = gql`
{
    me {
        _id
        email
        username
        savedBooks {
            bookId
            image
            authors
            description
            title
            link
        }
    }

}
`;