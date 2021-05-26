import React from 'react'
import "../styles/LeftSideBar.scss";

function LeftSideBar() {
    return (
        <div className="left_sidebar">
            <ol>
                <h3>zbrane</h3>
                <li>bojovnik</li>
                <li>stinovy bezec</li>
                <li>lukostrelec</li>
                <li>kouzelnik</li>
                <li>knez</li>
                <li>zarikavac</li>
            </ol>
            <ol>
                <h3>brneni</h3>
                <li>bojovnik</li>
                <li>stinovy bezec</li>
                <li>lukostrelec</li>
                <li>kouzelnik</li>
                <li>knez</li>
                <li>zarikavac</li>
            </ol>
            <ol>
                <h3>doplnky</h3>
                <li>prsten</li>
                <li>nahrdelnik</li>
                <li>nausnice</li>
            </ol>
            <ol>
                <h3>doplnky</h3>
                <li>tasky</li>
                <li>prisady</li>
                <li>obycejne lektvary</li>
                <li>specialni predmet</li>
                <li>vylepseni</li>
                <li>dalsi</li>
            </ol>
            <ol>
                <h3>placený <br/>predmet</h3>
                <li>placene</li>
            </ol>
        </div>
    )
}

export default LeftSideBar;
