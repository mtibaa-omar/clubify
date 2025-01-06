import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Member from "./pages/Member";
import EventDetails from "./features/dashboard/EventDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/event/:eventId" element={<EventDetails />} />
            <Route path="members" element={<Members />} />
            <Route path="members/:memberId" element={<Member />} />
            <Route
              path="settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="user"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="fixed z-50 w-full max-w-xs transform -translate-x-1/2 pointer-events-auto top-20 left-1/2 sm:top-4 sm:max-w-md"
        theme="light"
      />
    </QueryClientProvider>
  );
}

export default App;
