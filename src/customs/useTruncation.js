import React, { useState } from 'react'

function useTruncation() {
	const [isClicked, setisClicked] = useState(false)
	const truncateText = (string, n) => {
		if (isClicked) {
			return string
		} else {
			return (
				<>
					{string.slice(0, n)}
					<span
						onClick={() => setisClicked(true)}
						style={{
							textDecoration: 'underline',
							cursor: 'pointer',
							display: 'inline-block',
							marginLeft: 5,
						}}>
						...See more
					</span>
				</>
			)
		}
	}
	return truncateText
}

export default useTruncation
