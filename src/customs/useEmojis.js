import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngry, faHeart, faLaugh, faSurprise, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const useEmoji = () => {
	const [emoji] = useState([
		{ emoji__rxn: <FontAwesomeIcon color='#0a66c2' icon={faThumbsUp} />, id: 1 },
		{ emoji__rxn: <FontAwesomeIcon color='#f7b125' icon={faLaugh} />, id: 2 },
		{ emoji__rxn: <FontAwesomeIcon color='#f33e58' icon={faHeart} />, id: 3 },
		{ emoji__rxn: <FontAwesomeIcon color='#f7b125' icon={faSurprise} />, id: 4 },
		{ emoji__rxn: <FontAwesomeIcon color='#e9710f' icon={faAngry} />, id: 5 },
	])
	return emoji
}

export default useEmoji
