import { gql } from '@apollo/client';
import { client } from './client';


client
    .query({
        query: gql`
            query GetLocations {
                locations {
                    id
                    name
                    description
                    photo
                }
            }
        `,
    })
    .then((result) => console.log(result));