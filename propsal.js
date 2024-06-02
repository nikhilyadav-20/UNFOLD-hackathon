import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import  { useState } from "react";

function propsal ({ contract, account,provider }) {
    const [showpropsal , setshowpropsal] = useState(false);
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log();
    console.log("vote comp");
    const Topropsal = () => {
        if (showpropsal === true){
            setshowpropsal(false);
        }else{
            setshowpropsal(true);
        }
    };
    const SetPropsalFC = async (e) => {
        e.preventDefault();
        const Name = document.getElementById("Name").value;
        console.log(Account);
        const Name = document.getElementById("Name").value;
        console.log(Name);
        if (Account && Name) {
            setLoading(true);
            const tx = await contract.RequestForNextVoting(Account, Name);
            let receipt = await tx.wait();
            console.log("submit successfully!");
            console.log(receipt);
            window.location.reload();
        } else {
            alert("please Fill input fiels");
        }
    };

    const Fatch = async () => {
        const candidates = await contract.getRequestPropsal();
        console.log(candidates);
        setCandidates(candidates);
    };

    return (
      <div>
        <br></br>
        <button onClick={Topropsal} className="form-group">
          Send Proposal For Next Elections!{" "}
    </button>
    {showpropsal && (
        <form onSubmit={SetpropsalFc} className="form-group">
         <div className="m-3">
           <p className="h5"> Connected Address : {account}</p>
         </div>
         <div className="p-2">
          AddressOfCandidates{" "};
          <input type="text" id="Name" class="form-control"></input>
         <div className="p-2">
          AddressOfNames{" "}
          <input type="text" id="Name" class="form-control"></input>
        </div>
        <button type="submit" className="btn btn-dark mt-2">
         {!loadin?(
            "submit Now!"
        ) :(
          <ReactBootStrap.Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            area-hidden="true"
        />
      )}
     </button>
    </form>
    )}
    <br></br>

    <div className="mt-3">
     <button onClick={Fatch} className="btn btn-success">
      Fatch Next Candidates
    </button>
    {candidates.map((candidates) => {
        return(
            <div key={Math.random()}>
             <table>
              <tbody>
                <tr>
                  <td className="p-2">{candidate.name}</td>
                  <td className="p-2">{candidates._CandidateAddress}</td>
                </tr>
            </tbody>
          </table>
        </div>              
       );
      })}
     </div>
     </div>
    );
   }
