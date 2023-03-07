import './bubble.css';

function Bubble({ left, top, content, updateItems, type }) {
	return (
		<div style={type === 'back?'? {}: { left, top}}

			className={`${type === 'back' ? 'back-bubble' : ''} bubble  fade-in-animation`}


			onClick={() => updateItems(content)}>
			{
				content
			}
			{type === 'back'?<button
				style={{
					height: '52px',
					width: '52px',
					textAlign: 'center',
					margin: '10px',
					border: '1px solid white',
					backgroundColor: '#4E4E4E',
					borderRadius: '50%',
					color: 'grey',
					marginTop: '30px',

				}}
			>
				<p style={{
					color: 'white',
				}}>
					{"<"}
				</p>
			</button>:null}
		</div>
	);
}

export default Bubble