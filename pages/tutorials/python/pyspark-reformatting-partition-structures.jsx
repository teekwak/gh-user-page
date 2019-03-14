import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from '../../../common/navbar';
import Link from 'next/link'


const styles = theme => ({});


class PysparkReformattingPartitionStructures extends React.Component {
    render = () => (
        <div>
            <NavBar />
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Partitioning data up to N partitions
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(PysparkReformattingPartitionStructures);

