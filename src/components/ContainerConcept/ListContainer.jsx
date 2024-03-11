import React from "react";

const ListContainer = ({ list }) => {


    return (
        <>
            {
                list.map((item) => {
                    return <li>{item.message}</li>
                })
            }
        </>
    )
}

export default ListContainer;