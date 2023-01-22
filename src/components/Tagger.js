import React from 'react';

const Tagger = (props) => {
    
    return (
        <div>
            {createTags(props.ag, props.r)}
        </div>
    );
};


function createTags(lon, loa) {
    let rsf = [];
    console.log(lon + "cT");
    console.log(loa + "cT")

    for (let i = 0; i < lon.length; i++) {
        rsf = rsf.concat(tagger(lon[i], loa[i]))
    }
    console.log("createTag check")
    return rsf
}

function tagger(n, loa) {
    let rsf = [];

    for (let i = 0; i < loa.length; i++) {
        rsf = rsf.concat([ craftTag(n, loa[i].node.genres, loa[i].list_status.score)])
    }
    console.log("tagger check")
    return rsf
}

function craftTag(n, log, s) {
    let rsf = [];

    for (let i = 0; i < log.length; i++) {
        rsf = rsf.concat([[log[i], s / n] ])
        console.log("craftTag check")
    }
    return rsf
}


export default Tagger;