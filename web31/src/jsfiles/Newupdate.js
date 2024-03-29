import React, { useRef, useEffect, useState } from "react";
import {
  useParams,
  useHistory,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import Button from "react-bootstrap/Button";
const Newupdate = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const Username = params.get("name");
  const AdminDepartment = params.get("Department");

  const pdfRef = useRef();
  const downloadPdf = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "empdata",
    onAfterPrint: () => alert("print success"),
    pageStyle: `
    @page {
      padding-top: 1cm;
      padding-right: 2cm;
      padding-bottom: 1cm;
      padding-left: 2cm;
    }
    body {
      margin: 0; 
    }
  `,
  });
  const { id } = useParams();
  const navigate = useState("");
  const [SubmitedUsername, setSubmitedUsername] = useState({ Username });
  const [SubmitedDepartment, setSubmitedDepartment] = useState({
    AdminDepartment,
  });
  const [ApplicationID, setApplicationID] = useState("");
  const [Category, setCategory] = useState("");
  const [sdate, setsdate] = useState("");
  const [ReservedCategory, setReservedCategory] = useState("");
  const [Domicile, setDomicile] = useState("");
  const [District, setDistrict] = useState("");
  const [NameofCandidate, setNameofCandidate] = useState("");
  const [FNameofCandidate, setFNameofCandidate] = useState("");
  const [MNameofCandidate, setMNameofCandidate] = useState("");
  const [Address, setAddress] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Religion, setReligion] = useState("");
  const [Caste, setCaste] = useState("");
  const [ANameofCandidate, setANameofCandidate] = useState("");
  const [RegistrationNo, setRegistrationNo] = useState("");
  const [MeritNo, setMeritNo] = useState("");
  const [Tel, setTel] = useState("");
  const [Year, setYear] = useState("");

  const [AcademicYear, setAcademicYear] = useState("");
  const [Gender, setGender] = useState("");
  const [sdateBirth, setsdateBirth] = useState("");
  const [sdateBirthPlace, setsdateBirthPlace] = useState("");
  const [LastSchool, setLastSchool] = useState("");
  const [School, setSchool] = useState("");
  const [SSCMM, setSSCMM] = useState("");
  const [SSCSM, setSSCSM] = useState("");
  const [SSCEM, setSSCEM] = useState("");
  const [HSCMM, setHSCMM] = useState("");
  const [HSCSM, setHSCSM] = useState("");
  const [HSCEM, setHSCEM] = useState("");
  const [NameofStudent, setNameofStudent] = useState("");
  const [ParentsIncome, setParentsIncome] = useState("");
  const [MeritMarkSSC, setMeritMarkSSC] = useState("");
  const [StudentCategory, setStudentCategory] = useState("");
  const [WhetherEBC, setWhetherEBC] = useState("");
  const [HandicapType, setHandicapType] = useState("");
  const [DefenceType, setDefenceType] = useState("");
  const [HSCMCVCPassedITIPassed, setHSCMCVCPassedITIPassed] = useState("");
  const [HSCScienceHSCVocationalPassed, setHSCScienceHSCVocationalPassed] =
    useState("");
  const [MarksobtainedinScience, setMarksobtainedinScience] = useState("");
  const [AdmissionDate, setAdmissionDate] = useState("");
  const [TotalFee, setTotalFee] = useState("");
  const [StayinginHostel, setStayinginHostel] = useState("");
  const [Branch, setBranch] = useState("");
  const [EducationFacility, setEducationFacility] = useState("");
  const [NCC, setNCC] = useState("");
  const [TypeofCandidiate, setTypeofCandidiate] = useState("");
  const [MinorityCandidiate, setMinorityCandidiate] = useState("");
  const [EMailid, setEMailid] = useState("");
  const [Address2, setAddress2] = useState("");
  const [LandLineNo, setLandLineNo] = useState("");
  const [MoNo, setMoNo] = useState("");
  const [FullNameofParent, setFullNameofParent] = useState("");
  const [FatherMotherGuardianof, setFatherMotherGuardianof] = useState("");
  const [ClassBranch, setClassBranch] = useState("");
  const [SODOMrMiss, setSODOMrMiss] = useState("");
  const [Declaredthis, setDeclaredthis] = useState("");
  const [Deponent, setDeponent] = useState("");
  const [Verifiedat, setVerifiedat] = useState("");
  const [Ldate, setLdate] = useState("");
  const [Lfrom, setLfrom] = useState("");
  const [Lsname, setLsname] = useState("");
  const [Lsno, setLsno] = useState("");
  const [Lpname, setLpname] = useState("");
  const [Lpno, setLpno] = useState("");
  const [Lspgname, setLspgname] = useState("");
  const [Lspgclass, setLspgclass] = useState("");
  const [Lspgbranch, setLspgbranch] = useState("");
  const [Lspgcategory, setLspgcategory] = useState("");

  const [Lpnamemarathi, setLpnamemarathi] = useState("");
  const [Payfee, setPayfee] = useState("");
  const [LBranch, setLBranch] = useState("");
  const [LYear, setLYear] = useState("");
  const [Typeadmission, setTypeadmission] = useState("");

  const [AllotmentLetter, setAllotmentLetter] = useState("");
  const [MarksheetorZFORM, setMarksheetorZFORM] = useState("");
  const [SSCMARKSHEET, setSSCMARKSHEET] = useState("");
  const [HSCMARKSHEET, setHSCMARKSHEET] = useState("");
  const [LEAVINGCERTIFICATE, setLEAVINGCERTIFICATE] = useState("");
  const [CASTCERTIFICATE, setCASTCERTIFICATE] = useState("");
  const [NONCREMYLAYERCERTIFICATE, setNONCREMYLAYERCERTIFICATE] = useState("");
  const [GAPCERTIFICATE, setGAPCERTIFICATE] = useState("");
  const [NATIONALITYCERTIFICATE, setNATIONALITYCERTIFICATE] = useState("");
  const [DEFENCECERTIFICATE, setDEFENCECERTIFICATE] = useState("");
  const [PHYSICALHANDICAPCERTIFICATE, setPHYSICALHANDICAPCERTIFICATE] =
    useState("");
  const [NCCCERTIFICATE, setNCCCERTIFICATE] = useState("");
  const [DRAWINGCERTIFICATE, setDRAWINGCERTIFICATE] = useState("");
  const [INCOMECERTIFICATE, setINCOMECERTIFICATE] = useState("");
  const [IFANYDOCUMENTSREQUIRED, setIFANYDOCUMENTSREQUIRED] = useState("");
  const [Lssname, setLssname] = useState("");
  const [Lssno, setLssno] = useState("");
  const [Lspname, setLspname] = useState("");
  const [Lspno, setLspno] = useState("");
  const [Lsdate, setLsdate] = useState("");

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getStudent/" + id)
      .then((res) => {
        setApplicationID(res.data.ApplicationID);
        setsdate(new Date(res.data.sdate).toISOString().split("T")[0]);
        setCategory(res.data.Category);
        setReservedCategory(res.data.ReservedCategory);
        setDomicile(res.data.Domicile);
        setDistrict(res.data.District);
        setNameofCandidate(res.data.NameofCandidate);
        setAddress(res.data.Address);
        setMobileNo(res.data.MobileNo);
        setFNameofCandidate(res.data.FNameofCandidate);
        setTel(res.data.Tel);
        setMNameofCandidate(res.data.MNameofCandidate);
        setReligion(res.data.Religion);
        setCaste(res.data.Caste);
        setANameofCandidate(res.data.ANameofCandidate);
        setRegistrationNo(res.data.RegistrationNo);
        setMeritNo(res.data.MeritNo);
        setAcademicYear(
          new Date(res.data.AcademicYear).toISOString().split("T")[0]
        );
        setGender(res.data.Gender);
        setsdateBirth(
          new Date(res.data.sdateBirth).toISOString().split("T")[0]
        );
        setsdateBirthPlace(res.data.sdateBirthPlace);
        setLastSchool(res.data.LastSchool);
        setSchool(res.data.School);
        setSSCMM(res.data.SSCMM);
        setSSCSM(res.data.SSCSM);
        setSSCEM(res.data.SSCEM);
        setHSCMM(res.data.HSCMM);
        setHSCSM(res.data.HSCSM);
        setHSCEM(res.data.HSCEM);
        setNameofStudent(res.data.NameofStudent);
        setParentsIncome(res.data.ParentsIncome);
        setMeritMarkSSC(res.data.MeritMarkSSC);
        setStudentCategory(res.data.StudentCategory);
        setWhetherEBC(res.data.WhetherEBC);
        setHandicapType(res.data.HandicapType);
        setDefenceType(res.data.DefenceType);
        setHSCMCVCPassedITIPassed(res.data.HSCMCVCPassedITIPassed);
        setHSCScienceHSCVocationalPassed(
          res.data.HSCScienceHSCVocationalPassed
        );
        setMarksobtainedinScience(res.data.MarksobtainedinScience);
        setAdmissionDate(
          new Date(res.data.AdmissionDate).toISOString().split("T")[0]
        );
        setTotalFee(res.data.TotalFee);
        setStayinginHostel(res.data.StayinginHostel);
        setBranch(res.data.Branch);
        setEducationFacility(res.data.EducationFacility);
        setNCC(res.data.NCC);
        setTypeofCandidiate(res.data.TypeofCandidiate);
        setMinorityCandidiate(res.data.MinorityCandidiate);
        setEMailid(res.data.EMailid);
        setAddress2(res.data.Address2);
        setLandLineNo(res.data.LandLineNo);
        setMoNo(res.data.MoNo);
        setFullNameofParent(res.data.FullNameofParent);
        setFatherMotherGuardianof(res.data.FatherMotherGuardianof);
        setClassBranch(res.data.ClassBranch);
        setSODOMrMiss(res.data.SODOMrMiss);
        setDeclaredthis(
          new Date(res.data.Declaredthis).toISOString().split("T")[0]
        );
        setDeponent(res.data.Deponent);
        setVerifiedat(
          new Date(res.data.Verifiedat).toISOString().split("T")[0]
        );
        setLdate(new Date(res.data.Ldate).toISOString().split("T")[0]);
        setLfrom(res.data.Lfrom);
        setLsname(res.data.Lsname);
        setLsno(res.data.Lsno);
        setLpname(res.data.Lpname);
        setLpno(res.data.Lpno);
        setLspgname(res.data.Lspgname);
        setLspgclass(res.data.Lspgclass);
        setLspgbranch(res.data.Lspgbranch);
        setLspgcategory(res.data.Lspgcategory);

        setLpnamemarathi(res.data.Lpnamemarathi);
        setPayfee(res.data.Payfee);
        setLBranch(res.data.LBranch);
        setLYear(res.data.LYear);
        setTypeadmission(res.data.Typeadmission);

        setAllotmentLetter(res.data.AllotmentLetter);
        setMarksheetorZFORM(res.data.MarksheetorZFORM);
        setSSCMARKSHEET(res.data.SSCMARKSHEET);
        setHSCMARKSHEET(res.data.HSCMARKSHEET);
        setLEAVINGCERTIFICATE(res.data.LEAVINGCERTIFICATE);
        setCASTCERTIFICATE(res.data.CASTCERTIFICATE);
        setNONCREMYLAYERCERTIFICATE(res.data.NONCREMYLAYERCERTIFICATE);
        setGAPCERTIFICATE(res.data.GAPCERTIFICATE);
        setNATIONALITYCERTIFICATE(res.data.NATIONALITYCERTIFICATE);
        setDEFENCECERTIFICATE(res.data.DEFENCECERTIFICATE);
        setPHYSICALHANDICAPCERTIFICATE(res.data.PHYSICALHANDICAPCERTIFICATE);
        setNCCCERTIFICATE(res.data.NCCCERTIFICATE);
        setDRAWINGCERTIFICATE(res.data.DRAWINGCERTIFICATE);
        setINCOMECERTIFICATE(res.data.INCOMECERTIFICATE);
        setIFANYDOCUMENTSREQUIRED(res.data.IFANYDOCUMENTSREQUIRED);
        setLssname(res.data.Lssname);
        setLssno(res.data.Lssno);
        setLspname(res.data.Lspname);
        setLspno(res.data.Lspno);
        setLsdate(new Date(res.data.Lsdate).toISOString().split("T")[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const Updated = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/Newupdate/" + id, {
        ApplicationID,
        sdate,
        Category,
        ReservedCategory,
        Domicile,
        District,
        NameofCandidate,
        Address,
        MobileNo,
        FNameofCandidate,
        Tel,
        MNameofCandidate,
        Religion,
        Caste,
        ANameofCandidate,
        RegistrationNo,
        MeritNo,
        AcademicYear,
        Gender,
        sdateBirth,
        sdateBirthPlace,
        LastSchool,
        School,
        SSCMM,
        SSCSM,
        SSCEM,
        HSCMM,
        HSCSM,
        HSCEM,
        NameofStudent,
        ParentsIncome,
        MeritMarkSSC,
        StudentCategory,
        WhetherEBC,
        HandicapType,
        DefenceType,
        HSCMCVCPassedITIPassed,
        HSCScienceHSCVocationalPassed,
        MarksobtainedinScience,
        AdmissionDate,
        TotalFee,
        StayinginHostel,
        Branch,
        EducationFacility,
        NCC,
        TypeofCandidiate,
        MinorityCandidiate,
        EMailid,
        Address2,
        LandLineNo,
        MoNo,
        FullNameofParent,
        FatherMotherGuardianof,
        ClassBranch,
        SODOMrMiss,
        Declaredthis,
        Deponent,
        Verifiedat,
        Ldate,
        Lfrom,
        Lsname,
        Lsno,
        Lpname,
        Lpno,
        Lspgname,
        Lspgclass,
        Lspgbranch,
        Lspgcategory,

        Lpnamemarathi,
        Payfee,
        LBranch,
        LYear,
        Typeadmission,

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
        Lssname,
        Lssno,
        Lspname,
        Lspno,
        Lsdate,
      })
      .then(function (result) {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="overallform" ref={pdfRef}>
      <div className="overallform">
        <div>
          <h2>
            <center>
              DIRECTORATE OF TECHNICAL EDUCATION,MAHARASHTRA STATE,MUMBAI-400
              001.(PUNE REGION)
            </center>
          </h2>
          <p>
            <i>
              <center>
                APPLICATION FORM FOR FIRST YEAR / DIRECT SECOND YEAR ADMISSION
                TO THE DIPLOMA COURSES IN ENGINEERING IN
              </center>
            </i>
            <br></br>
            <center>
              <h3>
                P.V.P. INSTITUTE OF TECHNOLOGY, BUDHGAON.(SANGLI) (MAHARASHTRA
                STATE)(0045)
              </h3>
            </center>
            <br></br>
          </p>
          <h2>FOR OFFICE USE ONLY</h2>
          <br></br>
        </div>
      </div>
      <div className="Create1">
        <form onSubmit={Updated}>
          <div className="flexinputn1">
            <label>
              <h4>Application ID</h4>
            </label>
            <input
              className="ApplicationID"
              type="number"
              required
              value={ApplicationID}
              onChange={(e) => setApplicationID(e.target.value)}
            />
            <label>
              <h4>Category</h4>
            </label>
            <select
              id="sp"
              required
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>select</option>
              <option>Technical</option>
              <option>General</option>
            </select>
            <br></br>
            <label>
              <h4>Date</h4>
            </label>
            <input
              className="sdate"
              type="date"
              required
              value={sdate}
              onChange={(e) => setsdate(e.target.value)}
            />
            <br></br>
          </div>
          <div className="flexinputn1">
            <br></br>
            <label>
              <h4>Domicile</h4>
            </label>
            <input
              className="Domicile"
              type="text"
              required
              value={Domicile}
              onChange={(e) => setDomicile(e.target.value)}
            />
            <br></br>
            <label>
              <h4>District</h4>
            </label>
            <input
              className="District"
              type="text"
              required
              value={District}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <br></br>
          </div>
          <div className="flexinputn1">
            <br></br>
            <label>
              <h4>Reserved Category</h4>
            </label>
            <select
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
            </select>
          </div>
          <hr></hr>
          <div>
            <h4>
              To,<br></br>The principal<br></br>Padmabhooshan Vasantraodada
              Patil Institute ,Budhgaon(Sangli)(Maharashtra)<br></br>
              Respected sir,
            </h4>
            <br></br>I request you to kindly consider my candidiature for
            admission to first year/second year of diploma courses in
            engineering in P.V.P.I.T.Budhgaon,under your authority by allotment
            of CAP ROUND 1/2/3/4.I submit here with all the necessary details.
          </div>
          <br></br>
          <div className="flexinputn1">
            <label>
              <h4>Name of Candidate</h4>
            </label>
            <input
              className="Name of Candidate"
              type="text"
              required
              value={NameofCandidate}
              onChange={(e) => setNameofCandidate(e.target.value)}
            />
            <label>
              <h4>Name of Father</h4>
            </label>
            <input
              className="Father Name of Candidate"
              type="text"
              required
              value={FNameofCandidate}
              onChange={(e) => setFNameofCandidate(e.target.value)}
            />
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Name of Mother</h4>
            </label>
            <input
              className="Mother Name of Candidate"
              type="text"
              required
              value={MNameofCandidate}
              onChange={(e) => setMNameofCandidate(e.target.value)}
            />
            <label>
              <h4>Address of Correspondence</h4>
            </label>
            <textarea
              rows="2"
              cols="35"
              className="Address"
              type="text"
              required
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Tel. No.</h4>
            </label>
            <input
              className="Tel. No."
              type="number"
              required
              value={Tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <br></br>
            <label>
              <h4>Mobile No </h4>
            </label>
            <input
              className="Mobile No"
              type="number"
              required
              value={MobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
          <div className="flexinputn1">
            <br></br>
            <label>
              <h4>Religion</h4>
            </label>
            <input
              className="Religion"
              type="text"
              required
              value={Religion}
              onChange={(e) => setReligion(e.target.value)}
            />
            <label>
              <h4>Caste</h4>
            </label>
            <input
              className="Caste"
              type="text"
              required
              value={Caste}
              onChange={(e) => setCaste(e.target.value)}
            />
            <br></br>
          </div>
          <hr></hr>
          <div>
            <center>
              <h4>RECEIPT</h4>
            </center>
            <p>
              <br></br>
              <br></br>
              Received from Shri/Kum&#160;&#160;
              <input
                className="Name of Candidate"
                type="text"
                required
                value={NameofCandidate}
                onChange={(e) => setANameofCandidate(e.target.value)}
              />
              &#160;&#160;application form dully filled in form admission to
              <select onChange={(e) => setYear(e.target.value)} value={Year}>
                <option>select</option>
                <option>First</option>
                <option>Second</option>
              </select>
              year diploma engineering in P.V.P.I.T. Budhgaon.<br></br>
            </p>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Registration No</h4>
            </label>
            <input
              className="Registration No"
              type="number"
              required
              value={RegistrationNo}
              onChange={(e) => setRegistrationNo(e.target.value)}
            />
            <label>
              <h4>Merit No.</h4>
            </label>
            <input
              className="sdateBirth"
              type="Number"
              required
              value={MeritNo}
              onChange={(e) => setMeritNo(e.target.value)}
            />
            <br></br>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="Sign">
            <br></br>
            <label>stamp</label>
            <label>Signature of Student</label>
          </div>
          <hr></hr>
          <div className="info">
            <h4>Declaration of the Candidate:</h4>
            a] I hereby solemnly declare that, I read and understood all the
            rules of admission to the diploma course and I have consulted my
            guardian filling this form,
            <br></br>b] I have not been debarred by any examination authority
            from appearing examination during the period of my proposed studies.
            <br></br>c] The information furnished by me in this application is
            true to the best of my knowledge and belief. in any
            <br></br>d] I fully understand that offer of admission will be made
            to me depending upon my interest, merit and availability of seat at
            the time, when I will report to the admission authority according to
            the schedule of admission.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="Sign">
              <br></br>
              <label>Signature of Candidate</label>
            </div>
            <br></br>
            <h4>8. Declaration by the Guardian:</h4>
            <br></br>a] I have studied the rules of admission and agree to the
            same.
            <br></br>b] The particulars furnished by my ward are true to the
            best of my knowledge
            <br></br>c] I shall take care that my ward that he will behave
            properly and does nothing except study
            <br></br> <br></br>
            <br></br>
            <br></br>
            <div className="Sign">
              <br></br>
              <label>Signature of Guardian</label>
            </div>
          </div>
          <hr></hr>
          <div>
            <center>
              <p>Dr. Vasantraodada Patil Shetkari Shikshan Mandal's</p>
              <h3>P.V.P. Institute Of Technology , Budhgaon (Sangli)(0045)</h3>
              Off.0233-2366317, Fax: 0233-2366185, 2366500
              E-mail:principal0045@rediffmail.com
            </center>
          </div>
          <br></br>
          <br></br>
          <div className="flexinputn1">
            <label>
              <h4>Academic Year</h4>
            </label>
            <input
              className="AcademicYear"
              type="Date"
              required
              value={AcademicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
            />
            <label>
              <h4>Name of the Student</h4>
            </label>
            <input
              className="Name of student"
              type="text"
              required
              value={NameofCandidate}
              onChange={(e) => setNameofStudent(e.target.value)}
            />
            <br></br>
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Gender</h4>
            </label>
            <select onChange={(e) => setGender(e.target.value)} value={Gender}>
              <option>select</option>
              <option>Male</option>
              <option>female</option>
            </select>
            <label>
              <h4>Date of Birth</h4>
            </label>
            <input
              className="sdateBirth"
              type="date"
              required
              value={sdateBirth}
              onChange={(e) => setsdateBirth(e.target.value)}
            />
            <br></br>
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Date of Place</h4>
            </label>
            <input
              className="sdateBirthPlace"
              type="text"
              required
              value={sdateBirthPlace}
              onChange={(e) => setsdateBirthPlace(e.target.value)}
            />
            <label>
              <h4>Last School Attended</h4>
            </label>
            <input
              className="LastSchool"
              type="text"
              required
              value={LastSchool}
              onChange={(e) => setLastSchool(e.target.value)}
            />
            <br></br>
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Parents Income</h4>
            </label>
            <input
              className="ParentsIncome"
              type="number"
              required
              value={ParentsIncome}
              onChange={(e) => setParentsIncome(e.target.value)}
            />
            <label>
              <h4>Merit Mark(SSC)</h4>
            </label>
            <input
              className="MeritMarkSSC"
              type="number"
              required
              value={MeritMarkSSC}
              onChange={(e) => setMeritMarkSSC(e.target.value)}
            />
            <br></br>
            <br></br>
          </div>
          <div className="flexinputn1">
            {" "}
            <label>
              <h4>Category of Student</h4>
            </label>
            <select
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
            </select>
            <label>
              <h4>Whether EBC</h4>
            </label>
            <select
              onChange={(e) => setWhetherEBC(e.target.value)}
              value={WhetherEBC}
            >
              <option>select</option>
              <option>no</option>
              <option>yes</option>
            </select>
            <br></br>
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Handicap Type</h4>
            </label>
            <select
              onChange={(e) => setHandicapType(e.target.value)}
              value={HandicapType}
            >
              <option>select</option>
              <option>P1</option>
              <option>P2</option>
              <option>P3</option>
              <option>NA</option>
            </select>
            <label>
              <h4>Defence Type</h4>
            </label>
            <select
              onChange={(e) => setDefenceType(e.target.value)}
              value={DefenceType}
            >
              <option>select</option>
              <option>D1</option>
              <option>D2</option>
              <option>D3</option>
              <option>NA</option>
            </select>
            <br></br>
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Whether SSC/HSC Technical</h4>
            </label>
            <select onChange={(e) => setSchool(e.target.value)} value={School}>
              <option>select</option>
              <option>SSC</option>
              <option>HSC</option>
            </select>
            {School === "SSC" ? (
              <>
                <label>
                  <h4>SSC Maths Marks</h4>
                </label>
                <input
                  className="SSCMM"
                  type="number"
                  required
                  value={SSCMM}
                  onChange={(e) => setSSCMM(e.target.value)}
                />
                <br></br>
                <br></br>
              </>
            ) : null}
          </div>
          {School === "SSC" ? (
            <div className="flexinputn1">
              <label>
                <h4>SSC English Marks</h4>
              </label>
              <input
                className="SSCEM"
                type="number"
                required
                value={SSCEM}
                onChange={(e) => setSSCEM(e.target.value)}
              />
              <label>
                <h4>SSC Science Marks</h4>
              </label>
              <input
                className="SSCSM"
                type="number"
                required
                value={SSCSM}
                onChange={(e) => setSSCSM(e.target.value)}
              />
            </div>
          ) : null}
          <div className="flexinputn1">
            {School === "HSC" ? (
              <>
                {" "}
                <label>
                  <h4>HSC Science HSC Vocational Passed</h4>
                </label>
                <select
                  onChange={(e) =>
                    setHSCScienceHSCVocationalPassed(e.target.value)
                  }
                  value={HSCScienceHSCVocationalPassed}
                >
                  <option>select</option>
                  <option>yes</option>
                  <option>no</option>
                </select>
                <br></br>
                <label>
                  <h4>HSC MCVC Passed/ITI Passed</h4>
                </label>
                <select
                  onChange={(e) => setHSCMCVCPassedITIPassed(e.target.value)}
                  value={HSCMCVCPassedITIPassed}
                >
                  <option>select</option>
                  <option>yes</option>
                  <option>no</option>
                </select>
              </>
            ) : null}
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Marks obtained in Science/Vocational/MCVC/ITI</h4>
            </label>
            <input
              className="MarksobtainedinScience"
              type="number"
              required
              value={MarksobtainedinScience}
              onChange={(e) => setMarksobtainedinScience(e.target.value)}
            />
          </div>
          {School === "HSC" ? (
            <div className="flexinputn1">
              <label>
                <h4>HSC Maths Marks</h4>
              </label>
              <input
                className="HSCMM"
                type="number"
                required
                value={HSCMM}
                onChange={(e) => setHSCMM(e.target.value)}
              />
              <label>
                <h4>HSC Science Marks</h4>
              </label>
              <input
                className="HSCSM"
                type="number"
                required
                value={HSCSM}
                onChange={(e) => setHSCSM(e.target.value)}
              />
              <label>
                <h4>HSC English Marks</h4>
              </label>
              <input
                className="HSCEM"
                type="number"
                required
                value={HSCEM}
                onChange={(e) => setHSCEM(e.target.value)}
              />
            </div>
          ) : null}
          <hr></hr>
          <br></br>
          <div className="flexinputn1">
            <label>
              <h4>Branch</h4>
            </label>
            <select onChange={(e) => setBranch(e.target.value)} value={Branch}>
              <option>select</option>
              <option>ME</option>
              <option>AE</option>
              <option>CO</option>
              <option>EJ</option>
              <option>CE</option>
              <option>CH</option>
            </select>
            <br></br>
            <label>
              <h4>Date of Admission</h4>
            </label>
            <input
              className="AdmissionDate"
              type="date"
              required
              value={AdmissionDate}
              onChange={(e) => setAdmissionDate(e.target.value)}
            />

            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Total Fees</h4>
            </label>
            <input
              className="TotalFee"
              type="number"
              required
              value={TotalFee}
              onChange={(e) => setTotalFee(e.target.value)}
            />
            <label>
              <h4>Wheter Staying in Hostel</h4>
            </label>
            <select
              onChange={(e) => setStayinginHostel(e.target.value)}
              value={StayinginHostel}
            >
              <option>select</option>
              <option>yes</option>
              <option>no</option>
            </select>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Education Facility</h4>
            </label>
            <input
              className="EducationFacility"
              type="text"
              required
              value={EducationFacility}
              onChange={(e) => setEducationFacility(e.target.value)}
            />
            <label>
              <h4>Whether NCC</h4>
            </label>
            <select onChange={(e) => setNCC(e.target.value)} value={NCC}>
              <option>select</option>
              <option>yes</option>
              <option>no</option>
            </select>
            <br></br>
          </div>
          <div className="flexinputn1">
            {" "}
            <label>
              <h4>Type of Candidiate</h4>
            </label>
            <select
              onChange={(e) => setTypeofCandidiate(e.target.value)}
              value={TypeofCandidiate}
            >
              <option>select</option>
              <option>Singli District</option>
              <option>Other District</option>
            </select>
            <label>
              <h4>Wheter Minority Candidiate</h4>
            </label>
            <select
              onChange={(e) => setMinorityCandidiate(e.target.value)}
              value={MinorityCandidiate}
            >
              <option>select</option>
              <option>yes</option>
              <option>no</option>
            </select>
          </div>
          <div className="flexinputn1">
            <br></br>
            <label>
              <h4>E-Mail ID of Candidiate</h4>
            </label>
            <input
              className="TotalFee"
              type="EMail"
              required
              value={EMailid}
              onChange={(e) => setEMailid(e.target.value)}
            />
            <label>
              <h4>Address</h4>
            </label>
            <input
              className="Address2"
              type="text"
              required
              value={Address}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <div className="Signp2">
            <h4>Note:</h4>The parent should give the correct mobile no. / and
            line phone no. for easy communication regarding candidates
            development in college work.<br></br>
          </div>
          <br></br>
          <br></br>
          <div className="flexinputn1">
            <label>
              <h4>Mobile No.</h4>
            </label>
            <input
              className="mobno"
              type="Number"
              required
              value={MobileNo}
              onChange={(e) => setMoNo(e.target.value)}
            />
            <label>
              <h4>Land Line No.</h4>
            </label>
            <input
              className="llno"
              type="Number"
              required
              value={Tel}
              onChange={(e) => setLandLineNo(e.target.value)}
            />
          </div>
          <hr></hr>
          <div className="info">
            <center>
              <h2>ANNEXURE-II</h2>
            </center>
            <br></br>
            <center>
              <h3> AFFIDEVIT BY PARENT/GURDIAN</h3>
            </center>
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>
                Full Name of Parent/Guardian Mr/Miss <br></br>
              </h4>
            </label>
            <input
              className="FullNameofParent"
              type="text"
              required
              value={FullNameofParent}
              onChange={(e) => setFullNameofParent(e.target.value)}
            />
            <label>
              <h4>Class / Branch</h4>
            </label>
            <select
              onChange={(e) => setClassBranch(e.target.value)}
              value={Branch}
            >
              <option>select</option>
              <option>ME</option>
              <option>AE</option>
              <option>CO</option>
              <option>EJ</option>
              <option>CE</option>
              <option>CH</option>
            </select>
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Father / Mother / Guardian of Mr/Miss</h4>
            </label>
            <input
              className="FatherMotherGuardianof"
              type="text"
              required
              value={NameofCandidate}
              onChange={(e) => setFatherMotherGuardianof(e.target.value)}
            />
          </div>
          <div className="info">
            <p>
              {" "}
              S/O.D/O Mr./Miss.&#160;&#160;
              <input
                className="SODOMrMiss"
                type="text"
                required
                value={SODOMrMiss}
                onChange={(e) => setSODOMrMiss(e.target.value)}
              />
              &#160;&#160; have been admitted to First Year/ Direct Second Year
              Diploma in PV-Plastutute of Technology. Badligaon have received a
              copy or Maharashtra Prohibitions Ragging ACT-1999. I carefully
              read and full understood the provision contained in the said act &
              regulations from Information Brochure.
            </p>
            <p>
              1. I have particular pursued clause 3 of the regulation & I am
              aware as to what constitute ragging<br></br>
              2. I have also in particular pursued clauses 7 and clause.9.1 of
              the regulation and am fully aware of the penal and administrative
              action that, is Liable to be take against me in case I am found
              guilty or abetting ragging activity or passively or being part of
              conspiracy to promote ragging.<br></br>
              3. I hereby solemnly aver and undertake that,<br></br>
              a) Lill not indulge in any behavior or act that may be constitute
              as ragging under clause 3 of the Regulations.<br></br>
              b) I will not participate in or abet or propagate throuth any act
              of Communication or omission that may be Constituted as Ragging
              under Clause 3 of the Regulation<br></br>
              4. I hereby affirm that, if I found guilty or ragging I am Lible
              for Punishment according to Clause 9.1 of Regulations, withour
              prejudice to any other criminal action that may be take against me
              under any penal law or any law for the time being in force.
              <br></br>
              5. I hereby declare that. I have not been expetted or debarred
              from admission in any Institution in the Country on account of
              being found guilty of abetting or being part of conspiracy to
              promote ragging the further affirm that in case the declaration is
              found to be untrue I am aware that my admission is lible to be
              cancelled<br></br>
            </p>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Declared this</h4>
            </label>
            <input
              className="Declaredthis"
              type="date"
              required
              value={Declaredthis}
              onChange={(e) => setDeclaredthis(e.target.value)}
            />
            <label>
              <h4>Deponent Name</h4>
            </label>
            <input
              className="Deponent"
              type="text"
              required
              value={Deponent}
              onChange={(e) => setDeponent(e.target.value)}
            />
          </div>
          <div className="info">
            <center>VERIFICATION</center>
            <br></br>
            <p>
              Verified that, the contents of this affidavit are true to the bes
              of my knowledge and no part of the Affidavit in false and nothing
              has been conceated or misstend therein.
            </p>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Verified at</h4>
            </label>
            <input
              className="Verifiedat"
              type="date"
              required
              value={Verifiedat}
              onChange={(e) => setVerifiedat(e.target.value)}
            />
          </div>
          <hr></hr>
          <div className="info">
            <center>
              {" "}
              <h4>UNDERTAKING</h4>
            </center>
            <br></br>
          </div>
          <div className="Letter">
            <br></br>
            <label>
              <h4>Date</h4>
            </label>
            <input
              className="Ldate"
              type="date"
              required
              value={Ldate}
              onChange={(e) => setLdate(e.target.value)}
            />
          </div>
          <div className="Letter">
            <br></br>
            <label>
              <h4>From</h4>
            </label>
            <input
              className="Deponent"
              type="text"
              required
              value={Lfrom}
              onChange={(e) => setLfrom(e.target.value)}
            />
          </div>
          <div className="info">
            <h4>
              To,<br></br>
              The Principal,<br></br>
              P.V.P. Institute of Technology, Budhgaon.<br></br>
              Respected Sir,<br></br>
              The fees are paid by me as per interim Fee Structure approved by
              Shikshan Shulk Samiti. M. S. Mumbai. The Revision in Fee Strucrure
              if aby, by Shikshan Shulk Samiti, will be binding on me abnd I
              will arrange to pay the requisite Fees accordingly.<br></br>
              (Ref-Information Brochure-2023.24)<br></br>
            </h4>
          </div>{" "}
          <br></br>
          <div className="flexinputn1">
            <div className="Sign">
              <br></br>
              <label>Signature of Student&#160;&#160;</label>
            </div>
            <label>
              <h4>Name</h4>
            </label>
            <input
              className="Lsname"
              type="text"
              required
              value={NameofCandidate}
              onChange={(e) => setLsname(e.target.value)}
            />
            <label>
              <h4>Mobile No</h4>
            </label>
            <input
              className="Lsno"
              type="number"
              required
              value={MobileNo}
              onChange={(e) => setLsno(e.target.value)}
            />
          </div>
          <div className="flexinputn1">
            <div className="Sign">
              <br></br>
              <label>Signature of parent/Guradian &#160;&#160;</label>
            </div>

            <label>
              <h4>Name</h4>
            </label>
            <input
              className="Lpname"
              type="text"
              required
              value={FullNameofParent}
              onChange={(e) => setLpname(e.target.value)}
            />
            <label>
              <h4>Mobile No</h4>
            </label>
            <input
              className="Lpno"
              type="number"
              required
              value={Lpno}
              onChange={(e) => setLpno(e.target.value)}
            />
          </div>
          <hr></hr>
          <div>
            <center>
              <h1>हमीपत्र</h1>
            </center>
            <br></br>
            <br></br>मा.नहोदय, <br></br>
            <br></br>
            आपले पदविका महाविद्यालयामाइश पालय चि/कु &#160;&#160;
            <input
              className="Lpname"
              type="text"
              required
              value={NameofCandidate}
              onChange={(e) => setLpnamemarathi(e.target.value)}
            />{" "}
            &#160;&#160; he/she &#160;&#160;
            <select onChange={(e) => setBranch(e.target.value)} value={Branch}>
              <option>select</option>
              <option>ME</option>
              <option>AE</option>
              <option>CO</option>
              <option>EJ</option>
              <option>CE</option>
              <option>CH</option>
            </select>
            &#160;&#160; या अभ्यासक्रमामध्ये &#160;&#160;
            <select onChange={(e) => setYear(e.target.value)} value={Year}>
              <option>select</option>
              <option>First</option>
              <option>Second</option>
            </select>
            &#160;&#160; वर्ष चेट प्रवेशामध्ये शासनाच्या केंद्रभूत प्रवेश
            फेरीमधुन प्रवेश घेतलेला आहे. या महाविद्यालयाची एकूण की रुपये इक्तको
            उत्ते तथापी, माझे पाल्या प्रवेश हा&#160;&#160;
            <select
              value={Typeadmission}
              onChange={(e) => setTypeadmission(e.target.value)}
            >
              <option>select</option>
              <option>SC</option>
              <option>ST</option>
              <option>VJNT</option>
              <option>OBC</option>
              <option>EBSC</option>
              <option>TFWS</option>
            </select>
            &#160;&#160; या प्रनर्मात झालेला असून मी शासनाने नियमानुसार रक्कम
            रुपये &#160;&#160;
            <input
              className="fee"
              type="number"
              required
              value={Payfee}
              onChange={(e) => setPayfee(e.target.value)}
            />
            &#160;&#160; इतकों को भरत आहे व उर्वरित ही नी रक्कम ही शासनाकडून
            शिज्यकृत्तीच्या रुपाने येत असते. तदर शासनाकडून देणाऱ्या फी साठी
            स्वतः ऑनलाईन स्कॉलरशिप / क्रिशिय किंवा ई बी सी वा गर्व
            महाविद्यालयाने दिलेल्या मुक्तीत अर्ज भरणेची हमी देत आहे.<br></br>
            <br></br> शासनाकडून स्कॉलरशिप / फ्रि शिप किंवा ई डी सी फी सवलत
            मिळण्याकरिता आवश्यकत्या सर्व कागदपत्रांसह विहित मुदतीत ऑनलाईन अर्ज
            भरणेचावतची माहिती महाविद्यालयाने दिलेली आहे. सदरचा अर्ज भरणेस
            कोणत्याही कारणास्तव मी असमर्थ उरलेस किया गहून गेल्यास कोणत्याहि
            प्रकारची सक्य न सांगता व्र्वरित असणारी महाविद्यालयानी कोनी संपूर्ण
            रक्कम भरणेची जबाबदरी मी घेत आहे.<br></br>
            <br></br>
            <div className="flexinputn1">
              <div className="Sign">
                <br></br>
                <label>विद्याव्यांची स्वाक्षरी&#160;&#160;</label>
              </div>
              <label>
                <h4>Name</h4>
              </label>
              <input
                className="Lsname"
                type="text"
                required
                value={NameofCandidate}
                onChange={(e) => setLsname(e.target.value)}
              />
              <label>
                <h4>Mobile No</h4>
              </label>
              <input
                className="Lsno"
                type="number"
                required
                value={MobileNo}
                onChange={(e) => setLsno(e.target.value)}
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="flexinputn1">
            <div className="Sign">
              <br></br>
              <label>पालकांनी स्वाक्षरी &#160;&#160;</label>
            </div>

            <label>
              <h4>Name</h4>
            </label>
            <input
              className="Lpname"
              type="text"
              required
              value={FullNameofParent}
              onChange={(e) => setLpname(e.target.value)}
            />
            <label>
              <h4>Mobile No</h4>
            </label>
            <input
              className="Lpno"
              type="number"
              required
              value={Lpno}
              onChange={(e) => setLpno(e.target.value)}
            />
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <div>
            <center>
              <h3>
                PADMABHOOSHAN VASANTRAODADA PATIL INSTITUTE OF TECHNOLOGY,
                BUDHGAON-SANGLI
              </h3>
            </center>
            <h2>RECEIPT AND NOT RECEIPT OF ORIGINAL DOCUMENTS.</h2>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Name</h4>
            </label>
            <input
              className="Lspgname"
              type="text"
              required
              value={NameofCandidate}
              onChange={(e) => setLspgname(e.target.value)}
            />
            <label>
              <h4>Class</h4>
            </label>
            <input
              className="Lspgclass"
              type="text"
              required
              value={Lspgclass}
              onChange={(e) => setLspgclass(e.target.value)}
            />{" "}
            <br></br>
          </div>
          <div className="flexinputn1">
            <label>
              <h4>Branch</h4>
            </label>
            <input
              className="Lspgbranch"
              type="text"
              required
              value={Lspgbranch}
              onChange={(e) => setLspgbranch(e.target.value)}
            />
            <label>
              <h4>Category</h4>
            </label>
            <select
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
            </select>
          </div>
          <div className="Showtable2">
            <table className="custom-table">
              <tr>
                <td>
                  {" "}
                  <label>
                    <h4>Allotment Letter</h4>
                  </label>
                </td>
                <td>
                  {" "}
                  <select
                    value={AllotmentLetter}
                    onChange={(e) => setAllotmentLetter(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> 8,9 Marksheet or Z-FORM </h4>
                  </label>
                </td>
                <td>
                  <select
                    value={MarksheetorZFORM}
                    onChange={(e) => setMarksheetorZFORM(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> S.S.C.MARK SHEET</h4>
                  </label>
                </td>
                <td>
                  <select
                    value={SSCMARKSHEET}
                    onChange={(e) => setSSCMARKSHEET(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <label>
                    <h4>H.S.C. MARK SHEET</h4>
                  </label>
                </td>
                <td>
                  <select
                    value={HSCMARKSHEET}
                    onChange={(e) => setHSCMARKSHEET(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> LEAVING CERTIFICATE </h4>
                  </label>
                </td>
                <td>
                  <select
                    value={LEAVINGCERTIFICATE}
                    onChange={(e) => setLEAVINGCERTIFICATE(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              {ReservedCategory === "open" ? null : (
                <>
                  <tr>
                    <td>
                      <label>
                        <h4> CAST CERTIFICATE </h4>
                      </label>
                    </td>
                    <td>
                      <select
                        value={CASTCERTIFICATE}
                        onChange={(e) => setCASTCERTIFICATE(e.target.value)}
                      >
                        <option>select</option>
                        <option>yes</option>
                        <option>no</option>
                        <option>na</option>
                      </select>
                    </td>
                  </tr>
                </>
              )}
              <tr>
                <td>
                  <label>
                    <h4>NON-CREMY LAYER CERTIFICATE</h4>
                  </label>
                </td>
                <td>
                  <select
                    value={NONCREMYLAYERCERTIFICATE}
                    onChange={(e) =>
                      setNONCREMYLAYERCERTIFICATE(e.target.value)
                    }
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> GAP CERTIFICATE </h4>
                  </label>
                </td>
                <td>
                  <select
                    value={GAPCERTIFICATE}
                    onChange={(e) => setGAPCERTIFICATE(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> NATIONALITY CERTIFICATE </h4>
                  </label>
                </td>
                <td>
                  {" "}
                  <select
                    value={NATIONALITYCERTIFICATE}
                    onChange={(e) => setNATIONALITYCERTIFICATE(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> DEFENCE CERTIFICATE </h4>
                  </label>
                </td>
                <td>
                  <select
                    value={DEFENCECERTIFICATE}
                    onChange={(e) => setDEFENCECERTIFICATE(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4>PHYSICAL HANDICAP CERTIFICATE</h4>
                  </label>
                </td>
                <td>
                  <select
                    value={PHYSICALHANDICAPCERTIFICATE}
                    onChange={(e) =>
                      setPHYSICALHANDICAPCERTIFICATE(e.target.value)
                    }
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> NCC CERTIFICATE</h4>
                  </label>
                </td>
                <td>
                  <select
                    value={NCCCERTIFICATE}
                    onChange={(e) => setNCCCERTIFICATE(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4>DRAWING CERTIFICATE </h4>
                  </label>
                </td>
                <td>
                  <select
                    value={DRAWINGCERTIFICATE}
                    onChange={(e) => setDRAWINGCERTIFICATE(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> INCOME CERTIFICATE (for EBC/TFWS) </h4>
                  </label>
                </td>
                <td>
                  {" "}
                  <select
                    value={INCOMECERTIFICATE}
                    onChange={(e) => setINCOMECERTIFICATE(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <h4> IF ANY DOCUMENTS REQUIRED</h4>
                  </label>
                </td>
                <td>
                  {" "}
                  <select
                    value={IFANYDOCUMENTSREQUIRED}
                    onChange={(e) => setIFANYDOCUMENTSREQUIRED(e.target.value)}
                  >
                    <option>select</option>
                    <option>yes</option>
                    <option>no</option>
                    <option>na</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
          <div className="info">
            <p>
              {" "}
              I will produce the required Original Documents up to&#160;&#160;
              <input
                className="Lsdate"
                type="date"
                required
                value={Lsdate}
                onChange={(e) => setLsdate(e.target.value)}
              />
              &#160;&#160;Other wise my Admission will be cancelled as per DTE
              Rule. 2023
            </p>
          </div>
          <div className="flexinputn1">
            <div className="Sign">
              <br></br>
              <label>Signature of Student&#160;&#160;</label>
            </div>
            <label>
              <h4>Name</h4>
            </label>
            <input
              className="Lssname"
              type="text"
              required
              value={NameofCandidate}
              onChange={(e) => setLssname(e.target.value)}
            />
            <label>
              <h4>Mobile No</h4>
            </label>
            <input
              className="Lssno"
              type="number"
              required
              value={MobileNo}
              onChange={(e) => setLssno(e.target.value)}
            />
          </div>
          <div className="flexinputn1">
            <div className="Sign">
              <br></br>
              <label>Signature of parent/Guradian &#160;&#160;</label>
            </div>

            <label>
              <h4>Name</h4>
            </label>
            <input
              className="Lspname"
              type="text"
              required
              value={FullNameofParent}
              onChange={(e) => setLspname(e.target.value)}
            />
            <label>
              <h4>Mobile No</h4>
            </label>
            <input
              className="Lspno"
              type="number"
              required
              value={Lpno}
              onChange={(e) => setLspno(e.target.value)}
            />
          </div>
          <hr></hr>
          <div className="Showtable2">
            Submited Documents
            <table custom-table>
              {AllotmentLetter === "yes" ? (
                <tr>
                  <td>AllotmentLetter</td>
                  <td>yes</td>
                </tr>
              ) : null}

              {MarksheetorZFORM === "yes" ? (
                <tr>
                  <td>8th,9th MarksheetorZFORM</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {SSCMARKSHEET === "yes" ? (
                <tr>
                  <td>SSCMARKSHEET</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {HSCMARKSHEET === "yes" ? (
                <tr>
                  <td>HSCMARKSHEET</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {LEAVINGCERTIFICATE === "yes" ? (
                <tr>
                  <td>LEAVINGCERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {CASTCERTIFICATE === "yes" ? (
                <tr>
                  <td>CASTCERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {NONCREMYLAYERCERTIFICATE === "yes" ? (
                <tr>
                  <td>NONCREMYLAYERCERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {GAPCERTIFICATE === "yes" ? (
                <tr>
                  <td>GAPCERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {NATIONALITYCERTIFICATE === "yes" ? (
                <tr>
                  <td>NATIONALITYCERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {DEFENCECERTIFICATE === "yes" ? (
                <tr>
                  <td>DEFENCECERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {PHYSICALHANDICAPCERTIFICATE === "yes" ? (
                <tr>
                  <td>PHYSICALHANDICAPCERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {NCCCERTIFICATE === "yes" ? (
                <tr>
                  <td>NCCCERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {DRAWINGCERTIFICATE === "yes" ? (
                <tr>
                  <td>DRAWINGCERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {INCOMECERTIFICATE === "yes" ? (
                <tr>
                  <td>INCOMECERTIFICATE</td>
                  <td>yes</td>
                </tr>
              ) : null}
              {IFANYDOCUMENTSREQUIRED === "yes" ? (
                <tr>
                  <td>IFANYDOCUMENTSREQUIRED</td>
                  <td>yes</td>
                </tr>
              ) : null}
            </table>
          </div>
          <div className="buttonflex">
            {!isPending && <button className="btn">Submit</button>}
            {isPending && <button disabled>added...</button>}
            <Button
              className="btn"
              variant="outline-success"
              onClick={downloadPdf}
            >
              Print Out
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newupdate;
