import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/components/prism-python.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';

export default function PythonCodeBlock(props) {
  const { lines } = props;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre className="line-numbers" style={{ borderRadius: '5px' }}>
      {lines.map(line => (
        <React.Fragment key={line}>
          <code className="language-python">
            {line}
          </code>
          <br />
        </React.Fragment>
      ))}
    </pre>
  );
}

PythonCodeBlock.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};
