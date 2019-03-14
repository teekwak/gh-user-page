import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import NavBar from '../common/navbar';


const topics = [
  {
    name: 'java',
    tutorials: [
      'delete-apache-solr-entries',
    ],
  },
  {
    name: 'python',
    tutorials: [
      'converting-datetime-timezones',
      'pyspark-partitioning-data',
      'pyspark-reformatting-partition-structures',
    ],
  },
  {
    name: 'vim',
    tutorials: [
      'faster-searching-with-fzf-and-fd-and-rg',
    ],
  },
];


export default function TutorialPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleTopics, setVisibleTopics] = useState(topics);

  useEffect(() => {
    setVisibleTopics(filterVisibleTopics());
  });

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  function filterVisibleTopics() {
    const filteredTopics = [];
    topics.forEach((topic) => {
      // if topic name in search, show everything under it
      if (topic.name.includes(searchTerm)) {
        filteredTopics.push(topic);
      } else {
        // if tutorial name in search, show both topic and tutorial name
        const filteredTutorials = topic.tutorials.filter(name => name.includes(searchTerm));
        if (filteredTutorials.length > 0) {
          filteredTopics.push({
            name: topic.name,
            tutorials: filteredTutorials,
          });
        }
      }
    });
    return filteredTopics;
  }

  return (
    <div>
      <NavBar />
      <Form.Control
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      {visibleTopics.length > 0 ? visibleTopics.map(topic => (
        <TopicCard topic={topic} />
      )) : <NoResultsCard />}
    </div>
  );
}


function TopicCard(props) {
  const topicName = props.topic.name;
  const { tutorials } = props.topic;

  return (
    <Card>
      <Card.Header>{topicName}</Card.Header>
      <Card.Body>
        {tutorials.map(tutorialName => (
          <Card.Text>
            <Link prefetch href={`/tutorials/${topicName}/${tutorialName}`}>
              <a>{tutorialName}</a>
            </Link>
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
}


function NoResultsCard() {
  return (
    <Card>
      <Card.Header>no results :c</Card.Header>
    </Card>
  );
}
