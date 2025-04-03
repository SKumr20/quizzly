import { db } from "@/services/firebaseConfig";
import { ref, onValue, set } from "firebase/database";

export const trackVisitor = async () => {
  const countRef = ref(db, "visitorCount");

  // Get the current visitor count
  const snapshot = await get(countRef);
  let currentCount = snapshot.exists() ? snapshot.val() : 0;

  // Increment the count
  await update(countRef, { count: currentCount + 1 });

  return new Promise((resolve) => {
    onValue(countRef, (snapshot) => {
      resolve(snapshot.val()?.count || 0);
    });
  });
};