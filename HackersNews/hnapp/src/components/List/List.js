import React, { Component } from 'react';
import './List.css';
import { Link } from 'react-router-dom';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrStories: this.props.arrStories,
        }
        console.log(this.state);
      }
      deleteStory(index, e) {
          
          this.setState(prevState => {
              return{
                  ...prevState,
                  arrStories: prevState.arrStories.slice(index,1)
              }
          })
      }
      voteClicked(index,e) {
        console.log("voteClicked");
        const obj = this.state.arrStories.filter((item,index1)=> {
            if(index1 === index) {
                item.score = item.score+1;
                return item;
            }
        })
    }
    render() {
        // const arrStorieIds = this.props.arrStorieIds;
        console.log("this data",this.props.arrStories);
        return(
        <ul className="List-UL">{this.props.arrStories.map((story,index) =>{
            const NewTo = {
                pathname:"/Details",
                story:story,
            }
            return (
                <li key={index}> 
                <div className="ListItme"  >
                <Link className="link-Item" to={NewTo}>
                    <div className="Title">{story.title}</div>
                    </Link>
                    <div className="list-btn">
                             <button className="item-btn">{story.points}</button>
                             <button className="item-btn" onClick={this.voteClicked.bind(this,index)}>Vote</button>
                    </div>
                     <div>{story.author}</div>
                     <div className="list-btn">
                         <button className="item-btn" >{story.num_comments}</button>
                         <button className="item-btn" onClick={this.deleteStory.bind(this,index)} >Hide</button>
                         {/*  */}
                    </div>
                    <div>{story.url}</div>
                </div>
                </li>
            );
        })}</ul>
        );
    }
}
        // const arrStorieIds = this.props.arrStorieIds;
// 
export default List;