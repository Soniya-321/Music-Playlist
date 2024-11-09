import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackListItem = props => {
  const {initialTracksList, clickDlt} = props
  const {id, imageUrl, name, genre, duration} = initialTracksList
  const onClickDeleteIcon = () => {
    clickDlt(id)
  }

  return (
    <li className="list-item">
      <div className="first">
        <img src={imageUrl} alt="track" className="li-img" />
        <div className="name-container">
          <p className='name'>{name}</p>
          <p className='genre'>{genre}</p>
        </div>
      </div>
      <div className="second">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          className="dlt-btn"
          onClick={onClickDeleteIcon}
        >
          <AiOutlineDelete className="dlt-icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackListItem
