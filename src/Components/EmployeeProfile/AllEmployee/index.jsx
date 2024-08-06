import React, { useState, useEffect } from "react";
import { AllEmployeeWrap } from "./AllEmployee.styles";
import Table from "../../Table";
import { AllCol, AllData } from "../EmployeeData";
import ButtonTable from "../TableButton";
import Modal from "../../Modal";
import { serverDomain } from "../../../Constants/serverDomain";
import { useAuth } from "../../Context/Context";

const columns = [
  { key: "avatar", header: "Avatar" },
  { key: "firstName", header: "First Name" },
  { key: "designation", header: "Designation" },
  { key: "personalEmail", header: "Personal Email" },
  { key: "address", header: "Address" },
  { key: "Status", header: "Status" },
];

const AllEmployee = () => {
  const [reason, setReason] = useState(false);
  const [toldReason, setToldReason] = useState(false);
  const [deactivateReason, setDeactivateReason] = useState("");
  const { companyId } = useAuth();
  const [employees, setEmployees] = useState([]);

  const handleButtonClick = (buttonId) => {
    if (buttonId === "deactivate_1") {
      setReason(true);
    } else if (buttonId === "deactivate_2") {
      setToldReason(true);
    }
  };

  const handleSaveReason = () => {
    setToldReason(false);
    setReason(true);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${serverDomain}/user/fetch/${companyId}`);
        const data = await response.json();
        setEmployees(
          data.users.map((user, i) => ({
            ...user,
            Status: {
              buttons: [
                {
                  text: user.id == 1 ? "Activate" : "Deactivated",
                  color: user.id == 1 ? "green" : "red",
                  id: `deactivate_${user.id}`,
                },
              ],
            },
          }))
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(employees);

  return (
    <AllEmployeeWrap>
      <div className="wrapper">
        <ButtonTable
          columns={columns}
          data={employees}
          border
          onButtonClick={handleButtonClick}
          onImageClick={(avatar) => console.log("Image clicked:", avatar)}
        />
      </div>
      {reason && (
        <Modal open={reason} setOpen={setReason} width="612px">
          <div className="reasonwrap">
            <strong>Reason of Deactivate</strong>
            <textarea value={deactivateReason} readOnly />
          </div>
        </Modal>
      )}
      {toldReason && (
        <Modal open={toldReason} setOpen={setToldReason} width="612px">
          <div className="reasonwrap">
            <strong>Enter Reason of Deactivate</strong>
            <textarea
              value={deactivateReason}
              onChange={(e) => setDeactivateReason(e.target.value)}
            />
            <button onClick={handleSaveReason}>Save</button>
          </div>
        </Modal>
      )}
    </AllEmployeeWrap>
  );
};

export default AllEmployee;
