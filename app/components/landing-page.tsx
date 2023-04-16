import { ConnectStravaButton } from "./connect-strava-button"
import { Logo } from './logo'

const LandingPage = () => {
  return (
    <div>
      <div className='logo-container'>
        <Logo />
        <h1 className='app-title'>Summit</h1>
      </div>

      <p>Are you an avid hiker who loves to bag Wainwrights? Summit is the app you need. Simply connect your Strava account and Summit will start tracking which fells you've bagged. No more manually tracking your progress or wondering which Wainwrights you've conquered!</p>

<p>
With Summit, you can:
  <ul>
    <li>Effortlessly track which Wainwrights you’ve bagged</li>
    <li>Easily view your progress at a glance</li>
    <li>Set goals and see your progress over time</li>
    <li>Compete with friends to see who can bag the most fells</li>
  </ul>
</p>

<p>Don't let your hard-earned Wainwrights go uncounted. Connect to Summit today and start tracking your progress like a pro!</p>

      <div className='actions'>
        <ConnectStravaButton />
      </div>
    </div>
  )
}

export { LandingPage }
