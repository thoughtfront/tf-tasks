import React from 'react';
import * as actions from './redux/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    test: () => dispatch(actions.test())
})

class Tasks extends React.Component {

    componentDidMount() {
        this.props.test();
    }

    render() {
        return (
            <div>
                TF Tasks
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Tasks);
