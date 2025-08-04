function profileCard({ employee_image, employee_name, job_title,email }){

    return(
        <div className="employee">
        <img src={employee_image} alt="profile picture"></img>
        <h2>{employee_name}</h2>
        <h4>{job_title}</h4>
        <p>{email}</p>
        </div>
    )
}
export default profileCard
