import React from "react";

export default function User({item}) {
    return (
        <a href={`/${item.id}`} className='item'>
            <div>
                <img src="what.jpg" alt='user' className='image' />
            </div>
            <div>
                <p >{item.firstName} {item.lastName} {item.userTag}</p>
                <p >{item.position}</p>
            </div>
        </a>
    )
}