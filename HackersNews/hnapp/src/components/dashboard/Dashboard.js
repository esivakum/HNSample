import React, { Component } from 'react';
import List from '../List/List'
import './Dashboard.css'
import hackersNewsApi from '../../services/HackersNews'
import history from '../../history';

class Dashboard extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          arrStoriesIds: [],
          arrStories: [],
        };
        this.chartNavigation = this.chartNavigation.bind(this);

      }
    
    componentDidMount() {
      hackersNewsApi.getTopStoriesIds().then(storyIDs => {
        // console.log(storyIDs);
        this.setState((prevState)=> ({
          arrStoriesIds: storyIDs.slice(0,10),
        }));
        this.getStoriesByIds();
    
      }).catch(err => {
        console.log(err);
      });
    }
    
getStoriesByIds() {
      this.state.arrStoriesIds.map(id => {
        hackersNewsApi.getStory(id)
        .then(story=>{
          this.setState(prevState => {
           return {
             ...prevState,
              arrStories: [...prevState.arrStories, story]}
          })
        })
        .catch(err=>console.log(`err ${err}`));
      })
}
chartNavigation() {

    const arrData = this.state.arrStories.map((story,index) => {
        return ({x:index, y:story.score});
    })
    // console.log(arrData);
    // history.push('/Chart')
    history.push({
        pathname: '/Chart',
        state: {arrData: arrData,}
      });
}
    render() {
        return(
            <div className="HeaderTest">
                <div className="HeaderTitle">
                <h3 className="TitleCSS" >hacker News</h3>
                <button className="btn-align"  onClick={this.chartNavigation}>chart</button>
                </div>
                {/* <button>Chart</button> */}
                <List arrStories={this.state.arrStories}></List>
            </div>
        );
    }
}

export default Dashboard;