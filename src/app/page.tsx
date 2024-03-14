import Joke from "./component/Joke";
import Navbar from "./component/Navbar";
import Usersend from "./component/Usersend"



export default function Home() {
  return (
    <div className="bg-white ">
<Navbar/>
    <Joke/>
    <Usersend />
    </div>
  );
}
