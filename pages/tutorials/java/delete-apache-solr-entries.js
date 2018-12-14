import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import NavBar from '../../../common/navbar';
import JavaCodeBlock from '../../../common/java-code-block';


const styles = theme => ({});


class DeleteApacheSolrEntries extends React.Component {
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
                        delete apache solr entries
                    </Typography>
                    <JavaCodeBlock
                        lines={[
                            "import org.apache.solr.client.solrj.SolrClient;",
                            "import org.apache.solr.client.solrj.SolrServerException;",
                            "import org.apache.solr.client.solrj.impl.HttpSolrClient;",
                            "",
                            "import java.io.IOException;",
                            "",
                            "public class SolrDelete {",
                            "    public static void main(String[] args) {",
                            "        String url = \"www.example.com\";",
                            "        int portNumber = 7000;",
                            "        String coreName = \"myAwesomeCore\";",
                            "",
                            "        // create the url to the Apache Solr core",
                            "        String urlString = \"http://\" + url + \":\" + portNumber + \"/solr/\" + coreName;",
                            "",
                            "        // create SolrClient object to connect to the core",
                            "        SolrClient solr = new HttpSolrClient(urlString);",
                            "",
                            "        // the actual deleting",
                            "        try {",
                            "            solr.deleteById(\"some_id\");",
                            "        } catch (IOException|SolrServerException e) {",
                            "            e.printStackTrace();",
                            "        }",
                            "    }",
                            "}",
                        ]}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(DeleteApacheSolrEntries);

