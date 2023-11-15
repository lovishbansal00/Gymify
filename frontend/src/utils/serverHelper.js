import { backendURl } from "./config.js";
export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    const response = await fetch(backendURl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}