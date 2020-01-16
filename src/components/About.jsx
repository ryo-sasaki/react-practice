import React from 'react';

function About({history, location, match}) {
    console.log(match);
    console.log('これがidです :',match.params.id);
    // const {history} = props;

    return (
        <h1 onClick={()=> { history.goBack(); }}>
            Aboutです
        </h1>
    );
}

export default About;
