import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/index.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDownloadExcel } from "react-export-table-to-excel";

const Show = () => {
  const tableref = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableref.current,
    filename: "userinfo",
    sheet: "userdata",
  });
  const [isPending, setIsPending] = useState(false);
  const [students, setStudents] = useState([]);
  const [Documentation, setDocumentation] = useState([]);
  const [DeptDocumentation, setDeptDocumentation] = useState([]);
  const [LastpageDocumentation, setLastpageDocumentation] = useState([]);
  const [selectedoption, setselectedoption] = useState("");
  const [Categorydoption, setCategorydoption] = useState("");
  const [DocDeptWise, setDocDeptWise] = useState("");
  const [Lastpagespicificcdoc, setLastpagespicificcdoc] = useState("");
  const [Lastpagespicificcdocyesnona, setLastpagespicificcdocyesnona] =
    useState("");

  const DeleteStudent = (id) => {
    axios
      .delete("http://localhost:5000/DeleteStd/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/records?filter=${selectedoption}`)
      .then((result) => setStudents(result.data))
      .catch((err) => console.log(err));
  }, [selectedoption]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Category?categary=${Categorydoption}`)
      .then((result) => setStudents(result.data))
      .catch((err) => console.log(err));
  }, [Categorydoption]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Alldoc`)
      .then((result) => setDocumentation(result.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Docdept?Docdeptwise=${DocDeptWise}`)
      .then((result) => setDeptDocumentation(result.data))
      .catch((err) => console.log(err));
  }, [DocDeptWise]);

  useEffect(() => {
    axios
      .post(`http://localhost:5000/Lastpagespicificcdoc`, {
        document: Lastpagespicificcdoc,
        yesnonan: Lastpagespicificcdocyesnona,
      })
      .then((result) => setLastpageDocumentation(result.data))
      .catch((err) => console.log("error in post request ", err));
  }, [Lastpagespicificcdoc, Lastpagespicificcdocyesnona]);

  return (
    <div className="filterstd">
      <div className="filterstudent">
        {" "}
        <div className="branchdesign">
          <div className="branchdesign1">
            <h4>Branch</h4>
            <Form.Select
              aria-label="Default select example"
              className="selectall"
              value={selectedoption}
              onChange={(e) => setselectedoption(e.target.value)}
            >
              <option>ME</option>
              <option>AE</option>
              <option>CO</option>
              <option>EJ</option>
              <option>CE</option>
              <option>CH</option>
            </Form.Select>
          </div>
          <div className="branchdesign2">
            <h4>Category</h4>
            <Form.Select
              aria-label="Default select example"
              className="selectall"
              value={Categorydoption}
              onChange={(e) => {
                setCategorydoption(e.target.value);
              }}
            >
              <option>open</option>
              <option>SC</option>
              <option>ST</option>
              <option>NT1</option>
              <option>NT2</option>
              <option>NT3</option>
              <option>OBC</option>
              <option>SBC</option>
              <option>VJ/DNT</option>
            </Form.Select>
          </div>
        </div>
        <div className="content">
          <ToggleButton
            className="mb-2 downloadbtn"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            onClick={onDownload}
          >
            download
          </ToggleButton>
          {students.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <table border={1} ref={tableref}>
              <thead>
                <tr>
                  <th>ApplicationID</th>
                  <th>date</th>
                  <th>Action</th>
                  <th>Action</th>
                  <th>MeritNo</th>
                  <th>RegistrationNo</th>
                  <th>Name of Candidate</th>
                  <th>Name of Father</th>
                  <th>Name of Mother</th>
                  <th>Category</th>
                  <th>ReservedCategory</th>
                  <th>Address</th>
                  <th>MobileNo</th>
                  <th>Tel</th>
                  <th>Religion</th>
                  <th>Caste</th>
                  <th>Domicile</th>
                  <th>District </th>
                  <th>AcademicYear</th>
                  <th>Gender</th>
                  <th>sdateBirth</th>
                  <th>sdateBirthPlace</th>
                  <th>LastSchool</th>
                  <th>School</th>
                  <th>SSCMM</th>
                  <th>SSCSM</th>
                  <th>SSCEM</th>
                  <th>HSCMM</th>
                  <th>HSCSM</th>
                  <th>HSCEM</th>
                  <th>ParentsIncome</th>
                  <th> MeritMarkSSC</th>
                  <th>StudentCategory</th>
                  <th>WhetherEBC</th>
                  <th>HandicapType</th>
                  <th>DefenceType</th>
                  <th>HSCMCVCPassedITIPassed</th>
                  <th>HSCScienceHSCVocationalPassed</th>
                  <th>MarksobtainedinScience</th>
                  <th>TotalFee</th>
                  <th>StayinginHostel</th>
                  <th>Branch</th>
                  <th>EducationFacility</th>
                  <th>NCC</th>
                  <th>TypeofCandidiate</th>
                  <th>MinorityCandidiate</th>
                  <th>EMail</th>
                  <th>LandLineNo</th>
                  <th>MoNo</th>
                  <th>FullNameofParent</th>
                  <th>FatherMotherGuardianof</th>
                  <th>classBranch</th>
                  <th>SODOMrMiss</th>
                  <th>Deponent</th>
                  <th>Lfrom</th>
                  <th>Lsno</th>
                  <th>Lpno</th>
                  <th>Lspgclass</th>
                  <th>Lspgbranch</th>
                  <th>Lspgcategory</th>
                  <th>AllotmentLetter</th>
                  <th>MarksheetorZFORM</th>
                  <th>SSCMARKSHEET</th>
                  <th>HSCMARKSHEET</th>
                  <th>LEAVINGCERTIFICATE</th>
                  <th>CASTCERTIFICATE</th>
                  <th>NONCREMYLAYERCERTIFICATE</th>
                  <th>GAPCERTIFICATE</th>
                  <th>NATIONALITYCERTIFICATE</th>
                  <th>DEFENCECERTIFICATE</th>
                  <th>PHYSICALHANDICAPCERTIFICATE</th>
                  <th>NCCCERTIFICATE</th>
                  <th>DRAWINGCERTIFICATE</th>
                  <th>DRAWINGCERTIFICATE</th>
                  <th>INCOMECERTIFICATE</th>
                  <th>INCOMECERTIFICATE</th>
                  <th>IFANYDOCUMENTSREQUIRED</th>
                  <th>Lssname</th>
                  <th>Lssno</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.ApplicationID}</td>
                    <td>{student.sdate}</td>
                    <td>
                      <NavLink to={`/Newupdate/${student._id}`}>
                        <Button variant="outline-primary">Update</Button>
                      </NavLink>
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        onClick={(e) => DeleteStudent(student._id)}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>{student.MeritNo}</td>
                    <td>{student.RegistrationNo}</td>
                    <td>{student.NameofCandidate}</td>
                    <td>{student.FNameofCandidate}</td>
                    <td>{student.MNameofCandidate}</td>
                    <td>{student.Category}</td>
                    <td>{student.ReservedCategory}</td>
                    <td>{student.Address}</td>
                    <td>{student.MobileNo}</td>
                    <td>{student.Tel}</td>
                    <td>{student.Religion}</td>
                    <td>{student.Caste}</td>
                    <td>{student.Domicile}</td>
                    <td>{student.District} </td>
                    <td>{student.AcademicYear}</td>
                    <td>{student.Gender}</td>
                    <td>{student.sdateBirth}</td>
                    <td>{student.sdateBirthPlace}</td>
                    <td>{student.LastSchool}</td>
                    <td>{student.School}</td>
                    <td>{student.SSCMM}</td>
                    <td>{student.SSCSM}</td>
                    <td>{student.SSCEM}</td>
                    <td>{student.HSCMM}</td>
                    <td>{student.HSCSM}</td>
                    <td>{student.HSCEM}</td>
                    <td>{student.ParentsIncome}</td>
                    <td> {student.MeritMarkSSC}</td>
                    <td>{student.StudentCategory}</td>
                    <td>{student.WhetherEBC}</td>
                    <td>{student.HandicapType}</td>
                    <td>{student.DefenceType}</td>
                    <td>{student.HSCMCVCPassedITIPassed}</td>
                    <td>{student.HSCScienceHSCVocationalPassed}</td>
                    <td>{student.MarksobtainedinScience}</td>
                    <td>{student.TotalFee}</td>
                    <td>{student.StayinginHostel}</td>
                    <td>{student.Branch}</td>
                    <td>{student.EducationFacility}</td>
                    <td>{student.NCC}</td>
                    <td>{student.TypeofCandidiate}</td>
                    <td>{student.MinorityCandidiate}</td>
                    <td>{student.EMail}</td>
                    <td>{student.LandLineNo}</td>
                    <td>{student.MoNo}</td>
                    <td>{student.FullNameofParent}</td>
                    <td>{student.FatherMotherGuardianof}</td>
                    <td>{student.classBranch}</td>
                    <td>{student.SODOMrMiss}</td>
                    <td>{student.Deponent}</td>
                    <td>{student.Lfrom}</td>
                    <td>{student.Lsno}</td>
                    <td>{student.Lpno}</td>
                    <td>{student.Lspgclass}</td>
                    <td>{student.Lspgbranch}</td>
                    <td>{student.Lspgcategory}</td>
                    <td>{student.AllotmentLetter}</td>
                    <td>{student.MarksheetorZFORM}</td>
                    <td>{student.SSCMARKSHEET}</td>
                    <td>{student.HSCMARKSHEET}</td>
                    <td>{student.LEAVINGCERTIFICATE}</td>
                    <td>{student.CASTCERTIFICATE}</td>
                    <td>{student.NONCREMYLAYERCERTIFICATE}</td>
                    <td>{student.GAPCERTIFICATE}</td>
                    <td>{student.NATIONALITYCERTIFICATE}</td>
                    <td>{student.DEFENCECERTIFICATE}</td>
                    <td>{student.PHYSICALHANDICAPCERTIFICATE}</td>
                    <td>{student.NCCCERTIFICATE}</td>
                    <td>{student.DRAWINGCERTIFICATE}</td>
                    <td>{student.DRAWINGCERTIFICATE}</td>
                    <td>{student.INCOMECERTIFICATE}</td>
                    <td>{student.INCOMECERTIFICATE}</td>
                    <td>{student.IFANYDOCUMENTSREQUIRED}</td>
                    <td>{student.Lssname}</td>
                    <td>{student.Lssno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div>
          <h4>Select specific document</h4>
          <Form.Select
            aria-label="Default select example"
            className="selectall"
            value={Lastpagespicificcdoc}
            onChange={(e) => setLastpagespicificcdoc(e.target.value)}
          >
            <option>select</option>
            <option>AllotmentLetter</option>
            <option>MarksheetorZFORM</option>
            <option>SSCMARKSHEET</option>
            <option>HSCMARKSHEET</option>
            <option>LEAVINGCERTIFICATE</option>
            <option>CASTCERTIFICATE</option>
            <option>NONCREMYLAYERCERTIFICATE</option>
            <option>GAPCERTIFICATE</option>
            <option>NATIONALITYCERTIFICATE</option>
            <option>DEFENCECERTIFICATE</option>
            <option>PHYSICALHANDICAPCERTIFICATE</option>
            <option>NCCCERTIFICATE</option>
            <option>DRAWINGCERTIFICATE</option>
            <option>INCOMECERTIFICATE</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="selectall"
            value={Lastpagespicificcdocyesnona}
            onChange={(e) => setLastpagespicificcdocyesnona(e.target.value)}
          >
            <option>select</option>
            <option>yes</option>
            <option>no</option>
            <option>na</option>
          </Form.Select>
          <div className="content">
            <ToggleButton
              className="mb-2 downloadbtn"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              onClick={onDownload}
            >
              download
            </ToggleButton>
            {LastpageDocumentation.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <table border={1} ref={tableref}>
                <thead>
                  <tr>
                    <th>Name of Candidate</th>
                    <th>Branch</th>
                    <th>MeritNo</th>
                    <th>RegistrationNo</th>
                    <th>Category</th>
                    <th>MobileNo</th>
                    <th>{Lastpagespicificcdoc}</th>
                  </tr>
                </thead>
                <tbody>
                  {LastpageDocumentation.map((student) => (
                    <tr key={student._id}>
                      <td>{student.NameofCandidate}</td>
                      <td>{student.Branch}</td>
                      <td>{student.MeritNo}</td>
                      <td>{student.RegistrationNo}</td>
                      <td>{student.Category}</td>
                      <td>{student.MobileNo}</td>
                      <td>{Lastpagespicificcdocyesnona}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="lsalldocument">
          <div className="branchdesign">
            <h4>Documents of Student Department wise</h4>
            <Form.Select
              aria-label="Default select example"
              className="selectall"
              value={DocDeptWise}
              onChange={(e) => setDocDeptWise(e.target.value)}
            >
              <option>select</option>
              <option>ME</option>
              <option>AE</option>
              <option>CO</option>
              <option>EJ</option>
              <option>CE</option>
              <option>CH</option>
            </Form.Select>
          </div>
          <div className="content">
            <ToggleButton
              className="mb-2 downloadbtn"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              onClick={onDownload}
            >
              download
            </ToggleButton>
            {DeptDocumentation.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <table border={1} ref={tableref}>
                <thead>
                  <tr>
                    <th>ApplicationID</th>
                    <th>Name of Candidate</th>
                    <th>Branch</th>
                    <th>MeritNo</th>
                    <th>RegistrationNo</th>
                    <th>Category</th>
                    <th>MobileNo</th>
                    <th>AllotmentLetter</th>
                    <th>MarksheetorZFORM</th>
                    <th>SSCMARKSHEET</th>
                    <th>HSCMARKSHEET</th>
                    <th>LEAVINGCERTIFICATE</th>
                    <th>CASTCERTIFICATE</th>
                    <th>NONCREMYLAYERCERTIFICATE</th>
                    <th>GAPCERTIFICATE</th>
                    <th>NATIONALITYCERTIFICATE</th>
                    <th>DEFENCECERTIFICATE</th>
                    <th>PHYSICALHANDICAPCERTIFICATE</th>
                    <th>NCCCERTIFICATE</th>
                    <th>DRAWINGCERTIFICATE</th>
                    <th>INCOMECERTIFICATE</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {DeptDocumentation.map((student) => (
                    <tr key={student._id}>
                      <td>{student.ApplicationID}</td>
                      <td>{student.NameofCandidate}</td>
                      <td>{student.Branch}</td>
                      <td>{student.MeritNo}</td>
                      <td>{student.RegistrationNo}</td>
                      <td>{student.Category}</td>
                      <td>{student.MobileNo}</td>
                      <td>{student.AllotmentLetter}</td>
                      <td>{student.MarksheetorZFORM}</td>
                      <td>{student.SSCMARKSHEET}</td>
                      <td>{student.HSCMARKSHEET}</td>
                      <td>{student.LEAVINGCERTIFICATE}</td>
                      <td>{student.CASTCERTIFICATE}</td>
                      <td>{student.NONCREMYLAYERCERTIFICATE}</td>
                      <td>{student.GAPCERTIFICATE}</td>
                      <td>{student.NATIONALITYCERTIFICATE}</td>
                      <td>{student.DEFENCECERTIFICATE}</td>
                      <td>{student.PHYSICALHANDICAPCERTIFICATE}</td>
                      <td>{student.NCCCERTIFICATE}</td>
                      <td>{student.DRAWINGCERTIFICATE}</td>
                      <td>{student.INCOMECERTIFICATE}</td>
                      <td>
                        <NavLink to={`/Newupdate/${student._id}`}>
                          <Button variant="outline-primary">Update</Button>
                        </NavLink>
                      </td>
                      <td>
                        <Button
                          variant="outline-primary"
                          onClick={(e) => DeleteStudent(student._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="lsalldocument">
          <h3>Documents of AllStudent</h3>
          <div className="content">
            <ToggleButton
              className="mb-2 downloadbtn"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              onClick={onDownload}
            >
              download
            </ToggleButton>
            {Documentation.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <table border={1} ref={tableref}>
                <thead>
                  <tr>
                    <th>ApplicationID</th>
                    <th>Name of Candidate</th>
                    <th>Branch</th>
                    <th>MeritNo</th>
                    <th>RegistrationNo</th>
                    <th>Category</th>
                    <th>MobileNo</th>
                    <th>AllotmentLetter</th>
                    <th>MarksheetorZFORM</th>
                    <th>SSCMARKSHEET</th>
                    <th>HSCMARKSHEET</th>
                    <th>LEAVINGCERTIFICATE</th>
                    <th>CASTCERTIFICATE</th>
                    <th>NONCREMYLAYERCERTIFICATE</th>
                    <th>GAPCERTIFICATE</th>
                    <th>NATIONALITYCERTIFICATE</th>
                    <th>DEFENCECERTIFICATE</th>
                    <th>PHYSICALHANDICAPCERTIFICATE</th>
                    <th>NCCCERTIFICATE</th>
                    <th>DRAWINGCERTIFICATE</th>
                    <th>INCOMECERTIFICATE</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Documentation.map((student) => (
                    <tr key={student._id}>
                      <td>{student.ApplicationID}</td>
                      <td>{student.NameofCandidate}</td>
                      <td>{student.Branch}</td>
                      <td>{student.MeritNo}</td>
                      <td>{student.RegistrationNo}</td>
                      <td>{student.Category}</td>
                      <td>{student.MobileNo}</td>
                      <td>{student.AllotmentLetter}</td>
                      <td>{student.MarksheetorZFORM}</td>
                      <td>{student.SSCMARKSHEET}</td>
                      <td>{student.HSCMARKSHEET}</td>
                      <td>{student.LEAVINGCERTIFICATE}</td>
                      <td>{student.CASTCERTIFICATE}</td>
                      <td>{student.NONCREMYLAYERCERTIFICATE}</td>
                      <td>{student.GAPCERTIFICATE}</td>
                      <td>{student.NATIONALITYCERTIFICATE}</td>
                      <td>{student.DEFENCECERTIFICATE}</td>
                      <td>{student.PHYSICALHANDICAPCERTIFICATE}</td>
                      <td>{student.NCCCERTIFICATE}</td>
                      <td>{student.DRAWINGCERTIFICATE}</td>
                      <td>{student.INCOMECERTIFICATE}</td>
                      <td>
                        <NavLink to={`/Newupdate/${student._id}`}>
                          <Button variant="outline-primary">Update</Button>
                        </NavLink>
                      </td>
                      <td>
                        <Button
                          variant="outline-primary"
                          onClick={(e) => DeleteStudent(student._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
