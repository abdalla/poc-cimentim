import type { AppProps } from 'next/app'
import React, { useEffect, useRef, useState } from 'react'
import Child from './child'

interface ParentPropd {
	children: React.ReactNode;
	pageProps: AppProps
}

interface kidCrying {
	logMe: () => void
}

const Parent = ({ pageProps }: ParentPropd) => {
	const kidRef = useRef<kidCrying>()
	
	let [count, setCount] = useState(0)
	
	const handleClick = () => {
		setCount(count++)	

		kidRef.current?.logMe()
	}

	useEffect(() => {
			console.log(count)
			console.log("mudei o estado... chamo algum?")

			
	})


  return <div {...pageProps}>
		<h1> PARENT </h1>
		<button onClick={handleClick}> CLICK ME</button>
		<Child ref={kidRef} counter={count} />
	</div>
}

export default Parent
