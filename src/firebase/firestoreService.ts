import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "./firebase";

export interface SupportRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  supportType: string;
  message: string;
  status: string;
  createdAt?: any;
}

export interface Volunteer {
  id?: string;
  name: string;
  email: string;
  phone: string;
  skills: string;
  availability: string;
  message: string;
  createdAt?: any;
}

export const addSupportRequest = async (
  request: Omit<SupportRequest, "id" | "createdAt" | "status">
) => {
  const docRef = await addDoc(collection(db, "support_requests"), {
    ...request,
    status: "Pending",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

export const getSupportRequests = async () => {
  const requestsQuery = query(
    collection(db, "support_requests"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(requestsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as SupportRequest[];
};

export const updateSupportRequestStatus = async (
  id: string,
  status: string
) => {
  const requestRef = doc(db, "support_requests", id);

  await updateDoc(requestRef, {
    status,
  });
};

export const addVolunteer = async (
  volunteer: Omit<Volunteer, "id" | "createdAt">
) => {
  const docRef = await addDoc(collection(db, "volunteers"), {
    ...volunteer,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};