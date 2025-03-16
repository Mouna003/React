import React, { useState } from 'react';

function Person({ firstName, lastName, age, hairColor }) {
    const [currentAge, setCurrentAge] = useState(age);

    const increaseAge = () => {
    setCurrentAge(currentAge + 1);
    };

return (
    <div className="person-card">
        <h2>{lastName}, {firstName}</h2>
        <p><strong>Age:</strong> {currentAge}</p>
        <p><strong>Hair Color:</strong> {hairColor}</p>
        <button onClick={increaseAge}>Birthday Button for {firstName} {lastName}</button>
    </div>
    );
}

export default Person;
