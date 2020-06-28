import React, { Component } from 'react';
import List from '../List/List'
import './Dashboard.css'
import hackersNewsApi from '../../services/HackersNews'
import history from '../../history';

class Dashboard extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          arrStories: [],
          isLoading: false,
          pageNumber:1,
        };
        this.chartNavigation = this.chartNavigation.bind(this);
        this.loadPrevPage = this.loadPrevPage.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);

      }
    
    componentDidMount() {
      this.getDataByPageNumbers(this.state.pageNumber);


      // hackersNewsApi.getTopStoriesIds().then(storyIDs => {
      //   // console.log(storyIDs);
      //   this.setState((prevState)=> ({
      //     arrStoriesIds: storyIDs.slice(0,10),
      //   }));
      //   this.getStoriesByIds();
    
      // }).catch(err => {
      //   console.log(err);
      // });
    }
    getDataByPageNumbers(pageNum = 1){
      hackersNewsApi.getTopStories(pageNum).then(data => {
        this.setState((prevState)=> ({
          ...prevState,
          arrStories: data.hits,
            }));
        console.log("arrStories",data.hits);
        console.log("this.state.pageNumber", this.state.pageNumber);
      }).catch(err => console.log())
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
        return ({x:index, y:story.points});
    })
    // console.log(arrData);
    // history.push('/Chart')
    history.push({
        pathname: '/Chart',
        state: {arrData: arrData,}
      });
}
loadPrevPage() {
  console.log("load Prev page");
  if(this.state.pageNumber >= 0){
    this.setState(prevState => {
      return {
        ...prevState,
        pageNumber: prevState.pageNumber-1}
     })
     this.getDataByPageNumbers(this.state.pageNumber);
  }


}

loadNextPage() {
  console.log("load Next page");
  this.setState(prevState => {
    return {
      ...prevState,
      pageNumber: prevState.pageNumber+1}
   })
  this.getDataByPageNumbers(this.state.pageNumber);
}

    render() {
        return(
            <div className="HeaderTest">
                <div className="HeaderTitle">
                  <h3 className="TitleCSS" >hacker News</h3>
                  <div className="btn-align" >
                  <button onClick={this.chartNavigation}>Chart</button>
                  </div>
                </div>
                <div className="header_footer_style">
              <div> 
                <button onClick={this.loadPrevPage}>Prev</button> 
                <button onClick={this.loadNextPage}>Next</button> 
              </div>
            </div>
                {/* <button>Chart</button> */}
                <List arrStories={this.state.arrStories}></List>
            
            </div>
        );
    }
}

export default Dashboard;