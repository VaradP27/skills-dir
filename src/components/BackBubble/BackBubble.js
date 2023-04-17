import "./BackBubble.css"

const BackBubble = ({ onClick, content }) => {
	return (
		<div onClick={onClick} className="back-bubble">
			<span className="bubble-text">{content}</span>
			<button
				className="back-button"
			>
				<img src="./assets/back.svg" alt="back button" />
			</button>
		</div>
	)
}

export default BackBubble