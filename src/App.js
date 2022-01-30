// in src/App.js
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Record/UserList";
import { PostList, PostEdit, PostCreate } from "./Record/PostList";
import { Top } from "./Page/Top"
import authProvider from "./Utility/authProvide"
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
	<Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Top} >
		<Resource name="users" list={UserList} icon={UserIcon} />
		<Resource
			name="posts"
			list={PostList}
			edit={PostEdit}
			create={PostCreate}
      icon={PostIcon}
		/>
	</Admin>
);

export default App;
