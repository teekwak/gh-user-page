import React from 'react';
import Prism from 'prismjs';


class PythonCodeBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        Prism.highlightAll();
    }

    render = () => (
        <pre className="line-numbers" style={{borderRadius: "5px"}}>
            {this.props.lines.map(line => (
                <React.Fragment key={line}>
                    <code className="language-javascript">
                        {line}
                    </code>
                    <br />
                </React.Fragment>
            ))}
        </pre>
    )
}

export default PythonCodeBlock;
