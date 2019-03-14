import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import NavBar from '../../../common/navbar';
import PythonCodeBlock from '../../../common/python-code-block';


const styles = theme => ({});


class PysparkPartitioningData extends React.Component {
    render = () => (
        <div>
            <NavBar />
            <Card>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                    >
                        partitioning data
                    </Typography>
                    <PythonCodeBlock
                        lines={[
                            "from collections import namedtuple",
                            "data = df.select(['a', 'b']).toJSON()",
                            "df.printSchema()",
                            "y = 1 + 2 + (3 + 4)",
                        ]}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(PysparkPartitioningData);

