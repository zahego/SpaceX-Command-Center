import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { thunkDisplayNewsAPI } from '../../../Thunk/NewsThunk';
import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";

const MainContentNews = ({ News_API_reducer = [], onOpenLoad }) => {
    useEffect(() => { onOpenLoad(); }, []);
    if (typeof (News_API_reducer[0]) !== "undefined") {

        return (
            <div className="main-content-news">
                <h3>{News_API_reducer[0].articles[0].title}</h3>
                <h5>{News_API_reducer[0].articles[0].author}</h5>
                <h6>{News_API_reducer[0].articles[0].publishedAt}</h6>
                <h6>{News_API_reducer[0].articles[0].url}</h6>
                <p>{News_API_reducer[0].articles[0].content}</p>
                
            </div>
        )
    }
    else {
        return (
            <div className="main-content-news"></div>
        )
    }
}
const mapStateToProps = state => ({
    News_API_reducer: state.News_API_reducer,
});
//may not need this yet if only read and not change data
const mapDispatchToProps = dispatch => ({
    onOpenLoad: () => dispatch(thunkDisplayNewsAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContentNews);