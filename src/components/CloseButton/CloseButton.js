import "./CloseButton.css"

const CloseButton = ({ closeAction }) => {
	return (
		<button className="close-button" onClick={()=> closeAction()}>
			<span className="close-text">
				<img src="./assets/close-button.svg" alt="Close Button" className="close-icon" />
				Close
			</span>
		</button>
	)
}

export default CloseButton