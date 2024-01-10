// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationalDetails} = props
  const {imgUrl, name} = destinationalDetails

  return (
    <li>
      <img src={imgUrl} className="img" alt={name} />
      <p className="">{name}</p>
    </li>
  )
}
export default DestinationItem
