import { forwardRef, useImperativeHandle } from 'react';

interface ChildProps {
	counter: number;
}
const Child = forwardRef((props: ChildProps, ref) => {
  useImperativeHandle(ref, () => ({

    logMe() {
      console.log("call the map.setView")
    }

  }));

  return <div>
		<h1> CHILD: {props.counter} </h1>
	</div>
});

export default Child
