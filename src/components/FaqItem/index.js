import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
const plusAlt = 'plus'
const minusAlt = 'minus'

class FaqItem extends Component {
  state = {isActive: false}

  toggleBtn = () => {
    this.setState(prev => ({
      isActive: !prev.isActive,
    }))
  }

  renderAns = () => {
    const {details} = this.props
    const {answerText} = details
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answerText">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isActive} = this.state
    const {details} = this.props
    const {questionText} = details
    const btnImg = isActive ? minusImg : plusImg
    const btnAlt = isActive ? minusAlt : plusAlt

    return (
      <li>
        <div>
          <div className="li_top">
            <h1 className="questionText">{questionText}</h1>
            <button className="btn" type="button" onClick={this.toggleBtn}>
              <img src={btnImg} alt={btnAlt} />
            </button>
          </div>
          {this.renderAns()}
        </div>
      </li>
    )
  }
}
export default FaqItem
