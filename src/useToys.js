import axios from "axios"
import { useEffect, useState } from "react"

const useToys = () => {
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        axios('../data.json')
        .then(data => setToys(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [])
    return { toys, loading, error}
}
export default useToys