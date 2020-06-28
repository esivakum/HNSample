import React, { Component } from 'react'
import './DetailList.css'
import DetailListItems from './DetailListItems'
class DetailList extends Component {
    render() {
        const story = this.props.story;
        return (
            <div>
            <div className="HeaderTest">
                <div className="HeaderDetails">
                    <h4>{story.title}</h4>
                    <h5>{story.url}</h5>
                    <h5>{story.author}</h5>
             </div>
             </div>
             <DetailListItems story={story}></DetailListItems>
            </div>
        );
    }
}

export default DetailList;