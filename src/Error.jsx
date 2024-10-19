import React from 'react';

const Error = () => {

    return (
        <>
            <div className='error'>
                <img className='error-gif' src={require("./fail.gif")} alt="" />
                <h3>
                    Error while getting the latest video, check the channel ID and try again.
                </h3>
            </div>;
        </>
    )
};

export default Error;
