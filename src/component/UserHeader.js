import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../action/index'

const UserHeader = (props) => {
    const { userId, FetchUser, EachUser } = props;
    useEffect(() => {
        FetchUser(userId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const userData = EachUser.find(user => user.id === userId)

    return (
        <div className="header">
            {EachUser && EachUser.name}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        EachUser: state.users.user.find((user => user.id === ownProps.userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)