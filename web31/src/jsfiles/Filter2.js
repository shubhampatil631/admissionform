import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDownloadExcel } from "react-export-table-to-excel";
import Button from "react-bootstrap/Button";

const Show = () => {
  const tableref = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableref.current,
    filename: "search data",
    sheet: "userdata",
  });
  const [searchDoc, setSearchDoc] = useState([]);
  const [Checkboxdata, setCheckboxdata] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [YesNoNA, setYesNoNA] = useState("");
  const [ReservedCategory, setReservedCategory] = useState("");
  const [AllotmentLetter, setAllotmentLetter] = useState(0);
  const [MarksheetorZFORM, setMarksheetorZFORM] = useState(0);
  const [SSCMARKSHEET, setSSCMARKSHEET] = useState(0);
  const [HSCMARKSHEET, setHSCMARKSHEET] = useState(0);
  const [LEAVINGCERTIFICATE, setLEAVINGCERTIFICATE] = useState(0);
  const [CASTCERTIFICATE, setCASTCERTIFICATE] = useState(0);
  const [NONCREMYLAYERCERTIFICATE, setNONCREMYLAYERCERTIFICATE] = useState(0);
  const [GAPCERTIFICATE, setGAPCERTIFICATE] = useState(0);
  const [NATIONALITYCERTIFICATE, setNATIONALITYCERTIFICATE] = useState(0);
  const [DEFENCECERTIFICATE, setDEFENCECERTIFICATE] = useState(0);
  const [PHYSICALHANDICAPCERTIFICATE, setPHYSICALHANDICAPCERTIFICATE] =
    useState(0);
  const [NCCCERTIFICATE, setNCCCERTIFICATE] = useState(0);
  const [DRAWINGCERTIFICATE, setDRAWINGCERTIFICATE] = useState(0);
  const [INCOMECERTIFICATE, setINCOMECERTIFICATE] = useState(0);
  const [IFANYDOCUMENTSREQUIRED, setIFANYDOCUMENTSREQUIRED] = useState(0);

  const DeleteStudent = (id) => {
    axios
      .delete("http://localhost:5000/DeleteStd/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/search/${searchKey}`
        );
        setSearchDoc(response.data.results);
      } catch (error) {
        console.error("Error during the search:", error);
      }
    };

    if (searchKey.trim() !== "") {
      handleSearch();
    }
  }, [searchKey]);

  useEffect(() => {
    const res = axios
      .post("http://localhost:5000/checkboxfield", {
        YesNoNA: YesNoNA,
        ReservedCategory: ReservedCategory,
        AllotmentLetter: AllotmentLetter,
        MarksheetorZFORM: MarksheetorZFORM,
        SSCMARKSHEET: SSCMARKSHEET,
        HSCMARKSHEET: HSCMARKSHEET,
        LEAVINGCERTIFICATE: LEAVINGCERTIFICATE,
        CASTCERTIFICATE: CASTCERTIFICATE,
        NONCREMYLAYERCERTIFICATE: NONCREMYLAYERCERTIFICATE,
        GAPCERTIFICATE: GAPCERTIFICATE,
        NATIONALITYCERTIFICATE: NATIONALITYCERTIFICATE,
        DEFENCECERTIFICATE: DEFENCECERTIFICATE,
        PHYSICALHANDICAPCERTIFICATE: PHYSICALHANDICAPCERTIFICATE,
        NCCCERTIFICATE: NCCCERTIFICATE,
        DRAWINGCERTIFICATE: DRAWINGCERTIFICATE,
        INCOMECERTIFICATE: INCOMECERTIFICATE,
        IFANYDOCUMENTSREQUIRED: IFANYDOCUMENTSREQUIRED,
      })
      .then((res) => {
        console.log(res);
        setCheckboxdata(res.data);
      })
      .catch((err) => console.log(err));
  }, [
    YesNoNA,
    ReservedCategory,
    AllotmentLetter,
    MarksheetorZFORM,
    SSCMARKSHEET,
    HSCMARKSHEET,
    LEAVINGCERTIFICATE,
    CASTCERTIFICATE,
    NONCREMYLAYERCERTIFICATE,
    GAPCERTIFICATE,
    NATIONALITYCERTIFICATE,
    DEFENCECERTIFICATE,
    PHYSICALHANDICAPCERTIFICATE,
    NCCCERTIFICATE,
    DRAWINGCERTIFICATE,
    INCOMECERTIFICATE,
    IFANYDOCUMENTSREQUIRED,
  ]);
  return (
    <div className="overallform">
      <div class="row">
        <div class="col-12">
          <div class="input-group">
            <input
              class="form-control border-secondary py-2 mb-4"
              type="search"
              placeholder="search"
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div>
          <ToggleButton
            className="mb-2 downloadbtn"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            onClick={onDownload}
          >
            download
          </ToggleButton>
          {searchDoc.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <table border={1} ref={tableref}>
              {/* Your table headers */}
              <thead>
                <tr>
                  <th>ApplicationID</th>
                  <th>sdate</th>
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
                  <th>ANameofCandidatea</th>
                  <th>Year</th>

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
                  <th>NameofStudent</th>
                  <th>ParentsIncome</th>
                  <th> MeritMarkSSC</th>
                  <th>StudentCategory</th>
                  <th>WhetherEBC</th>
                  <th>HandicapType</th>
                  <th>DefenceType</th>
                  <th>HSCMCVCPassedITIPassed</th>
                  <th>HSCScienceHSCVocationalPassed</th>
                  <th>MarksobtainedinScience</th>
                  <th>AdmissionDate</th>
                  <th>TotalFee</th>
                  <th>StayinginHostel</th>
                  <th>Branch</th>
                  <th>EducationFacility</th>
                  <th>NCC</th>
                  <th>TypeofCandidiate</th>
                  <th>MinorityCandidiate</th>
                  <th>EMail</th>
                  <th>Address2</th>
                  <th>LandLineNo</th>
                  <th>MoNo</th>
                  <th>FullNameofParent</th>
                  <th>FatherMotherGuardianof</th>
                  <th>classBranch</th>
                  <th>SODOMrMiss</th>
                  <th>Declaredthis</th>
                  <th>Deponent</th>
                  <th>Verifiedat</th>
                  <th>Ldate</th>
                  <th>Lfrom</th>
                  <th>Lsname</th>
                  <th>Lsno</th>
                  <th>Lpname</th>
                  <th>Lpno</th>
                  <th>Lspgname</th>
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
                  <th>Lspno</th>
                  <th>Lsdate</th>
                </tr>
              </thead>
              <tbody>
                {searchDoc.map((student) => (
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
                    <td>{student.FNameofCandidate}</td>
                    <td>{student.Category}</td>
                    <td>{student.ReservedCategory}</td>
                    <td>{student.Address}</td>
                    <td>{student.MobileNo}</td>
                    <td>{student.Tel}</td>
                    <td>{student.Religion}</td>
                    <td>{student.Caste}</td>
                    <td>{student.Domicile}</td>
                    <td>{student.District} </td>
                    <td>{student.ANameofCandidate}</td>
                    <td>{student.Year}</td>
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
                    <td>{student.NameofStudent}</td>
                    <td>{student.ParentsIncome}</td>
                    <td> {student.MeritMarkSSC}</td>
                    <td>{student.StudentCategory}</td>
                    <td>{student.WhetherEBC}</td>
                    <td>{student.HandicapType}</td>
                    <td>{student.DefenceType}</td>
                    <td>{student.HSCMCVCPassedITIPassed}</td>
                    <td>{student.HSCScienceHSCVocationalPassed}</td>
                    <td>{student.MarksobtainedinScience}</td>
                    <td>{student.AdmissionDate}</td>
                    <td>{student.TotalFee}</td>
                    <td>{student.StayinginHostel}</td>
                    <td>{student.Branch}</td>
                    <td>{student.EducationFacility}</td>
                    <td>{student.NCC}</td>
                    <td>{student.TypeofCandidiate}</td>
                    <td>{student.MinorityCandidiate}</td>
                    <td>{student.EMail}</td>
                    <td>{student.Address2}</td>
                    <td>{student.LandLineNo}</td>
                    <td>{student.MoNo}</td>
                    <td>{student.FullNameofParent}</td>
                    <td>{student.FatherMotherGuardianof}</td>
                    <td>{student.classBranch}</td>
                    <td>{student.SODOMrMiss}</td>
                    <td>{student.Declaredthis}</td>
                    <td>{student.Deponent}</td>
                    <td>{student.Verifiedat}</td>
                    <td>{student.Ldate}</td>
                    <td>{student.Lfrom}</td>
                    <td>{student.Lsname}</td>
                    <td>{student.Lsno}</td>
                    <td>{student.Lpname}</td>
                    <td>{student.Lpno}</td>
                    <td>{student.Lspgname}</td>
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
                    <td>{student.Lspno}</td>
                    <td>{student.Lsdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="checkboxfiled">
        <Form.Select
          aria-label="Default select example"
          className="selectall"
          value={YesNoNA}
          onChange={(e) => setYesNoNA(e.target.value)}
        >
          <option>select</option>
          <option>yes</option>
          <option>no</option>
          <option>na</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          className="selectall"
          onChange={(e) => setReservedCategory(e.target.value)}
          value={ReservedCategory}
        >
          <option>select</option>
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
        <div className="content">
          <table border={1}>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    AllotmentLetter === 0
                      ? setAllotmentLetter(1)
                      : setAllotmentLetter(0);
                  }}
                />
                <label>AllotmentLetter</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    CASTCERTIFICATE === 0
                      ? setCASTCERTIFICATE(1)
                      : setCASTCERTIFICATE(0);
                  }}
                />
                <label>CASTCERTIFICATE</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    PHYSICALHANDICAPCERTIFICATE === 0
                      ? setPHYSICALHANDICAPCERTIFICATE(1)
                      : setPHYSICALHANDICAPCERTIFICATE(0);
                  }}
                />
                <label>PHYSICALHANDICAPCERTIFICATE</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    MarksheetorZFORM === 0
                      ? setMarksheetorZFORM(1)
                      : setMarksheetorZFORM(0);
                  }}
                />
                <label>MarksheetorZFORM</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    NONCREMYLAYERCERTIFICATE === 0
                      ? setNONCREMYLAYERCERTIFICATE(1)
                      : setNONCREMYLAYERCERTIFICATE(0);
                  }}
                />
                <label>NONCREMYLAYERCERTIFICATE</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    NCCCERTIFICATE === 0
                      ? setNCCCERTIFICATE(1)
                      : setNCCCERTIFICATE(0);
                  }}
                />
                <label>NCCCERTIFICATE</label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="checkbox"
                  onChange={(e) => {
                    SSCMARKSHEET === 0
                      ? setSSCMARKSHEET(1)
                      : setSSCMARKSHEET(0);
                  }}
                />
                <label>SSCMARKSHEET</label>
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  onChange={(e) => {
                    GAPCERTIFICATE === 0
                      ? setGAPCERTIFICATE(1)
                      : setGAPCERTIFICATE(0);
                  }}
                />
                <label>GAPCERTIFICATE</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    DRAWINGCERTIFICATE === 0
                      ? setDRAWINGCERTIFICATE(1)
                      : setDRAWINGCERTIFICATE(0);
                  }}
                />
                <label>DRAWINGCERTIFICATE</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    HSCMARKSHEET === 0
                      ? setHSCMARKSHEET(1)
                      : setHSCMARKSHEET(0);
                  }}
                />
                <label>HSCMARKSHEET</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    NATIONALITYCERTIFICATE === 0
                      ? setNATIONALITYCERTIFICATE(1)
                      : setNATIONALITYCERTIFICATE(0);
                  }}
                />
                <label>NATIONALITYCERTIFICATE</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    INCOMECERTIFICATE === 0
                      ? setINCOMECERTIFICATE(1)
                      : setINCOMECERTIFICATE(0);
                  }}
                />
                <label>INCOMECERTIFICATE</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    LEAVINGCERTIFICATE === 0
                      ? setLEAVINGCERTIFICATE(1)
                      : setLEAVINGCERTIFICATE(0);
                  }}
                />
                <label>LEAVINGCERTIFICATE</label>
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  onChange={(e) => {
                    DEFENCECERTIFICATE === 0
                      ? setDEFENCECERTIFICATE(1)
                      : setDEFENCECERTIFICATE(0);
                  }}
                />
                <label>DEFENCECERTIFICATE</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    IFANYDOCUMENTSREQUIRED === 0
                      ? setIFANYDOCUMENTSREQUIRED(1)
                      : setIFANYDOCUMENTSREQUIRED(0);
                  }}
                />
                <label>IFANYDOCUMENTSREQUIRED</label>
              </td>
            </tr>
          </table>
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
        {Checkboxdata.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <table border={1} ref={tableref}>
            {/* Your table headers */}
            <thead>
              <tr>
                <th>ApplicationID</th>
                <th>sdate</th>
                <th>Action</th>
                <th>Action</th>
                <th>MeritNo</th>
                <th>RegistrationNo</th>
                <th>Name of Candidate</th>
                <th>Category</th>
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
              </tr>
            </thead>
            <tbody>
              {Checkboxdata.map((student) => (
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
                  <td>{student.CASTCERTIFICATE}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Show;
