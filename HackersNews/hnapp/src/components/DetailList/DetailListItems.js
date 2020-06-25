import React, { Component } from 'react'
import './DetailList.css'
import hackersNewsApi from '../../services/HackersNews'

class DetailListItems extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          arrComments: [],
        };

      }
    componentDidMount() {
        const story = this.props.story;
        const arrKids = story.kids
        arrKids.map(id => {
            hackersNewsApi.getStory(id)
            .then(story=>{
              this.setState(prevState => {
               return {
                 ...prevState,
                 arrComments: [...prevState.arrComments, story]}
              })
            })
            .catch(err=>console.log(`err ${err}`));
          });
    }


    render() {

        const arrComments = this.state.arrComments;
        
        console.log(`arrComments: ${arrComments}`);
        return (
            <div>
            <div>
                <div>
                    <ul className="list-style">
                        {arrComments.map((comment,index)=> {
                          return(  <li key={index}>
                                <div className="ListItme">
                                    <h3 >{comment.by}</h3>
                                    <h5 className="textColor">{comment.time}</h5>
                                    <p>{comment.text}</p>
                                </div>
                            </li>
                        )})}
                    </ul>
                    
             </div>
             </div>
            </div>
        );
    }
}

export default DetailListItems;