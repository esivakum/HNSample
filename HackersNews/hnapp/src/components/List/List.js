import React, { Component } from 'react';
import './List.css';
import { Link } from 'react-router-dom';

class List extends Component {

    constructor(props) {
        super(props);
        this.listItemClicked = this.listItemClicked.bind(this);

      }
    listItemClicked() {
        console.log("listItemClicked");
    }
    render() {
        // const arrStorieIds = this.props.arrStorieIds;
        return(
        <ul className="List-UL">{this.props.arrStories.map((story,index) =>{
            const NewTo = {
                pathname:"/Details",
                story:story,
            }
            return (
                <li key={index}> 
                <Link className="link-Item" to={NewTo}>
                <div className="ListItme"  >
                    <div>{story.title}</div>
                    <div>{story.score}</div>
                     <div>{story.by}</div>
                    <div>{story.url}</div>
                </div>
                </Link>
                </li>
            );
        })}</ul>
        );
    }
}
        // const arrStorieIds = this.props.arrStorieIds;
// 
export default List;