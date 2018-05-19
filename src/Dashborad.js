import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
class Dashborad extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (  
        <div>
            <ul>
                <li>
                    <Link to="/dashboard">yiying</Link>
                </li>
                <li>
                    <Link to="/dashboard/erying">erying</Link>
                </li>
                <li>
                    <Link to="/dashboard/sanying">sanying</Link>
                </li>
            </ul>
            <Route Path="/dashboard" Component={App}></Route>
            <Route Path="/dashboard/erying" Component={erying}></Route>
            <Route Path="/dashboard/sanying" Component={sanying}></Route>
        </div>)
    }
}
export default Dashborad;