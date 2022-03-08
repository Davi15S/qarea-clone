import React from 'react'
import DropDownItem from './DropDownItem'


function Company() {
    return (
        <div>
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/wallet.svg?x89583"} text="Pricing" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_business_models.svg?x89583"} text="Business Models" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/menu_icn_career.svg?x89583"} text="Career"/>
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/our-team.svg?x89583"} text="Our Team" />
            <DropDownItem img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2019/11/about_us.svg?x89583"} text="About us" />
        </div>
    )
}

export default Company