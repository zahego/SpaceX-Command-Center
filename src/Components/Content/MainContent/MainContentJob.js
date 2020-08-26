import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { thunkDisplayJobAPI } from '../../../Thunk/JobThunk';
import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";

const MainContentJob = ({ Job_API_reducer = [], onOpenLoad }) => {
    useEffect(() => { onOpenLoad(); }, []);

    if (typeof (Job_API_reducer[0]) !== "undefined") {
        return (
            
            <div className="main-content-Job">
                <a href={Job_API_reducer[0].results[0].redirect_url}>
                <h3>{Job_API_reducer[0].results[0].company.display_name}</h3>
                <h6>{Job_API_reducer[0].results[0].location.display_name}</h6>
                <h2>{Job_API_reducer[0].results[0].title}</h2>
                <p>{Job_API_reducer[0].results[0].description}</p>
                <h6>{Job_API_reducer[0].results[0].created}</h6>
                </a>
            </div>
            
        )
    }
    else {
        return (
            <div className="main-content-job"></div>
        )
    }
}
const mapStateToProps = state => ({
    Job_API_reducer: state.Job_API_reducer,
});
//may not need this yet if only read and not change data
const mapDispatchToProps = dispatch => ({
    onOpenLoad: () => dispatch(thunkDisplayJobAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContentJob);