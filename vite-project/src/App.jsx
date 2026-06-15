import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import HomePage from './pages/HomePage';

// Courses
import FrontendDeveloper from './components/courses/frontend/FrontEndDeveloper';
import BackendDeveloper from './components/courses/backend/Backend';
import MernStackDeveloper from './components/courses/mern/MernStack';
import TestingDeveloper from './components/courses/testing/Testing';

// Placements
import OurPlacedStudents from './components/placements/PlacedStudents';
import HighestPackages from './components/placements/highestpackage';
import HiringPartners from './components/home/HiringPartners';
import PlacementProcess from './components/placements/PlacementProcess';
import InterviewPreparation1 from './components/placements/InterviewPreparation';
import StudentSuccessStories from './components/placements/SuccessStory';
import MockInterview from './components/placements/MockInterviews';
import StartupOpportunities from './components/placements/StartUpCompany';
import TopMNCHiring from './components/placements/TopMMnc';

import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import PracticalTraining from './components/Training/PracticleTranning';
import LiveProjects from './components/Training/LiveProject1';
import InternshipProgram from './components/Training/InternshipProgram';
import Courses from './components/home/Courses';
import Certification from './components/Training/Certification';
import StartupCompanyApply from './components/placements/StartUpJobApply';
import MNCJobApply from './components/placements/MNCJobApply';
import EliteHiringNowCompanies from './components/HiringCompanyList/HiringCompanyList';
import AdminDashboard from './pages/admin/AdminDashboard';
import RecentStudents from './pages/admin/adminsidebar/student/StudentPage';
import AddStudent from './pages/admin/adminsidebar/student/AddStudent';
import EditStudent from './pages/admin/adminsidebar/student/EditStudent';
import EyeStudent from './pages/admin/adminsidebar/student/EyeStudent';
import EnrollmentDetails from './pages/admin/adminsidebar/enrolldetails/EnrollDetails';
import AddEnrollment from './pages/admin/adminsidebar/enrolldetails/AddNewEnrollment';
import EditEnrollment from './pages/admin/adminsidebar/enrolldetails/EditEnroll';
import ViewEnrollment from './pages/admin/adminsidebar/enrolldetails/ViewEnrollment';
import NewAdmission from './pages/admin/adminsidebar/newadmission/NewAdmission';
import AddAdmission from './pages/admin/adminsidebar/newadmission/AddAdmission';
import EditAdmission from './pages/admin/adminsidebar/newadmission/EditNewAdmission';
import ViewAdmission from './pages/admin/adminsidebar/newadmission/EyeNewAdmission';
import FeesReceipt from './pages/admin/adminsidebar/newadmission/FeesReciept';
import PlacedStudents from './pages/admin/adminsidebar/placedstudent/PlacedStudent';
import AddPlacement from './pages/admin/adminsidebar/placedstudent/AddPlacedStudent';
import EditPlacement from './pages/admin/adminsidebar/placedstudent/EditPlacedStudent';
import ViewPlacement from './pages/admin/adminsidebar/placedstudent/EyeStudentPlaced';
import OfferLetter from './pages/admin/adminsidebar/placedstudent/OfferLetter';
import CoursesAdmin from './pages/admin/adminsidebar/courses/CoursePage';
import AddCourse from './pages/admin/adminsidebar/courses/AddCourse';
import EditCourse from './pages/admin/adminsidebar/courses/EditCourse';
import ViewCourse from './pages/admin/adminsidebar/courses/ViewCourse';
import BatchManagement from './pages/admin/adminsidebar/batches/Batches';
import AddBatch from './pages/admin/adminsidebar/batches/AddBatch';
import EditBatch from './pages/admin/adminsidebar/batches/EditBatch';
import ViewBatch from './pages/admin/adminsidebar/batches/ViewBatch';
import BatchAttendance from './pages/admin/adminsidebar/batches/ViewAttendance';
import ExportReportBatch from './pages/admin/adminsidebar/batches/ExportReportBatch';
import FacultyAdmin from './pages/admin/adminsidebar/faculty/Faculty';
import AddFaculty from './pages/admin/adminsidebar/faculty/AddFaculty';
import EditFaculty from './pages/admin/adminsidebar/faculty/EditFaculty';
import ViewFaculty from './pages/admin/adminsidebar/faculty/ViewFaculty';
import EnquiryManagement from './pages/admin/adminsidebar/enquiry/Enquiry';
import CallSupportModalEnquiry from './pages/admin/adminsidebar/enquiry/CallSupportEnquiry';
import WhatsappSupportModalEnquiry from './pages/admin/adminsidebar/enquiry/WhatsUpSupportEnquiry';
import ViewEnquiry from './pages/admin/adminsidebar/enquiry/ViewEnquiry';
import EditEnquiry from './pages/admin/adminsidebar/enquiry/EditEnquiry';
import PaymentManagement from './pages/admin/adminsidebar/payment/Paymment';
import AddPayment from './pages/admin/adminsidebar/payment/AddPayment';
import ViewPayements from './pages/admin/adminsidebar/payment/ViewPayements';
import InvoiceModal from './pages/admin/adminsidebar/payment/Invoicemodel';
import EditPayment from './pages/admin/adminsidebar/payment/EditPayment';
import PaymentReceipt from './pages/admin/adminsidebar/payment/DownloadInvoice';
import BookFreeDemo from './pages/admin/adminsidebar/BookFreeDemo/BookFreeDemo';
import BookFreeCarrer from './pages/admin/adminsidebar/BookFreeCarrer/BookFreeCarrer';
import ContactUsManagement from './pages/admin/adminsidebar/contactus/ContactUs';
import CallSupportModal from './pages/admin/adminsidebar/contactus/CallSupport';
import WhatsappSupportModal from './pages/admin/adminsidebar/contactus/WhatsModel';
import ViewContact from './pages/admin/adminsidebar/contactus/ViewContact';
import Footer from './components/Footer';
import Login from './components/login/Login';
import AdminRoute from './components/AdminProtectedRoute';
import ExploreCourses from './components/ExploreCourse/ExploreCourse';
import SidebarComponent from './components/SidebarComponent';
import ContactUsPage from './pages/ContactUsPage';
import ViewAllCourses from './components/home/ViewAllCourses';
import CareerOpportunities from './components/Notification/ViewAllNotification';
import JobApply from './components/Notification/JobApply';









