import React from 'react'

const PeopleCard = ({ people }) => {
    return (
        <article className="col-6">
            <div className="card my-2 shadow">
                <div className="card-body justify-content-center">
                    <h4 className="card-title">{people.name}</h4>
                    <p className="card-text">{people.age}</p>
                </div>
            </div>
        </article>
    );
}

export default PeopleCard;
