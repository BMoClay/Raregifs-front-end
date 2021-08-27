import React from 'react';
// import { Embed } from 'semantic-ui-react';
import { Container } from "semantic-ui-react";

const Demo = () => {
    return (
        <div className="demo" style={{alignItems: 'center'}}>
            <Container>
                <br></br>
                <h4>quick walk-through video on how to create gifs with this app</h4>
                <div 
                className="video-responsive" 
                // style={{
                //         left: 0,
                //         top: 0,
                //         // height= 100%
                //         // width= 100%
                //         position: absolute,
                //  }}
                >
                    <iframe src='https://www.loom.com/embed/5a55e35216e54a198e4cf083a35c739c'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    width="1000"
                    height="560"
                    allowfullscreen="true"
                    title='video'
                    />
                </div>
            </Container>
        </div>
    )
}

export default Demo
