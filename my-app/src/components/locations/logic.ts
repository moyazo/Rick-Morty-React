import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../Apollo/queries/locations";

const Logic = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    return {
        loading,
        error,
        data
    }
}

export default Logic;