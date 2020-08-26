import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { thunkDisplaySocialMediaAPI } from '../../../Thunk/SocialMediaThunk';
import "../../../Styles/Content.css";
import "../../../Styles/MainContent.css";
import CardRendering from '../SocialMediaContent/CardRendering';



const MainContentSocialMedia = ({ SocialMedia_API_reducer = [], onOpenLoad }) => {


    useEffect(() => { onOpenLoad(); }, []);
    if (typeof (SocialMedia_API_reducer[0]) !== "undefined") {
        const title=SocialMedia_API_reducer[0].data.children[0].data.title;
        const subheader=SocialMedia_API_reducer[0].data.children[0].data.num_comments;
        const comment=SocialMedia_API_reducer[0].data.children[0].data.num_comments;
        const htmlstuff = SocialMedia_API_reducer[0].data.children[0].data.selftext;
        const imgstuff = SocialMedia_API_reducer[0].data.children[0].data.url_overridden_by_dest;
        return (
            <div className="main-content-SocialMedia">
               <CardRendering comment ={comment} title={title} subheader={subheader} htmlstuff={htmlstuff} imgstuff={imgstuff}/>
            </div>
        )
    }
    else {
        return (
            <div className="main-content-SocialMedia"></div>
        )
    }
}
const mapStateToProps = state => ({
    SocialMedia_API_reducer: state.SocialMedia_API_reducer,
});
//may not need this yet if only read and not change data
const mapDispatchToProps = dispatch => ({
    onOpenLoad: () => dispatch(thunkDisplaySocialMediaAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContentSocialMedia);



