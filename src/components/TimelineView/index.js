import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const courseDetails = timelineItemsList.map(each => {
    if (each.categoryId === 'COURSE') {
      return each
    }
    return ''
  })
  return (
    <div>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        <ul>
          {courseDetails.map(each => (
            <CourseTimelineCard eachCourse={each} key={each.id} />
          ))}
        </ul>
      </Chrono>
    </div>
  )
}

export default TimelineView
