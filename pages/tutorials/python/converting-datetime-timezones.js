import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import NavBar from '../../../common/navbar';
import PythonCodeBlock from '../../../common/python-code-block';


const styles = theme => ({});


class ConvertingDatetimeTimezones extends React.Component {
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
                        converting datetime timezones
                    </Typography>
                    <PythonCodeBlock
                        lines={[
                            "import pytz",
                            "import datetime",
                            "",
                            "new_datetime = pytz.timezone('America/Los_Angeles').localize(old_datetime).astimezone(pytz.utc)"
                        ]}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(ConvertingDatetimeTimezones);

