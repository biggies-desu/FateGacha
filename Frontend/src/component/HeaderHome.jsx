import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';


function HeaderHome()
{
    return (
        <div>
            <center>
                <a href='https://fate-go.us/' target="_blank">
                <img src='/src/component/imgandsound/fgo.png' alt='Fate/Grand Order' className='imagehalf'></img>
                </a>
            </center>
        </div>
    )
}

export default HeaderHome