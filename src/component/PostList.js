import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../action/index'
import UserHeader from './UserHeader'


const PostList = (props) => {
    const { sendPostRequest, newData } = props;

    useEffect(() => {
        sendPostRequest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderList = () => {
        return newData.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            )
        })
    }

    return (
        <div className="ui relaxed divided list">
            Post List
            {renderList()}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendPostRequest: () => dispatch(fetchPost())
    }
}

const mapStateToProps = (state) => {
    return {
        newData: state.post.ListOfData
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PostList)