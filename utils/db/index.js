import admin from 'firebase-admin'
import ServiceAccount from "./serviceAccountKey.json"

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(ServiceAccount)
        });
    } catch (error) {
        console.log('firebase-admin initialization error', error.stack);
    }
}
export default admin.firestore();