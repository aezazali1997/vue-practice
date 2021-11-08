import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
	formContainer: {
		textAlign: "center",
		"& h2": {
			textTransform: "capitalize",
			fontFamily: "Arial",
		},
	},
	form: {
		display: "grid",
		gridTemplateRows: "1fr",
		gridTemplateColumns: "4fr",
		columnGap: "1rem",
		rowGap: "1rem",
		"& div > input": {
			marginLeft: "10px",
		},
	},
});
export default styles;
