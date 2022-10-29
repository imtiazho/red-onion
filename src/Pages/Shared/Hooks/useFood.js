import { useEffect, useState } from "react";

const useFood = (jsonFile) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(jsonFile)
            .then(res => res.json())
            .then(data => setData(data))
    }, [jsonFile])

    return { data }
};

export default useFood;