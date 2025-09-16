import { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState('')
    const [history, setHistory] = useState([])

    const code = () => {
        const trimText = text.trim();
        if (trimText === '') {
            return 0;
        }
        const words = trimText.split(/\s+/);
        return words.length;
    }

    const HandleUpClick = () => {
        setHistory([...history, text]);
        let newtext = text.toUpperCase()
        setText(newtext)
        if (props.mode==='light') {
            props.showAlert('Converted to UpperCase', 'light')
        } else {
            props.showAlert('Converted to UpperCase', 'secondary')
        }
    }

    const HandleLowClick = () => {
        setHistory([...history, text]);
        let newtext = text.toLowerCase()
        setText(newtext)
        if (props.mode==='light') {
            props.showAlert('Converted to LowerCase', 'light')
        } else {
            props.showAlert('Converted to LowerCase', 'secondary')
        }
    }

    const HandleClearClick = () => {
        setHistory([...history, text]);
        let newtext = ''
        setText(newtext)
        if (props.mode==='light') {
            props.showAlert('Cleared all text in textbox', 'light')
        } else {
            props.showAlert('Cleared all text in textbox', 'secondary')
        }
    }
    
    const HandleUndoClick = () => {
        if (history.length > 0) {
            const previousText = history[history.length - 1];
            setText(previousText);
            setHistory(history.slice(0, -1));
        }
        if (props.mode==='light') {
            props.showAlert('Undo Done!!!', 'light')
        } else {
            props.showAlert('Undo Done!!!', 'secondary')
        }
    }

    const HandleCamelCaseClick = () => {
        setHistory([...history, text]);
        const newText = text.split(' ').map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
        setText(newText);
        if (props.mode==='light') {
            props.showAlert('Convert to Camel-case Done!!!', 'light')
        } else {
            props.showAlert('Convert to Camel-case Done!!!', 'secondary')
        }
    }

    const HandleTitleCaseClick = () => {
        setHistory([...history, text]);
        const newText = text.toLowerCase().split(' ').map(word => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        }).join(' ');
        setText(newText);
        if (props.mode==='light') {
            props.showAlert('Convert to Title-case Done!!!', 'light')
        } else {
            props.showAlert('Convert to Title-case Done!!!', 'secondary')
        }
    }

    const HandleReverseTextClick = () => {
        setHistory([...history, text]);
        const reversedText = text.split('').reverse().join('');
        setText(reversedText);
        if (props.mode==='light') {
            props.showAlert('Reversed Text Done!!!', 'light')
        } else {
            props.showAlert('Reversed Text Done!!!', 'secondary')
        }
    }

    const handleRemoveExtraaWhitespace = () => {
        const newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        if (props.mode==='light') {
            props.showAlert('Removed extraa White-Spaces Done!!!', 'light')
        } else {
            props.showAlert('Removed extraa White-Spaces Done!!!', 'secondary')
        }
    };

    const handleTrimWhitespace = () => {
        const newText = text.trim();
        setText(newText);
        if (props.mode==='light') {
            props.showAlert('Trimmed White-Spaces Done!!!', 'light')
        } else {
            props.showAlert('Trimmed White-Spaces Done!!!', 'secondary')
        }
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        .then(() => {
            if (props.mode==='light') {
                props.showAlert('Copied to Clipboard Done!!!', 'light')
            } else {
                props.showAlert('Copied to Clipboard Done!!!', 'secondary')
            }
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const btnColor = props.mode === 'light'?'outline-secondary':'secondary'

    return (
        <>
        <div className="container my-3" style={{color : props.mode==='light'?'black':'#232424'}}>
            <h4>{props.heading}</h4>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={(e) => setText(e.target.value)} id="exampleFormControlTextarea1" rows="6" style={{backgroundColor : props.mode==='light'?'white':'#d3d3d3', color : props.mode==='light'?'black':'#232424', borderColor: props.mode==='dark'? 'black':'black'}}></textarea>
            </div>

            <button type="button" onClick={HandleUpClick} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Convert to Upper-Case</button>
            <button type="button" onClick={HandleLowClick} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Convert to Lower-Case</button>
            <button type="button" onClick={HandleCamelCaseClick} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Convert to Camel-Case</button>
            <button type="button" onClick={HandleTitleCaseClick} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Convert to Title-Case</button>
            <button type="button" onClick={HandleReverseTextClick} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Reverse text</button>
            <button type="button" onClick={handleRemoveExtraaWhitespace} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Remove Extraa White Spaces</button>
            <button type="button" onClick={handleTrimWhitespace} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Trim White Spaces</button>
            <button type="button" onClick={handleCopyText} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Copy To Clipboard</button>
            <button type="button" onClick={HandleUndoClick} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Undo</button>
            <button type="button" onClick={HandleClearClick} className={`btn btn-${btnColor} btn-sm my-1 mx-1`}>Clear Text</button>

        </div>
        <div className="container" style={{color : props.mode==='light'?'black':'#232424'}}>
            <h4>Your Text Word Counter :-</h4>

            {/* Method - 1 */}
            <p>{code()} words {text.length} characters</p>

            {/* Method - 2 */}
            {/* <p>{text.split(' ').filter((ele)=>{return ele.length !== 0}).length} words {text.length} characters</p> */}

            <h4>Your Text Preview :-</h4>

            <p><strong>Preview : </strong>{text.length > 0 ? text : 'Nothing to preview!!!'}</p>
        </div>
        </>
  );
}
