import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
    return (decimal.toFixed(2) + "%");
}

const calcScore = (total, goal) => {
    return percentToDecimal(total / goal);
}

export function CalculateScore(props) {

    return (
        <div className="formatstyle">

            <h1>Student Details</h1>

            <p><b>Name :</b> {props.Name}</p>

            <p><b>School :</b> {props.School}</p>

            <p><b>Total Score :</b> {props.total}</p>

            <p><b>Goal :</b> {props.goal}</p>

            <h2>Average Score : {calcScore(props.total, props.goal)}</h2>

        </div>
    );
}