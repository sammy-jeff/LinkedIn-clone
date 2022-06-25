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
					<h5
						onClick={() => setisClicked(true)}
						style={{
							textDecoration: 'underline',
							cursor: 'pointer',
							display: 'inline-block',
							marginLeft: 5,
						}}>
						...See more
					</h5>
				</>
			)
		}
	}
	return truncateText
}

export default useTruncation