function App() {
  return (
    <>
      <BrowserRouter>
      <SidebarComponent/>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/viewallcourses" element={<ViewAllCourses />} />

          <Route path="/frontenddeveloper" element={<FrontendDeveloper />} />
          <Route path="/backenddeveloper" element={<BackendDeveloper />} />
          <Route path="/merndeveloper" element={<MernStackDeveloper />} />
          <Route path="/softwaretestingdeveloper" element={<TestingDeveloper />} />


          <Route path="/studentplacementpage" element={<OurPlacedStudents />} />
          <Route path="/studenthighestpackage" element={<HighestPackages />} />
          <Route path="/hiringpartners" element={<HiringPartners />} />
          <Route path="/placementprocess" element={<PlacementProcess />} />
          <Route path="/interviewpreparation" element={<InterviewPreparation1 />} />
          <Route path="/studentsuccessstories" element={<StudentSuccessStories />} />
          <Route path="/mockinterview" element={<MockInterview />} />
          <Route path="/startupopportunity" element={<StartupOpportunities />} />
          <Route path="/startupjobapply/:id" element={<StartupCompanyApply />} />
          <Route path="/mncopportunity" element={<TopMNCHiring />} />
          <Route path="/mncjobapply/:id" element={<MNCJobApply />} />


          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />


          <Route path="/practicletraining" element={<PracticalTraining />} />
          <Route path="/liveprojects" element={<LiveProjects />} />
          <Route path="/internshipfeatures" element={<InternshipProgram />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/certification" element={<Certification />} />


          <Route path="/hiringcompany" element={<EliteHiringNowCompanies />} />

          <Route path="/explorecourse" element={<ExploreCourses />} />

          <Route path="/contactus" element={<ContactUsPage />} />


          <Route path="/viewallnotification" element={<CareerOpportunities />} />
          <Route path="/jobapply/:id" element={<JobApply />} />



          


        

          

          <Route
            path="/admindashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }/>

          {/* Adminsidebar Student */}
          <Route path="/viewstudent" element={<RecentStudents />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/editstudent/:id" element={<EditStudent />} />
          <Route path="/viewstudentdetails/:id" element={<EyeStudent />} />

          {/* Adminsidebar Enrollmentdeatils */}
          <Route path="/enrollviewstudent" element={<EnrollmentDetails />} />
          <Route path="/addnewenrollment" element={<AddEnrollment />} />
          <Route path="/editenrollment/:id" element={<EditEnrollment />} />
          <Route path="/viewenrollment/:id" element={<ViewEnrollment />} />


          {/* Adminsidebar Newadmission */}
          <Route path="/viewnewadmissionstudent" element={<NewAdmission />} />
          <Route path="/addnewadmissionstudent" element={<AddAdmission />} />
          <Route path="/editnewadmissionstudent/:id" element={<EditAdmission />} />
          <Route path="/viewadmissionstudent/:id" element={<ViewAdmission />} />
          <Route path="/studentfeesreciept/:id" element={<FeesReceipt />} />


          {/* Adminsidebar HiredStudent */}
          <Route path="/hiredstudentlist" element={<PlacedStudents />} />
          <Route path="/addhiredstudentlist" element={<AddPlacement />} />
          <Route path="/edithiredstudentlist/:id" element={<EditPlacement />} />
          <Route path="/viewhiredstudentlist/:id" element={<ViewPlacement />} />
          <Route path="/studentofferletter/:id" element={<OfferLetter />} />


          {/* Adminsidebar Courses */}
          <Route path="/ourcoursespage" element={<CoursesAdmin />} />
          <Route path="/addnewcoursespage" element={<AddCourse />} />
          <Route path="/editnewcoursespage/:id" element={<EditCourse />} />
          <Route path="/viewnewcoursespage/:id" element={<ViewCourse />} />


          {/* Adminsidebar Batches */}
          <Route path="/ourbatchesdetails" element={<BatchManagement />} />
          <Route path="/addbatchesdetails" element={<AddBatch />} />
          <Route path="/editbatchesdetails/:id" element={<EditBatch />} />
          <Route path="/viewbatchesdetails/:id" element={<ViewBatch />} />
          <Route path="/studentsattencedetails" element={<BatchAttendance />} />
          <Route path="/batchreport" element={<ExportReportBatch />} />


            {/* Adminsidebar Faculty */}
          <Route path="/ourfaculty" element={<FacultyAdmin />} />
          <Route path="/addfaculty" element={<AddFaculty />} />
          <Route path="/editfaculty/:id" element={<EditFaculty />} />
          <Route path="/viewfaculty/:id" element={<ViewFaculty />} />


          {/* Adminsidebar Enquery */}
          <Route path="/studentenquery" element={<EnquiryManagement />} />
          <Route path="/studentcall/:id" element={<CallSupportModalEnquiry />} />
          <Route path="/studentwhatsupcontact/:id" element={<WhatsappSupportModalEnquiry />} />
          <Route path="/studentviewenquery/:id" element={<ViewEnquiry />} />
          <Route path="/studenteditenquery/:id" element={<EditEnquiry />} />



           {/* Adminsidebar Payments */}
          <Route path="/studentpayments" element={<PaymentManagement />} />
          <Route path="/studentpayments" element={<PaymentManagement />} />
          <Route path="/studentaddpayments" element={<AddPayment />} />
          <Route path="/studentviewpayments/:id" element={<ViewPayements />} />
          <Route path="/studentviewpaymentsreceipt/:id" element={<InvoiceModal />} />
          <Route path="/studenteditpayments/:id" element={<EditPayment />} />
          <Route path="/studenteditpaymentsreceipt/:id" element={<PaymentReceipt />} />


          



           {/* Adminsidebar Book free demo */}
          <Route path="/studentbookfreedemo" element={<BookFreeDemo />} />

           {/* Adminsidebar Book free Carrer */}
          <Route path="/studentbookfreecarrer" element={<BookFreeCarrer />} />


            {/* Adminsidebar ContactUs */}
          <Route path="/contactus" element={<ContactUsManagement />} />
          <Route path="/studentcall" element={<CallSupportModal/>} />
          <Route path="/studentwhatsupcontact" element={<WhatsappSupportModal/>} />
          <Route path="/studentviewcontact/:id" element={<ViewContact/>} />


          {/* Login */}
          <Route path="/login" element={<Login/>} />
          

        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;