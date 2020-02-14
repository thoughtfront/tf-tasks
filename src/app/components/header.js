import React from 'react';
import { withStyles } from '@material-ui/styles';

function Header({ classes }) {
    return (
        <div className={classes.root}>
            <img src='TFlogo32.png' />
            Taskibly
        </div>
    );
}

const styles = theme => ({
    root: {
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '28px',
        borderBottom: 'solid 5px #f78f1e',
    }
})

export default withStyles(styles)(Header);