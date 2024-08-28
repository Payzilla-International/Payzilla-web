import hrpic from '../../assets/images/hr.jpg'
import './index.less'
function Career() {
  return (
    <div className="career-wrap">
      <div>Your mind is your power</div>
      <p>
        At Payzilla, we believe that everyone’s talent can help us go further.
        So join us now!
      </p>
      <p>
        Payzilla International AG is a diverse, fast-growing, and highly
        ambitious player within the Fintech industry based in Liechtenstein. The
        dynamic environment of the Fintech sector – along with Payzilla’s
        ongoing drive for international development – means we are pleased to
        offer job opportunities worldwide. We are constantly seeking new talent
        to expand the team in sales, management, and tech.{' '}
      </p>
      <p>
        Whatever the next step in your career may be, be sure to find it here!
        View our open positions below and send your resume to hr@payzilla.io to
        apply for the job.
      </p>
      <img src={hrpic} alt="" />
    </div>
  )
}

export default Career
