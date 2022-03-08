import React from 'react'
import DropDownItem from './DropDownItem'

function Technologies() {
    return (
        <div>
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_frontend.svg?x89583"} text="Front-End" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_backend.svg?x89583"} text="Back-End" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_mobile.svg?x89583"} text="Mobile" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_testing.svg?x89583"} text="Quality Assurance" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_business_content.svg?x89583"} text="Business & Content Management" />
        </div>
    )
}

export default Technologies