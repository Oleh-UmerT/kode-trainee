import axios from "axios";
import { useState, useEffect } from "react";

export const useUsers = () => {
    const root = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';
    const [users, setUsers] = useState()
    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line
    }, [])

    const getUsers = async () => {
        try {
            setIsFetching(true)
            const res = await axios.get(root)
            if (res.status === 200) {
                setUsers(res.data.items)
                setIsFetching(false)
            } else {
                setError("An error has occurred")
                setIsFetching(false)
            }
        } catch {
            setError("An error has occurred")
            setIsFetching(false)
        }
    }

    const sorting = (sortDepart) => {
        let actualUsers = [];
        if (users) {
            if (sortDepart)  {
                actualUsers = users?.filter(user => user.department === sortDepart)
            }
            console.log(actualUsers)
            return actualUsers
        }
    }

    return {
        users,
        isFetching,
        error,
        sorting
    }
}