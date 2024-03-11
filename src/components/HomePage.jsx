import React from "react";
import Home from "./index";
import NotificationContainer from "./ContainerConcept/NotificationContainer";

export default function HomePage() {

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {/* <Home /> */}

            <NotificationContainer />
        </div>
    )
}