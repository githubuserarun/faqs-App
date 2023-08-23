import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg_container">
      <div className="faq_container">
        <div className="heading">
          <h1>FAQs</h1>
        </div>

        <div>
          <ul>
            {faqsList.map(each => (
              <FaqItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Faqs
