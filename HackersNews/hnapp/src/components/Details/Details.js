import React, { Component } from 'react'
import DetailList from '../DetailList/DetailList';

class Details extends Component {
    render() {// <h3>Details: {this.props.location.story.title}</h3>
        return (
            <div>
                <DetailList story={this.props.location.story}></DetailList>
            </div>
        );
    }
}

export default Details;