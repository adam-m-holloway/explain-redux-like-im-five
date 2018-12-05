import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { washApple, eatApple, rotApple } from './actions';

const Apple = ({ washApple, eatApple, rotApple, dirty, remainingBites, color  }) => (
    <div>
        <p>Dirty: {dirty ? 'true' : 'false'}</p>
        <p>Remaining bites: {remainingBites}</p>
        <p>Color: {color}</p>

        <button onClick={washApple}>Wash apple</button>
        <button onClick={eatApple}>Eat apple</button>
        <button onClick={rotApple}>Rot apple</button>
    </div>
);

const mapStateToProps = (state) => ({
    dirty: state.apple.dirty,
    remainingBites: state.apple.remainingBites,
    color: state.apple.color
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    washApple,
    eatApple,
    rotApple,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Apple); // Connects `Apple` to the Redux store
