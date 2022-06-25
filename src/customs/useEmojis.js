import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngry, faHeart, faLaugh, faSurprise, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const useEmoji = () => {
	const [emoji] = useState([
		{ emoji__rxn: <FontAwesomeIcon color='#0a66c2' icon={faThumbsUp} /> },
		{ emoji__rxn: <FontAwesomeIcon color='#f7b125' icon={faLaugh} /> },
		{ emoji__rxn: <FontAwesomeIcon color='#f33e58' icon={faHeart} /> },
		{ emoji__rxn: <FontAwesomeIcon color='#f7b125' icon={faSurprise} /> },
		{ emoji__rxn: <FontAwesomeIcon color='#e9710f' icon={faAngry} /> },
	])
	return emoji
}

export default useEmoji
