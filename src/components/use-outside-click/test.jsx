import { useRef, useState } from 'react';
import useOutsideClick from '.';

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div ref={ref}>
      {showContent ? (
        <div style={{ border: '1px solid rebeccapurple' }}>
          <h1>This is random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
