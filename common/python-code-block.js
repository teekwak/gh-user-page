import React from 'react';
import hljs from 'highlight.js/lib/highlight';
import python from 'highlight.js/lib/languages/python';


hljs.registerLanguage('python', python);


class PythonCodeBlock extends React.Component {
    constructor(props) {
        super(props);
        this.codeRef = React.createRef();
    }

    componentDidMount = () => {
        hljs.highlightBlock(this.codeRef.current);
    }

    render = () => (
        <pre ref={this.codeRef} style={{borderRadius: "5px"}}>
            {this.props.lines.map(line => (
                <React.Fragment key={line}>
                    <code className="python">
                        {line}
                    </code>
                    <br />
                </React.Fragment>
            ))}
        </pre>
    )
}

export default PythonCodeBlock;
