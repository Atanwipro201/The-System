import React,{ useState } from "react";
import axios from "axios";
import Test from "../components/Test";
import Punishment from "../components/punishment";
import '../App.css';
//in the future 
const apiLink ="https://the-system-6g4y07zlw-atanwipro201s-projects.vercel.app"
  
export default function Verdict() {
    const [data, setData] = React.useState({ verdict: " ",done:false,loading:false });
  const [input, setInput] = useState({ workout: false, productivity: 5 });//due to time constraints, the state management for props is minimal
//in this page we render the test component and the punishment component later
//change verdtict route
    async function fetchVerdict() {
        setData({ ...data, loading: true });
        try {
            const response = await axios.get(apiLink+"/get-verdict", {
                params: { workout: input.workout, productivity: input.productivity },
              });
        
                const responseData = response.data;
            setData({ verdict: responseData.verdict, done: true, loading: false });
            console.log("response: ",responseData);
        } catch (error) {
            console.error("Error fetching verdict:", error);
        }
    }
  return (
    <div>
      <p>{data.loading?"loading...":data.done?<Punishment data={data.done?data.verdict:"loading"} />:<Test setInput={setInput} next={fetchVerdict} input={input} />}</p>
    </div>
  );
}
