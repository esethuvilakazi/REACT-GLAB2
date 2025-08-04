import ProfileCard from './profileCard';
import profile1 from './assets/esethu.jpg';
import profile2 from './assets/amahle.jpg';

function App() {
const team = [
  {
    employee_image: profile1,
    employee_name: 'Esethu Vilakazi',
    job_title: 'Development Director',
    email: 'esethuvee@gmail.com'
  },
  {
    employee_image: profile2,
    employee_name: 'Amahle Vilakazi',
    job_title: 'Financial Director',
    email: 'amahlevee@gmail.com'
  }
  ]
  return(
    <>
      <h2>Veelaa Consultings Executive: </h2>
      <div className="profile">
       {team.map((member, index) => (
        <ProfileCard
          key={index}
          employee_image={member.employee_image}
          employee_name={member.employee_name}
          job_title={member.job_title}
          email={member.email}
        />
      ))}
      
      </div>
    </>
  )
}

export default App
