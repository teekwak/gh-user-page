import React from 'react';
import NavBar from '../common/navbar';
import Card from 'react-bootstrap/Card';


const styles = theme => ({});


class AboutPage extends React.Component {
    render = () => (
        <div>
            <NavBar />
            <Card>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AboutPage;

