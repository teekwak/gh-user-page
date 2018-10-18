import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


const styles = theme => ({
    navBarLink: {
        textDecoration: 'none',
        color: 'black'
    }
});


class HomePage extends React.Component {
    render = () => (
        <div>
            <Toolbar>
                <Button size="small"><Link prefetch href="/"><a className={this.props.classes.navBarLink}>Home</a></Link></Button>
                <Button size="small"><Link prefetch href="/tutorials"><a className={this.props.classes.navBarLink}>Tutorials</a></Link></Button>
                <Button size="small"><Link prefetch href="/blog"><a className={this.props.classes.navBarLink}>Blog</a></Link></Button>
                <Button size="small"><Link prefetch href="/about"><a className={this.props.classes.navBarLink}>About</a></Link></Button>
            </Toolbar>
            <Card>
                <CardContent>
                    <Typography>
                        Header
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(HomePage);

