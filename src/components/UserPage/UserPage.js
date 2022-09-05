import { useParams } from 'react-router-dom'
import { useUsers } from "../../hooks/useUsers";
import { useState, useEffect } from 'react';
import Loader from "../Others/Loader";
import ErrorPage from '../Others/ErrorPage';

export default function UserPage() {
    const { users, error, isFetching } = useUsers()
    const { id } = useParams()
    const [actualUser, setActualUser] = useState()

    useEffect(() => {
        const user = users?.filter(item => item.id === id)
        if (user) {
            setActualUser(user[0])
        }
        // eslint-disable-next-line
    }, [users]);

    const calculate_age = (date) => {
        var today = new Date();
        var birthDate = new Date(date);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        return age_now;
    }

    return (
        <div>
            {!isFetching && actualUser && (
                <>
                    <div>
                        <img src="what.jpg" alt="what" />
                        <p>{actualUser?.firstName} {actualUser?.lastName}<span> {actualUser?.userTag}</span></p>
                        <p>{actualUser?.position}</p>
                    </div>
                    <div>
                        <p>
                            {new Date(actualUser?.birthday).toLocaleString('default', { day: '2-digit', month: 'long', year: 'numeric' })}
                            <span> age {String(calculate_age(actualUser?.birthday))}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            +{actualUser?.phone}
                        </p>
                    </div>
                </>
            )}
            {isFetching && <Loader />}
            {error && <ErrorPage />}
        </div>
    )
}