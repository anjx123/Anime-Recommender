import React from 'react';

const Tagger = (props) => {
    
    console.log(props.ar);
    console.log(props.r);
    

    
    return (
        <div>
            {crTags(props.ag, props.r)}
        </div>
    );
};
function simpleList(lot) {
    console.log(lot +"amog")
    
    let rsf =[];
    for (let i = 0; i < lot.length; i++) {
        rsf = rsf.concat(lot[i])
    }
    console.log(rsf + "crt")
    return rsf
}


function crTags(lon, loa) {
    let rsf = [];
    console.log(lon + "cT");
    console.log(loa + "cT")

    for (let i = 0; i < lon.length; i++) {
        console.log(rsf)
        rsf = rsf.concat(tagger(lon[i], loa[i]))
        console.log(rsf)
    }
    console.log(rsf)
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