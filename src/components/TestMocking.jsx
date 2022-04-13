import React, { useState } from "react";
import axios from "axios";
const Item = ({ name, age }) => {
    return (
        <li>
            name: {name} / age: {age}
        </li>
    );
};

const url =
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react";
export default function TestMocking() {
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    const handleClick = async () => {
        await axios
            .get({
                url: "/login",
            })
            .then((response) => {
                if (response.errorMessage) {
                    throw new Error(response.errorMessage);
                }
                console.log(response);
                return response.data;
            })
            .then((json) => {
                console.log(json);
                setData(json.data);
            })
            .catch((error) => {
                setError(`something Error: ${error}`);
            });
    };
    const handleClick2 = async () => {
        await axios
            .get(url)
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .then((json) => {
                console.log(json);
                setData(json.data);
            })
            .catch((error) => {
                console.log(error.response);
                setError(error.response);
            });
        console.log(error.data);
    };

    if (error) {
        return (
            <p>
                Error:{error.status} {error.statusText},{" "}
                {error.data.errorMessage}
            </p>
        );
    }
    return (
        <div>
            <button onClick={handleClick}>data load(mock)</button>
            <button onClick={handleClick2}>data load(web)</button>
            {data && (
                <ul>
                    {data.people.map((person) => {
                        return (
                            <Item
                                key={`${person}-${person.age}`}
                                name={person.name}
                                age={person.age}
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
