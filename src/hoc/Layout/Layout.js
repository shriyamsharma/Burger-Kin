import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return(
            <Aux>
                {/* <div><h3>Toolbar, SideDrawer, Backdrop soon......</h3></div> */}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                open={this.state.showSideDrawer}
                 closed={this.SideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
                <footer>
                    <p style={{textAlign:"center"}}><strong>Designed By: Shriyam Sharma</strong></p>
                </footer>
            </Aux>
        );
    }
}

export default Layout;