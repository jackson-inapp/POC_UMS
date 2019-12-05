import React, {useState} from 'react';
import DotLoader from 'react-spinners/DotLoader';

const loader = (props) => {

    const [loading, setloading] = useState(false);

    return (
        <div className={"layout " + loading ? 'show' : ''}>
            <DotLoader></DotLoader>
        </div>
    )
}

export default loader;