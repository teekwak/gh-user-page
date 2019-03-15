import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/components/prism-java.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';

export default function JavaCodeBlock(props) {
  const { lines } = props;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre className="line-numbers" style={{ borderRadius: '5px' }}>
      {lines.map(line => (
        <React.Fragment key={line}>
          <code className="language-java">
            {line}
          </code>
          <br />
        </React.Fragment>
      ))}
    </pre>
  );
}

JavaCodeBlock.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};
