import React from 'react';
import Prism from 'prismjs';
import "prismjs/components/prism-java.min.js"


class JavaCodeBlock extends React.Component {
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
                    <code className="language-java">
                        {line}
                    </code>
                    <br />
                </React.Fragment>
            ))}
        </pre>
    )
}

export default JavaCodeBlock;
