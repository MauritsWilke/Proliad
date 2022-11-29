
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDnxLOA12YzbIr6N6wC8huHlgz6KhmnfBo",
	authDomain: "proliad.firebaseapp.com",
	projectId: "proliad",
	storageBucket: "proliad.appspot.com",
	messagingSenderId: "567236594018",
	appId: "1:567236594018:web:8cd59aebac8c30b43dc43b",
	measurementId: "G-N5PVGP46E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };