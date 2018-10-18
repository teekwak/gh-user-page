import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from '../common/navbar';


const styles = theme => ({});


class BlogPage extends React.Component {
    render = () => (
        <div>
            <NavBar />
            <Card>
                <CardContent>
                    <Typography>
                        Blog
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(BlogPage);

