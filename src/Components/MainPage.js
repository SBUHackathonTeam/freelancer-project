import React from "react"

import BoxMain from './InvesterBoxMain'


function MainPage(){
    return(
        <div className = 'mainpage'>
            <BoxMain signupType = "Investor"/>
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <BoxMain signupType = "Influencer" />
      

        </div>

    )
}

export default MainPage;