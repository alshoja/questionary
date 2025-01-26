import React, { useRef, useState } from 'react';
import Editor from './Editor/Editor';
const _Editor = () => {
    const x =
        { "ops": [{ "insert": "Question 3: " }, { "attributes": { "bold": true }, "insert": "Explain the concept of closures in JavaScript." }, { "attributes": { "header": 4 }, "insert": "\n" }, { "attributes": { "bold": true }, "insert": "Description" }, { "insert": ":\nClosures are a fundamental concept in JavaScript. This question tests the user’s understanding of how closures work, their use cases, and how they can be implemented.\n" }, { "attributes": { "bold": true }, "insert": "Define" }, { "insert": " what a closure is." }, { "attributes": { "list": "bullet" }, "insert": "\n" }, { "attributes": { "bold": true }, "insert": "Provide" }, { "insert": " examples of closures in JavaScript." }, { "attributes": { "list": "bullet" }, "insert": "\n" }, { "attributes": { "bold": true }, "insert": "Explain" }, { "insert": " how closures are used in asynchronous programming." }, { "attributes": { "list": "bullet" }, "insert": "\n" }, { "attributes": { "bold": true }, "insert": "Formatting Options" }, { "insert": ":\nUse " }, { "attributes": { "bold": true }, "insert": "code blocks" }, { "insert": " to insert JavaScript code examples." }, { "attributes": { "list": "bullet" }, "insert": "\n" }, { "insert": "Use " }, { "attributes": { "bold": true }, "insert": "blockquote" }, { "insert": " for key definitions or explanations." }, { "attributes": { "list": "bullet" }, "insert": "\n" }, { "insert": "Add " }, { "attributes": { "bold": true }, "insert": "lists" }, { "insert": " to break down different scenarios where closures can be useful." }, { "attributes": { "list": "bullet" }, "insert": "\n" }, { "insert": "\n" }] }

    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);
    const [textEditor, setTextEditor] = useState(false);

    const quillRef = useRef();

    return (
        <div>
            <Editor
                ref={quillRef}
                readOnly={readOnly}
                onSelectionChange={setRange}
                onTextChange={setLastChange}
            />
            {/* <div className="controls">
                <label>
                    Read Only:{' '}
                    <input
                        type="checkbox"
                        value={readOnly}
                        onChange={(e) => setReadOnly(e.target.checked)}
                    />
                </label>
            </div> */}
            {/* <div className="state">
                <div className="state-title">Current Range:</div>
                {range ? JSON.stringify(range) : 'Empty'}
            </div>
            <div className="state">
                <div className="state-title">Last Change:</div>
                {lastChange ? JSON.stringify(lastChange.ops) : 'Empty'}
            </div> */}
            {/* <div className="state">
                <div className="state-title">Editor Content:</div>
                <button
                    className="controls-right"
                    type="button"
                    onClick={() => {
                        const deltaobject = quillRef.current?.getContents();
                        console.log(JSON.stringify(deltaobject));
                    }}
                >
                    Get Content Length
                </button>
            </div> */}
        </div>
    );
};

export default _Editor;