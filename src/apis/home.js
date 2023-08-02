import axios from "axios"


export const getHome = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios(
            {
                url: `${process.env.REACT_APP_SERVER_URL}`,
                method: "GET",

            }
        )
        resolve(response)
    } catch (error) {
        reject(error)
    }

})   