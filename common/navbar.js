import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from 'next/link'


const styles = theme => ({
    navBarLink: {
        textDecoration: 'none',
        color: 'black'
    }
});


class NavBar extends React.Component {
    render = () => (
        <Toolbar>
            <Button size="small"><Link prefetch href="/"><a className={this.props.classes.navBarLink}>Home</a></Link></Button>
            <Button size="small"><Link prefetch href="/tutorials"><a className={this.props.classes.navBarLink}>Tutorials</a></Link></Button>
            <Button size="small"><Link prefetch href="/blog"><a className={this.props.classes.navBarLink}>Blog</a></Link></Button>
            <Button size="small"><Link prefetch href="/about"><a className={this.props.classes.navBarLink}>About</a></Link></Button>
        </Toolbar>
    )
}

export default withStyles(styles)(NavBar);

