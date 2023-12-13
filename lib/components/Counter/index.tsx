// @ts-ignore
import styles from "./counter.scss?inline";

import { memo, useState } from "react";

const Counter = (props: any) => {
  console.log("counter props", props);

  const [count, setCount] = useState(0);
  return (
    <div>
      <style type="text/css">{styles}</style>
      <div className="px-counter">
        <div className="px-counter__count">{count}</div>
        <div className="px-counter__buttons">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>

        <div
          onClick={() => {
            console.log("window", window);
            window.dispatchEvent(new Event("px-close"));
            props.onAction();
          }}
          className="px-counter__click-me"
        >
          Click Me
        </div>

        <div className="px-counter__my-object">
          <pre>{JSON.stringify(props.myObject, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default memo(Counter);
