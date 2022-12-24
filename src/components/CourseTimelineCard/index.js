const CourseTimelineCard = props => {
  const {eachCourse} = props
  const {courseTitle, description, duration, tagsList} = eachCourse
  console.log(tagsList)
  return (
    <li>
      <h1>{courseTitle}</h1>
      <p>{duration}</p>
      <p>{description}</p>
      <ul>
        {tagsList.map(eachTag => (
          <li>{eachTag.name}</li>
        ))}
      </ul>
    </li>
  )
}
export default CourseTimelineCard
