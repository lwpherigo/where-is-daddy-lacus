import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

class LandingPage extends Component {
    state = {
        heading: 'EASY MODE',
    };

    onLogin = (event) => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="container">
                <h2>{this.state.heading}</h2>

                <div className="grid">
                    <div className="grid-col grid-col_8">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus ut ex molestie blandit. Etiam et turpis sit amet risus mollis interdum. Suspendisse et justo vitae metus bibendum fringilla sed sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio elementum eget. Praesent efficitur eros vitae nunc interdum, eu interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur. Quisque eget eros metus. Vestibulum bibendum fringilla nibh a luctus. Duis a sapien metus.
                        </p>
                    </div>
                    <div className="grid-col grid-col_4">
                        <h3>Already a Member?</h3>
                        <button
                            className="btn btn_sizeFull"
                            onClick={this.onLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
