import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from '../common/navbar';
import Link from 'next/link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import green from '@material-ui/core/colors/green';


class TutorialsPage extends React.Component {
    state = {
        search: '',
        visibleTopics: topics,
    }

    handleSearchChange = event => {
        this.setState({ search: event.target.value.trim() }, () => {
            this.updateVisibleTopics();
        })
    }

    updateVisibleTopics = () => {
        const filteredTopics = []
        topics.forEach(topic => {
            // if topic name starts with search, show everything under it
            if(topic.name.startsWith(this.state.search)) {
                filteredTopics.push(topic);
            } else {
                // if tutorial name starts with search, show it
                const filteredTutorials = topic.tutorials.filter(name => name.startsWith(this.state.search));
                if(filteredTutorials.length > 0) {
                    filteredTopics.push({
                        name: topic.name,
                        tutorials: filteredTutorials,
                    });
                };
            }
        });
        this.setState({ visibleTopics: filteredTopics });
    }

    render = () => {
        const { classes } = this.props;
        return (
            <div>
                <NavBar />
                <Typography
                    component="h1"
                    variant="h2"
                    color="textPrimary"
                    gutterBottom
                >
                    Tutorials
                </Typography>
                <Card style={{ marginBottom: "35px" }}>
                    <TextField
                        id="standard-name"
                        label="Search"
                        className={classes.textField}
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                        margin="normal"
                    />
                </Card>
                {this.state.visibleTopics.length > 0 ?
                    this.state.visibleTopics.map(topic => (
                        <Card style={{ marginBottom: "35px", paddingTop: "45px" }}>
                            <CardContent>
                                <Card style={{
                                    backgroundColor: green[600],
                                    position: "absolute",
                                    marginTop: "-75px",
                                }}>
                                    <CardContent>
                                        <Typography
                                            component="h1"
                                            variant="headline"
                                            style={{ color: "white" }}
                                        >
                                            {topic.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                {topic.tutorials.map(tutorialName =>
                                    <Typography key={`${topic.name}_${tutorialName}`}>
                                        <Link prefetch href={`/tutorials/${topic.name}/${tutorialName}`}>
                                            <a style={{textDecoration: 'none', color: '#4286f4'}}>{tutorialName.replace(/-/g, " ")}</a>
                                        </Link>
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    ))
                    :
                    <Card>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="headline"
                                component="h2"
                            >
                                No results :c
                            </Typography>
                        </CardContent>
                    </Card>
                }
            </div>
        );
    }
}


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});


const topics = [
    {
        name: "java",
        tutorials: [
            "delete-apache-solr-entries",
        ],
    },
    {
        name: "python",
        tutorials: [
            "converting-datetime-timezones",
            "pyspark-partitioning-data",
            "pyspark-reformatting-partition-structures",
        ],
    },
];


export default withStyles(styles)(TutorialsPage);
