import {
	List,
	Datagrid,
	TextField,
	EmailField,
	useRecordContext,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

// スタイルを定義
const useStyles = makeStyles({
	link: {
		textDecoration: "none",
	},
	icon: {
		width: "0.5em",
		height: "0.5em",
		paddingLeft: 2,
	},
});

const MyUrlField = ({ source }) => {
	const record = useRecordContext();
	const classes = useStyles();
	return record ? (
		<a href={record[source]} className={classes.link}>
			{record[source]}
			<LaunchIcon className={classes.icon} />
		</a>
	) : null;
};

export const UserList = (props) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="name" />
			<TextField source="username" />
			<EmailField source="email" />
			{/* <TextField source="address.street" /> */}
			<TextField source="phone" />
			<MyUrlField source="website" />
			<TextField source="company.name" />
		</Datagrid>
	</List>
);
