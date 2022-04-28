import React from "react";
import Dog from '../Dog/Dog'
import './Doglist.css'

const Doglist = (props) => {
    const dogArr = props.dogs.map((dogurl) => {
        return <Dog url={dogurl} display={props.display} />
    })
    return (
        <div className="container">
            {dogArr}
        </div>
    )
}

export default Doglist