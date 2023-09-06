import React from "react";

const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello {props.name}, {props.greeting}. I see you're {props.age} years old</h1>
}

export default FunctionalGreetingWithProps