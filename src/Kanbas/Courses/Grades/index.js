import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          </table>
      </div></div>);
}
export default Grades;