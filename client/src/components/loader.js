import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

const loader = (props) => {

    return (
        <div className="loader">
            <div className={props.loading ? 'overlay show' : 'overlay'}>
                <DotLoader
                css={{top : 44+'%', margin: 'auto'}}
                color={'#5DDDC3'}
                loading={props.loading}
                />
            </div>
        </div>
    )
};

export default loader;