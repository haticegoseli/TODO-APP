import Datas from "./components/Datas";
import Input from "./components/Input";
import Entry from "./components/Entry";

export const routes = [
  {path : "/", component: Entry},
  {path : '/create-task', component: Input},
  {path : '/saved', component : Datas}
]
