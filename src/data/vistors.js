import { db } from "@/services/firebaseConfig";
import { ref, get, set } from "firebase/database";

export const trackVisitor = async () => {
  const countRef = ref(db, "visitorCount");

  try {
    // Get the current visitor count
    const snapshot = await get(countRef);
    let currentCount = snapshot.exists() ? snapshot.val() : 0;

    // Increment the count and update the database
    const newCount = currentCount + 1;
    await set(countRef, newCount);

    // Return the new visitor count
    return newCount;
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return 0; // Return 0 in case of an error
  }
};
