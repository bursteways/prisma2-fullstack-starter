import { useEffect } from 'react';
import { withApollo } from '../apollo/client';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const MessagesQuery = gql`
  query MessagesQuery {
    allMessages {
      id
      message
    }
  }
`
const MessageQuery = gql`
  query MessageQuery {
    message(messageId:1) {
      message
    }
  }
`

const ThisIsATest = () => {
  const { loading: messagesLoading, error: messagesError, data: messages } = useQuery(MessagesQuery);
  const { loading: messageLoading, error: messageError, data: message } = useQuery(MessageQuery);

  useEffect(() => {}, [
    messagesLoading,
    messagesError,
    messages,

    messageLoading,
    messageError,
    message,
  ]);

  if (messageLoading || messagesLoading) {
    return <div>Loading ...</div>
  }
  if (messageError || messagesError) {
    return <div>Error! Please check the network tab in your developer console.</div>
  }

  return(
    <main>
      <h1>All messages</h1>
      <pre>
        {JSON.stringify(messages,null,2)}
      </pre>
      <br />
      <h1>One message based on id</h1>
      <pre>
        {JSON.stringify(message,null,2)}
      </pre>
    </main>
  );
};

export default withApollo(ThisIsATest);
