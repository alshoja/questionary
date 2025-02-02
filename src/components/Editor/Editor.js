import React, { forwardRef, useEffect, useLayoutEffect, useRef,useImperativeHandle } from 'react';
import Quill from 'quill';
import 'react-quill/dist/quill.snow.css';


// if (typeof window !== 'undefined' && window.Quill) {
//     window.Quill.register('modules/imageResize', ImageResize);
// }
// // Editor is an uncontrolled React component
const Editor = forwardRef(
    ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
        const containerRef = useRef(null);
        const defaultValueRef = useRef(defaultValue);
        const onTextChangeRef = useRef(onTextChange);
        const onSelectionChangeRef = useRef(onSelectionChange);

        useLayoutEffect(() => {
            onTextChangeRef.current = onTextChange;
            onSelectionChangeRef.current = onSelectionChange;
        });

        useEffect(() => {
            ref.current?.enable(!readOnly);
        }, [ref, readOnly]);

        useEffect(() => {
            const container = containerRef.current;
            const editorContainer = container.appendChild(
                container.ownerDocument.createElement('div'),
            );
            const quill = new Quill(editorContainer, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5] }],
                        ['bold', 'italic', 'underline'],
                        ['image', 'link', 'code-block', 'blockquote', 'clean', 'strike', 'script', 'indent', 'align'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                    ],
                },
            });

            ref.current = quill;

            if (defaultValueRef.current) {
                quill.setContents(defaultValueRef.current);
            }

            quill.on(Quill.events.TEXT_CHANGE, (...args) => {
                onTextChangeRef.current?.(...args);
            });

            quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
                onSelectionChangeRef.current?.(...args);
            });

            return () => {
                ref.current = null;
                container.innerHTML = '';
            };
        }, [ref]);

        return <div ref={containerRef}></div>;
    },
);

Editor.displayName = 'Editor';
export default Editor;