import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import {
  getSupportRequests,
  updateSupportRequestStatus,
} from "../firebase/firestoreService";
import type { SupportRequest } from "../firebase/firestoreService";
import { auth } from "../firebase/firebase";

export default function AdminDashboard() {
  const [requests, setRequests] = useState<SupportRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const loadRequests = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const data = await getSupportRequests();

      setRequests(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Unable to load support requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateSupportRequestStatus(id, status);

      setRequests((currentRequests) =>
        currentRequests.map((request) =>
          request.id === id
            ? {
                ...request,
                status,
              }
            : request
        )
      );
    } catch (error) {
      console.error(error);
      setErrorMessage("Unable to update request status.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login", { replace: true });
    } catch (error) {
      console.error(error);
      setErrorMessage("Unable to log out.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Administration
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              Admin Dashboard
            </h1>

            <p className="mt-4 text-slate-600">
              Manage healthcare support requests submitted through the portal.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Requests
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {requests.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Pending
            </p>

            <p className="mt-2 text-3xl font-bold text-yellow-600">
              {
                requests.filter(
                  (request) => request.status === "Pending"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Reviewed
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {
                requests.filter(
                  (request) => request.status === "Reviewed"
                ).length
              }
            </p>
          </div>
        </div>

        {errorMessage && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        {loading ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-slate-600">
              Loading support requests...
            </p>
          </div>
        ) : requests.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-medium text-slate-900">
              No support requests found
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Submitted requests will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Name
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Contact
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Support Type
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Message
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {requests.map((request) => (
                    <tr
                      key={request.id}
                      className="border-t border-slate-200"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {request.name}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        <div>{request.email}</div>
                        <div className="mt-1">
                          {request.phone}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm capitalize text-slate-600">
                        {request.supportType}
                      </td>

                      <td className="max-w-sm px-6 py-4 text-sm text-slate-600">
                        {request.message}
                      </td>

                      <td className="px-6 py-4">
                        <select
                          value={request.status}
                          onChange={(e) =>
                            handleStatusChange(
                              request.id!,
                              e.target.value
                            )
                          }
                          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
                        >
                          <option value="Pending">
                            Pending
                          </option>

                          <option value="Reviewed">
                            Reviewed
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}