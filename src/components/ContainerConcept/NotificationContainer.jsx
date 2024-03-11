import React, {useState} from 'react';
import NavBar from './NavBar';
import ListContainer from './ListContainer';

const NotificationContainer = ({ handleNotificationClick }) => {
    const notifications = [
        {
            type: "success",
            message: "User created successfully",
            id: "001"
        },
        {
            type: "success",
            message: "User created successfully",
            id: "002"
        },
        {
            type: "success",
            message: "User created successfully",
            id: "003"
        },
        {
            type: "all",
            message: "All Done",
            id: "004"
        },
        {
            type: "success",
            message: "User created successfully",
            id: "005"
        },
        {
            type: "warning",
            message: "User created successfully",
            id: "006"
        },
        {
            type: "error",
            message: "Enter proper credentials",
            id: "007"
        },
        {
            type: "error",
            message: "Enter proper credentials",
            id: "008"
        },
        {
            type: "warning",
            message: "User created successfully",
            id: "009"
        },
        {
            type: "error",
            message: "Enter proper credentials",
            id: "010"
        },
        {
            type: "all",
            message: "All Done",
            id: "011"
        },
        {
            type: "all",
            message: "All Done",
            id: "012"
        },
    ]

    const [filteredList, setFilteredList] = useState(notifications);
    const handleNavBarClick = (type) => {

        let result = notifications.filter((elem) => {
            return elem.type === type;
        });
        setFilteredList(result);

        if (type === 'all') setFilteredList(notifications);
        else setFilteredList(result);

    };

    return (
        <>
            {/* <NavBar handleNotificationClick={handleNavBarClick} /> */}
            <NavBar handleNotificationClick={handleNavBarClick} />
            <ListContainer list={filteredList} />
        </>
    )
}

export default NotificationContainer;