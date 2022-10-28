import { useState } from "react"

const URL = "http://localhost:5000/api/"

const useHttp = () => {
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    const httpFunction = async ({ path, method = "", data = {} }) => {
        const fetchUrl = `${URL}${path}`
        setLoading(true)
        try {
            const response = await fetch(fetchUrl, {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (!response.ok) throw Error("Try again")
            const result = await response.json()
            setData(result)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    // GET
    const getData = async (path) => httpFunction({ path })

    // POST
    const postData = async (path, data) => httpFunction({ method: "POST", path, data })

    // UPDATE
    const updateData = async (path, data) => httpFunction({ method: "PUT", path, data })

    // DELETE
    const deleteData = async (path, data) => httpFunction({ method: "DELETE", path, data })

    return { loading, error, data, getData, postData, updateData, deleteData }
}

export default useHttp
