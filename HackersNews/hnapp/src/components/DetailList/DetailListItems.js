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
      console.log(this.props.story.objectID);
        hackersNewsApi.getItems(this.props.story.objectID).then(data=> {
          // console.log("data",data.children);
                this.setState(prevState => {
               return {
                 ...prevState,
                 arrComments: data.children }
              })
        }).catch(err=>console.log("err",err))

    }


    render() {

        const arrComments = this.state.arrComments;
        // console.log(`arrComments: ${arrComments}`);
        // return (<></>);
        return (
            <div>
            <div>
                <div>
                    <ul className="list-style">
                        {arrComments.map((comment,index)=> {
                          return(  <li key={index}>
                                <div className="ListItme">
                                    <h3 >{comment.author}</h3>
                                    <h5 className="textColor">{comment.created_at}</h5>
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