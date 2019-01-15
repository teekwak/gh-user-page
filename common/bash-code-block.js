import React from 'react';
import Prism from 'prismjs';
import "prismjs/components/prism-bash.min.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";


class BashCodeBlock extends React.Component {
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
                    <code className="language-bash">
                        {line}
                    </code>
                    <br />
                </React.Fragment>
            ))}
        </pre>
    )
}

export default BashCodeBlock;
