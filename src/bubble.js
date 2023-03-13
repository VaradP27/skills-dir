import React from 'react';
import './bubble.css';
import Tooltip from "./components/Tooltip/Tooltip"
function Bubble({ left, top, content, updateItems, type, activeBubble, setActiveBubble, fade, skills }) {
	const [show, setShow] = React.useState(false)

	React.useEffect(() => setShow(activeBubble === content), [activeBubble, content])


	return (
		<div style={
			type === 'back?' ? {} : { left, top }
		}

		
		className={`${type === 'back' ? 'back-bubble' : ''} bubble  fade-in-animation ${activeBubble?(activeBubble === content ? '' : 'blur'):null} ${fade?'fade-out-animation':null}}`}
			onMouseOver={() => setActiveBubble(content)}
			onMouseOut={() => setActiveBubble(null)}


			onClick={() => updateItems(content)}>
			{
				<a href="https://google.com">
					{content}
				</a>
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
				<p  style={{
					color: 'white',
				}}>
					{"<"}
				</p>
			</button> : null}
			<Tooltip skills={skills} show={show} />
		</div>
	);
}

export default Bubble