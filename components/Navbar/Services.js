import React from 'react'
import DropDownItem from './DropDownItem'

function Services() {
    return (
        <div>
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_design.svg?x89583"} text="Design" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_development.svg?x89583"} text="Development" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_testing.svg?x89583"} text="Testing & QA" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/consulting.svg?x89583"} text="IT Consulting" />
        </div>
    )
}

export default Services