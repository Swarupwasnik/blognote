import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/Siderbar/Sidebar";
import "../single/Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}