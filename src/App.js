import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./Components/Global.styles";
import { AuthProvider } from "./Components/Context/Context";
import AdminLayout from "./Components/adminLayout";
import SupportSec from "./Components/Support";
import CompanyProfile from "./Components/CompanyProfile";
import ForgetPass from "./Components/CompanyProfile/ChangePass/ForgetPass";
import SubscriptionDetail from "./Components/CompanyProfile/PlanDetail";
import Reports from "./Components/Reports";
import ReportsHeader from "./Components/Reports/ReportsHeader"; // Import ReportsHeader here
import SessionAnalysis from "./Components/Reports/SessionAnalysis"; // Import SessionAnalysis
import AnonymousForum from "./Components/Reports/AnonymousForum"; // Import AnonymousForum
import SignUp from "./Components/Auth";
import OTP from "./Components/Auth/OTP";
import Password from "./Components/Auth/Password";
import UploadProfile from "./Components/Auth/UploadProfile";
import CoachReport from "./Components/Reports/CoachReport";
import SessionFeedback from "./Components/Reports/SessionFeedback";
import CoachFeedback from "./Components/Reports/CoachFeedback";
import ActiveInActive from "./Components/Reports/ActiveInactive";
import AnonymousForums from "./Components/AnonymousForums";
import Sessions from "./Components/Sessions";
import ViewSession from "./Components/Sessions/VewSession";
import SessionLayout from "./Components/SessionLayout";
import CoachProfile from "./Components/CoachProfile";
import MyProfile from "./Components/MyProfile";
import Calendar from "./Components/Calendar";
import LectureSchedule from "./Components/Calendar/LectureSchedule";
import Employee from "./Components/Calendar/LectureSchedule/Employe";
import EmployeeProfile from "./Components/EmployeeProfile";
import DeactivateEmployee from "./Components/EmployeeProfile/DeactivateEmployee";
import ActivateEmployee from "./Components/EmployeeProfile/ActivateEmployee";
import AllEmployee from "./Components/EmployeeProfile/AllEmployee";
import Dashboard from "./Components/Dashboard";
import CardProgress from "./Components/Dashboard/CardProgress";
const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route index element={<SignUp  />} />
          <Route path="/password" element={<Password />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/UploadProfile" element={<UploadProfile />} />

          <Route path="/" element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/CardProgress" element={<CardProgress/>}/>
          <Route path="/EmployeeProfile" element={<EmployeeProfile/>}>
          <Route path="/EmployeeProfile" element={<AllEmployee/>} />
          <Route path="/EmployeeProfile/DeactivateEmployee" element={<DeactivateEmployee/>} />
          <Route path="/EmployeeProfile/ActivateEmployee" element={<ActivateEmployee/>} />
         
          </Route> 
          <Route path="/CoachProfile" element={<CoachProfile/>} />
          <Route path="/MyProfile" element={<MyProfile/>} />
           <Route path="/sessions" element={<Sessions/>}/>
           <Route path="/Calendar" element={<Calendar/>} />
           <Route path="/LectureSchedule" element={<LectureSchedule/>} />
           <Route path="/Employee" element={<Employee/>} />
           <Route path="/sessions/ViewSession" element={<ViewSession/>}/>
            <Route path="/AnonymousForums" element={<AnonymousForums />} />
            <Route path="/reports" element={<Reports />}>
              <Route index element={<SessionAnalysis />} />
              <Route
                path="/reports/Anonymousforum"
                element={<AnonymousForum />}
              />
              <Route path="/reports/CoachReport" element={<CoachReport />} />
              <Route
                path="/reports/SessionFeedback"
                element={<SessionFeedback />}
              />
              <Route
                path="/reports/CoachFeedback"
                element={<CoachFeedback />}
              />
              <Route
                path="/reports/ActiveInActive"
                element={<ActiveInActive />}
              />
            </Route>
            <Route path="/support" element={<SupportSec />} />
            {/* Routes for CompanyProfile */}
            <Route path="/CompanyProfile" element={<CompanyProfile />} />
            <Route
              path="/CompanyProfile/forgot-password"
              element={<ForgetPass />}
            />
            <Route
              path="/CompanyProfile/SubscriptionDetail"
              element={<SubscriptionDetail />}
            />
          </Route>
          <Route  path="/SessionLayout" element={<SessionLayout/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
