import React from 'react';
import hljs from 'highlight.js/lib/highlight';
import java from 'highlight.js/lib/languages/java';


hljs.registerLanguage('java', java);
hljs.configure({ useBR: true })


class JavaCodeBlock extends React.Component {
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
                    <code className="java">
                        {line}
                    </code>
                    <br />
                </React.Fragment>
            ))}
        </pre>
    )
}

export default JavaCodeBlock;
