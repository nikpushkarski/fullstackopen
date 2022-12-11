const Course = ({ course }) => {
  let total = 0
  course.parts.map(part => total += part.exercises)
  return (
    <>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map(part =>
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
      </ul>

      <p><b>total of {total} exercises</b></p>
    </>
    
  )
}

export default Course