import { db } from "@/services/firebaseConfig";
import { ref, get, set, onValue } from "firebase/database";

export const trackVisitor = async () => {
  const countRef = ref(db, "visitorCount");

  // Get the current visitor count
  const snapshot = await get(countRef);
  let currentCount = snapshot.exists() ? snapshot.val() : 0;

  // Increment the count in the database
  await set(countRef, currentCount + 1);

  return new Promise((resolve) => {
    onValue(countRef, (snapshot) => {
      resolve(snapshot.val() || 0);
    });
  });
};
