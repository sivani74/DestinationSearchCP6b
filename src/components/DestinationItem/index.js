// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="description"> {name}</p>
    </li>
  )
}

export default DestinationItem
