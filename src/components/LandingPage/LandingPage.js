import '../../styles/LandingPage.css'
import { useUsers } from "../../hooks/useUsers";
import { useState, useEffect } from "react";
import Loader from "../Others/Loader";
import ErrorPage from '../Others/ErrorPage';
import User from '../../elements/LandingPage/User';

export default function LandingPage() {
    const { users, isFetching, error, sorting } = useUsers();
    const [data, setData] = useState(users)
    const [sortDepart, setSortDepart] = useState()

    useEffect(() => {
        setData(users)
        // eslint-disable-next-line
    }, [users])

    const searchUsers = (event) => {
        if (users) {
            const search = users?.filter(user => {
                return user?.firstName?.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    user?.lastName?.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    user?.userTag?.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setData(search)
        }
    }

    useEffect(() => {
        if (sortDepart) {
            const newData = sorting(sortDepart)
            setData(newData)
        }
        else {
            setData(users)
        }
        // eslint-disable-next-line
    }, [sortDepart])

    return (
        <div className='wrapper'>
            <input type="text" onChange={searchUsers} />
            <div>
                <p onClick={() => { setData(users) }}>All</p>
                <p onClick={() => { setSortDepart('design') }}>Designers</p>
                <p onClick={() => { setSortDepart('analytics') }}>Analyst</p>
                <p onClick={() => { setSortDepart('support') }}>Support</p>
                <p onClick={() => { setSortDepart('ios') }}>IOS</p>
                <p onClick={() => { setSortDepart('android') }}>Android</p>
            </div>
            <div className='wrapperUsers'>
                {
                    !isFetching && data?.map(item => {
                        return (
                            <User item={item} key={item.id} />
                        )
                    })
                }
                {isFetching && <Loader />}
                {error && <ErrorPage />}

            </div>
        </div>
    );
}